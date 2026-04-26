import { DemoPlayerCard } from "@/components/ui/DemoPlayerCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { songs } from "@/data/songs";
import { getDictionary } from "@/i18n/dictionaries";
import { normalizeLocale } from "@/i18n/routing";

export default async function MusicPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const dictionary = getDictionary(normalizeLocale(localeParam));

  return (
    <div className="mx-auto max-w-[1840px] px-4 py-16 sm:px-6 lg:px-12">
      <SectionHeading copy={dictionary.music.intro} title={dictionary.music.title} />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {songs.map((song) => (
          <DemoPlayerCard key={song.id} note={dictionary.music.playerNote} song={song} />
        ))}
      </div>
    </div>
  );
}
