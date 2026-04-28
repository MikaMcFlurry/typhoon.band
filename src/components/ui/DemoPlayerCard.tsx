"use client";

import { formatTime, useAudioPlayer } from "@/components/audio/AudioPlayerProvider";
import { Waveform } from "@/components/audio/Waveform";
import type { Song } from "@/types/content";

type DemoPlayerCardProps = {
  song: Song;
  note?: string;
  featured?: boolean;
  index?: number;
};

/**
 * Inline demo card. Uses the same `Waveform` visualisation style as the
 * Featured demo so every demo on the homepage feels visually consistent —
 * same bar geometry, same gold treatment, same live FFT animation when the
 * track is the current player.
 */
export function DemoPlayerCard({ song, note, featured = false, index }: DemoPlayerCardProps) {
  const player = useAudioPlayer();
  const isCurrent = player.currentId === song.id;
  const isPlaying = isCurrent && player.isPlaying;
  const progress = isCurrent ? player.progress : 0;
  const position = isCurrent ? player.position : 0;
  const duration = isCurrent ? player.duration : 0;
  const hasAudio = Boolean(song.audioSrc);

  return (
    <article
      className={`poster-frame relative flex h-full flex-col gap-5 p-5 sm:p-6 ${
        featured ? "ring-1 ring-[color:var(--gold-soft)]/40" : ""
      } ${isPlaying ? "ring-1 ring-[color:var(--gold-soft)]/55" : ""}`}
    >
      <header className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[color:var(--gold-soft)]/85">
            {typeof index === "number" ? String(index + 1).padStart(2, "0") : "Demo"}
          </p>
          <h3 className="display mt-2 text-2xl text-stone-50">{song.title}</h3>
          {note ? (
            <p className="mt-1.5 text-[11px] uppercase tracking-[0.2em] text-[color:var(--ink-mute)]/80">{note}</p>
          ) : null}
        </div>
        {featured ? (
          <span className="rounded-full border border-[color:var(--gold-soft)]/40 bg-[color:var(--gold-soft)]/12 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-[color:var(--gold-soft)]">
            Featured
          </span>
        ) : null}
      </header>

      <Waveform bars={64} heightClass="h-14" songId={song.id} />

      <input
        aria-label={`Position für ${song.title}`}
        className="audio-range"
        disabled={!isCurrent || !duration}
        max={1000}
        min={0}
        onChange={(event) => {
          player.seek(song.id, Number(event.target.value) / 1000);
        }}
        type="range"
        value={Math.floor(progress * 1000)}
      />

      <div className="flex items-center justify-between gap-3">
        <button
          aria-label={`${isPlaying ? "Pausieren" : "Abspielen"}: ${song.title}`}
          className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--gold-soft)]/30 bg-black/50 text-[color:var(--gold-soft)] transition hover:border-[color:var(--gold-soft)]/70 hover:bg-[color:var(--gold-soft)]/10 disabled:opacity-40"
          disabled={!hasAudio}
          onClick={() => player.toggle(song.id, song.audioSrc)}
          type="button"
        >
          {isPlaying ? (
            <svg aria-hidden className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
              <rect height="14" rx="1" width="4" x="6" y="5" />
              <rect height="14" rx="1" width="4" x="14" y="5" />
            </svg>
          ) : (
            <svg aria-hidden className="h-3.5 w-3.5 translate-x-[1px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5.5v13l11-6.5L8 5.5z" />
            </svg>
          )}
        </button>
        <span className="text-xs uppercase tracking-[0.22em] text-[color:var(--ink-mute)]">
          {hasAudio ? `${formatTime(position)} / ${formatTime(duration)}` : "Bald verfügbar"}
        </span>
      </div>
    </article>
  );
}
