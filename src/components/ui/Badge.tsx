import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "gold" | "muted" | "danger";
};

const tones = {
  gold: "border-amber-300/45 bg-amber-300/12 text-amber-100 shadow-[0_0_18px_rgba(215,161,74,0.12)]",
  muted: "border-stone-300/16 bg-stone-200/6 text-stone-300",
  danger: "border-red-300/35 bg-red-500/10 text-red-100",
};

export function Badge({ children, tone = "gold" }: BadgeProps) {
  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${tones[tone]}`}>
      {children}
    </span>
  );
}
