import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pastShows, upcomingShows } from "@/data/shows";
import { getDictionary } from "@/i18n/dictionaries";
import { normalizeLocale } from "@/i18n/routing";
import type { Show, ShowStatus } from "@/types/content";

function ShowList({ shows, labels }: { shows: Show[]; labels: Record<ShowStatus, string> }) {
  return (
    <div className="grid gap-4">
      {shows.map((show) => (
        <Card className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center" key={show.id}>
          <div>
            <p className="text-lg font-semibold text-stone-50">{show.title}</p>
            <p className="mt-1 text-sm text-stone-400">
              {show.venue} · {show.city} · {show.dateLabel}
            </p>
          </div>
          <Badge tone={show.status === "cancelled" ? "danger" : show.status === "scheduled" ? "gold" : "muted"}>
            {labels[show.status]}
          </Badge>
        </Card>
      ))}
    </div>
  );
}

export default async function ShowsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const dictionary = getDictionary(normalizeLocale(localeParam));

  return (
    <div className="mx-auto max-w-[1840px] px-4 py-16 sm:px-6 lg:px-12">
      <SectionHeading copy={dictionary.shows.intro} title={dictionary.shows.title} />
      <section>
        <h2 className="mb-5 text-2xl font-semibold text-stone-50">{dictionary.shows.upcoming}</h2>
        <ShowList labels={dictionary.shows.status} shows={upcomingShows} />
      </section>
      <section className="mt-12">
        <h2 className="mb-5 text-2xl font-semibold text-stone-50">{dictionary.shows.past}</h2>
        <ShowList labels={dictionary.shows.status} shows={pastShows} />
      </section>
    </div>
  );
}
