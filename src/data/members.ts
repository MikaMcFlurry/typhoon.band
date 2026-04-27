import type { Member } from "@/types/content";

// Source of truth: docs/typhoon-content-facts.md (8 musicians, singer first)
export const members: Member[] = [
  {
    id: "typhoon",
    name: "Typhoon",
    role: "Gesang",
    image: "/assets/reference/member-typhoon-singer.png",
    description: "Frontmann mit türkischsprachigen Texten und der direkten Energie im Zentrum der Band.",
  },
  {
    id: "mika",
    name: "Mika",
    role: "Posaune",
    image: "/assets/reference/member-mika-posaune.jpg",
    description: "Junger Posaunen-Sound, rauer Live-Charakter und warme Brass-Linien.",
  },
  {
    id: "schack",
    name: "Schack",
    role: "Saxophon",
    description: "Erfahrung, warme Linien und ein souliger Ton für die Bläsersektion.",
    isPlaceholder: true,
  },
  {
    id: "hardy",
    name: "Hardy",
    role: "Trompete",
    description: "Markante Brass-Stimme zwischen Funk, Bluesrock und Bühnen-Druck.",
    isPlaceholder: true,
  },
  {
    id: "stefan",
    name: "Stefan",
    role: "Funk-Bass",
    description: "Groove-Fundament, trocken, treibend und nah am Soul.",
    isPlaceholder: true,
  },
  {
    id: "tom",
    name: "Tom",
    role: "Schlagzeug",
    description: "Live-Puls, Dynamik und souveräne Bühne für die Band.",
    isPlaceholder: true,
  },
  {
    id: "bugra",
    name: "Buğra",
    role: "Gitarre",
    description: "Live- und Session-Gitarrist mit türkischem Background und Rock-Kante.",
    isPlaceholder: true,
  },
  {
    id: "jurgen",
    name: "Jürgen",
    role: "Gitarre",
    description: "Riffs, rhythmische Schwere und southern-rock-getränkte Phrasierung.",
    isPlaceholder: true,
  },
];
