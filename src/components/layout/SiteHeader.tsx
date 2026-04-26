import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { navItems } from "@/config/site";
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
    <header className="sticky top-0 z-50 border-b border-amber-100/12 bg-black/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1840px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link className="flex min-w-32 items-center" href={`/${locale}`}>
          <Image
            alt="Typhoon logo"
            className="h-auto w-32 object-contain sm:w-40"
            height={52}
            priority
            src={logoSrc}
            unoptimized
            width={180}
          />
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const key = item.href === "" ? "home" : item.href.slice(1);
            return (
              <Link
                className="border-b border-transparent px-3 py-2 text-sm font-black uppercase text-stone-200 transition hover:border-amber-300 hover:text-amber-100"
                href={`/${locale}${item.href}`}
                key={item.href || "home"}
              >
                {labels[key] ?? item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <Button className="hidden sm:inline-flex" href={`/${locale}/booking`} variant="secondary">
            {labels.booking}
          </Button>
        </div>
      </div>
    </header>
  );
}
