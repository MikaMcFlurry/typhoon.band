import { defaultLocale, locales } from "@/config/site";
import type { Locale } from "@/types/content";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function normalizeLocale(value: string | undefined): Locale {
  return value && isLocale(value) ? value : defaultLocale;
}
