import Image from "next/image";
import Link from "next/link";
import { BandIntro } from "@/components/sections/BandIntro";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { HeroSection } from "@/components/sections/HeroSection";
import { MemberCard } from "@/components/sections/MemberCard";
import { members } from "@/data/members";
import { getDictionary } from "@/i18n/dictionaries";
import { normalizeLocale } from "@/i18n/routing";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = normalizeLocale(localeParam);
  const dictionary = getDictionary(locale);

  return (
    <>
      <HeroSection
        bookingLabel={dictionary.common.booking}
        featuredDemoLabel={dictionary.home.featuredDemoLabel}
        headlineLines={dictionary.home.headlineLines}
        listenLabel={dictionary.common.listen}
        liveLabel={dictionary.common.live}
        locale={locale}
        subline={dictionary.home.subline}
      />

      <div className="-mt-10 sm:-mt-14">
        <FeatureGrid items={dictionary.home.featureGrid} locale={locale} />
      </div>

      <BandIntro copy={dictionary.home.bandCopy} cta={dictionary.common.bandMore} locale={locale} title={dictionary.home.bandTitle} />

      <section className="mx-auto max-w-[1640px] px-4 py-24 sm:px-6 lg:px-10">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow mb-3">Members</p>
            <h2 className="display text-4xl text-stone-50 sm:text-5xl">{dictionary.home.membersTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-stone-400">{dictionary.home.membersCopy}</p>
          </div>
          <Link className="btn btn-ghost self-start md:self-end" href={`/${locale}/band`}>
            {dictionary.common.bandMore}
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {members.slice(0, 4).map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* Closing CTA strip - poster style */}
      <section className="relative mx-auto max-w-[1640px] px-4 sm:px-6 lg:px-10">
        <div className="poster-frame relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-25">
            <Image
              alt=""
              aria-hidden
              className="object-cover object-center"
              fill
              sizes="100vw"
              src="/assets/reference/typhoon-band-hero.jpg"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,3,2,0.95)_0%,rgba(5,3,2,0.75)_60%,rgba(5,3,2,0.45)_100%)]" />
          <div className="relative grid items-center gap-8 p-8 md:grid-cols-[1.4fr_1fr] md:gap-12 md:p-12">
            <div>
              <p className="eyebrow">{dictionary.home.featureGrid.booking.kicker}</p>
              <h2 className="display mt-3 text-3xl text-stone-50 sm:text-4xl">
                {dictionary.home.featureGrid.booking.title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-stone-300">
                {dictionary.home.featureGrid.booking.body} Wir gestalten euren Abend mit Soul, Druck und türkischem Herz.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link className="btn btn-gold" href={`/${locale}/booking`}>
                {dictionary.common.booking}
              </Link>
              <Link className="btn" href={`/${locale}/contact`}>
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
