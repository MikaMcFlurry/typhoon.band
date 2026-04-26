import { BandIntro } from "@/components/sections/BandIntro";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomeFeatureGrid } from "@/components/sections/HomeFeatureGrid";
import { MemberCard } from "@/components/sections/MemberCard";
import { MusicPreview } from "@/components/sections/MusicPreview";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
        eyebrow={dictionary.home.eyebrow}
        headline={dictionary.home.headline}
        listenLabel={dictionary.common.listen}
        liveLabel={dictionary.common.live}
        locale={locale}
        subline={dictionary.home.subline}
      />
      <HomeFeatureGrid locale={locale} />
      <MusicPreview
        copy={dictionary.home.musicCopy}
        cta={dictionary.common.listen}
        locale={locale}
        note={dictionary.music.playerNote}
        title={dictionary.home.musicTitle}
      />
      <BandIntro copy={dictionary.home.bandCopy} cta={dictionary.common.bandMore} locale={locale} title={dictionary.home.bandTitle} />
      <section className="mx-auto max-w-[1840px] px-4 py-20 sm:px-6 lg:px-12">
        <SectionHeading title={dictionary.home.membersTitle} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {members.slice(0, 4).map((member) => (
            <MemberCard key={member.id} member={member} showPlaceholderBadge={false} />
          ))}
        </div>
      </section>
      <BookingCTA copy={dictionary.home.bookingCopy} cta={dictionary.common.booking} locale={locale} title={dictionary.home.bookingTitle} />
    </>
  );
}
