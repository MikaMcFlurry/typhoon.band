export type Locale = "de" | "en" | "tr";

export type NavItem = {
  href: string;
  label: string;
};

export type Song = {
  id: string;
  title: string;
  tag: "Demo";
  note?: string;
  audioSrc?: string;
};

export type Member = {
  id: string;
  name: string;
  role: string;
  image?: string;
  description: string;
  isPlaceholder?: boolean;
};

export type ShowStatus = "scheduled" | "sold_out" | "cancelled" | "past";

export type Show = {
  id: string;
  title: string;
  venue: string;
  city: string;
  dateLabel: string;
  status: ShowStatus;
};

export type PlatformLink = {
  id: string;
  label: string;
  url: string;
  active: boolean;
};
