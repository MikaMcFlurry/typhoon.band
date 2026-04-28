import Link from "next/link";
import { upcomingShows } from "@/data/shows";
import type { Locale } from "@/types/content";

type NextConcertPanelProps = {
  locale: Locale;
  eyebrow: string;
  cta: string;
};

/**
 * Compact "Nächstes Konzert" card used at the bottom of the hero.
 *
 * Layout mirrors the mockup:
 *   NÄCHSTES KONZERT (kicker)
 *   24.05.2025      [ALLE TERMINE →]
 *   Hamburg – Knust
 *
 * The first scheduled show from `data/shows.ts` is used as the data source.
 * If there is none we render TBA / Bayreuth-Umgebung gracefully so the
 * panel still feels intentional rather than broken.
 */
export function NextConcertPanel({ locale, eyebrow, cta }: NextConcertPanelProps) {
  const next = upcomingShows.find((show) => show.status === "scheduled");

  const dateLabel = next?.dateLabel ?? "TBA";
  const venue = next?.venue ?? "Venue TBA";
  const city = next?.city ?? "Bayreuth · Umgebung";

  return (
    <div className="poster-frame relative flex items-center gap-4 px-4 py-3.5 sm:gap-5 sm:px-5 sm:py-4">
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[color:var(--gold-soft)]/85">
          {eyebrow}
        </p>
        <p className="display mt-1 truncate text-lg text-stone-50 sm:text-xl">{dateLabel}</p>
        <p className="mt-1 truncate text-[11px] uppercase tracking-[0.2em] text-[color:var(--ink-mute)]">
          {venue} · {city}
        </p>
      </div>
      <Link className="btn btn-sm shrink-0" href={`/${locale}#shows`}>
        {cta}
      </Link>
    </div>
  );
}
