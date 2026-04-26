import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { normalizeLocale } from "@/i18n/routing";

export default async function ImprintPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const dictionary = getDictionary(normalizeLocale(localeParam));

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading title={dictionary.legal.imprintTitle} />
      <Card>
        <address className="not-italic leading-8 text-stone-200">
          {siteConfig.address.map((line) => (
            <span className="block" key={line}>
              {line}
            </span>
          ))}
          <span className="mt-6 block">E-Mail: {siteConfig.email}</span>
          <span className="block">Telefon: {siteConfig.phone}</span>
        </address>
        <p className="mt-8 text-sm leading-6 text-amber-100/80">{dictionary.legal.legalReview}</p>
      </Card>
    </div>
  );
}
