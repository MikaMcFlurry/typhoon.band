import type { Song } from "@/types/content";

type DemoPlayerCardProps = {
  song: Song;
  note?: string;
  featured?: boolean;
  index?: number;
};

export function DemoPlayerCard({ song, note, featured = false, index }: DemoPlayerCardProps) {
  const bars = 42;
  const playedTo = featured ? 14 : 0;

  return (
    <article className={`poster-frame relative flex h-full flex-col justify-between gap-6 p-5 sm:p-6 ${featured ? "ring-1 ring-amber-200/30" : ""}`}>
      <header className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-[0.32em] text-amber-200/85">
            {typeof index === "number" ? String(index + 1).padStart(2, "0") : "Demo"}
          </p>
          <h3 className="display mt-2 text-2xl text-stone-50">{song.title}</h3>
          {note ? <p className="mt-2 text-xs uppercase tracking-[0.18em] text-stone-500">{note}</p> : null}
        </div>
        {featured ? (
          <span className="border border-amber-200/40 bg-amber-200/10 px-2 py-1 text-[10px] font-extrabold uppercase tracking-[0.24em] text-amber-100">
            Featured
          </span>
        ) : null}
      </header>

      <div>
        <div className="flex h-12 items-end gap-[3px]">
          {Array.from({ length: bars }).map((_, i) => (
            <span
              className={`w-[3px] rounded-full ${i < playedTo ? "bg-amber-200" : "bg-amber-200/35"}`}
              key={i}
              style={{ height: `${10 + ((i * 13 + 5) % 30)}px` }}
            />
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between gap-3">
          <button
            aria-label={`Demo abspielen: ${song.title}`}
            className="grid h-10 w-10 place-items-center rounded-full border border-amber-200/40 bg-black/40 text-amber-100 transition hover:border-amber-200/80 hover:bg-amber-200/10"
            type="button"
          >
            <svg aria-hidden className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5.5v13l11-6.5L8 5.5z" />
            </svg>
          </button>
          <span className="text-xs uppercase tracking-[0.22em] text-stone-500">{featured ? "00:42 / 04:12" : "—"}</span>
        </div>
      </div>
    </article>
  );
}
