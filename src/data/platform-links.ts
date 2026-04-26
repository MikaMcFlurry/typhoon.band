import type { PlatformLink } from "@/types/content";

export const platformLinks: PlatformLink[] = [
  // URL gesetzt + active = true rendert den Link. Leere oder inaktive Links bleiben verborgen.
  { id: "spotify", label: "Spotify", url: "#", active: false },
  { id: "youtube", label: "YouTube", url: "#", active: false },
  { id: "instagram", label: "Instagram", url: "#", active: false },
  { id: "facebook", label: "Facebook", url: "#", active: false },
  { id: "soundcloud", label: "SoundCloud", url: "#", active: false },
  { id: "bandcamp", label: "Bandcamp", url: "#", active: false },
];
