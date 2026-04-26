import Image from "next/image";
import Link from "next/link";
import { HeaderNav } from "@/components/layout/HeaderNav";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { publicAsset } from "@/lib/assets";
import type { Locale } from "@/types/content";

type SiteHeaderProps = {
  locale: Locale;
  labels: Record<string, string>;
};

export function SiteHeader({ locale, labels }: SiteHeaderProps) {
  const logoSrc = publicAsset(
    ["/assets/reference/typhoon-logo.svg", "/assets/reference/typhoon-logo.jpeg"],
    "/assets/images/typhoon-logo-placeholder.svg",
  );

  return (
    <header className="sticky top-0 z-50 border-b border-amber-100/12 bg-black/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1840px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10">
        <Link className="flex min-w-24 items-center" href={`/${locale}`}>
          <Image
            alt="Typhoon logo"
            className="h-auto w-28 object-contain sm:w-34"
            height={52}
            priority
            src={logoSrc}
            unoptimized
            width={180}
          />
        </Link>
        <div className="flex flex-1 items-center justify-end gap-4">
          <HeaderNav labels={labels} locale={locale} />
          <LanguageSwitcher locale={locale} />
        </div>
      </div>
    </header>
  );
}
