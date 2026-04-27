# Typhoon Website

Premium static frontend MVP for the band Typhoon. **Frontend-only.** No Supabase, no admin, no Resend, no database, no shop, no analytics, no external embeds in this batch.

Typhoon verbindet Bluesrock, Funk, Soul, Jazz und Southern Rock mit türkischsprachigen Texten, amerikanisch-europäischem Sound und starker Live-Energie. Das Designziel ist eine dunkle, warme, sepia/gold/champagner Konzert-Poster-Ästhetik mit einer dominanten handgeschriebenen Typhoon-Signatur über dem Hero-Bild.

## Status

- Visual frontend MVP. Static content only.
- Real audio playback wired for the local demo MP3s.
- Backend, admin, mail, database, shop and analytics are intentionally not implemented.
- The next phase should only start after design approval.

## Tech stack

- Next.js App Router (15.x) · React 19
- TypeScript
- Tailwind CSS v4
- System fonts only (no Google Fonts / no external font loading)

## Setup

```bash
npm install
npm run dev
```

The root `/` redirects to `/de`. Locales: `/de`, `/en`, `/tr`.

## Scripts

```bash
npm run dev    # dev server
npm run build  # production build
npm run lint   # eslint
npm run start  # serve production build
```

## Design system

Defined in `src/app/globals.css`:

- Color tokens: deep black, warm dark brown, antique gold (`#c79a4b`), champagne gold (`#e8c982`), deep gold (`#b8873b`), dark bronze, warm cream.
- Tailwind's `amber-*` scale is re-tuned via `@theme` to match the gold/champagne range.
- Surfaces: `.poster-frame` (soft rounded panel, subtle gold edge, inner highlight), `.gold-rule`, `.grain`.
- Type primitives: `.display`, `.eyebrow`, `.label-mono`, `.genre-line`.
- Buttons: pill-shaped `.btn`, `.btn-gold` (champagne/antique gradient), `.btn-ghost`, `.btn-sm`.
- Logo overlay: `.logo-overlay` (drop-shadow + warm glow).
- Subtle CSS-only waveform animation: `.wave-bar`, `.wave-bar.is-live`.
- Audio range slider styling: `input[type="range"].audio-range`.

## Hero asset

Primary hero image:

```text
/public/assets/reference/typhoon-band-hero-new.jpeg
```

It already contains the singer Typhoon in colour with the rest of the band in sepia/grunge. There is no text inside the image. The handwritten Typhoon SVG (`typhoon-logo.svg`) sits as a separate absolute-positioned overlay layer above the image.

Fallback hero images are kept for safety:

```text
/public/assets/reference/typhoon-band-hero.jpg
/public/assets/reference/Website-mockup.PNG
```

## Demo audio

Local MP3 demos live under:

```text
/public/assets/audio/demos/
```

Expected filenames (exposed under `/assets/audio/demos/<file>` at runtime):

```text
sen-benim.mp3
karanfill.mp3
gece-yine-dustun.mp3
farksilin.mp3
cilgin.mp3
bir-tek-sen.mp3
```

The audio player is built around `src/components/audio/AudioPlayerProvider.tsx` (client-side React context) and ensures **only one demo plays at a time**. There is no download button, no external player and no Spotify/SoundCloud embed. If a file is missing, the play button stays disabled and the card shows "Bald verfügbar" as a graceful fallback.

Source MP3s may also be available in Google Drive under `Musik/Typhoon/Demos`. They are used directly as MP3, no re-encoding.

## Band members (8 musicians)

Source of truth: `docs/typhoon-content-facts.md`.

```text
1. Typhoon  – Gesang
2. Mika     – Posaune
3. Schack   – Saxophon
4. Hardy    – Trompete
5. Stefan   – Funk-Bass
6. Tom      – Schlagzeug
7. Buğra    – Gitarre
8. Jürgen   – Gitarre
```

Important corrections that landed in this batch:

- Singer is **Typhoon**, not Taifun.
- Saxophonist is **Schack**, not Jürgen.
- Guitarist is **Jürgen**, not Daniel. Daniel is removed.
- Singer card is **first**.
- Total represented musicians: **8**.

## Important files

- `src/app/[locale]/` – locale routing and public pages (Home, Band, Music, Shows, Gallery, Booking, Contact, Legal).
- `src/app/[locale]/layout.tsx` – wraps pages in `AudioPlayerProvider`, header and footer.
- `src/components/audio/AudioPlayerProvider.tsx` – single shared HTMLAudioElement, single-song-at-a-time playback context.
- `src/components/sections/HeroSection.tsx` – hero with new image + logo overlay + featured demo player.
- `src/components/ui/HeroMusicPlayer.tsx`, `FeaturedDemo.tsx`, `DemoPlayerCard.tsx` – wired audio UIs.
- `src/data/songs.ts` – demo song list including `audioSrc` paths.
- `src/data/members.ts` – corrected band roster.
- `src/i18n/dictionaries.ts` – DE/EN/TR copy (DE is primary).
- `src/config/site.ts` – navigation, contact info, locales.
- `docs/` – content facts, design system, asset map and technical plan.

## Booking

The booking form is UI-only. Submit shows the notice  
**„Booking-Versand wird im nächsten Batch angebunden."**  
No data is stored or sent.

## Platform links

`src/data/platform-links.ts`. When a real URL is set and `active: true`, the social icon becomes an actual link. Otherwise it stays as a muted SVG placeholder.

## Environment variables

`.env` placeholder values (none are used in this batch):

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
BOOKING_EMAIL=booking@typhoon.band
```

## Security / GDPR notes

- No external embeds without consent.
- No tracking / no analytics.
- No external fonts.
- No secrets in the frontend.
- Audio is streamable only – no download button.
- Imprint and privacy must be legally reviewed before launch.

## Next planned batches

1. Supabase schema + auth + RLS
2. Admin foundation
3. Content CRUD
4. Booking with Resend
5. Real gallery photos
6. Consent / external embeds
7. Launch hardening
