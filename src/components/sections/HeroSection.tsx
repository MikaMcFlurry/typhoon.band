import Image from "next/image";
import Link from "next/link";
import { HeroMusicPlayer } from "@/components/ui/HeroMusicPlayer";
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
  bookingLabel: string;
  featuredDemoLabel: string;
};

export function HeroSection({
  locale,
  headlineLines,
  subline,
  listenLabel,
  liveLabel,
  bookingLabel,
  featuredDemoLabel,
}: HeroSectionProps) {
  const featured = songs[0];

  return (
    <section className="relative isolate overflow-hidden" id="home">
      {/* Layer 1: hero band image (singer in color, rest of band in sepia) */}
      <div className="absolute inset-0 -z-10">
        <div className="relative h-full w-full">
          <Image
            alt="Typhoon Bandfoto"
            className="object-cover object-[62%_28%] sm:object-[68%_30%] lg:object-[74%_32%]"
            fill
            priority
            sizes="100vw"
            src={HERO_IMAGE}
          />
        </div>
        {/* Layer 2: warm sepia glow + dark cinematic gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(110%_70%_at_72%_30%,rgba(199,154,75,0.3),transparent_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,2,1,0.4)_0%,rgba(3,2,1,0.05)_22%,rgba(3,2,1,0.45)_70%,rgba(3,2,1,0.92)_92%,rgba(3,2,1,1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,2,1,0.92)_0%,rgba(3,2,1,0.65)_36%,rgba(3,2,1,0.05)_62%,rgba(3,2,1,0.4)_100%)]" />
        <div className="grain" />
      </div>

      {/* Hero body */}
      <div className="relative mx-auto flex min-h-[760px] max-w-[1640px] flex-col px-4 pb-44 pt-16 sm:px-6 sm:pb-48 sm:pt-20 lg:min-h-[880px] lg:px-10 lg:pb-56 lg:pt-24">
        {/* Top: small spacer; the focal subject of the image stays free */}
        <div className="grow" />

        {/* Left text block + featured player */}
        <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,640px)_1fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="genre-line mb-6">
              {GENRES.map((g, i) => (
                <span className="contents" key={g}>
                  <span>{g}</span>
                  {i < GENRES.length - 1 ? <span className="dot" /> : null}
                </span>
              ))}
            </p>

            <h1 className="display text-[clamp(2.6rem,6.5vw,5.5rem)] text-stone-50">
              {headlineLines.map((line, i) => (
                <span
                  className={`block ${i === headlineLines.length - 1 ? "text-[color:var(--gold-soft)]" : ""}`}
                  key={`${line}-${i}`}
                >
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-stone-200 sm:text-[17px] sm:leading-8">{subline}</p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link className="btn btn-gold" href={`/${locale}#music`}>
                <svg aria-hidden className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5.5v13l11-6.5L8 5.5z" />
                </svg>
                {listenLabel}
              </Link>
              <Link className="btn" href={`/${locale}#shows`}>
                {liveLabel}
              </Link>
              <Link className="btn btn-ghost" href={`/${locale}#booking`}>
                {bookingLabel}
              </Link>
            </div>

            <div className="mt-9 max-w-xl">
              <p className="eyebrow mb-3">{featuredDemoLabel}</p>
              <HeroMusicPlayer audioSrc={featured.audioSrc} songId={featured.id} trackTitle={featured.title} />
            </div>
          </div>

          {/* Right: small badge panel for desktop balance */}
          <div className="hidden flex-col items-end gap-5 self-end pb-2 lg:flex">
            <div className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.32em] text-[color:var(--gold-soft)]/85">
              <span className="h-px w-14 bg-[color:var(--gold-soft)]/50" />
              Live · Studio · Bühne
            </div>
            <div className="poster-frame flex max-w-xs flex-col gap-3 px-6 py-5">
              <p className="eyebrow">Live Collective</p>
              <p className="display text-2xl text-stone-50">8 Musiker · 1 Sound</p>
              <p className="text-sm leading-6 text-[color:var(--ink-mute)]">
                30+ Jahre Bühnenerfahrung. Eigenes Kanzlei Studio in Hechingen.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Handwritten Typhoon logo overlay — placed across the lower area as a poster signature.
          Absolute, separate layer, above gradients but below interactive controls. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] flex justify-center sm:justify-end"
      >
        <div className="-mb-2 w-[min(720px,90vw)] sm:-mb-3 sm:mr-4 sm:w-[min(640px,68vw)] lg:-mb-4 lg:mr-10 lg:w-[min(900px,56vw)]">
          <Image
            alt=""
            className="logo-overlay h-auto w-full object-contain"
            height={451}
            priority
            src={HERO_LOGO}
            unoptimized
            width={970}
          />
        </div>
      </div>

      {/* Bottom feathered edge into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-20 bg-[linear-gradient(180deg,transparent,rgba(3,2,1,1))]" />
    </section>
  );
}
