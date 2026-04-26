import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, copy, children }: PageHeroProps) {
  return (
    <header className="relative overflow-hidden border-b border-amber-100/12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_30%_0%,rgba(160,113,64,0.22),transparent_60%),linear-gradient(180deg,rgba(5,3,2,0.4)_0%,rgba(5,3,2,0.95)_100%)]" />
      <div className="grain" />
      <div className="mx-auto max-w-[1640px] px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:px-10 lg:pt-40">
        {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
        <h1 className="display text-5xl text-stone-50 sm:text-6xl lg:text-7xl">{title}</h1>
        {copy ? <p className="mt-6 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">{copy}</p> : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
      <div className="gold-rule" />
    </header>
  );
}
