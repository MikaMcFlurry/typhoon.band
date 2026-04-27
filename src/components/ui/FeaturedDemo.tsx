"use client";

import { formatTime, useAudioPlayer } from "@/components/audio/AudioPlayerProvider";
import type { Song } from "@/types/content";

type FeaturedDemoProps = {
  song: Song;
  eyebrow: string;
  note?: string;
};

export function FeaturedDemo({ song, eyebrow, note }: FeaturedDemoProps) {
  const player = useAudioPlayer();
  const isCurrent = player.currentId === song.id;
  const isPlaying = isCurrent && player.isPlaying;
  const progress = isCurrent ? player.progress : 0;
  const position = isCurrent ? player.position : 0;
  const duration = isCurrent ? player.duration : 0;
  const hasAudio = Boolean(song.audioSrc);
  const totalBars = 72;
  const playedTo = Math.floor(progress * totalBars);

  return (
    <div className="poster-frame relative flex flex-col gap-6 p-8 sm:p-10">
      <p className="eyebrow">{eyebrow}</p>
      <div>
        <h2 className="display text-4xl text-stone-50 sm:text-5xl">{song.title}</h2>
        <p className="mt-3 text-sm uppercase tracking-[0.24em] text-[color:var(--ink-mute)]">Typhoon · Demo Session</p>
      </div>

      <div aria-hidden className="flex h-16 items-end gap-1">
        {Array.from({ length: totalBars }).map((_, i) => (
          <span
            className={`w-[3px] rounded-full ${i < playedTo ? "bg-[color:var(--gold-soft)]" : "bg-[color:var(--gold-soft)]/30"}`}
            key={i}
            style={{ height: `${14 + ((i * 11) % 38)}px` }}
          />
        ))}
      </div>

      <input
        aria-label={`Position für ${song.title}`}
        className="audio-range"
        disabled={!isCurrent || !duration}
        max={1000}
        min={0}
        onChange={(event) => player.seek(song.id, Number(event.target.value) / 1000)}
        type="range"
        value={Math.floor(progress * 1000)}
      />

      <div className="flex flex-wrap items-center gap-4">
        <button
          aria-label={`${isPlaying ? "Pausieren" : "Abspielen"}: ${song.title}`}
          className="grid h-12 w-12 place-items-center rounded-full border border-[color:var(--line-strong)] bg-black/40 text-[color:var(--gold-soft)] transition hover:border-[color:var(--gold-soft)] hover:bg-[color:var(--gold-soft)]/10 disabled:opacity-40"
          disabled={!hasAudio}
          onClick={() => player.toggle(song.id, song.audioSrc)}
          type="button"
        >
          {isPlaying ? (
            <svg aria-hidden className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <rect height="14" rx="1" width="4" x="6" y="5" />
              <rect height="14" rx="1" width="4" x="14" y="5" />
            </svg>
          ) : (
            <svg aria-hidden className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5.5v13l11-6.5L8 5.5z" />
            </svg>
          )}
        </button>
        <span className="text-xs uppercase tracking-[0.22em] text-[color:var(--ink-mute)]">
          {hasAudio ? `${formatTime(position)} / ${formatTime(duration)}` : "Bald verfügbar"}
        </span>
      </div>

      {note ? <p className="text-sm leading-6 text-[color:var(--ink-mute)]/80">{note}</p> : null}
    </div>
  );
}
