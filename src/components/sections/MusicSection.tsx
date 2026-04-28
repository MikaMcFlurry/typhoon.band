"use client";

import { useState } from "react";
import { DemoPlayerCard } from "@/components/ui/DemoPlayerCard";
import { FeaturedDemo } from "@/components/ui/FeaturedDemo";
import { songs } from "@/data/songs";

type MusicSectionProps = {
  eyebrow: string;
  title: string;
  copy: string;
  featuredLabel: string;
  playerNote: string;
  expandLabel: string;
  collapseLabel: string;
};

/**
 * Demos on the homepage. By default we show the Featured demo plus the next
 * three songs; the remaining demos are revealed via the toggle. Every demo
 * still plays directly on the homepage — no navigation, no download.
 */
const INITIAL_REST = 3;

export function MusicSection({
  eyebrow,
  title,
  copy,
  featuredLabel,
  playerNote,
  expandLabel,
  collapseLabel,
}: MusicSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const featured = songs[0];
  const rest = songs.slice(1);
  const visibleRest = expanded ? rest : rest.slice(0, INITIAL_REST);
  const hasMore = rest.length > INITIAL_REST;

  return (
    <div className="mx-auto max-w-[1640px] px-4 py-20 sm:px-6 lg:px-10">
      <div className="mb-10 max-w-2xl">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="display text-4xl text-stone-50 sm:text-5xl">{title}</h2>
        <p className="mt-4 text-base leading-7 text-stone-300">{copy}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.15fr_1fr] lg:gap-6">
        <FeaturedDemo eyebrow={featuredLabel} note={playerNote} song={featured} />
        <div className="grid gap-4 sm:grid-cols-2">
          {visibleRest.slice(0, INITIAL_REST).map((song, idx) => (
            <DemoPlayerCard index={idx + 1} key={song.id} song={song} />
          ))}
        </div>
      </div>

      {expanded && rest.length > INITIAL_REST ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.slice(INITIAL_REST).map((song, idx) => (
            <DemoPlayerCard index={idx + INITIAL_REST + 1} key={song.id} song={song} />
          ))}
        </div>
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
