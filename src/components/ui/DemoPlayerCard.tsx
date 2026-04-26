import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { publicAsset } from "@/lib/assets";
import type { Song } from "@/types/content";

type DemoPlayerCardProps = {
  song: Song;
  note: string;
};

export function DemoPlayerCard({ song, note }: DemoPlayerCardProps) {
  const coverSrc = publicAsset(
    ["/assets/reference/typhoon-band-hero.jpg", "/assets/reference/typhoon-band-hero.jpeg"],
    "/assets/images/typhoon-hero-placeholder.svg",
  );

  return (
    <Card className="group flex h-full flex-col gap-5 overflow-hidden p-0">
      <div className="grid grid-cols-[92px_1fr] gap-4 border-b border-amber-100/12 p-4">
        <div className="relative aspect-square overflow-hidden border border-amber-200/26">
          <Image alt={`${song.title} Demo Cover`} className="object-cover opacity-80 transition group-hover:scale-105" fill src={coverSrc} />
        </div>
        <div className="min-w-0">
          <div className="flex items-start justify-between gap-3">
            <p className="truncate text-xl font-black text-stone-50">{song.title}</p>
            <Badge>{song.tag}</Badge>
          </div>
          <p className="mt-2 text-sm leading-5 text-stone-400">{note}</p>
        </div>
      </div>
      <div className="mt-auto px-4 pb-4">
        <div className="flex h-14 items-center gap-1 border-y border-amber-100/12">
          {Array.from({ length: 38 }).map((_, index) => (
            <span
              className="w-0.5 bg-amber-300/70"
              key={index}
              style={{ height: `${10 + ((index * 9) % 30)}px` }}
            />
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3 text-sm text-stone-400">
          <span className="grid size-10 place-items-center rounded-full border border-amber-200/35 bg-black/60 text-[10px] font-black uppercase text-amber-100">
            Play
          </span>
          <span>00:00 / 00:00</span>
        </div>
      </div>
    </Card>
  );
}
