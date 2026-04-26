import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/i18n/dictionaries";
import { normalizeLocale } from "@/i18n/routing";

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const dictionary = getDictionary(normalizeLocale(localeParam));

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading title={dictionary.legal.privacyTitle} />
      <Card>
        <p className="text-base leading-7 text-stone-200">{dictionary.legal.privacyPlaceholder}</p>
        <p className="mt-8 text-sm leading-6 text-amber-100/80">{dictionary.legal.legalReview}</p>
      </Card>
    </div>
  );
}
