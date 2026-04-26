import { BookingFormShell } from "@/components/ui/BookingFormShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/i18n/dictionaries";
import { normalizeLocale } from "@/i18n/routing";

export default async function BookingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const dictionary = getDictionary(normalizeLocale(localeParam));

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-10" id="contact">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading copy={dictionary.bookingPage.intro} eyebrow="Live Booking" title={dictionary.bookingPage.title} />
          <div className="typhoon-frame mt-8 p-6">
            <p className="text-xl font-black text-stone-50">Für Veranstalter</p>
            <p className="mt-4 text-sm leading-6 text-stone-300">
              Typhoon eignet sich für Festivals, Clubshows und besondere Abende mit Bluesrock, Funk, Soul und türkischsprachiger Live-Energie.
            </p>
            <div className="gold-divider my-6" />
            <p className="text-sm text-amber-100">booking@typhoon.band</p>
          </div>
        </div>
        <BookingFormShell
          notice={dictionary.bookingPage.notice}
          privacy={dictionary.bookingPage.privacy}
          submitLabel={dictionary.common.requestPrepared}
        />
      </div>
    </div>
  );
}
