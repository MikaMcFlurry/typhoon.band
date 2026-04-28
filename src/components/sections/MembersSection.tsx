"use client";

import { useState } from "react";
import { MemberCard } from "@/components/sections/MemberCard";
import { members } from "@/data/members";

type MembersSectionProps = {
  title: string;
  copy: string;
  eyebrow?: string;
  expandLabel: string;
  collapseLabel: string;
};

/**
 * Members on the homepage. Compact by default — the singer card plus the
 * three other lead members are shown. The remaining four members are
 * revealed via the "Alle Bandmitglieder anzeigen" toggle, all on this
 * page (no navigation away).
 */
const INITIAL_VISIBLE = 4;

export function MembersSection({ title, copy, eyebrow = "Members", expandLabel, collapseLabel }: MembersSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? members : members.slice(0, INITIAL_VISIBLE);
  const hasMore = members.length > INITIAL_VISIBLE;

  return (
    <div className="mx-auto max-w-[1640px] px-4 pb-20 sm:px-6 lg:px-10">
      <div className="mb-10 max-w-2xl">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="display text-4xl text-stone-50 sm:text-5xl">{title}</h2>
        <p className="mt-4 text-base leading-7 text-stone-300">{copy}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
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
