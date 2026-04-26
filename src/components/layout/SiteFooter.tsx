import Link from "next/link";
import Image from "next/image";
import { SocialIconLinks } from "@/components/ui/SocialIconLinks";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/types/content";

const LOGO_SRC = "/assets/reference/typhoon-logo.svg";

type FooterLabels = {
  tagline: string;
  rights: string;
  imprint: string;
  privacy: string;
  cookies: string;
};

type SiteFooterProps = {
  locale: Locale;
  labels: FooterLabels;
};

export function SiteFooter({ locale, labels }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-amber-100/12 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(20,12,6,0.7)_60%,rgba(0,0,0,0.95)_100%)]">
      <div className="grain" />
      <div className="mx-auto grid max-w-[1640px] gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div>
          <Image alt="Typhoon" className="h-12 w-auto logo-overlay" height={48} src={LOGO_SRC} unoptimized width={180} />
          <p className="mt-5 max-w-md text-sm leading-7 text-stone-400">{labels.tagline}</p>
          <div className="mt-6">
            <SocialIconLinks />
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4">Kontakt</p>
          <address className="not-italic text-sm leading-7 text-stone-300">
            <a className="hover:text-amber-100" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <br />
            <a className="hover:text-amber-100" href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>{siteConfig.phone}</a>
            <br />
            <span className="block pt-3 text-stone-400">
              {siteConfig.address.slice(1).join(", ")}
            </span>
          </address>
        </div>

        <div>
          <p className="eyebrow mb-4">Rechtliches</p>
          <ul className="flex flex-col gap-2 text-sm text-stone-300">
            <li><Link className="hover:text-amber-100" href={`/${locale}/legal/imprint`}>{labels.imprint}</Link></li>
            <li><Link className="hover:text-amber-100" href={`/${locale}/legal/privacy`}>{labels.privacy}</Link></li>
            <li><span className="text-stone-500">{labels.cookies} – kein Tracking im MVP</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-amber-100/8">
        <div className="mx-auto flex max-w-[1640px] flex-col items-start justify-between gap-3 px-4 py-5 text-xs uppercase tracking-[0.22em] text-stone-500 sm:flex-row sm:items-center sm:px-6 lg:px-10">
          <span>© {year} Typhoon · {labels.rights}</span>
          <span className="text-stone-600">Bayreuth · Hechingen</span>
        </div>
      </div>
    </footer>
  );
}
