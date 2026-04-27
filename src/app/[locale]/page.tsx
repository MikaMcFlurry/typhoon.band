import { BandIntro } from "@/components/sections/BandIntro";
import { BookingContactSection } from "@/components/sections/BookingContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MembersSection } from "@/components/sections/MembersSection";
import { MusicSection } from "@/components/sections/MusicSection";
import { ShowsSection } from "@/components/sections/ShowsSection";
import { getDictionary } from "@/i18n/dictionaries";
import { normalizeLocale } from "@/i18n/routing";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = normalizeLocale(localeParam);
  const dictionary = getDictionary(locale);

  return (
    <>
      {/* 1. Hero — id="home" set inside the section */}
      <HeroSection
        bookingLabel={dictionary.common.booking}
        featuredDemoLabel={dictionary.home.featuredDemoLabel}
        headlineLines={dictionary.home.headlineLines}
        listenLabel={dictionary.common.listen}
        liveLabel={dictionary.common.live}
        locale={locale}
        subline={dictionary.home.subline}
      />

      {/* 2 + 3. Band intro & full members grid live under the same #band anchor */}
      <section id="band">
        <BandIntro
          copy={dictionary.home.bandCopy}
          cta={dictionary.common.bandMore}
          locale={locale}
          title={dictionary.home.bandTitle}
        />
        <MembersSection copy={dictionary.home.membersCopy} title={dictionary.home.membersTitle} />
      </section>

      {/* 4. All demo songs */}
      <section id="music">
        <MusicSection
          copy={dictionary.music.intro}
          eyebrow={dictionary.music.eyebrow}
          featuredLabel={dictionary.music.featured}
          playerNote={dictionary.music.playerNote}
          title={dictionary.music.title}
        />
      </section>

      {/* 5. Shows / live */}
      <section id="shows">
        <ShowsSection
          copy={dictionary.shows.intro}
          empty={dictionary.shows.empty}
          eyebrow={dictionary.shows.eyebrow}
          pastLabel={dictionary.shows.past}
          statusLabels={dictionary.shows.status}
          title={dictionary.shows.title}
          upcomingLabel={dictionary.shows.upcoming}
        />
      </section>

      {/* 6. Booking + direct contact (#kontakt anchor lives inside) */}
      <section id="booking">
        <BookingContactSection
          bookingCopy={dictionary.bookingPage.intro}
          bookingEyebrow={dictionary.bookingPage.eyebrow}
          bookingTitle={dictionary.bookingPage.title}
          contactCopy={dictionary.contact.intro}
          contactEyebrow={dictionary.contact.eyebrow}
          contactTitle={dictionary.contact.title}
          fields={dictionary.bookingPage.fields}
          notice={dictionary.bookingPage.notice}
          privacy={dictionary.bookingPage.privacy}
          submitLabel={dictionary.common.requestPrepared}
        />
      </section>
    </>
  );
}
