import { DemoPlayerCard } from "@/components/ui/DemoPlayerCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { songs } from "@/data/songs";
import { getDictionary } from "@/i18n/dictionaries";
import { normalizeLocale } from "@/i18n/routing";

export default async function MusicPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const dictionary = getDictionary(normalizeLocale(localeParam));

  return (
    <div className="mx-auto max-w-[1480px] px-4 py-16 sm:px-6 lg:px-10">
      <div className="mb-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <SectionHeading copy={dictionary.music.intro} eyebrow="Demo Sessions" title={dictionary.music.title} />
        <div className="typhoon-frame p-6">
          <p className="typhoon-kicker">Kein Download</p>
          <p className="mt-3 text-sm leading-6 text-stone-300">
            Die Player sind als hochwertige Streaming-UI vorbereitet. Echte Audiodateien und kontrollierte Auslieferung folgen später.
          </p>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {songs.map((song) => (
          <DemoPlayerCard key={song.id} note={dictionary.music.playerNote} song={song} />
        ))}
      </div>
    </div>
  );
}
