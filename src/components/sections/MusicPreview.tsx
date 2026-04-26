import { songs } from "@/data/songs";
import { Button } from "@/components/ui/Button";
import { DemoPlayerCard } from "@/components/ui/DemoPlayerCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Locale } from "@/types/content";

type MusicPreviewProps = {
  locale: Locale;
  title: string;
  copy: string;
  note: string;
  cta: string;
};

export function MusicPreview({ locale, title, copy, note, cta }: MusicPreviewProps) {
  return (
    <section className="mx-auto max-w-[1480px] px-4 py-20 sm:px-6 lg:px-10">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading copy={copy} eyebrow="Demos" title={title} />
        <Button href={`/${locale}/music`} variant="secondary">
          {cta}
        </Button>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {songs.slice(0, 3).map((song) => (
          <DemoPlayerCard key={song.id} note={note} song={song} />
        ))}
      </div>
    </section>
  );
}
