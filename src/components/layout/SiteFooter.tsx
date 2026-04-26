import Link from "next/link";
import Image from "next/image";
import { platformLinks } from "@/data/platform-links";
import { publicAsset } from "@/lib/assets";
import type { Locale } from "@/types/content";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const activeLinks = platformLinks.filter((link) => link.active && link.url);
  const logoSrc = publicAsset(
    ["/assets/reference/typhoon-logo.svg", "/assets/reference/typhoon-logo.jpeg"],
    "/assets/images/typhoon-logo-placeholder.svg",
  );

  return (
    <footer className="border-t border-amber-100/10 bg-black/30">
      <div className="mx-auto grid max-w-[1840px] gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto] lg:px-12">
        <div>
          <Image alt="Typhoon" className="h-auto w-36" height={48} src={logoSrc} unoptimized width={160} />
          <p className="mt-2 max-w-xl text-sm leading-6 text-stone-400">
            Bluesrock, Funk, Soul, Jazz und Southern Rock mit türkischsprachigen Texten.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-stone-400">
          {activeLinks.map((link) => (
            <a className="hover:text-amber-100" href={link.url} key={link.id}>
              {link.label}
            </a>
          ))}
          <Link className="hover:text-amber-100" href={`/${locale}/legal/imprint`}>
            Impressum
          </Link>
          <Link className="hover:text-amber-100" href={`/${locale}/legal/privacy`}>
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
