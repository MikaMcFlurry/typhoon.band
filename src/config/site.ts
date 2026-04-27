import type { Locale, NavItem } from "@/types/content";

export const defaultLocale: Locale = "de";
export const locales: Locale[] = ["de", "en", "tr"];

export const siteConfig = {
  name: "Typhoon",
  email: "info@typhoon.band",
  bookingEmail: "booking@typhoon.band",
  phone: "+49 176 64472296",
  address: ["Mika Hertler", "Am Schwarzen Steg 5a", "95448 Bayreuth", "Deutschland"],
};

// Onepager navigation: each entry is a hash-anchor on the homepage.
// `href` is the suffix appended to `/${locale}` so `""` is the top of the homepage.
export const navItems: NavItem[] = [
  { href: "", label: "Home" },
  { href: "#band", label: "Band" },
  { href: "#music", label: "Musik" },
  { href: "#shows", label: "Shows" },
  { href: "#booking", label: "Booking" },
  { href: "#contact", label: "Kontakt" },
];
