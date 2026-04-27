import Image from "next/image";
import Link from "next/link";
import { NextConcertPanel } from "@/components/sections/NextConcertPanel";
import { HeroFeaturedDemo } from "@/components/ui/HeroFeaturedDemo";
import { songs } from "@/data/songs";
import type { Locale } from "@/types/content";

const HERO_IMAGE = "/assets/reference/typhoon-band-hero-new.jpeg";
const HERO_LOGO = "/assets/reference/typhoon-logo.svg";

const GENRES = ["Bluesrock", "Funk", "Soul", "Jazz", "Southern Rock"];

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
    <section className="relative isolate overflow-hidden" id="home">
      {/* Layer 1: hero band image. The image dominates the right half on desktop;
          on mobile it covers the full viewport with a stronger left-side dim. */}
      <div className="absolute inset-0 -z-10">
        <div className="relative h-full w-full">
          <Image
            alt="Typhoon Bandfoto"
            className="object-cover object-[62%_28%] sm:object-[68%_30%] lg:object-[78%_30%]"
            fill
            priority
            sizes="100vw"
            src={HERO_IMAGE}
          />
        </div>

        {/* Layer 2: gradients. Strong dark wash on the left so the headline reads cleanly,
            warm sepia glow over the band, fade to black at the bottom. */}
        <div className="absolute inset-0 bg-[radial-gradient(110%_70%_at_72%_30%,rgba(199,154,75,0.32),transparent_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,2,1,0.4)_0%,rgba(3,2,1,0.05)_22%,rgba(3,2,1,0.45)_70%,rgba(3,2,1,0.92)_92%,rgba(3,2,1,1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,2,1,0.95)_0%,rgba(3,2,1,0.78)_28%,rgba(3,2,1,0.25)_52%,rgba(3,2,1,0)_72%,rgba(3,2,1,0.45)_100%)]" />
        <div className="grain" />
      </div>

      {/* Hero body grid */}
      <div className="relative mx-auto flex min-h-[680px] max-w-[1640px] flex-col gap-10 px-4 pb-10 pt-12 sm:px-6 sm:pb-12 sm:pt-16 lg:min-h-[800px] lg:gap-14 lg:px-10 lg:pb-12 lg:pt-20">
        {/* Top: text block on the left, image is the visual on the right (just the background) */}
        <div className="relative z-10 grid flex-1 items-center gap-10 lg:grid-cols-[minmax(0,560px)_1fr]">
          <div className="max-w-2xl">
            <p className="genre-line mb-6">
              {GENRES.map((g, i) => (
                <span className="contents" key={g}>
                  <span>{g}</span>
                  {i < GENRES.length - 1 ? <span className="dot" /> : null}
                </span>
              ))}
            </p>

            <h1 className="display text-[clamp(2.8rem,7vw,5.75rem)] text-stone-50">
              {headlineLines.map((line, i) => (
                <span className="block" key={`${line}-${i}`}>
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-stone-200 sm:text-[17px] sm:leading-8">
              {subline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
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

        {/* Bottom: two side-by-side panels mirroring the mockup
            (featured track left, next concert right). On mobile they stack. */}
        <div className="relative z-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:max-w-[1080px]">
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

      {/* Handwritten Typhoon logo overlay — separate absolute layer placed across
          the lower-right of the hero like a poster signature. Above the gradients,
          below the interactive panels (pointer-events-none keeps clicks live). */}
      <div
        aria-hidden
        className="pointer-events-none absolute z-[5] hidden lg:block"
        style={{ right: "2rem", bottom: "13.5rem" }}
      >
        <Image
          alt=""
          className="logo-overlay h-auto w-[min(820px,52vw)] object-contain xl:w-[min(900px,48vw)]"
          height={451}
          priority
          src={HERO_LOGO}
          unoptimized
          width={970}
        />
      </div>

      {/* Mobile / tablet logo: small signature in the upper-right of the hero,
          floating over the band image without crowding the headline or the
          bottom panels. */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-4 top-6 z-[5] flex justify-end sm:right-6 sm:top-10 lg:hidden"
      >
        <Image
          alt=""
          className="logo-overlay h-auto w-[min(280px,52vw)] object-contain sm:w-[min(360px,42vw)]"
          height={451}
          priority
          src={HERO_LOGO}
          unoptimized
          width={970}
        />
      </div>

      {/* Bottom feathered edge into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-16 bg-[linear-gradient(180deg,transparent,rgba(3,2,1,1))]" />
    </section>
  );
}
