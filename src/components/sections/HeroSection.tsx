import Image from "next/image";
import Link from "next/link";
import { NextConcertPanel } from "@/components/sections/NextConcertPanel";
import { HeroFeaturedDemo } from "@/components/ui/HeroFeaturedDemo";
import { songs } from "@/data/songs";
import type { Locale } from "@/types/content";

const HERO_IMAGE = "/assets/reference/typhoon-band-hero-new.jpeg";
const HERO_LOGO = "/assets/reference/typhoon-logo.svg";

type HeroSectionProps = {
  locale: Locale;
  headlineLines: readonly string[];
  subline: string;
  listenLabel: string;
  liveLabel: string;
  newTrackKicker: string;
  featuredCta: string;
  nextConcertEyebrow: string;
  allShowsCta: string;
};

/**
 * Hero composition (matches the supplied desktop / mobile mockups):
 *
 * Mobile  – band image full-bleed with strong dark wash on the left so the
 *           headline reads cleanly. Big handwritten Typhoon SVG sits low
 *           across the band image, just above the CTA pair, like a poster
 *           signature. Bottom row: featured demo card + next concert card,
 *           stacked.
 *
 * Desktop – left text column (~46%), band image dominates the right. The
 *           handwritten logo overlay sweeps low across the right side of
 *           the image. Bottom row: featured demo + next concert side-by-side.
 *
 * Layer order:  1) image  2) gradients  3) grain  4) big logo overlay
 *               5) text + CTAs + bottom panels (z-10).
 */
export function HeroSection({
  locale,
  headlineLines,
  subline,
  listenLabel,
  liveLabel,
  newTrackKicker,
  featuredCta,
  nextConcertEyebrow,
  allShowsCta,
}: HeroSectionProps) {
  const featured = songs[0];

  return (
    <section className="relative isolate overflow-hidden bg-[var(--bg-0)]" id="home">
      {/* 1. Background band image — focused on the band; baked logo from old asset is not present in the new image */}
      <div className="absolute inset-0 -z-10">
        <Image
          alt="Typhoon Bandfoto"
          className="object-cover object-[78%_30%] sm:object-[72%_30%] lg:object-[78%_32%]"
          fill
          priority
          sizes="100vw"
          src={HERO_IMAGE}
        />

        {/* 2. Gradients
            – horizontal wash so headline text remains legible on the left
            – vertical fade so we transition cleanly into the next section */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,2,1,0.96)_0%,rgba(3,2,1,0.85)_24%,rgba(3,2,1,0.45)_48%,rgba(3,2,1,0.05)_72%,rgba(3,2,1,0.4)_100%)] lg:bg-[linear-gradient(90deg,rgba(3,2,1,0.94)_0%,rgba(3,2,1,0.78)_28%,rgba(3,2,1,0.3)_52%,rgba(3,2,1,0)_72%,rgba(3,2,1,0.35)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,2,1,0.35)_0%,rgba(3,2,1,0.05)_22%,rgba(3,2,1,0.4)_72%,rgba(3,2,1,0.96)_100%)]" />

        {/* 3. Subtle grain */}
        <div className="grain" />
      </div>

      {/* 4. Big handwritten Typhoon logo — separate absolute overlay layer
             placed LOW across the band image like a poster signature.
             pointer-events-none so it never blocks the buttons or panels. */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute z-[5]
          right-[-4%] top-[48%] w-[108%] max-w-[600px]
          sm:right-[-3%] sm:top-[44%] sm:w-[82%] sm:max-w-[760px]
          lg:right-[-2%] lg:top-auto lg:bottom-[24%] lg:w-[52%] lg:max-w-[900px]
        "
      >
        <Image
          alt=""
          className="logo-overlay-strong h-auto w-full object-contain"
          height={451}
          priority
          src={HERO_LOGO}
          unoptimized
          width={970}
        />
      </div>

      {/* 5. Foreground content */}
      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1640px] flex-col px-4 pb-8 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:min-h-[820px] lg:px-10 lg:pb-12 lg:pt-24">
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[minmax(0,46%)_1fr] lg:gap-12">
          <div className="max-w-2xl">
            {/* Headline – single dominant element, no genre line */}
            <h1 className="display text-[clamp(2.6rem,9vw,5.5rem)] leading-[0.95] text-stone-50 sm:text-[clamp(3.2rem,7vw,5.75rem)]">
              {headlineLines.map((line, i) => (
                <span className="block" key={`${line}-${i}`}>
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-stone-200/90 sm:max-w-lg sm:text-[17px] sm:leading-8">
              {subline}
            </p>

            {/* CTAs — mobile: stacked, left-aligned (matches mockup);
                desktop: inline pair. */}
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link className="btn btn-gold" href={`/${locale}#music`}>
                <svg aria-hidden className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5.5v13l11-6.5L8 5.5z" />
                </svg>
                {listenLabel}
              </Link>
              <Link className="btn" href={`/${locale}#shows`}>
                {liveLabel}
              </Link>
            </div>
          </div>

          {/* Right column intentionally empty on desktop — the band image and
              the handwritten signature live there as background layers. */}
          <div aria-hidden className="hidden lg:block" />
        </div>

        {/* Bottom panels — featured demo + next concert.
            Mobile: stacked. Desktop: side-by-side, constrained width. */}
        <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:mt-14 lg:max-w-[1080px]">
          <HeroFeaturedDemo
            audioSrc={featured.audioSrc}
            cta={featuredCta}
            kicker={newTrackKicker}
            songId={featured.id}
            trackTitle={featured.title}
          />
          <NextConcertPanel cta={allShowsCta} eyebrow={nextConcertEyebrow} locale={locale} />
        </div>
      </div>

      {/* Bottom feathered fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-12 bg-[linear-gradient(180deg,transparent,rgba(3,2,1,1))]" />
    </section>
  );
}
