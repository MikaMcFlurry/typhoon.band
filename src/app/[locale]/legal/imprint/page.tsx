import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { normalizeLocale } from "@/i18n/routing";

export default async function ImprintPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const dictionary = getDictionary(normalizeLocale(localeParam));

  return (
    <>
      <PageHero title={dictionary.legal.imprintTitle} />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="poster-frame p-6 sm:p-8">
          <p className="eyebrow mb-4">Anbieter</p>
          <address className="not-italic text-base leading-8 text-stone-200">
            {siteConfig.address.map((line) => (
              <span className="block" key={line}>
                {line}
              </span>
            ))}
            <span className="mt-6 block">
              <span className="text-[11px] uppercase tracking-[0.24em] text-stone-500">E-Mail</span>
              <br />
              <a className="hover:text-amber-200" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </span>
            <span className="mt-3 block">
              <span className="text-[11px] uppercase tracking-[0.24em] text-stone-500">Telefon</span>
              <br />
              <a className="hover:text-amber-200" href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>{siteConfig.phone}</a>
            </span>
          </address>
          <p className="mt-8 border-l-2 border-amber-200/40 pl-4 text-xs leading-6 text-stone-400">{dictionary.legal.legalReview}</p>
        </div>
      </section>
    </>
  );
}
