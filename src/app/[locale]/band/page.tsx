import { MemberCard } from "@/components/sections/MemberCard";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { members } from "@/data/members";
import { getDictionary } from "@/i18n/dictionaries";
import { normalizeLocale } from "@/i18n/routing";
import { publicAsset } from "@/lib/assets";
import Image from "next/image";

export default async function BandPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const dictionary = getDictionary(normalizeLocale(localeParam));
  const heroImage = publicAsset(
    ["/assets/reference/typhoon-band-hero.jpg", "/assets/reference/typhoon-band-hero.jpeg"],
    "/assets/images/typhoon-hero-placeholder.svg",
  );

  return (
    <div className="mx-auto max-w-[1840px] px-4 py-16 sm:px-6 lg:px-12">
      <SectionHeading copy={dictionary.band.intro} title={dictionary.band.title} />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <p className="text-xl leading-9 text-stone-200">{dictionary.band.long}</p>
          <p className="mt-6 text-sm leading-6 text-amber-100/80">{dictionary.band.note}</p>
        </Card>
        <Card className="p-0">
          <div className="relative min-h-96">
            <Image alt="Typhoon Band" className="object-cover" fill priority src={heroImage} />
          </div>
        </Card>
      </div>
      <div className="mt-6">
        <Card>
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-200">Sound</p>
          <ul className="mt-5 grid gap-3 text-stone-300 sm:grid-cols-4">
            <li>Bluesrock & Southern Rock</li>
            <li>Funk & Soul Grooves</li>
            <li>Turkish lyrics</li>
            <li>Live energy</li>
          </ul>
        </Card>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
