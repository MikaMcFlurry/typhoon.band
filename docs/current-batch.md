# Current Batch – Onepager Refinement

## Goal

Final frontend refinement before merge. The public site is now a **onepager**:
all key public content (band intro, all 8 members, all 6 demos, shows,
booking + direct contact) is visible on the homepage and reachable via
in-page anchors. The hero composition matches the mockup direction more
closely, with the handwritten Typhoon logo moved to the lower edge of the
hero image as a poster signature.

This is **not** a full rebuild and **no backend** is added.

## Strict scope

Do not implement:
- Supabase
- Auth
- Admin
- Database
- Resend
- Mail sending
- Shop
- Analytics
- External embeds

## Implemented changes

### 1. Hero refinement
- Handwritten Typhoon SVG (`typhoon-logo.svg`) is now a separate absolute
  overlay layer placed across the **lower edge** of the hero image.
- High `z-index`, warm drop-shadow / glow via `.logo-overlay`, never buried
  under gradients.
- Desktop: large signature near the lower-right of the image.
- Tablet/mobile: smaller, centered low for legibility, no horizontal overflow.
- Cleaner spacing between genre line, headline, copy and CTAs; the featured
  demo player remains visually integrated below the hero text.
- Hero CTAs now link to in-page anchors (`#music`, `#shows`, `#booking`).

### 2. Onepager structure
The homepage `/[locale]` renders all public sections:

1. Hero (`#home`)
2. Band intro + full members grid (`#band`)
3. All demo songs incl. featured demo (`#music`)
4. Shows / live (`#shows`)
5. Booking form + direct contact (`#booking` + `#contact`)
6. Footer

### 3. Anchor navigation
The header navigation now uses anchor links scoped to the homepage:

```text
Home     → /<locale>
Band     → /<locale>#band
Musik    → /<locale>#music
Shows    → /<locale>#shows
Booking  → /<locale>#booking
Kontakt  → /<locale>#contact
```

`html { scroll-padding-top: 5rem; }` and `section[id] { scroll-margin-top: 5rem; }`
keep anchored sections clear of the sticky header.

### 4. Legacy public subpages
The old non-legal public subpages now redirect to the matching homepage
anchors (HTTP 307, hash preserved). The pages still exist as thin redirect
shims so any external links keep working:

```text
/<locale>/band      → /<locale>#band
/<locale>/music     → /<locale>#music
/<locale>/shows     → /<locale>#shows
/<locale>/booking   → /<locale>#booking
/<locale>/contact   → /<locale>#contact
/<locale>/gallery   → /<locale>
```

Legal pages remain as separate routes:

```text
/<locale>/legal/imprint
/<locale>/legal/privacy
```

### 5. Members
All 8 musicians appear on the homepage `MembersSection`, in the corrected
order (singer first):

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

### 6. Music / demos
All 6 demos are visible on the homepage:

```text
Sen-Benim · Karanfill · Gece Yine Düştün · Farksilin · Çılgın · Bir Tek Sen
```

The hero keeps a compact featured demo teaser (Sen-Benim). The full
`MusicSection` below shows the featured demo plus all remaining demos.
Audio playback uses local MP3s under `/public/assets/audio/demos/`. No
download buttons.

### 7. Booking + direct contact
The homepage `BookingContactSection` includes:
- the booking form (UI-only, prepared notice on submit)
- a contact card with `booking@typhoon.band`, `info@typhoon.band` and the
  phone number from `siteConfig`
- a "Was wir mitbringen" panel with the live-set summary

## Quality

- `npm run lint` passes.
- `npm run build` passes; all routes statically generated. Subpages render
  as 307 redirects to the matching homepage anchor.

## Final summary

Report when finishing:
1. what changed in the hero
2. how the logo positioning was changed
3. how the onepager structure was implemented
4. how public subpages were handled
5. whether all members and demos are now visible on the homepage
6. lint/build result
