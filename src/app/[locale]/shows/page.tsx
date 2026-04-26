import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pastShows, upcomingShows } from "@/data/shows";
import { getDictionary } from "@/i18n/dictionaries";
import { normalizeLocale } from "@/i18n/routing";
import type { Show, ShowStatus } from "@/types/content";

function statusTone(status: ShowStatus) {
  if (status === "cancelled") {
    return "danger";
  }

  if (status === "scheduled") {
    return "gold";
  }

  return "muted";
}

function ShowList({ shows, labels }: { shows: Show[]; labels: Record<ShowStatus, string> }) {
  return (
    <div className="grid gap-4">
      {shows.map((show) => (
        <Card className="grid gap-5 p-5 md:grid-cols-[auto_1fr_auto] md:items-center" key={show.id}>
          <div className="grid size-20 place-items-center border border-amber-200/25 bg-black/40 text-center">
            <span className="text-sm font-black uppercase text-amber-100">{show.dateLabel}</span>
          </div>
          <div>
            <p className="text-xl font-black text-stone-50">{show.title}</p>
            <p className="mt-2 text-sm text-stone-400">
              {show.venue} · {show.city}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone={statusTone(show.status)}>{labels[show.status]}</Badge>
            <Button href="#" variant="secondary">
              Details folgen
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default async function ShowsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const dictionary = getDictionary(normalizeLocale(localeParam));

  return (
    <div className="mx-auto max-w-[1480px] px-4 py-16 sm:px-6 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading copy={dictionary.shows.intro} eyebrow="Live" title={dictionary.shows.title} />
          <Card className="mt-8 p-6">
            <p className="typhoon-kicker">Status</p>
            <p className="mt-3 text-4xl font-black text-amber-100">TBA</p>
            <p className="mt-4 text-sm leading-6 text-stone-300">
              Die Showdaten sind als statische Seed-Struktur vorbereitet und können später direkt durch Supabase-Daten ersetzt werden.
            </p>
          </Card>
        </div>
        <div className="grid gap-10">
          <section>
            <h2 className="mb-5 text-2xl font-black text-stone-50">{dictionary.shows.upcoming}</h2>
            <ShowList labels={dictionary.shows.status} shows={upcomingShows} />
          </section>
          <section>
            <h2 className="mb-5 text-2xl font-black text-stone-50">{dictionary.shows.past}</h2>
            <ShowList labels={dictionary.shows.status} shows={pastShows} />
          </section>
        </div>
      </div>
    </div>
  );
}
