# Typhoon Website

Premium static frontend MVP for the band Typhoon. **Frontend-only.** No Supabase, no admin, no Resend, no database, no shop, no analytics, no external embeds.

The public site is a **onepager**: all key content (band intro, all 8 members, all 6 demos, shows, booking + direct contact) is visible on the homepage and reachable via in-page anchors. Legal pages remain as separate routes.

Typhoon verbindet Bluesrock, Funk, Soul, Jazz und Southern Rock mit türkischsprachigen Texten, amerikanisch-europäischem Sound und starker Live-Energie. Das Designziel ist eine dunkle, warme, sepia/gold/champagner Konzert-Poster-Ästhetik mit einer dominanten handgeschriebenen Typhoon-Signatur an der unteren Kante des Hero-Bildes.

## Status

- Onepager frontend MVP. Static content only.
- Real audio playback wired for the local demo MP3s.
- Backend, admin, mail, database, shop and analytics are intentionally not implemented.

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

Root `/` redirects to `/de`. Locales: `/de`, `/en`, `/tr`.

## Scripts

```bash
npm run dev    # dev server
npm run build  # production build
npm run lint   # eslint
npm run start  # serve production build
```

## Public navigation (anchor-based)

The header nav scrolls to homepage sections rather than separate public pages:

```text
Home     → /<locale>
Band     → /<locale>#band       (intro + full members grid)
Musik    → /<locale>#music      (featured demo + all 6 demos)
Shows    → /<locale>#shows      (upcoming + past)
Booking  → /<locale>#booking    (form)
Kontakt  → /<locale>#contact    (direct contact card)
```

The legacy subpages (`/band`, `/music`, `/shows`, `/booking`, `/contact`, `/gallery`) still exist as thin 307-redirect shims so external links keep working.

Legal pages remain as separate routes:

```text
/<locale>/legal/imprint
/<locale>/legal/privacy
```

## Homepage section order

1. Hero (`#home`) — band image, gradients, grain, large handwritten Typhoon logo as a signature across the lower edge, headline + CTAs + featured demo teaser.
2. Band intro + all 8 members (`#band`).
3. All 6 demos with audio playback (`#music`).
4. Shows — upcoming + past (`#shows`).
5. Booking form + direct contact card (`#booking` / `#contact`).
6. Footer.

## Design system

Defined in `src/app/globals.css`:

- Colour tokens: deep black, warm dark brown, antique gold (`#c79a4b`), champagne gold (`#e8c982`), deep gold (`#b8873b`), dark bronze, warm cream.
- Tailwind's `amber-*` scale is re-tuned via `@theme` to match the gold/champagne range.
- Surfaces: `.poster-frame` (soft rounded panel, subtle gold edge, inner highlight), `.gold-rule`, `.grain`.
- Type primitives: `.display`, `.eyebrow`, `.label-mono`, `.genre-line`.
- Buttons: pill-shaped `.btn`, `.btn-gold` (champagne/antique gradient), `.btn-ghost`, `.btn-sm`.
- Logo overlay: `.logo-overlay` (drop-shadow + warm glow).
- Subtle CSS-only waveform animation: `.wave-bar`, `.wave-bar.is-live`.
- Audio range slider styling: `input[type="range"].audio-range`.
- `scroll-padding-top` + `section[id] { scroll-margin-top }` for clean anchor jumps under the sticky header.

## Hero asset

```text
/public/assets/reference/typhoon-band-hero-new.jpeg
```

Singer Typhoon in colour, the rest of the band in sepia/grunge, no text inside the image. The handwritten Typhoon SVG (`typhoon-logo.svg`) sits as a separate absolute-positioned overlay layer along the lower edge of the hero.

## Demo audio

Local MP3 demos:

```text
/public/assets/audio/demos/sen-benim.mp3
/public/assets/audio/demos/karanfill.mp3
/public/assets/audio/demos/gece-yine-dustun.mp3
/public/assets/audio/demos/farksilin.mp3
/public/assets/audio/demos/cilgin.mp3
/public/assets/audio/demos/bir-tek-sen.mp3
```

Single shared `<audio>` element via `src/components/audio/AudioPlayerProvider.tsx` → only one demo plays at a time. No download button, no external player. Missing files render a disabled play button with a "Bald verfügbar" fallback.

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

## Important files

- `src/app/[locale]/page.tsx` – the onepager.
- `src/app/[locale]/{band,music,shows,booking,contact,gallery}/page.tsx` – thin redirect shims.
- `src/app/[locale]/legal/{imprint,privacy}/page.tsx` – separate legal routes.
- `src/app/[locale]/layout.tsx` – wraps the page in `AudioPlayerProvider`, header and footer.
- `src/components/sections/HeroSection.tsx` – hero with new image + lower-edge logo overlay + featured demo player.
- `src/components/sections/BandIntro.tsx`, `MembersSection.tsx`, `MusicSection.tsx`, `ShowsSection.tsx`, `BookingContactSection.tsx` – the onepager sections.
- `src/components/audio/AudioPlayerProvider.tsx` – single-song-at-a-time playback context.
- `src/data/{songs,members,shows,platform-links}.ts` – static seed data.
- `src/i18n/dictionaries.ts` – DE/EN/TR copy (DE primary).
- `src/config/site.ts` – navigation (anchors), contact info, locales.

## Booking

The booking form is UI-only. Submit shows the notice  
**„Booking-Versand wird im nächsten Batch angebunden."**  
No data is stored or sent.

## Platform links

`src/data/platform-links.ts`. When `active: true` and a real URL is set, the social icon becomes a link. Otherwise it stays as a muted SVG placeholder.

## Environment variables

`.env` placeholder values (none used in this batch):

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
