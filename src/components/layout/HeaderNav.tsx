"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { navItems } from "@/config/site";
import type { Locale } from "@/types/content";

type HeaderNavProps = {
  locale: Locale;
  labels: Record<string, string>;
};

const socialPlaceholders = ["fb", "ig", "yt", "sp"];

function navHref(locale: Locale, href: string) {
  if (!href) {
    return `/${locale}`;
  }

  return `/${locale}${href}`;
}

function navKey(href: string) {
  if (!href) {
    return "home";
  }

  if (href.includes("#gallery")) {
    return "gallery";
  }

  if (href.includes("#contact")) {
    return "contact";
  }

  return href.replace("/", "");
}

export function HeaderNav({ locale, labels }: HeaderNavProps) {
  const pathname = usePathname();
  const listenLabel = locale === "de" ? "Songs anhören" : locale === "tr" ? "Şarkıları dinle" : "Listen";

  return (
    <>
      <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:flex">
        {navItems.map((item) => {
          const href = navHref(locale, item.href);
          const activePath = href.split("#")[0].replace(/\/$/, "");
          const isAnchor = item.href.includes("#");
          const isActive = !isAnchor && (pathname === activePath || (item.href === "" && pathname === `/${locale}`));
          const key = navKey(item.href);

          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={`border-b px-3 py-2 text-xs font-extrabold uppercase tracking-[0.14em] transition ${
                isActive
                  ? "border-amber-300 text-amber-100"
                  : "border-transparent text-stone-300 hover:border-amber-300/70 hover:text-amber-100"
              }`}
              href={href}
              key={item.href || "home"}
            >
              {labels[key] ?? item.label}
            </Link>
          );
        })}
      </nav>
      <div className="hidden items-center gap-2 lg:flex">
        {socialPlaceholders.map((item) => (
          <span
            aria-label={`${item.toUpperCase()} Link in Vorbereitung`}
            className="grid size-8 place-items-center border border-amber-100/16 bg-white/[0.03] text-[10px] font-black uppercase text-stone-300"
            key={item}
            title={`${item.toUpperCase()} in Vorbereitung`}
          >
            {item}
          </span>
        ))}
      </div>
      <Button className="hidden sm:inline-flex" href={`/${locale}/music`}>
        {listenLabel}
      </Button>
    </>
  );
}
