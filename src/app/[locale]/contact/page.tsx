import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { normalizeLocale } from "@/i18n/routing";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = normalizeLocale(localeParam);
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHero copy={dictionary.contact.intro} eyebrow={dictionary.contact.eyebrow} title={dictionary.contact.title} />

      <section className="mx-auto max-w-[1640px] px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="poster-frame p-6 sm:p-8">
            <p className="eyebrow">Allgemein</p>
            <h2 className="display mt-2 text-2xl text-stone-50">Hello typhoon</h2>
            <a className="mt-4 block text-lg text-stone-100 hover:text-amber-200" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            <a className="mt-1 block text-stone-300 hover:text-amber-200" href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>
              {siteConfig.phone}
            </a>
          </div>

          <div className="poster-frame p-6 sm:p-8">
            <p className="eyebrow">Booking</p>
            <h2 className="display mt-2 text-2xl text-stone-50">Konkrete Anfragen</h2>
            <p className="mt-4 text-sm leading-6 text-stone-400">{dictionary.contact.bookingHint}</p>
            <Link className="btn btn-gold btn-sm mt-5" href={`/${locale}/booking`}>
              {dictionary.common.booking}
            </Link>
          </div>

          <div className="poster-frame p-6 sm:p-8 md:col-span-2">
            <p className="eyebrow">Postadresse</p>
            <address className="mt-3 not-italic text-sm leading-7 text-stone-300">
              {siteConfig.address.map((line) => (
                <span className="block" key={line}>
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
