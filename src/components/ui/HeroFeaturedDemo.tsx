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

/**
 * Compact hero panel that mirrors the mockup:
 *   [circular album art with play-overlay] · NEUER TRACK / Title / Listen now →
 *
 * On desktop we add a tiny live waveform peek on the right of the panel.
 */
export function HeroFeaturedDemo({
  songId,
  trackTitle,
  audioSrc,
  kicker,
  cta,
  cover = DEFAULT_COVER,
}: HeroFeaturedDemoProps) {
  const player = useAudioPlayer();
  const isCurrent = player.currentId === songId;
  const isPlaying = isCurrent && player.isPlaying;
  const hasAudio = Boolean(audioSrc);

  return (
    <div className="poster-frame relative flex items-center gap-4 px-4 py-3.5 sm:gap-5 sm:px-5 sm:py-4">
      {/* Circular album art — clickable surface that triggers play/pause. */}
      <button
        aria-label={`${isPlaying ? "Pausieren" : "Abspielen"}: ${trackTitle}`}
        className="group relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-[color:var(--gold-soft)]/25 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--gold-soft)] disabled:opacity-50 sm:h-16 sm:w-16"
        disabled={!hasAudio}
        onClick={() => player.toggle(songId, audioSrc)}
        type="button"
      >
        <Image
          alt=""
          aria-hidden
          className="object-cover object-[60%_30%] saturate-[0.9]"
          fill
          sizes="64px"
          src={cover}
        />
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.25)_30%,rgba(0,0,0,0.7))]" />
        <span className="absolute inset-0 grid place-items-center text-[color:var(--ink)] transition group-hover:text-[color:var(--gold-soft)]">
          {isPlaying ? (
            <svg aria-hidden className="h-4 w-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]" fill="currentColor" viewBox="0 0 24 24">
              <rect height="12" rx="1" width="3.5" x="7" y="6" />
              <rect height="12" rx="1" width="3.5" x="13.5" y="6" />
            </svg>
          ) : (
            <svg aria-hidden className="h-5 w-5 translate-x-[1px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5.5v13l11-6.5L8 5.5z" />
            </svg>
          )}
        </span>
      </button>

      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[color:var(--gold-soft)]/85">
          {kicker}
        </p>
        <p className="display mt-1 truncate text-lg text-stone-50 sm:text-xl">{trackTitle}</p>
        <button
          className="mt-1.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-[color:var(--gold-soft)] transition hover:text-stone-50 disabled:opacity-50"
          disabled={!hasAudio}
          onClick={() => player.toggle(songId, audioSrc)}
          type="button"
        >
          {isPlaying ? "Pause" : cta}
          <span aria-hidden className="text-[12px]">→</span>
        </button>
      </div>

      {/* Tiny live waveform peek on the right (desktop only). Bars idle at low
          amplitude when paused so the panel stays calm and uncluttered. */}
      <div className="hidden w-24 shrink-0 lg:block">
        <Waveform bars={18} flatWhenPaused heightClass="h-7" songId={songId} />
      </div>
    </div>
  );
}
