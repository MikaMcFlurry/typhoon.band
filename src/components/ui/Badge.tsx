import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "gold" | "muted" | "danger";
};

const tones = {
  gold: "border-amber-200/35 bg-amber-200/10 text-amber-100",
  muted: "border-stone-300/15 bg-stone-200/5 text-stone-300",
  danger: "border-red-300/35 bg-red-500/10 text-red-100",
};

export function Badge({ children, tone = "gold" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-none border px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.24em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
