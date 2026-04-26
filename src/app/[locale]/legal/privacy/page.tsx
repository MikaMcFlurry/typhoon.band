import { PageHero } from "@/components/ui/PageHero";
import { getDictionary } from "@/i18n/dictionaries";
import { normalizeLocale } from "@/i18n/routing";

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const dictionary = getDictionary(normalizeLocale(localeParam));

  return (
    <>
      <PageHero title={dictionary.legal.privacyTitle} />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="poster-frame p-6 sm:p-8">
          <p className="text-base leading-7 text-stone-200">{dictionary.legal.privacyPlaceholder}</p>
          <p className="mt-8 border-l-2 border-amber-200/40 pl-4 text-xs leading-6 text-stone-400">{dictionary.legal.legalReview}</p>
        </div>
      </section>
    </>
  );
}
