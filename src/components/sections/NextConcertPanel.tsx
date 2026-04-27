import Link from "next/link";
import { upcomingShows } from "@/data/shows";
import type { Locale } from "@/types/content";

type NextConcertPanelProps = {
  locale: Locale;
  eyebrow: string;
  cta: string;
};

/** Compact next-concert card used at the bottom of the hero, mirroring the mockup. */
export function NextConcertPanel({ locale, eyebrow, cta }: NextConcertPanelProps) {
  const next = upcomingShows.find((show) => show.status === "scheduled");

  // Format the upcoming-date display. We avoid invented data: when no real
  // schedule exists we render TBA elegantly (the rest of the panel still
  // looks intentional).
  const dateLabel = next?.dateLabel ?? "TBA";
  const venue = next?.venue ?? "Venue TBA";
  const city = next?.city ?? "Bayreuth / Umgebung";

  return (
    <div className="poster-frame flex items-center gap-4 px-5 py-4 sm:gap-6 sm:px-6">
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.32em] text-[color:var(--gold-soft)]/85">
          {eyebrow}
        </p>
        <p className="display mt-2 truncate text-xl text-stone-50 sm:text-2xl">{dateLabel}</p>
        <p className="mt-1 truncate text-xs uppercase tracking-[0.22em] text-[color:var(--ink-mute)]">
          {venue} · {city}
        </p>
      </div>
      <Link className="btn btn-sm shrink-0" href={`/${locale}#shows`}>
        {cta}
      </Link>
    </div>
  );
}
