# Typhoon Website

Technische und visuelle Projektbasis für die neue Typhoon Website. Batch 1 ist bewusst ein statischer MVP-Stand ohne produktive Supabase-, Admin-, Mail- oder Shop-Logik.

Typhoon verbindet Bluesrock, Funk, Soul, Jazz und Southern Rock mit türkischsprachigen Texten, amerikanisch-europäischem Sound und starker Live-Energie. Der Batch-1-MVP ist eine dunkle, warme, sepia/goldene Website-Grundlage mit statischen Inhalten und vorbereitetem Sprachrouting.

## Tech-Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel-ready Struktur
- Statische Seed-Daten als Vorstufe zu Supabase

Keine externen Fonts, keine Analytics, keine Embeds, keine Supabase-Verbindung und kein Resend-Versand in Batch 1.

## Batch 2: Premium Design Rework

Dieser Batch überarbeitet ausschließlich Design, Layout, UX, Bildwirkung und visuelle Qualität der statischen Website.

Umgesetzt:

- Hero visuell neu als dunkles Konzertposter inszeniert
- großes Typhoon-Script-Logo als separates Overlay-Keyvisual über dem Bandmotiv
- Designsystem mit wärmerem Schwarz, Sepia-/Gold-Licht, Film-Grain, hochwertigen Linien und besseren Buttons verbessert
- Header mit horizontaler Navigation, Social-Platzhaltern und prominentem Listen-Button überarbeitet
- Startseite kompakter aufgebaut mit Feature-Zone für nächste Show, Demos, Galerie und Booking
- Musikseite, Shows-Seite und Booking-Seite optisch hochwertiger gestaltet
- Mitglieder-Vorschau editorialer gestaltet, mit stärkerer Bildwirkung für Mika und Taifun

Weiterhin nicht aktiv:

- keine Supabase-Integration
- kein Admin-Bereich
- keine Auth-Logik
- kein Resend-Mailversand
- keine Datenbank-, Storage-, Shop- oder Booking-Versand-Logik

Nächste Phase bleibt `Supabase Schema + Auth + RLS`, aber erst nach Designfreigabe.

## Setup

```bash
npm install
npm run dev
```

Die Startseite `/` leitet auf `/de` weiter. Weitere vorbereitete Sprachen:

- `/en`
- `/tr`

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run start
```

## Wichtige Dateien

- `src/app/[locale]` - Sprachrouting und öffentliche Seiten
- `src/components` - Layout-, Section- und UI-Komponenten
- `src/data` - statische Seed-Daten für Songs, Mitglieder, Shows und Plattformlinks
- `src/i18n/dictionaries.ts` - einfache Dictionary-Struktur ohne externe i18n-Library
- `src/lib/supabase/README.md` - Platzhalter für spätere Supabase-Anbindung
- `src/lib/resend/README.md` - Platzhalter für spätere Resend-Anbindung

## Assets

Die Website nutzt die gelieferten Typhoon-Assets unter `/public/assets/reference`.

Gelieferte Assets:

- `/docs/typhoon-website-datenmodell-adminstruktur-v1.md`
- `/docs/Typhoon-info.docx`
- `/docs/typhoon-info.md`
- `/public/assets/reference/typhoon-logo.svg`
- `/public/assets/reference/typhoon-band-hero.jpg`
- `/public/assets/reference/member-mika-posaune.jpg`
- `/public/assets/reference/member-typhoon-singer.png`
- `/public/assets/reference/website-mockup.png`

Falls später andere Dateinamen aus dem Repository kommen, können sie ergänzt werden. Die Komponenten enthalten defensive Fallbacks unter `/public/assets/images`.

## Environment Variables

`.env.example` enthält nur Platzhalter:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
BOOKING_EMAIL=booking@typhoon.band
```

`SUPABASE_SERVICE_ROLE_KEY` und `RESEND_API_KEY` dürfen später nur serverseitig verwendet werden. Keine geheimen Werte in `NEXT_PUBLIC_*` Variablen legen.

## Batch-1-Grenzen

Noch nicht implementiert:

- keine echte Supabase-Verbindung
- keine Datenbanktabellen
- keine RLS-Regeln
- kein Admin-Login
- kein Admin-CRUD
- kein Resend-Mailversand
- kein echter Booking-Versand
- kein Shop
- keine Analytics
- keine externen Embeds
- keine externen Fonts

## Sicherheits- und DSGVO-Hinweise

- Keine externen Embeds ohne Consent einbauen.
- Keine Analytics im MVP.
- Keine externen Fonts laden.
- Keine Secrets im Frontend verwenden.
- Den Supabase Service Role Key nie im Browser nutzen.
- Audios später streambar machen, aber ohne Download-Button.
- Impressum und Datenschutz vor Livegang rechtlich prüfen.
- Die rechtlichen Inhalte sollen später über das Admin-Menü bearbeitbar werden.

## Plattformlinks

Spotify, YouTube, Instagram, Facebook, SoundCloud und Bandcamp sind in `src/data/platform-links.ts` vorbereitet.

Regel: Wenn später eine URL gesetzt und `active: true` ist, wird der Link gerendert. Leere oder inaktive Links werden nicht angezeigt.

## Nächste geplante Batches

1. Supabase Schema + Auth + RLS nach Designfreigabe
2. Admin-Grundbereich
3. Content-CRUD
4. Booking mit Resend
5. Consent/Embeds
6. Launch-Härtung
