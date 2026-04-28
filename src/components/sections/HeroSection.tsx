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
 * Hero composition matching the supplied desktop + mobile mockups.
 *
 * Mobile  – Band image is the upper-right backdrop of the hero, text on
 *           the left overlays it (image blends behind text via a strong
 *           left-side dim). The handwritten Typhoon SVG sweeps low across
 *           the band image area as a poster signature, just above the
 *           subline / CTAs. The full band stays recognisable thanks to
 *           controlled object-position.
 *
 * Desktop – Two-column grid: text column on the left (~46%), the band
 *           image fills the right column as a contained poster (no
 *           horizontal crop — all 8 musicians visible). The handwritten
 *           logo sits low across the lower portion of the right column.
 *
 * Layer order:  1) section bg  2) image  3) gradients  4) grain
 *               5) big logo overlay  6) text + CTAs (z-10)
 *               7) bottom panels (z-10).
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
      {/* MOBILE / TABLET background — the band image is anchored to the upper
          part of the hero, not full-bleed, so the bottom panels sit on a
          clean black surface. Full band stays visible (object-center). */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[58%] sm:h-[64%] lg:hidden">
        <Image
          alt="Typhoon Bandfoto"
          className="object-cover object-[center_30%]"
          fill
          priority
          sizes="100vw"
          src={HERO_IMAGE}
        />
        {/* Warm sepia glow over the band */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_60%_30%,rgba(199,154,75,0.22),transparent_65%)]" />
        {/* Strong dim on the left so the headline reads clearly */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,2,1,0.92)_0%,rgba(3,2,1,0.55)_30%,rgba(3,2,1,0.05)_62%,rgba(3,2,1,0)_100%)]" />
        {/* Bottom fade into the section background */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,transparent,rgba(3,2,1,1))]" />
        <div className="grain absolute inset-0" />
      </div>

      {/* MOBILE / TABLET handwritten logo — low across the band image area */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 z-[5] flex justify-end px-4 lg:hidden"
        style={{ top: "44%" }}
      >
        <Image
          alt=""
          className="logo-overlay-strong h-auto w-[88%] max-w-[440px] object-contain sm:w-[72%] sm:max-w-[560px]"
          height={451}
          priority
          src={HERO_LOGO}
          unoptimized
          width={970}
        />
      </div>

      {/* Hero body */}
      <div className="relative mx-auto flex max-w-[1640px] flex-col px-4 pb-10 pt-12 sm:px-6 sm:pb-12 sm:pt-16 lg:px-10 lg:pb-12 lg:pt-12">
        {/* DESKTOP: text on the left + image card on the right.
            MOBILE: text on the left, image lives in the absolute backdrop
            above; we keep a min-h to leave room for the backdrop. */}
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,46%)_minmax(0,54%)] lg:gap-12">
          <div className="relative z-10 max-w-2xl pt-2 sm:pt-4 lg:pt-0">
            <h1 className="display text-[clamp(2.6rem,9.5vw,5.5rem)] leading-[0.95] text-stone-50 sm:text-[clamp(3rem,7.5vw,5.75rem)]">
              {headlineLines.map((line, i) => (
                <span className="block" key={`${line}-${i}`}>
                  {line}
                </span>
              ))}
            </h1>

            {/* Mobile reserves vertical space so the headline + signature
                logo + subline sit in the right rhythm. */}
            <div className="h-[44vw] max-h-[260px] sm:h-[36vw] sm:max-h-[260px] lg:hidden" aria-hidden />

            <p className="max-w-md text-base leading-7 text-stone-200/90 sm:max-w-lg sm:text-[17px] sm:leading-8 lg:mt-6">
              {subline}
            </p>

            {/* CTAs — mobile stacks left-aligned, desktop inline */}
            <div className="mt-6 flex flex-col items-start gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center">
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

          {/* DESKTOP-ONLY: contained band image with the handwritten logo
              overlaid LOW across its lower portion. Full band visible
              because the image lives in its own column with cover crop. */}
          <div className="relative hidden aspect-[5/4.4] w-full overflow-hidden rounded-[28px] lg:block">
            <Image
              alt="Typhoon Band"
              className="object-cover object-[55%_30%]"
              fill
              priority
              sizes="54vw"
              src={HERO_IMAGE}
            />
            {/* Edge fades so the image doesn't feel like a hard rectangle */}
            <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(120%_85%_at_60%_45%,transparent_55%,rgba(3,2,1,0.45)_85%,rgba(3,2,1,0.85)_100%)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 rounded-b-[28px] bg-[linear-gradient(180deg,transparent,rgba(3,2,1,0.95))]" />

            {/* Big handwritten Typhoon logo as a poster signature, low. */}
            <div className="pointer-events-none absolute inset-x-6 bottom-6 flex justify-center">
              <Image
                alt=""
                aria-hidden
                className="logo-overlay-strong h-auto w-full max-w-[760px] object-contain"
                height={451}
                priority
                src={HERO_LOGO}
                unoptimized
                width={970}
              />
            </div>
          </div>
        </div>

        {/* Bottom row: featured demo + next concert (mockup parity).
            Mobile: stacked. Desktop: side-by-side, constrained width. */}
        <div className="relative z-10 mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:mt-10 lg:max-w-[1080px]">
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
    </section>
  );
}
