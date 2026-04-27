import { BookingFormShell } from "@/components/ui/BookingFormShell";
import { siteConfig } from "@/config/site";

type BookingFields = {
  name: string;
  namePh: string;
  email: string;
  emailPh: string;
  phone: string;
  phonePh: string;
  date: string;
  location: string;
  locationPh: string;
  type: string;
  typePh: string;
  message: string;
  messagePh: string;
};

type BookingContactSectionProps = {
  bookingEyebrow: string;
  bookingTitle: string;
  bookingCopy: string;
  contactEyebrow: string;
  contactTitle: string;
  contactCopy: string;
  fields: BookingFields;
  notice: string;
  privacy: string;
  submitLabel: string;
};

export function BookingContactSection({
  bookingEyebrow,
  bookingTitle,
  bookingCopy,
  contactEyebrow,
  contactTitle,
  contactCopy,
  fields,
  notice,
  privacy,
  submitLabel,
}: BookingContactSectionProps) {
  return (
    <div className="mx-auto max-w-[1640px] px-4 py-24 sm:px-6 lg:px-10">
      <div className="mb-12 max-w-2xl">
        <p className="eyebrow mb-3">{bookingEyebrow}</p>
        <h2 className="display text-4xl text-stone-50 sm:text-5xl">{bookingTitle}</h2>
        <p className="mt-4 text-base leading-7 text-stone-300">{bookingCopy}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <BookingFormShell
          fields={fields}
          notice={notice}
          privacy={privacy}
          submitLabel={submitLabel}
        />

        <aside className="flex flex-col gap-5" id="contact">
          <div className="poster-frame p-6 sm:p-8">
            <p className="eyebrow">{contactEyebrow}</p>
            <h3 className="display mt-2 text-2xl text-stone-50">{contactTitle}</h3>
            <p className="mt-4 text-sm leading-6 text-stone-400">{contactCopy}</p>
            <ul className="mt-6 flex flex-col gap-4 text-sm">
              <li>
                <span className="text-[11px] uppercase tracking-[0.24em] text-amber-200/85">Booking</span>
                <a className="block text-stone-100 hover:text-amber-200" href={`mailto:${siteConfig.bookingEmail}`}>
                  {siteConfig.bookingEmail}
                </a>
              </li>
              <li>
                <span className="text-[11px] uppercase tracking-[0.24em] text-amber-200/85">Allgemein</span>
                <a className="block text-stone-100 hover:text-amber-200" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="text-[11px] uppercase tracking-[0.24em] text-amber-200/85">Telefon</span>
                <a className="block text-stone-100 hover:text-amber-200" href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>

          <div className="poster-frame p-6 sm:p-8">
            <p className="eyebrow">Was wir mitbringen</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm leading-6 text-stone-300">
              <li className="border-l border-amber-200/40 pl-4">8 Musiker · komplettes Live-Set</li>
              <li className="border-l border-amber-200/40 pl-4">Eigenes Stage-Setup nach Absprache</li>
              <li className="border-l border-amber-200/40 pl-4">Set-Längen 60–120 Minuten</li>
              <li className="border-l border-amber-200/40 pl-4">Festival, Club, Firmenevent, Privat</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
