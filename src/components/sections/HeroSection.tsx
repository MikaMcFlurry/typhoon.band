import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { publicAsset } from "@/lib/assets";
import type { Locale } from "@/types/content";

type HeroSectionProps = {
  locale: Locale;
  eyebrow: string;
  headline: string;
  subline: string;
  listenLabel: string;
  bandLabel: string;
  bookingLabel: string;
  nextShowTitle: string;
  nextShowCopy: string;
  bookingTitle: string;
  bookingCopy: string;
};

export function HeroSection({
  locale,
  eyebrow,
  headline,
  subline,
  listenLabel,
  bandLabel,
  bookingLabel,
  nextShowTitle,
  nextShowCopy,
  bookingTitle,
  bookingCopy,
}: HeroSectionProps) {
  const heroSrc = publicAsset(
    ["/assets/reference/typhoon-band-hero.jpg", "/assets/reference/typhoon-band-hero.jpeg"],
    "/assets/images/typhoon-hero-placeholder.svg",
  );
  const logoSrc = publicAsset(
    ["/assets/reference/typhoon-logo.svg", "/assets/reference/typhoon-logo.jpeg"],
    "/assets/images/typhoon-logo-placeholder.svg",
  );

  return (
    <section className="relative isolate overflow-hidden border-b border-amber-100/12">
      <div className="absolute inset-0">
        <Image alt="Typhoon Bandmotiv" className="object-cover object-center" fill priority sizes="100vw" src={heroSrc} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(4,3,2,0.82)_23%,rgba(10,7,4,0.34)_58%,rgba(0,0,0,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_24%,rgba(246,211,138,0.25),transparent_26%),linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.88)_100%)]" />
      </div>

      <div className="relative mx-auto grid min-h-[760px] max-w-[1840px] content-end px-4 pb-8 pt-16 sm:px-6 lg:px-12">
        <div className="max-w-3xl pb-8 pt-12">
          <Image
            alt="Typhoon"
            className="mb-8 h-auto w-[min(560px,82vw)] object-contain drop-shadow-[0_0_34px_rgba(246,211,138,0.24)]"
            height={180}
            priority
            src={logoSrc}
            unoptimized
            width={620}
          />
          <p className="mb-4 text-base font-black uppercase text-amber-200 sm:text-lg">{eyebrow}</p>
          <h1 className="typhoon-title max-w-4xl text-5xl leading-none text-stone-50 sm:text-6xl lg:text-7xl">{headline}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-100 sm:text-lg">{subline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={`/${locale}/music`}>{listenLabel}</Button>
            <Button href={`/${locale}/band`} variant="secondary">
              {bandLabel}
            </Button>
            <Button href={`/${locale}/booking`} variant="secondary">
              {bookingLabel}
            </Button>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,760px)_1fr] lg:items-end">
          <div className="typhoon-frame grid grid-cols-[74px_1fr] items-center gap-4 p-3 sm:grid-cols-[82px_52px_1fr_auto]">
            <div className="relative aspect-square overflow-hidden border border-amber-200/30">
              <Image alt="Typhoon Demo Cover" className="object-cover" fill src={heroSrc} />
            </div>
            <span className="hidden size-12 place-items-center rounded-full border border-amber-200/40 bg-black/65 text-amber-100 sm:grid">
              ▶
            </span>
            <div>
              <p className="font-bold text-stone-50">Sen-Benim</p>
              <div className="mt-2 h-7 overflow-hidden">
                <div className="flex h-full items-center gap-1">
                  {Array.from({ length: 48 }).map((_, index) => (
                    <span
                      className="w-0.5 bg-amber-300/80"
                      key={index}
                      style={{ height: `${8 + ((index * 7) % 22)}px` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <span className="hidden text-sm text-stone-300 sm:block">00:00 / 04:28</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="typhoon-frame p-5">
              <p className="typhoon-title text-2xl text-stone-50">{nextShowTitle}</p>
              <p className="mt-4 text-4xl font-black text-amber-200">TBA</p>
              <p className="mt-2 text-sm text-stone-300">{nextShowCopy}</p>
            </div>
            <div className="typhoon-frame p-5">
              <p className="typhoon-title text-2xl text-stone-50">{bookingTitle}</p>
              <p className="mt-4 text-sm leading-6 text-stone-300">{bookingCopy}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
