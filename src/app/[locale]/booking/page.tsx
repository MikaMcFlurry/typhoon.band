import { BookingFormShell } from "@/components/ui/BookingFormShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/i18n/dictionaries";
import { normalizeLocale } from "@/i18n/routing";

export default async function BookingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const dictionary = getDictionary(normalizeLocale(localeParam));

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading copy={dictionary.bookingPage.intro} title={dictionary.bookingPage.title} />
      <BookingFormShell
        notice={dictionary.bookingPage.notice}
        privacy={dictionary.bookingPage.privacy}
        submitLabel={dictionary.common.requestPrepared}
      />
    </div>
  );
}
