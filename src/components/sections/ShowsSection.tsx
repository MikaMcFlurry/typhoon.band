"use client";

import { useState } from "react";
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
  expandLabel: string;
  collapseLabel: string;
};

function ShowRow({ show, labels }: { show: Show; labels: Record<ShowStatus, string> }) {
  const tone = show.status === "cancelled" ? "danger" : show.status === "scheduled" ? "gold" : "muted";
  const dateParts = show.dateLabel.split(" ");

  return (
    <li className="poster-frame grid items-center gap-5 p-5 sm:grid-cols-[110px_1fr_auto] sm:p-6">
      <div className="flex flex-col items-start sm:items-center sm:text-center">
        <span className="display text-2xl text-[color:var(--gold-soft)]">{dateParts[0] ?? "TBA"}</span>
        <span className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--ink-mute)]">
          {dateParts.slice(1).join(" ") || "—"}
        </span>
      </div>
      <div>
        <p className="display text-lg text-stone-50 sm:text-xl">{show.title}</p>
        <p className="mt-1 text-[13px] text-[color:var(--ink-mute)]">
          {show.venue} · {show.city}
        </p>
      </div>
      <Badge tone={tone}>{labels[show.status]}</Badge>
    </li>
  );
}

const INITIAL_VISIBLE = 2;

export function ShowsSection({
  eyebrow,
  title,
  copy,
  upcomingLabel,
  pastLabel,
  empty,
  statusLabels,
  expandLabel,
  collapseLabel,
}: ShowsSectionProps) {
  const [expanded, setExpanded] = useState(false);

  const upcoming = upcomingShows;
  const visibleUpcoming = expanded ? upcoming : upcoming.slice(0, INITIAL_VISIBLE);
  const moreUpcoming = upcoming.length > INITIAL_VISIBLE;
  const hasPast = pastShows.length > 0;
  const hasMore = moreUpcoming || hasPast;

  return (
    <div className="mx-auto max-w-[1640px] px-4 py-20 sm:px-6 lg:px-10">
      <div className="mb-10 max-w-2xl">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="display text-4xl text-stone-50 sm:text-5xl">{title}</h2>
        <p className="mt-4 text-base leading-7 text-stone-300">{copy}</p>
      </div>

      <div className="mb-5 flex items-end justify-between gap-4">
        <h3 className="display text-xl text-stone-50 sm:text-2xl">{upcomingLabel}</h3>
        <span className="text-xs uppercase tracking-[0.24em] text-[color:var(--ink-mute)]">
          {upcoming.length} {upcoming.length === 1 ? "Termin" : "Termine"}
        </span>
      </div>
      {upcoming.length === 0 ? (
        <p className="poster-frame p-8 text-stone-300">{empty}</p>
      ) : (
        <ul className="grid gap-3 sm:gap-4">
          {visibleUpcoming.map((show) => (
            <ShowRow key={show.id} labels={statusLabels} show={show} />
          ))}
        </ul>
      )}

      {expanded && hasPast ? (
        <>
          <div className="mt-10 mb-5 flex items-end justify-between gap-4">
            <h3 className="display text-xl text-stone-50 sm:text-2xl">{pastLabel}</h3>
            <span className="text-xs uppercase tracking-[0.24em] text-[color:var(--ink-mute)]">
              {pastShows.length} {pastShows.length === 1 ? "Termin" : "Termine"}
            </span>
          </div>
          <ul className="grid gap-3 sm:gap-4">
            {pastShows.map((show) => (
              <ShowRow key={show.id} labels={statusLabels} show={show} />
            ))}
          </ul>
        </>
      ) : null}

      {hasMore ? (
        <div className="mt-8 flex justify-center">
          <button
            aria-expanded={expanded}
            className="btn btn-ghost btn-sm"
            onClick={() => setExpanded((v) => !v)}
            type="button"
          >
            {expanded ? collapseLabel : expandLabel}
            <span aria-hidden className="text-[12px]">
              {expanded ? "↑" : "↓"}
            </span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
