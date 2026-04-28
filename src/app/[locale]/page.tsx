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
        allShowsCta={dictionary.home.heroAllShowsCta}
        featuredCta={dictionary.home.heroFeaturedCta}
        headlineLines={dictionary.home.headlineLines}
        listenLabel={dictionary.common.listen}
        liveLabel={dictionary.common.live}
        locale={locale}
        newTrackKicker={dictionary.home.heroNewTrack}
        nextConcertEyebrow={dictionary.home.heroNextConcert}
        subline={dictionary.home.subline}
      />

      {/* 2. Band intro (compact + expandable) + members grid (compact + expandable) under #band */}
      <section id="band">
        <BandIntro
          collapseLabel={dictionary.common.readLess}
          copy={dictionary.home.bandCopyShort}
          expandLabel={dictionary.common.readMore}
          locale={locale}
          longCopy={dictionary.home.bandCopyLong}
          title={dictionary.home.bandTitle}
        />
        <MembersSection
          collapseLabel={dictionary.common.hideMembers}
          copy={dictionary.home.membersCopy}
          expandLabel={dictionary.common.showAllMembers}
          title={dictionary.home.membersTitle}
        />
      </section>

      {/* 3. Music — featured + first 3 default, rest behind expand */}
      <section id="music">
        <MusicSection
          collapseLabel={dictionary.common.hideDemos}
          copy={dictionary.music.intro}
          expandLabel={dictionary.common.showAllDemos}
          eyebrow={dictionary.music.eyebrow}
          featuredLabel={dictionary.music.featured}
          playerNote={dictionary.music.playerNote}
          title={dictionary.music.title}
        />
      </section>

      {/* 4. Shows — compact, expandable past list */}
      <section id="shows">
        <ShowsSection
          collapseLabel={dictionary.common.hideShows}
          copy={dictionary.shows.intro}
          empty={dictionary.shows.empty}
          expandLabel={dictionary.common.showAllShows}
          eyebrow={dictionary.shows.eyebrow}
          pastLabel={dictionary.shows.past}
          statusLabels={dictionary.shows.status}
          title={dictionary.shows.title}
          upcomingLabel={dictionary.shows.upcoming}
        />
      </section>

      {/* 5. Booking + direct contact (#contact anchor lives inside) */}
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
