type HeroMusicPlayerProps = {
  trackTitle: string;
  artist: string;
  badge?: string;
  duration?: string;
};

export function HeroMusicPlayer({ trackTitle, artist, badge = "Demo", duration = "03:42" }: HeroMusicPlayerProps) {
  // 64 static bars, varied heights pseudo-randomly. First 18 are "played" — gold-soft.
  const bars = Array.from({ length: 64 }, (_, i) => {
    const h = 18 + ((i * 13 + 7) % 26);
    return { h, played: i < 18 };
  });

  return (
    <div className="poster-frame relative flex items-center gap-4 px-4 py-3 sm:gap-5 sm:px-5 sm:py-4">
      <button
        aria-label={`Demo abspielen: ${trackTitle}`}
        className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-amber-200/45 bg-black/50 text-amber-100 transition hover:border-amber-200/80 hover:bg-amber-200/10 sm:h-14 sm:w-14"
        type="button"
      >
        <svg aria-hidden className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5.5v13l11-6.5L8 5.5z" />
        </svg>
      </button>

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <p className="truncate text-sm font-bold uppercase tracking-[0.18em] text-stone-50 sm:text-base">{trackTitle}</p>
          <span className="hidden text-[10px] uppercase tracking-[0.28em] text-amber-200/80 sm:inline">{badge}</span>
        </div>
        <p className="text-xs uppercase tracking-[0.22em] text-stone-400">{artist}</p>

        <div className="mt-2 flex h-7 items-end gap-[2px] overflow-hidden">
          {bars.map((bar, i) => (
            <span
              className={`wave-bar ${bar.played ? "opacity-100" : "opacity-40"} ${i % 7 === 0 ? "is-live" : ""}`}
              key={i}
              style={{ height: `${bar.h}px`, animationDelay: `${(i % 7) * 120}ms` }}
            />
          ))}
        </div>
      </div>

      <div className="hidden shrink-0 text-xs uppercase tracking-[0.22em] text-stone-400 sm:block">
        00:42 / {duration}
      </div>
    </div>
  );
}
