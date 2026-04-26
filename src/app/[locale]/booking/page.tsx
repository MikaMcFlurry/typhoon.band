import { BookingFormShell } from "@/components/ui/BookingFormShell";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { normalizeLocale } from "@/i18n/routing";

export default async function BookingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const dictionary = getDictionary(normalizeLocale(localeParam));

  return (
    <>
      <PageHero copy={dictionary.bookingPage.intro} eyebrow={dictionary.bookingPage.eyebrow} title={dictionary.bookingPage.title} />

      <section className="mx-auto grid max-w-[1640px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-10">
        <BookingFormShell
          fields={dictionary.bookingPage.fields}
          notice={dictionary.bookingPage.notice}
          privacy={dictionary.bookingPage.privacy}
          submitLabel={dictionary.common.requestPrepared}
        />

        <aside className="flex flex-col gap-6">
          <div className="poster-frame p-6 sm:p-8">
            <p className="eyebrow">Direkt</p>
            <h2 className="display mt-2 text-2xl text-stone-50">Lieber direkt schreiben?</h2>
            <p className="mt-4 text-sm leading-6 text-stone-400">
              Für Booking-Anfragen erreichst du uns auch direkt per E-Mail oder Telefon.
            </p>
            <ul className="mt-6 flex flex-col gap-3 text-sm">
              <li>
                <span className="text-[11px] uppercase tracking-[0.24em] text-amber-200/80">E-Mail</span>
                <a className="block text-stone-100 hover:text-amber-200" href={`mailto:${siteConfig.bookingEmail}`}>
                  {siteConfig.bookingEmail}
                </a>
              </li>
              <li>
                <span className="text-[11px] uppercase tracking-[0.24em] text-amber-200/80">Telefon</span>
                <a className="block text-stone-100 hover:text-amber-200" href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>

          <div className="poster-frame p-6 sm:p-8">
            <p className="eyebrow">Was wir mitbringen</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm leading-6 text-stone-300">
              <li className="border-l border-amber-200/40 pl-4">7 Musiker · komplettes Live-Set</li>
              <li className="border-l border-amber-200/40 pl-4">Eigenes Stage-Setup nach Absprache</li>
              <li className="border-l border-amber-200/40 pl-4">Set-Längen 60–120 Minuten</li>
              <li className="border-l border-amber-200/40 pl-4">Festival, Club, Firmenevent, Privat</li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
