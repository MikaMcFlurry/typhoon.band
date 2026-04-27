"use client";

import { formatTime, useAudioPlayer } from "@/components/audio/AudioPlayerProvider";
import { Waveform } from "@/components/audio/Waveform";

type HeroMusicPlayerProps = {
  songId: string;
  trackTitle: string;
  audioSrc?: string;
  badge?: string;
  /** Optional kicker shown above the title (e.g. "Neuer Track"). */
  kicker?: string;
};

export function HeroMusicPlayer({ songId, trackTitle, audioSrc, badge = "Demo", kicker }: HeroMusicPlayerProps) {
  const player = useAudioPlayer();
  const isCurrent = player.currentId === songId;
  const isPlaying = isCurrent && player.isPlaying;
  const position = isCurrent ? player.position : 0;
  const duration = isCurrent ? player.duration : 0;
  const hasAudio = Boolean(audioSrc);

  return (
    <div className="poster-frame relative flex items-center gap-4 px-4 py-3 sm:gap-5 sm:px-5 sm:py-4">
      <button
        aria-label={`${isPlaying ? "Pausieren" : "Abspielen"}: ${trackTitle}`}
        className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[color:var(--line-strong)] bg-black/45 text-[color:var(--gold-soft)] transition hover:border-[color:var(--gold-soft)] hover:bg-[color:var(--gold-soft)]/10 disabled:opacity-40 sm:h-14 sm:w-14"
        disabled={!hasAudio}
        onClick={() => player.toggle(songId, audioSrc)}
        type="button"
      >
        {isPlaying ? (
          <svg aria-hidden className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <rect height="14" rx="1" width="4" x="6" y="5" />
            <rect height="14" rx="1" width="4" x="14" y="5" />
          </svg>
        ) : (
          <svg aria-hidden className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5.5v13l11-6.5L8 5.5z" />
          </svg>
        )}
      </button>

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <div className="min-w-0">
            {kicker ? (
              <p className="truncate text-[10px] font-extrabold uppercase tracking-[0.32em] text-[color:var(--gold-soft)]/85">
                {kicker}
              </p>
            ) : null}
            <p className="truncate text-sm font-bold uppercase tracking-[0.18em] text-stone-50 sm:text-base">
              {trackTitle}
            </p>
          </div>
          <span className="hidden text-[10px] uppercase tracking-[0.28em] text-[color:var(--gold-soft)]/80 sm:inline">
            {badge}
          </span>
        </div>
        <Waveform bars={48} className="mt-2" heightClass="h-7" songId={songId} />
      </div>

      <div className="hidden shrink-0 text-xs uppercase tracking-[0.22em] text-[color:var(--ink-mute)] sm:block">
        {isCurrent ? `${formatTime(position)} / ${formatTime(duration)}` : "—"}
      </div>
    </div>
  );
}
