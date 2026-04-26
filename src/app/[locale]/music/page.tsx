import { DemoPlayerCard } from "@/components/ui/DemoPlayerCard";
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
          <div className="poster-frame relative flex flex-col gap-6 p-8 sm:p-10">
            <p className="eyebrow">{dictionary.music.featured}</p>
            <div>
              <h2 className="display text-4xl text-stone-50 sm:text-5xl">{featured.title}</h2>
              <p className="mt-3 text-sm uppercase tracking-[0.24em] text-stone-400">Typhoon · Demo Session</p>
            </div>
            <div className="flex h-16 items-end gap-1">
              {Array.from({ length: 72 }).map((_, i) => (
                <span
                  className={`w-[3px] rounded-full ${i < 22 ? "bg-amber-200" : "bg-amber-200/35"}`}
                  key={i}
                  style={{ height: `${14 + ((i * 11) % 38)}px` }}
                />
              ))}
            </div>
            <div className="flex items-center gap-4">
              <button
                aria-label={`Demo abspielen: ${featured.title}`}
                className="grid h-12 w-12 place-items-center rounded-full border border-amber-200/45 bg-black/40 text-amber-100 transition hover:border-amber-200/80 hover:bg-amber-200/10"
                type="button"
              >
                <svg aria-hidden className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5.5v13l11-6.5L8 5.5z" />
                </svg>
              </button>
              <span className="text-xs uppercase tracking-[0.22em] text-stone-400">00:42 / 04:12</span>
            </div>
            <p className="text-sm leading-6 text-stone-400">{dictionary.music.playerNote}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {rest.slice(0, 4).map((song, idx) => (
              <DemoPlayerCard index={idx + 1} key={song.id} song={song} />
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rest.slice(4).map((song, idx) => (
            <DemoPlayerCard index={idx + 5} key={song.id} song={song} />
          ))}
        </div>
      </section>
    </>
  );
}
