import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/content";

const BAND_IMAGE = "/assets/reference/typhoon-band-hero.jpg";

type BandIntroProps = {
  locale: Locale;
  title: string;
  copy: string;
  cta: string;
};

export function BandIntro({ locale, title, copy, cta }: BandIntroProps) {
  return (
    <section className="relative border-y border-amber-100/10 bg-[linear-gradient(180deg,rgba(0,0,0,0.6)_0%,rgba(20,12,6,0.4)_50%,rgba(0,0,0,0.7)_100%)]">
      <div className="grain" />
      <div className="mx-auto grid max-w-[1640px] gap-10 px-4 py-24 sm:px-6 md:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-10">
        <div className="poster-frame relative aspect-[4/5] overflow-hidden md:aspect-auto md:min-h-[460px]">
          <Image alt="Typhoon Band" className="object-cover object-[60%_30%]" fill src={BAND_IMAGE} />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(0,0,0,0.85))]" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5">
            <span className="eyebrow">Live</span>
            <p className="display text-xl text-stone-50">Kanzlei Studio · Hechingen</p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="eyebrow mb-4">About Typhoon</p>
          <h2 className="display text-4xl text-stone-50 sm:text-5xl lg:text-[56px]">{title}</h2>
          <p className="mt-6 text-lg leading-9 text-stone-200 sm:text-xl">{copy}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn" href={`/${locale}/band`}>
              {cta}
            </Link>
            <Link className="btn btn-ghost" href={`/${locale}/music`}>
              Songs anhören
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
