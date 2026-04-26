import Link from "next/link";
import { locales } from "@/config/site";
import type { Locale } from "@/types/content";

type LanguageSwitcherProps = {
  locale: Locale;
  pathname?: string;
};

export function LanguageSwitcher({ locale, pathname = "" }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-px border border-amber-100/14">
      {locales.map((item) => (
        <Link
          aria-current={item === locale ? "page" : undefined}
          className={`px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.24em] transition ${
            item === locale ? "bg-amber-200/15 text-amber-200" : "text-stone-400 hover:text-amber-100"
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
