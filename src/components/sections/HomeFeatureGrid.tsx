import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { publicAsset } from "@/lib/assets";
import type { Locale } from "@/types/content";

type HomeFeatureGridProps = {
  locale: Locale;
};

const copy = {
  de: {
    show: "Termine werden im nächsten Batch aus Supabase gepflegt. Die Struktur ist vorbereitet.",
    demos: "Aktuelle Demo-Aufnahmen - finale Releases folgen.",
    gallery: "Presse- und Live-Bildwelt vorbereitet. Weitere Medien folgen über den Admin-Bereich.",
    booking: "Festival, Club-Show oder Firmenevent? Typhoon bringt Groove, Soul und Druck auf die Bühne.",
    showsCta: "Alle Shows ansehen",
    demosCta: "Songs anhören",
    galleryCta: "Galerie ansehen",
    bookingCta: "Booking anfragen",
  },
  en: {
    show: "Dates will be maintained from Supabase in a later batch. The structure is ready.",
    demos: "Current demo recordings - final releases will follow.",
    gallery: "Press and live imagery is prepared. More media will follow through the admin area.",
    booking: "Festival, club show or corporate event? Typhoon brings groove, soul and pressure to the stage.",
    showsCta: "View shows",
    demosCta: "Listen",
    galleryCta: "View gallery",
    bookingCta: "Booking request",
  },
  tr: {
    show: "Tarihler sonraki batch'te Supabase üzerinden yönetilecek. Yapı hazır.",
    demos: "Güncel demo kayıtları - final yayınlar daha sonra gelecek.",
    gallery: "Basın ve canlı görsel dünyası hazırlandı. Daha fazla medya admin alanından gelecek.",
    booking: "Festival, kulüp konseri veya kurumsal etkinlik? Typhoon sahneye groove, soul ve güç taşır.",
    showsCta: "Konserler",
    demosCta: "Dinle",
    galleryCta: "Galeri",
    bookingCta: "Booking",
  },
};

export function HomeFeatureGrid({ locale }: HomeFeatureGridProps) {
  const content = copy[locale];
  const heroSrc = publicAsset(
    ["/assets/reference/typhoon-band-hero.jpg", "/assets/reference/typhoon-band-hero.jpeg"],
    "/assets/images/typhoon-hero-placeholder.svg",
  );
  const singerSrc = publicAsset(
    ["/assets/reference/member-typhoon-singer.png", "/assets/reference/member-taifun-singer.jpeg"],
    "/assets/images/member-placeholder.svg",
  );
  const mikaSrc = publicAsset("/assets/reference/member-mika-posaune.jpg", "/assets/images/member-placeholder.svg");

  const items = [
    {
      title: "Nächste Show",
      label: "TBA",
      body: content.show,
      href: `/${locale}/shows`,
      cta: content.showsCta,
      image: heroSrc,
    },
    {
      title: "Neuer Track",
      label: "Sen-Benim",
      body: content.demos,
      href: `/${locale}/music`,
      cta: content.demosCta,
      image: heroSrc,
    },
    {
      title: "Galerie",
      label: "Live & Presse",
      body: content.gallery,
      href: `/${locale}/#gallery`,
      cta: content.galleryCta,
      image: mikaSrc,
      id: "gallery",
    },
    {
      title: "Booking",
      label: "Live anfragen",
      body: content.booking,
      href: `/${locale}/booking`,
      cta: content.bookingCta,
      image: singerSrc,
    },
  ];

  return (
    <section className="mx-auto grid max-w-[1840px] gap-5 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-10">
      {items.map((item) => (
        <article className="typhoon-frame group relative min-h-72 overflow-hidden p-0" id={item.id} key={item.title}>
          <Image
            alt=""
            className="object-cover opacity-42 transition duration-500 group-hover:scale-105 group-hover:opacity-58"
            fill
            src={item.image}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.16),rgba(0,0,0,0.88)_68%)]" />
          <div className="relative z-10 flex min-h-72 flex-col justify-end p-6">
            <p className="typhoon-kicker">{item.title}</p>
            <h2 className="mt-3 text-3xl font-black text-stone-50">{item.label}</h2>
            <p className="mt-3 text-sm leading-6 text-stone-300">{item.body}</p>
            <div className="mt-5">
              <Button href={item.href} variant="secondary">
                {item.cta}
              </Button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
