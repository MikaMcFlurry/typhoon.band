import Image from "next/image";
import { MemberCard } from "@/components/sections/MemberCard";
import { PageHero } from "@/components/ui/PageHero";
import { members } from "@/data/members";
import { getDictionary } from "@/i18n/dictionaries";
import { normalizeLocale } from "@/i18n/routing";

const BAND_IMAGE = "/assets/reference/typhoon-band-hero-new.jpeg";

export default async function BandPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const dictionary = getDictionary(normalizeLocale(localeParam));

  return (
    <>
      <PageHero copy={dictionary.band.intro} eyebrow={dictionary.band.eyebrow} title={dictionary.band.title} />

      <section className="mx-auto max-w-[1640px] px-4 py-20 sm:px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="order-2 md:order-1">
            <p className="text-lg leading-9 text-stone-200 sm:text-xl">{dictionary.band.long}</p>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {dictionary.band.sound.map((item) => (
                <li className="flex items-center gap-3 border-l-2 border-amber-200/40 pl-4 text-sm uppercase tracking-[0.18em] text-amber-100" key={item}>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-xs uppercase tracking-[0.24em] text-stone-500">{dictionary.band.note}</p>
          </div>

          <div className="poster-frame relative order-1 aspect-[4/5] overflow-hidden md:order-2 md:aspect-auto md:min-h-[520px]">
            <Image alt="Typhoon Band" className="object-cover object-[58%_28%]" fill src={BAND_IMAGE} />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(0,0,0,0.85))]" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="eyebrow">Foto</p>
              <p className="display text-xl text-stone-50">Acht Musiker · ein Sound</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1640px] px-4 pb-24 sm:px-6 lg:px-10">
        <div className="mb-10">
          <p className="eyebrow mb-3">Members</p>
          <h2 className="display text-4xl text-stone-50 sm:text-5xl">Bandmitglieder</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </>
  );
}
