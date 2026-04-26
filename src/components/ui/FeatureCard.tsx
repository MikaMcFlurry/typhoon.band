import Link from "next/link";
import type { ReactNode } from "react";

type FeatureCardProps = {
  kicker: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  accent?: ReactNode;
};

export function FeatureCard({ kicker, title, body, href, cta, accent }: FeatureCardProps) {
  return (
    <Link
      className="poster-frame group relative flex h-full flex-col justify-between gap-6 p-6 transition-colors duration-200 hover:border-amber-200/60"
      href={href}
    >
      <div>
        <p className="eyebrow">{kicker}</p>
        <h3 className="display mt-3 text-2xl text-stone-50 sm:text-[26px]">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-stone-400">{body}</p>
      </div>

      {accent ? <div className="relative">{accent}</div> : null}

      <div className="flex items-center justify-between border-t border-amber-100/10 pt-4">
        <span className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-amber-200/85 transition group-hover:text-amber-200">
          {cta}
        </span>
        <span aria-hidden className="text-amber-200/70 transition group-hover:translate-x-1 group-hover:text-amber-200">
          →
        </span>
      </div>
    </Link>
  );
}
