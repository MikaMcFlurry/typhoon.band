import Link from "next/link";
import { locales } from "@/config/site";
import type { Locale } from "@/types/content";

type LanguageSwitcherProps = {
  locale: Locale;
  pathname?: string;
};

export function LanguageSwitcher({ locale, pathname = "" }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-amber-100/15 bg-black/25 p-1">
      {locales.map((item) => (
        <Link
          aria-current={item === locale ? "page" : undefined}
          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase transition ${
            item === locale ? "bg-amber-300 text-stone-950" : "text-stone-300 hover:text-amber-100"
          }`}
          href={`/${item}${pathname}`}
          key={item}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
