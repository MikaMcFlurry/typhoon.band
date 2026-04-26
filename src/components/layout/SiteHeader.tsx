"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { SocialIconLinks } from "@/components/ui/SocialIconLinks";
import { navItems } from "@/config/site";
import type { Locale } from "@/types/content";

type SiteHeaderProps = {
  locale: Locale;
  labels: Record<string, string>;
  bookingLabel: string;
};

const LOGO_SRC = "/assets/reference/typhoon-logo.svg";

export function SiteHeader({ locale, labels, bookingLabel }: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    const target = `/${locale}${href}`;
    if (href === "") return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname === target || pathname?.startsWith(`${target}/`);
  };

  return (
    <header className="sticky top-0 z-[60] border-b border-amber-100/12 bg-[rgba(5,3,2,0.92)] backdrop-blur-md">
      <div className="mx-auto flex max-w-[1640px] items-center gap-4 px-4 sm:px-6 lg:px-10">
        <Link aria-label="Typhoon Startseite" className="flex shrink-0 items-center" href={`/${locale}`}>
          <Image
            alt="Typhoon"
            className="h-9 w-auto object-contain logo-overlay"
            height={36}
            priority
            src={LOGO_SRC}
            unoptimized
            width={120}
          />
        </Link>

        <nav aria-label="Hauptnavigation" className="ml-6 hidden flex-1 items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const key = item.href === "" ? "home" : item.href.slice(1);
            const active = isActive(item.href);
            return (
              <Link
                aria-current={active ? "page" : undefined}
                className="nav-link"
                href={`/${locale}${item.href}`}
                key={item.href || "home"}
              >
                {labels[key] ?? item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden items-center gap-5 lg:flex">
          <SocialIconLinks />
          <span className="gold-divider-v h-7" />
          <LanguageSwitcher locale={locale} />
          <Link className="btn btn-gold btn-sm" href={`/${locale}/booking`}>
            {bookingLabel}
          </Link>
        </div>

        <button
          aria-controls="mobile-nav"
          aria-expanded={open}
          aria-label="Menü"
          className="ml-auto grid h-11 w-11 place-items-center border border-amber-100/12 text-amber-100 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          <svg aria-hidden className="h-5 w-5" fill="none" viewBox="0 0 24 24">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t border-amber-100/10 bg-[rgba(5,3,2,0.97)] lg:hidden" id="mobile-nav">
          <nav className="mx-auto flex max-w-[1640px] flex-col gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => {
              const key = item.href === "" ? "home" : item.href.slice(1);
              const active = isActive(item.href);
              return (
                <Link
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-between border-b border-amber-100/8 py-3 text-sm font-extrabold uppercase tracking-[0.22em] ${active ? "text-amber-200" : "text-stone-200"}`}
                  href={`/${locale}${item.href}`}
                  key={item.href || "home"}
                >
                  {labels[key] ?? item.label}
                  <span className="text-amber-200/60">→</span>
                </Link>
              );
            })}
            <div className="mt-4 flex items-center justify-between gap-3">
              <LanguageSwitcher locale={locale} />
              <Link className="btn btn-gold btn-sm" href={`/${locale}/booking`}>
                {bookingLabel}
              </Link>
            </div>
            <div className="mt-3">
              <SocialIconLinks />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
