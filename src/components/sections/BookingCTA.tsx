import { Button } from "@/components/ui/Button";
import type { Locale } from "@/types/content";

type BookingCTAProps = {
  locale: Locale;
  title: string;
  copy: string;
  cta: string;
};

export function BookingCTA({ locale, title, copy, cta }: BookingCTAProps) {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="typhoon-frame mx-auto max-w-[1840px] bg-[linear-gradient(135deg,rgba(120,73,24,0.28),rgba(18,12,8,0.92))] p-8 sm:p-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-stone-50 sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-8 text-stone-300">{copy}</p>
          <div className="mt-8">
            <Button href={`/${locale}/booking`}>{cta}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
