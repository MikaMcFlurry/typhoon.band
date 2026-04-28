"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/types/content";

const BAND_IMAGE = "/assets/reference/typhoon-band-hero-new.jpeg";

type BandIntroProps = {
  locale: Locale;
  title: string;
  copy: string;
  longCopy: string;
  expandLabel: string;
  collapseLabel: string;
};

/**
 * Compact band intro on the homepage. The short copy is always visible,
 * the longer pressetext sits behind the "Mehr über Typhoon" toggle so the
 * onepager doesn't get walls of text.
 */
export function BandIntro({ locale, title, copy, longCopy, expandLabel, collapseLabel }: BandIntroProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative border-y border-[color:var(--gold-soft)]/8 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(20,12,6,0.32)_50%,rgba(0,0,0,0.65)_100%)]">
      <div className="grain" />
      <div className="mx-auto grid max-w-[1640px] gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-10 lg:py-24">
        <div className="poster-frame relative aspect-[4/5] overflow-hidden md:aspect-auto md:min-h-[440px]">
          <Image alt="Typhoon Band" className="object-cover object-[60%_30%]" fill src={BAND_IMAGE} />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(0,0,0,0.85))]" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5">
            <span className="eyebrow">Live</span>
            <p className="display text-xl text-stone-50">Kanzlei Studio · Hechingen</p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="eyebrow mb-4">About Typhoon</p>
          <h2 className="display text-4xl text-stone-50 sm:text-5xl lg:text-[52px]">{title}</h2>
          <p className="mt-6 text-lg leading-8 text-stone-200 sm:text-xl">{copy}</p>

          <div
            className={`grid overflow-hidden text-base leading-8 text-stone-300 transition-[grid-template-rows] duration-500 ease-out ${
              expanded ? "mt-5 grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="min-h-0">
              <p>{longCopy}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link className="btn btn-gold" href={`/${locale}#music`}>
              Songs anhören
            </Link>
            <button
              aria-expanded={expanded}
              className="btn btn-ghost"
              onClick={() => setExpanded((v) => !v)}
              type="button"
            >
              {expanded ? collapseLabel : expandLabel}
              <span aria-hidden className="text-[12px]">
                {expanded ? "↑" : "↓"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
