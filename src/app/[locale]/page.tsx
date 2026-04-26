import { BandIntro } from "@/components/sections/BandIntro";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { MemberCard } from "@/components/sections/MemberCard";
import { MusicPreview } from "@/components/sections/MusicPreview";
import { ShowsPreview } from "@/components/sections/ShowsPreview";
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
        bandLabel={dictionary.common.bandMore}
        bookingLabel={dictionary.common.booking}
        bookingCopy={dictionary.home.bookingCopy}
        bookingTitle={dictionary.home.bookingTitle}
        eyebrow={dictionary.home.eyebrow}
        headline={dictionary.home.headline}
        listenLabel={dictionary.common.listen}
        locale={locale}
        nextShowCopy={dictionary.home.showsCopy}
        nextShowTitle={dictionary.home.showsTitle}
        subline={dictionary.home.subline}
      />
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
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>
      <ShowsPreview
        copy={dictionary.home.showsCopy}
        cta={dictionary.common.allShows}
        labels={dictionary.shows.status}
        locale={locale}
        title={dictionary.home.showsTitle}
      />
      <BookingCTA copy={dictionary.home.bookingCopy} cta={dictionary.common.booking} locale={locale} title={dictionary.home.bookingTitle} />
    </>
  );
}
