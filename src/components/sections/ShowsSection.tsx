import { Badge } from "@/components/ui/Badge";
import { pastShows, upcomingShows } from "@/data/shows";
import type { Show, ShowStatus } from "@/types/content";

type ShowsSectionProps = {
  eyebrow: string;
  title: string;
  copy: string;
  upcomingLabel: string;
  pastLabel: string;
  empty: string;
  statusLabels: Record<ShowStatus, string>;
};

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

export function ShowsSection({ eyebrow, title, copy, upcomingLabel, pastLabel, empty, statusLabels }: ShowsSectionProps) {
  return (
    <div className="mx-auto max-w-[1640px] px-4 py-24 sm:px-6 lg:px-10">
      <div className="mb-10 max-w-2xl">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="display text-4xl text-stone-50 sm:text-5xl">{title}</h2>
        <p className="mt-4 text-base leading-7 text-stone-300">{copy}</p>
      </div>

      <div className="mb-6 flex items-end justify-between gap-4">
        <h3 className="display text-2xl text-stone-50 sm:text-3xl">{upcomingLabel}</h3>
        <span className="text-xs uppercase tracking-[0.24em] text-stone-500">{upcomingShows.length} Termine</span>
      </div>
      {upcomingShows.length === 0 ? (
        <p className="poster-frame p-8 text-stone-300">{empty}</p>
      ) : (
        <ul className="grid gap-4">
          {upcomingShows.map((show) => (
            <ShowRow key={show.id} labels={statusLabels} show={show} />
          ))}
        </ul>
      )}

      <div className="mt-12 mb-6 flex items-end justify-between gap-4">
        <h3 className="display text-2xl text-stone-50 sm:text-3xl">{pastLabel}</h3>
        <span className="text-xs uppercase tracking-[0.24em] text-stone-500">{pastShows.length} Termine</span>
      </div>
      {pastShows.length === 0 ? (
        <p className="poster-frame p-8 text-stone-400">—</p>
      ) : (
        <ul className="grid gap-4">
          {pastShows.map((show) => (
            <ShowRow key={show.id} labels={statusLabels} show={show} />
          ))}
        </ul>
      )}
    </div>
  );
}
