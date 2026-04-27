"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";

type AudioState = {
  currentId: string | null;
  isPlaying: boolean;
  progress: number; // 0..1
  duration: number; // seconds
  position: number; // seconds
};

type AudioContextValue = AudioState & {
  toggle: (id: string, src: string | null | undefined) => void;
  seek: (id: string, ratio: number) => void;
  /** Returns the shared AnalyserNode (set up lazily on first play). */
  getAnalyser: () => AnalyserNode | null;
};

const AudioCtx = createContext<AudioContextValue | null>(null);

const initialState: AudioState = {
  currentId: null,
  isPlaying: false,
  progress: 0,
  duration: 0,
  position: 0,
};

// Frequency-domain analyser setup. fftSize=256 → 128 frequency bins.
// We render 64 bars below (drop high-end bins where there's little energy).
const FFT_SIZE = 256;

export function AudioPlayerProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const [state, setState] = useState<AudioState>(initialState);

  const ensureAudio = useCallback(() => {
    if (typeof window === "undefined") return null;
    if (!audioRef.current) {
      const el = new Audio();
      el.preload = "metadata";
      // Same-origin static files don't need CORS — leaving crossOrigin unset
      // avoids accidental CORS request mode failures on Safari.
      audioRef.current = el;
    }
    return audioRef.current;
  }, []);

  const ensureAnalyser = useCallback(() => {
    if (typeof window === "undefined") return null;
    const el = audioRef.current;
    if (!el) return null;
    if (analyserRef.current) {
      // Already wired. Resume context if it got suspended (autoplay policies).
      if (audioCtxRef.current?.state === "suspended") {
        audioCtxRef.current.resume().catch(() => {});
      }
      return analyserRef.current;
    }
    const Ctor =
      (window as unknown as { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext })
        .AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    try {
      const ac = new Ctor();
      const src = ac.createMediaElementSource(el);
      const analyser = ac.createAnalyser();
      analyser.fftSize = FFT_SIZE;
      analyser.smoothingTimeConstant = 0.78;
      src.connect(analyser);
      analyser.connect(ac.destination);
      audioCtxRef.current = ac;
      sourceRef.current = src;
      analyserRef.current = analyser;
      return analyser;
    } catch {
      return null;
    }
  }, []);

  const attachListeners = useCallback((id: string, el: HTMLAudioElement) => {
    el.ontimeupdate = () => {
      const dur = el.duration || 0;
      setState((s) => ({
        ...s,
        currentId: id,
        position: el.currentTime,
        duration: dur,
        progress: dur > 0 ? el.currentTime / dur : 0,
      }));
    };
    el.onplay = () => setState((s) => ({ ...s, currentId: id, isPlaying: true }));
    el.onpause = () => setState((s) => ({ ...s, isPlaying: false }));
    el.onended = () => setState({ ...initialState });
    el.onerror = () => setState({ ...initialState });
    el.onloadedmetadata = () => {
      setState((s) => ({ ...s, currentId: id, duration: el.duration || 0 }));
    };
  }, []);

  const toggle = useCallback(
    (id: string, src: string | null | undefined) => {
      if (!src) return;
      const el = ensureAudio();
      if (!el) return;
      const sameTrack = state.currentId === id;
      if (sameTrack && !el.paused) {
        el.pause();
        return;
      }
      if (!sameTrack) {
        try {
          el.pause();
        } catch {}
        el.src = src;
        attachListeners(id, el);
        setState({ ...initialState, currentId: id });
      }
      // Wire up Web Audio analyser on first user gesture so the analyser node
      // can use the live audio context.
      ensureAnalyser();
      const playPromise = el.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          setState({ ...initialState });
        });
      }
    },
    [attachListeners, ensureAnalyser, ensureAudio, state.currentId],
  );

  const seek = useCallback(
    (id: string, ratio: number) => {
      const el = audioRef.current;
      if (!el) return;
      if (state.currentId !== id) return;
      if (!el.duration || !isFinite(el.duration)) return;
      const clamped = Math.max(0, Math.min(1, ratio));
      el.currentTime = clamped * el.duration;
    },
    [state.currentId],
  );

  const getAnalyser = useCallback(() => analyserRef.current, []);

  const value = useMemo<AudioContextValue>(
    () => ({ ...state, toggle, seek, getAnalyser }),
    [state, toggle, seek, getAnalyser],
  );

  return <AudioCtx.Provider value={value}>{children}</AudioCtx.Provider>;
}

export function useAudioPlayer() {
  const ctx = useContext(AudioCtx);
  if (!ctx) {
    throw new Error("useAudioPlayer must be used within AudioPlayerProvider");
  }
  return ctx;
}

export function formatTime(seconds: number) {
  if (!seconds || !isFinite(seconds)) return "00:00";
  const total = Math.floor(seconds);
  const m = Math.floor(total / 60).toString().padStart(2, "0");
  const s = (total % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}
