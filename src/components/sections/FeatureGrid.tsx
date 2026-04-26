import { FeatureCard } from "@/components/ui/FeatureCard";
import type { Locale } from "@/types/content";

type FeatureGridItem = {
  kicker: string;
  title: string;
  body: string;
  cta: string;
};

type FeatureGridProps = {
  locale: Locale;
  items: {
    nextShow: FeatureGridItem;
    music: FeatureGridItem;
    gallery: FeatureGridItem;
    booking: FeatureGridItem;
  };
};

export function FeatureGrid({ locale, items }: FeatureGridProps) {
  return (
    <section aria-label="Schnellnavigation" className="relative">
      <div className="mx-auto max-w-[1640px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <FeatureCard
            accent={
              <div className="flex items-baseline gap-3">
                <span className="display text-[44px] leading-none text-amber-200">TBA</span>
                <span className="text-xs uppercase tracking-[0.28em] text-stone-500">2026</span>
              </div>
            }
            body={items.nextShow.body}
            cta={items.nextShow.cta}
            href={`/${locale}/shows`}
            kicker={items.nextShow.kicker}
            title={items.nextShow.title}
          />
          <FeatureCard
            accent={
              <div className="flex h-9 items-end gap-[3px]">
                {Array.from({ length: 26 }).map((_, i) => (
                  <span
                    className="w-[3px] bg-amber-200/80"
                    key={i}
                    style={{ height: `${10 + ((i * 11) % 26)}px` }}
                  />
                ))}
              </div>
            }
            body={items.music.body}
            cta={items.music.cta}
            href={`/${locale}/music`}
            kicker={items.music.kicker}
            title={items.music.title}
          />
          <FeatureCard
            accent={
              <div className="grid grid-cols-3 gap-1">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span
                    className="aspect-square border border-amber-100/15 bg-[linear-gradient(135deg,rgba(160,113,64,0.25),rgba(0,0,0,0.6))]"
                    key={i}
                  />
                ))}
              </div>
            }
            body={items.gallery.body}
            cta={items.gallery.cta}
            href={`/${locale}/gallery`}
            kicker={items.gallery.kicker}
            title={items.gallery.title}
          />
          <FeatureCard
            accent={
              <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-amber-200/80">
                <span className="border border-amber-100/15 px-2 py-1">Festival</span>
                <span className="border border-amber-100/15 px-2 py-1">Club</span>
                <span className="border border-amber-100/15 px-2 py-1">Privat</span>
              </div>
            }
            body={items.booking.body}
            cta={items.booking.cta}
            href={`/${locale}/booking`}
            kicker={items.booking.kicker}
            title={items.booking.title}
          />
        </div>
      </div>
    </section>
  );
}
