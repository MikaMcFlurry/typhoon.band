import { DemoPlayerCard } from "@/components/ui/DemoPlayerCard";
import { FeaturedDemo } from "@/components/ui/FeaturedDemo";
import { songs } from "@/data/songs";

type MusicSectionProps = {
  eyebrow: string;
  title: string;
  copy: string;
  featuredLabel: string;
  playerNote: string;
};

export function MusicSection({ eyebrow, title, copy, featuredLabel, playerNote }: MusicSectionProps) {
  const featured = songs[0];
  const rest = songs.slice(1);

  return (
    <div className="mx-auto max-w-[1640px] px-4 py-24 sm:px-6 lg:px-10">
      <div className="mb-10 max-w-2xl">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="display text-4xl text-stone-50 sm:text-5xl">{title}</h2>
        <p className="mt-4 text-base leading-7 text-stone-300">{copy}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
        <FeaturedDemo eyebrow={featuredLabel} note={playerNote} song={featured} />
        <div className="grid gap-4 sm:grid-cols-2">
          {rest.slice(0, 4).map((song, idx) => (
            <DemoPlayerCard index={idx + 1} key={song.id} song={song} />
          ))}
        </div>
      </div>

      {rest.length > 4 ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.slice(4).map((song, idx) => (
            <DemoPlayerCard index={idx + 5} key={song.id} song={song} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
