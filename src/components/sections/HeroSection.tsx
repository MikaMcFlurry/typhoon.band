import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { publicAsset } from "@/lib/assets";
import type { Locale } from "@/types/content";

type HeroSectionProps = {
  locale: Locale;
  eyebrow: string;
  headline: string;
  subline: string;
  listenLabel: string;
  liveLabel: string;
  bookingLabel: string;
};

const waveform = Array.from({ length: 56 }, (_, index) => 10 + ((index * 13) % 34));

export function HeroSection({
  locale,
  eyebrow,
  headline,
  subline,
  listenLabel,
  liveLabel,
  bookingLabel,
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
    <section className="relative isolate min-h-[calc(100svh-73px)] overflow-hidden border-b border-amber-100/12 lg:min-h-[90vh]">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Typhoon Band auf sepiafarbenem Konzertposter"
          className="object-cover object-[58%_center]"
          fill
          priority
          sizes="100vw"
          src={heroSrc}
        />
      </div>
      <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(8,5,3,0.84)_26%,rgba(8,5,3,0.2)_58%,rgba(0,0,0,0.68)_100%)]" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_66%_26%,rgba(246,211,138,0.2),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.42)_58%,rgba(0,0,0,0.92)_100%)]" />

      <Image
        alt="Typhoon Signatur"
        className="pointer-events-none absolute bottom-[15%] right-[-5vw] z-40 h-auto w-[72vw] max-w-[980px] opacity-95 drop-shadow-[0_0_30px_rgba(246,211,138,0.42)] sm:bottom-[11%] sm:right-[-2vw] sm:w-[56vw] lg:bottom-[8%] lg:right-[3vw] lg:w-[48vw]"
        height={280}
        priority
        src={logoSrc}
        unoptimized
        width={1100}
      />

      <div className="relative z-20 mx-auto grid min-h-[calc(100svh-73px)] max-w-[1840px] content-end px-4 pb-6 pt-20 sm:px-6 lg:min-h-[90vh] lg:px-10">
        <div className="max-w-2xl pb-8 sm:pb-12 lg:pb-20">
          <p className="typhoon-kicker mb-5">{eyebrow}</p>
          <h1 className="max-w-xl text-5xl font-black leading-[0.92] text-stone-50 sm:text-7xl lg:text-8xl">
            {headline.split("\n").map((line) => (
              <span className="block" key={line}>
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-stone-100 sm:text-lg">{subline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`/${locale}/music`}>{listenLabel}</Button>
            <Button href={`/${locale}/shows`} variant="secondary">
              {liveLabel}
            </Button>
            <Button href={`/${locale}/booking`} variant="secondary">
              {bookingLabel}
            </Button>
          </div>
        </div>

        <div className="relative z-50 grid gap-4 lg:grid-cols-[minmax(0,760px)_minmax(260px,360px)] lg:items-end">
          <div className="typhoon-frame poster-sheen grid grid-cols-[72px_1fr] items-center gap-4 overflow-hidden p-3 sm:grid-cols-[82px_54px_1fr_auto]">
            <div className="relative aspect-square overflow-hidden border border-amber-200/30">
              <Image alt="Sen-Benim Demo Cover" className="object-cover" fill src={heroSrc} />
            </div>
            <span className="hidden size-12 place-items-center rounded-full border border-amber-200/40 bg-black/70 text-xs font-black uppercase text-amber-100 sm:grid">
              Play
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <p className="truncate font-bold text-stone-50">Sen-Benim</p>
                <Badge>Demo</Badge>
              </div>
              <div className="mt-3 flex h-9 items-center gap-1 overflow-hidden">
                {waveform.map((height, index) => (
                  <span className="w-0.5 shrink-0 bg-amber-300/80" key={index} style={{ height: `${height}px` }} />
                ))}
              </div>
            </div>
            <span className="hidden text-sm text-stone-300 sm:block">00:00 / 04:28</span>
          </div>

          <div className="typhoon-frame hidden p-5 lg:block">
            <p className="typhoon-kicker">Live-Energie</p>
            <p className="mt-3 text-sm leading-6 text-stone-300">
              Türkischsprachige Songs, warme Bläser, Funk-Grooves und Southern-Rock-Druck.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
