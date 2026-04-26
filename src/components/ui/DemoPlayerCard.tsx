import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { Song } from "@/types/content";

type DemoPlayerCardProps = {
  song: Song;
  note: string;
};

export function DemoPlayerCard({ song, note }: DemoPlayerCardProps) {
  return (
    <Card className="flex h-full flex-col gap-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-lg font-black text-stone-50">{song.title}</p>
          <p className="mt-1 text-sm text-stone-400">{note}</p>
        </div>
        <Badge>{song.tag}</Badge>
      </div>
      <div className="mt-auto">
        <div className="flex h-12 items-center gap-1 border-y border-amber-100/12">
          {Array.from({ length: 38 }).map((_, index) => (
            <span
              className="w-0.5 bg-amber-300/75"
              key={index}
              style={{ height: `${10 + ((index * 9) % 30)}px` }}
            />
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3 text-sm text-stone-400">
          <span className="grid size-10 place-items-center rounded-full border border-amber-200/35 bg-black/50 text-amber-100">▶</span>
          <span>00:00 / 00:00</span>
        </div>
      </div>
    </Card>
  );
}
