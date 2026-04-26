import type { Show } from "@/types/content";

export const upcomingShows: Show[] = [
  {
    id: "upcoming-placeholder",
    title: "Neue Termine folgen",
    venue: "Venue TBA",
    city: "Bayreuth / Umgebung",
    dateLabel: "Demnächst",
    status: "scheduled",
  },
  {
    id: "sold-out-placeholder",
    title: "Clubnacht Platzhalter",
    venue: "TBA",
    city: "TBA",
    dateLabel: "Noch offen",
    status: "sold_out",
  },
  {
    id: "cancelled-placeholder",
    title: "Abgesagter Beispieltermin",
    venue: "TBA",
    city: "TBA",
    dateLabel: "Noch offen",
    status: "cancelled",
  },
];

export const pastShows: Show[] = [
  {
    id: "past-placeholder",
    title: "Live-Archiv Platzhalter",
    venue: "TBA",
    city: "TBA",
    dateLabel: "Vergangen",
    status: "past",
  },
];
