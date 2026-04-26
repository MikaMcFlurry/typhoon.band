# CLAUDE.md – Typhoon Website Design Rules

This batch is a **visual rebuild** of the Typhoon band website. The current frontend is a premium static MVP. Backend, admin, mail, shop, analytics, and external embeds are intentionally not implemented in this batch.

## Project identity

Typhoon is a band: Bluesrock · Funk · Soul · Jazz · Southern Rock with **Turkish lyrics** and an American-European sound. Desired feeling: **cinematic, dark, warm, sepia, gold, smoky, musical, raw but elegant** – never template-like.

## Design tokens (single source of truth: `src/app/globals.css`)

- Background: very dark near-black (`--bg-0: #050302`), warm dark brown highlights
- Ink: `--ink: #f5e9cf` (warm cream)
- Gold scale: `--gold #c9a14a`, `--gold-soft #e6c47b`, `--gold-deep #8a651e`
- Sepia accent: `--sepia: #a07140`
- Borders: thin gold (`--line` / `--line-strong`)
- Subtle global film-grain via `body::before`
- Per-section grain via `.grain` utility

## Typography

- **No external fonts.** System sans + system mono only.
- The handwritten Typhoon logo (SVG) is the **decorative script identity** – do not try to recreate it with a font.
- Display headings use `.display` (uppercase, tight tracking, black weight).
- Labels use `.eyebrow` (uppercase, very wide letter-spacing).
- Avoid Impact-style headline fonts. Use weight + tracking for impact.

## Layout primitives

- `.poster-frame` – primary card surface (thin gold border, dark gradient fill, inner highlight, subtle inner shadow).
- `.btn`, `.btn-gold`, `.btn-ghost`, `.btn-sm` – button variants.
- `.gold-rule` – horizontal hairline gold divider.
- `.genre-line` – inline-flex chip row with bullet dots between genres.
- `.logo-overlay` – CSS filter (drop-shadow + glow) for the script logo.

## Hero rules

The hero **must** contain:

1. Background band image (`/assets/reference/typhoon-band-hero.jpg`) – full-bleed, cropped to focus on the band members (the baked-in bottom logo is cropped or visually owned by the gradients).
2. Sepia / dark cinematic gradients on top.
3. Subtle grain overlay.
4. Large handwritten Typhoon logo SVG as a **separate absolutely positioned overlay layer** at the top of the hero – this is the dominant visual identity.
5. Text content (genre line, headline, copy, buttons) on the left.
6. Demo player (`HeroMusicPlayer`) below the buttons.

The script logo is never to be inlined as a flow image, never buried under dark overlays, and never recreated with a system font.

## Header rules

- Sticky black bar.
- Small Typhoon logo (SVG) on the left.
- Uppercase, condensed-feel nav with thin gold underline on hover / active.
- Social icon placeholders (`SocialIconLinks`) on the right – inactive icons stay as muted SVG placeholders.
- Gold "Booking Anfrage" CTA on the right.
- Mobile: hamburger toggle, full-width drawer, no horizontal overflow.

## Pages

- Home → poster-style landing page (Hero · FeatureGrid · BandIntro · Members · closing CTA).
- Band → editorial layout with band photo + members grid.
- Music → featured demo block + demo player cards (no real audio).
- Shows → upcoming + past lists with status badges. Empty states must look intentional, not broken.
- Booking → premium form for organisers. UI-only. Submit shows "Booking-Versand wird im nächsten Batch angebunden."
- Galerie → placeholder grid with poster frames, no real images yet.
- Kontakt → contact cards (mail / phone / address).
- Legal → simple, readable, serious. Imprint must include the address from `siteConfig`.

## Strict no-goes

- No Supabase, no DB queries, no auth, no admin.
- No Resend / mail sending. No real form submissions.
- No external font loading (no Google Fonts).
- No external embeds (YouTube, Spotify embeds etc.).
- No analytics.
- No heavy UI libs (shadcn, MUI, Bootstrap, …) and no animation libraries.
- No Impact-style headline font.
- No bright yellow (use warm gold).
- No generic gray cards (use `.poster-frame`).

## Allowed / encouraged

- Small inline SVG icons.
- CSS-only animations (e.g. `wave-bar` pulse).
- Restructuring components and section layouts.
- Adding internal helper components in `src/components/ui` or `src/components/sections`.

## Copy language

- Default content language: **German**.
- English (`/en`) and Turkish (`/tr`) routes exist, dictionaries are kept in sync.
