import { PageHero } from "@/components/ui/PageHero";
import { getDictionary } from "@/i18n/dictionaries";
import { normalizeLocale } from "@/i18n/routing";

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const dictionary = getDictionary(normalizeLocale(localeParam));

  return (
    <>
      <PageHero copy={dictionary.gallery.intro} eyebrow={dictionary.gallery.eyebrow} title={dictionary.gallery.title} />
      <section className="mx-auto max-w-[1640px] px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              className="poster-frame relative aspect-[4/5] overflow-hidden"
              key={i}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(160,113,64,0.18),rgba(0,0,0,0.7)_60%,rgba(0,0,0,0.95))]" />
              <div className="grain" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-amber-200/70">
                <span className="h-px w-6 bg-amber-200/50" />
                {String(i + 1).padStart(2, "0")} · folgt
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm uppercase tracking-[0.24em] text-stone-500">{dictionary.gallery.empty}</p>
      </section>
    </>
  );
}
