import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { publicAsset } from "@/lib/assets";
import Image from "next/image";
import type { Locale } from "@/types/content";

type BandIntroProps = {
  locale: Locale;
  title: string;
  copy: string;
  cta: string;
};

export function BandIntro({ locale, title, copy, cta }: BandIntroProps) {
  const bandImage = publicAsset(
    ["/assets/reference/member-typhoon-singer.png", "/assets/reference/member-taifun-singer.jpeg"],
    "/assets/images/member-placeholder.svg",
  );

  return (
    <section className="border-y border-amber-100/10 bg-black/28">
      <div className="mx-auto grid max-w-[1840px] gap-8 px-4 py-20 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:px-12">
        <div className="typhoon-frame relative min-h-80 overflow-hidden">
          <Image alt="Taifun live am Mikrofon" className="object-cover" fill src={bandImage} />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.78))]" />
        </div>
        <div>
          <SectionHeading eyebrow="Typhoon" title={title} />
          <p className="text-xl leading-9 text-stone-200">{copy}</p>
          <div className="mt-8">
            <Button href={`/${locale}/band`} variant="secondary">
              {cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
