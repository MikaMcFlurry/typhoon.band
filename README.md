# Typhoon Website

Premium static frontend MVP for the band Typhoon. This batch is a **visual rebuild done with Claude Code**, on top of the existing Next.js / TypeScript / Tailwind base. The previous Codex-generated visual design has been replaced – the technical setup (routing, data files, components, build config) has been reused.

Typhoon verbindet Bluesrock, Funk, Soul, Jazz und Southern Rock mit türkischsprachigen Texten, amerikanisch-europäischem Sound und starker Live-Energie. Das Designziel dieses Batches ist eine dunkle, warme, sepia/goldene Konzert-Poster-Ästhetik mit einer dominanten handgeschriebenen Typhoon-Signatur über dem Hero-Bild.

## Status

- Visual rebuild only. **Static frontend, no backend logic.**
- No Supabase, no Admin, no Resend / mail sending, no shop, no analytics, no external embeds, no external fonts.
- Design follows the supplied screenshot references in `public/assets/reference/`.
- The next phase should only start after design approval.

## Tech-Stack

- Next.js App Router (15.x)
- React 19
- TypeScript
- Tailwind CSS v4
- System fonts only (no Google Fonts / no external font loading)

## Setup

```bash
npm install
npm run dev
```

The root `/` redirects to `/de`. Other locales:

- `/en`
- `/tr`

## Scripts

```bash
npm run dev    # dev server
npm run build  # production build
npm run lint   # eslint
npm run start  # serve build
```

## Design system

Defined in `src/app/globals.css`:

- Color tokens: `--bg-0`, `--bg-1`, `--ink`, `--gold`, `--gold-soft`, `--sepia`, ...
- Surfaces: `.poster-frame`, `.gold-rule`, `.grain`
- Type primitives: `.display`, `.eyebrow`, `.label-mono`, `.genre-line`
- Buttons: `.btn`, `.btn-gold`, `.btn-ghost`, `.btn-sm`
- Logo overlay: `.logo-overlay` (drop-shadow / glow)
- Subtle waveform animation: `.wave-bar`

Keep additions in `globals.css` to preserve a single source of truth for the design tokens.

## Wichtige Dateien

- `src/app/[locale]` – Sprachrouting und öffentliche Seiten (Home, Band, Musik, Shows, Galerie, Booking, Kontakt, Legal)
- `src/app/[locale]/layout.tsx` – Header + Footer wrapper
- `src/components/layout` – `SiteHeader`, `SiteFooter`, `LanguageSwitcher`
- `src/components/sections` – `HeroSection`, `BandIntro`, `FeatureGrid`, `MemberCard`
- `src/components/ui` – `Button`, `Card`, `Badge`, `SectionHeading`, `PageHero`, `DemoPlayerCard`, `HeroMusicPlayer`, `FeatureCard`, `BookingFormShell`, `SocialIconLinks`
- `src/data` – Songs, Members, Shows, Plattformlinks (statisch, später aus Supabase)
- `src/i18n/dictionaries.ts` – Sprach-Dictionary (de/en/tr) ohne externe i18n-Library
- `src/config/site.ts` – Navigation, Site-Adresse, Locales
- `src/lib/supabase/README.md`, `src/lib/resend/README.md` – Platzhalter für spätere Anbindung

## Assets

Alle visuellen Assets liegen unter `/public/assets/reference/`:

- `typhoon-logo.svg` – handgeschriebenes Typhoon-Logo, wird im Hero als dominanter Overlay-Layer eingesetzt
- `typhoon-band-hero.jpg` – Sepia-Bandposter (alle 7 Musiker), Hero-Hintergrund
- `member-typhoon-singer.png` – Frontmann-Foto
- `member-mika-posaune.jpg` – Mika / Posaune
- `Website-mockup.PNG` / `website-mockup.png` – Designreferenz

Das Galerie-Modul zeigt aktuell vorbereitete Platzhalter-Frames.

## Routing

Navigation: `Home · Band · Musik · Shows · Galerie · Booking · Kontakt`. Galerie und Kontakt sind als statische Platzhalter angelegt, damit es keine kaputten Links gibt.

## Booking

Das Booking-Formular ist UI-only. `onSubmit` zeigt den Hinweis  
**„Booking-Versand wird im nächsten Batch angebunden."**  
Es werden keine Daten gespeichert oder versendet.

## Plattformlinks

`src/data/platform-links.ts`. Wenn `active: true` und eine echte URL gesetzt ist, wird der Icon-Link aktiv. Sonst bleibt er als reiner Visual-Placeholder im Header / Footer sichtbar.

## Environment Variables

`.env` Beispielwerte (nichts davon wird in diesem Batch benutzt):

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
BOOKING_EMAIL=booking@typhoon.band
```

`SUPABASE_SERVICE_ROLE_KEY` und `RESEND_API_KEY` dürfen später nur serverseitig verwendet werden.

## Sicherheits- und DSGVO-Hinweise

- Keine externen Embeds ohne Consent.
- Kein Tracking / kein Analytics.
- Keine externen Fonts.
- Keine Secrets im Frontend.
- Audios später streambar machen, ohne Download-Button.
- Impressum und Datenschutz vor Livegang rechtlich prüfen.

## Nächste geplante Batches

1. Supabase Schema + Auth + RLS
2. Admin-Grundbereich
3. Content-CRUD
4. Booking mit Resend
5. Echte Galerie-Bilder
6. Consent / Embeds
7. Launch-Härtung
