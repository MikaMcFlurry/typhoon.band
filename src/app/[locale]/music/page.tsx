import { DemoPlayerCard } from "@/components/ui/DemoPlayerCard";
import { FeaturedDemo } from "@/components/ui/FeaturedDemo";
import { PageHero } from "@/components/ui/PageHero";
import { songs } from "@/data/songs";
import { getDictionary } from "@/i18n/dictionaries";
import { normalizeLocale } from "@/i18n/routing";

export default async function MusicPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const dictionary = getDictionary(normalizeLocale(localeParam));
  const featured = songs[0];
  const rest = songs.slice(1);

  return (
    <>
      <PageHero copy={dictionary.music.intro} eyebrow={dictionary.music.eyebrow} title={dictionary.music.title} />

      <section className="mx-auto max-w-[1640px] px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <FeaturedDemo eyebrow={dictionary.music.featured} note={dictionary.music.playerNote} song={featured} />
          <div className="grid gap-4 sm:grid-cols-2">
            {rest.slice(0, 4).map((song, idx) => (
              <DemoPlayerCard index={idx + 1} key={song.id} song={song} />
            ))}
          </div>
        </div>

        {rest.length > 4 ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {rest.slice(4).map((song, idx) => (
              <DemoPlayerCard index={idx + 5} key={song.id} song={song} />
            ))}
          </div>
        ) : null}
      </section>
    </>
  );
}
