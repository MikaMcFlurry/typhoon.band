"use client";

import Image from "next/image";
import { useAudioPlayer } from "@/components/audio/AudioPlayerProvider";
import { Waveform } from "@/components/audio/Waveform";

type HeroFeaturedDemoProps = {
  songId: string;
  trackTitle: string;
  audioSrc?: string;
  kicker: string;
  cta: string;
  cover?: string;
};

const DEFAULT_COVER = "/assets/reference/typhoon-band-hero-new.jpeg";

/** Compact "Neuer Track / Find A Way / Listen Now →" hero panel. */
export function HeroFeaturedDemo({ songId, trackTitle, audioSrc, kicker, cta, cover = DEFAULT_COVER }: HeroFeaturedDemoProps) {
  const player = useAudioPlayer();
  const isCurrent = player.currentId === songId;
  const isPlaying = isCurrent && player.isPlaying;
  const hasAudio = Boolean(audioSrc);

  return (
    <div className="poster-frame relative flex items-center gap-4 px-4 py-4 sm:gap-5 sm:px-5">
      {/* Circular album art with a hover/spinning ring while playing */}
      <button
        aria-label={`${isPlaying ? "Pausieren" : "Abspielen"}: ${trackTitle}`}
        className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full border border-[color:var(--gold-soft)]/40 bg-black/40 transition hover:border-[color:var(--gold-soft)] sm:h-16 sm:w-16"
        disabled={!hasAudio}
        onClick={() => player.toggle(songId, audioSrc)}
        type="button"
      >
        <span className="absolute inset-1 overflow-hidden rounded-full">
          <Image
            alt=""
            aria-hidden
            className="object-cover object-[60%_30%] saturate-[0.85]"
            fill
            sizes="64px"
            src={cover}
          />
          <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.55))]" />
        </span>
        <span className="relative grid h-9 w-9 place-items-center rounded-full bg-black/70 text-[color:var(--gold-soft)]">
          {isPlaying ? (
            <svg aria-hidden className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
              <rect height="14" rx="1" width="4" x="6" y="5" />
              <rect height="14" rx="1" width="4" x="14" y="5" />
            </svg>
          ) : (
            <svg aria-hidden className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5.5v13l11-6.5L8 5.5z" />
            </svg>
          )}
        </span>
      </button>

      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.32em] text-[color:var(--gold-soft)]/85">
          {kicker}
        </p>
        <p className="display mt-1 truncate text-xl text-stone-50 sm:text-2xl">{trackTitle}</p>
        <button
          className="mt-2 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.28em] text-[color:var(--gold-soft)] transition hover:text-stone-50 disabled:opacity-50"
          disabled={!hasAudio}
          onClick={() => player.toggle(songId, audioSrc)}
          type="button"
        >
          {isPlaying ? "Pause" : cta}
          <span aria-hidden>→</span>
        </button>
      </div>

      {/* Tiny waveform peek on the right (desktop only) — animates live when this song is playing */}
      <div className="hidden w-28 shrink-0 sm:block">
        <Waveform bars={20} flatWhenPaused heightClass="h-7" songId={songId} />
      </div>
    </div>
  );
}
