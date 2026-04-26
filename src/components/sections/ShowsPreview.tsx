import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { upcomingShows } from "@/data/shows";
import type { Locale, ShowStatus } from "@/types/content";

type ShowsPreviewProps = {
  locale: Locale;
  title: string;
  copy: string;
  labels: Record<ShowStatus, string>;
  cta: string;
};

export function ShowsPreview({ locale, title, copy, labels, cta }: ShowsPreviewProps) {
  return (
    <section className="mx-auto max-w-[1840px] px-4 py-20 sm:px-6 lg:px-12">
      <SectionHeading copy={copy} title={title} />
      <div className="grid gap-5 md:grid-cols-3">
        {upcomingShows.map((show) => (
          <Card key={show.id}>
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-stone-50">{show.title}</p>
                <p className="mt-1 text-sm text-stone-400">
                  {show.venue} · {show.city}
                </p>
              </div>
              <Badge tone={show.status === "cancelled" ? "danger" : show.status === "scheduled" ? "gold" : "muted"}>
                {labels[show.status]}
              </Badge>
            </div>
            <p className="text-sm uppercase tracking-wide text-amber-100">{show.dateLabel}</p>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <Button href={`/${locale}/shows`} variant="secondary">
          {cta}
        </Button>
      </div>
    </section>
  );
}
