import { Badge } from "@/components/ui/Badge";
import { PageHero } from "@/components/ui/PageHero";
import { pastShows, upcomingShows } from "@/data/shows";
import { getDictionary } from "@/i18n/dictionaries";
import { normalizeLocale } from "@/i18n/routing";
import type { Show, ShowStatus } from "@/types/content";

function ShowRow({ show, labels }: { show: Show; labels: Record<ShowStatus, string> }) {
  const tone = show.status === "cancelled" ? "danger" : show.status === "scheduled" ? "gold" : "muted";
  const dateParts = show.dateLabel.split(" ");

  return (
    <li className="poster-frame grid items-center gap-5 p-5 sm:grid-cols-[110px_1fr_auto] sm:p-6">
      <div className="flex flex-col items-start sm:items-center sm:text-center">
        <span className="display text-3xl text-amber-200">{dateParts[0] ?? "TBA"}</span>
        <span className="text-[11px] uppercase tracking-[0.28em] text-stone-400">{dateParts.slice(1).join(" ") || "—"}</span>
      </div>
      <div>
        <p className="display text-xl text-stone-50">{show.title}</p>
        <p className="mt-1 text-sm text-stone-400">
          {show.venue} · {show.city}
        </p>
      </div>
      <Badge tone={tone}>{labels[show.status]}</Badge>
    </li>
  );
}

export default async function ShowsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const dictionary = getDictionary(normalizeLocale(localeParam));

  return (
    <>
      <PageHero copy={dictionary.shows.intro} eyebrow={dictionary.shows.eyebrow} title={dictionary.shows.title} />

      <section className="mx-auto max-w-[1640px] px-4 py-16 sm:px-6 lg:px-10">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="display text-2xl text-stone-50 sm:text-3xl">{dictionary.shows.upcoming}</h2>
          <span className="text-xs uppercase tracking-[0.24em] text-stone-500">{upcomingShows.length} Termine</span>
        </div>
        {upcomingShows.length === 0 ? (
          <p className="poster-frame p-8 text-stone-300">{dictionary.shows.empty}</p>
        ) : (
          <ul className="grid gap-4">
            {upcomingShows.map((show) => (
              <ShowRow key={show.id} labels={dictionary.shows.status} show={show} />
            ))}
          </ul>
        )}
      </section>

      <section className="mx-auto max-w-[1640px] px-4 pb-24 sm:px-6 lg:px-10">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="display text-2xl text-stone-50 sm:text-3xl">{dictionary.shows.past}</h2>
          <span className="text-xs uppercase tracking-[0.24em] text-stone-500">{pastShows.length} Termine</span>
        </div>
        {pastShows.length === 0 ? (
          <p className="poster-frame p-8 text-stone-400">—</p>
        ) : (
          <ul className="grid gap-4">
            {pastShows.map((show) => (
              <ShowRow key={show.id} labels={dictionary.shows.status} show={show} />
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
