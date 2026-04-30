# Typhoon Website – Claude Frontend Redesign Brief v2

## Ziel
Das bestehende Typhoon-Website-Projekt soll **visuell neu ausgerichtet** werden. Die zwei neuen Mockups sind die verbindliche Referenz für **Look, Layout, Rhythmus, Komponenten-Anordnung und responsive Verhalten**.

Wichtig: Die Mockups enthalten falsche Beispielinhalte. Diese Inhalte dürfen nicht übernommen werden.

## Harte Regel
**Nur Frontend-Design überarbeiten.**

Nicht ändern, außer technisch zwingend nötig:
- Supabase-Datenmodell
- RLS-Regeln
- Auth/Login-Logik
- Admin-Rechte
- API-/Server-Action-Verträge
- Booking-Mail-Flow über Resend
- Upload-/Storage-Konzept
- Consent-/DSGVO-Logik
- Admin-Struktur

Wenn Claude für das Design eine Backend-Änderung für nötig hält: erst stoppen und begründen, nicht selbst umbauen.

---

## Verbindliche visuelle Referenzen

### Desktop-Referenz
Datei/Mockup: `CEB0DFC7-7E26-4C79-8124-A97D01BE07D6.jpeg`

Übernehmen:
- breite Desktop-Komposition
- Logo links oben, Navigation rechts oben
- großer Hero mit starkem Bandmotiv rechts und Headline links
- dunkler Hintergrund mit Sepia-/Gold-Stimmung
- Audio-/Featured-Song-Bar direkt unter dem Hero
- kompakte Inhaltssektionen mit dünnen goldenen Linien
- Show-Karten in horizontalem Raster
- Bandmitglieder als Kartenreihe
- Media-Galerie als breite Thumbnail-Reihe
- Booking-Formular als zweispaltiger Block mit visuellem Bild-/CTA-Panel rechts
- Footer mit Logo, Kontakt, Socials, Legal Links

### Mobile-Referenz
Datei/Mockup: `32DDB57C-2BEE-4DC3-9931-AE1CEE797C86.jpeg`

Übernehmen:
- mobile-first Verdichtung wie App-/Poster-Look
- gerundeter dunkler Container-/Card-Charakter
- Logo oben, Burger-Menü rechts
- Hero kompakt, Bild und Headline eng verbunden
- Content-Blöcke klar gestapelt
- Shows als vertikale Listen-Karten
- Mitglieder/Medien horizontal scrollbar oder sauber umbrechend
- Booking-Formular gestapelt
- Footer kompakt

---

## Designsystem v2

### Stimmung
Dunkel, hochwertig, musikalisch, leicht rau, vintage, sepia, club-/stage-artig. Kein cleanes Startup-Design.

### Farben
Als CSS-Variablen/Tokens anlegen oder bestehende Tokens ersetzen:

```css
--ty-bg: #070604;
--ty-bg-soft: #0e0c09;
--ty-panel: #15120e;
--ty-panel-2: #1c1711;
--ty-border: rgba(214, 168, 95, 0.34);
--ty-border-strong: rgba(214, 168, 95, 0.62);
--ty-gold: #d6a85f;
--ty-gold-soft: #b88645;
--ty-cream: #f1e6d2;
--ty-muted: #b8a98f;
--ty-danger: #b9503e;
```

### Typografie
- Hero-Headline: große elegante Serif-Anmutung, z. B. system serif / vorhandene lokale Serif-Font.
- Body/UI: gut lesbare Sans-Serif.
- Keine externen Google Fonts ohne Consent/DSGVO-Prüfung. Wenn neue Fonts nötig sind: lokal einbinden.
- Hero-Headline darf mehrzeilig sein und einzelne Wörter gold hervorheben, aber Inhalt kommt aus Admin/Supabase.

### Oberflächen
- Panels: dunkle Flächen, dünner Gold-/Bronze-Rand, subtile Innen-/Außenschatten.
- Leichte Körnung/Noise/Gradient erlaubt, aber lokal per CSS, nicht über externe Assets.
- Buttons: primär gold gefüllt, sekundär transparent mit goldener Kontur.
- Cards: 12–18px Radius, 1px Border, Hover leicht heller/Goldkante.

### Bilder
- Band-/Hero-Bilder dramatisch in Sepia/Dark-Grading anzeigen.
- Keine falschen Personen oder KI-Ersatzbilder verwenden.
- Nur echte Assets aus Projekt/Supabase/Storage verwenden.
- Hero-Bild darf mit Overlay/Gradient/Crop gestylt werden, aber nicht inhaltlich verfälscht werden.

---

## Inhaltliche Regeln

### Nicht aus Mockups übernehmen
Nicht übernehmen:
- falsche Namen
- falsche Show-Orte/-Daten
- falsche Songtitel wie „Find A Way“, sofern nicht real in DB vorhanden
- falsche Kontaktadresse wie Istanbul/Türkei
- falsche Social Links
- AGB-Link, falls keine AGB-Seite im bestehenden Datenmodell vorhanden ist
- News-Bereich, falls im bestehenden Backend/Datenmodell keine News-Funktion existiert

### Reale Inhalte verwenden
Dynamisch aus bestehendem Backend/Admin verwenden:
- `site_settings`
- `hero_sections` + `hero_translations`
- `songs`
- `shows`
- `band_pages`
- `band_members`
- `media_items`
- `videos`
- `platform_links`
- `legal_pages`
- `seo_entries`
- `consent_settings`

Fallback-Inhalte nur dort nutzen, wo das Projekt bereits Fallbacks vorsieht.

Empfohlene DE-Fallbacks aus Planung:
- Headline: `Blues, Funk & Turkish Soul.`
- Subheadline: `Typhoon verbindet Bluesrock, Funk, Soul, Jazz und Southern Rock mit türkischsprachigen Texten und kraftvoller Live-Energie.`
- CTA 1: `Demos anhören`
- CTA 2: `Booking anfragen`
- Kontakt: `info@typhoon.band`, `+49 176 64472296`

Start-Songs laut Planung:
- Sen-Benim
- Karanfill
- Gece Yine Düştün
- Farksilin
- Çılgın
- Bir Tek Sen

---

## Public Frontend – gewünschte Reihenfolge Startseite

1. Header / Navigation
2. Hero mit echter Headline, Subline, CTAs, echtem Hero-/Bandbild
3. Featured Song / Audio Player
4. Termine / Shows Preview
5. Bandmitglieder Preview, nur falls sichtbar und echte Daten vorhanden
6. Media Preview: Bilder/Videos, externe Videos nur mit Consent
7. Booking-Anfrage
8. Optional News nur, wenn bestehendes Backend News bereits unterstützt
9. Footer mit Kontakt, Social Links, Impressum, Datenschutz, Cookies/Consent

---

## Komponenten-Verhalten

### Header
Desktop:
- Logo links, Navigation rechts
- aktive Section gold unterstrichen
- sticky oder fixed nur, wenn es nicht stört

Mobile:
- Logo links, Burger rechts
- Menü als dunkles Overlay/Panel
- keine Layoutsprünge

### Hero
- Links: Headline, Subline, CTAs
- Rechts/Hintergrund: echtes Bandbild/Hero-Asset, stark gedimmt/sepia, mit Gradient zum Text
- Desktop: groß, fast posterartig
- Mobile: kompakter Hero, keine abgeschnittenen CTA-Bereiche

### Featured Song Player
- Unter dem Hero als breite dunkle Card
- Cover links, Songinfo, Play/Pause, Progress/Waveform-Optik, Dauer
- Kein Download-Button
- Audio-URL nur aus erlaubter Quelle
- Wenn kein Song vorhanden: Bereich sauber ausblenden oder neutralen Empty State anzeigen

### Shows
- Desktop: 3–4 Karten pro Reihe oder horizontale Kartenleiste wie Mockup
- Mobile: vertikale Liste
- Private Shows niemals anzeigen
- Cancelled klar markieren
- Ticket-Button nur bei gesetztem gültigem Ticket-Modus/Link

### Bandmitglieder
- Nur echte Mitglieder aus Backend
- Desktop: Kartenreihe
- Mobile: horizontal scroll oder 2er Grid
- Fehlende Bilder mit sauberem Placeholder, nicht mit falschen Bildern ersetzen

### Media
- Bilder als Thumbnail-Reihe/Grid
- Videos nicht automatisch einbetten
- Externe Medien erst nach Consent laden

### Booking
- Felder aus bestehendem Booking-Backend beibehalten:
  - Name
  - E-Mail
  - Telefon optional, falls vorhanden
  - Veranstaltungsdatum
  - Ort
  - Veranstaltungsart, falls vorhanden
  - Nachricht
- Honeypot/Spam-Schutz/Servervalidierung nicht entfernen
- Datenschutzhinweis direkt am Formular anzeigen
- CTA optisch wie Mockup: goldener Button, dunkles Bild-/Textpanel rechts auf Desktop

### Footer
- Kein AGB-Link, wenn keine AGB-Seite existiert
- Pflicht: Impressum, Datenschutz, Cookies/Consent
- Social Icons nur anzeigen, wenn Links aktiv gesetzt sind

---

## Technische Umsetzungshinweise für Claude

1. Repo zuerst prüfen.
2. Relevante Frontend-Dateien identifizieren.
3. Bestehende Datenabfragen und Props beibehalten.
4. Styling zentralisieren:
   - `globals.css`
   - Tailwind Theme/Tokens, falls Tailwind genutzt wird
   - Komponentenklassen vereinheitlichen
5. Keine neuen externen UI-/Animation-/Font-Libraries ohne Notwendigkeit.
6. Keine Mockup-Daten hart codieren.
7. Keine Secrets, keine Service Role Keys, keine Admin-Schutzänderungen.
8. Nach Änderung kurz dokumentieren:
   - geänderte Dateien
   - was visuell angepasst wurde
   - was bewusst nicht übernommen wurde
   - Risiken/offene Punkte

---

## Qualitätskriterien

Akzeptiert, wenn:
- Desktop deutlich wie Mockup 2 wirkt.
- Mobile deutlich wie Mockup 1 wirkt.
- echte Backend-Inhalte weiter funktionieren.
- Admin-Pflegefähigkeit unverändert bleibt.
- Booking, Consent, Shows, Songs und Media nicht kaputt gehen.
- keine falschen Mockup-Inhalte im Code landen.
- keine Backend-/Security-Regeln geschwächt werden.

Nicht akzeptiert, wenn:
- nur Farben geändert wurden, aber Layout gleich blieb.
- Fake-Daten aus dem Mockup eingebaut wurden.
- Supabase-/Admin-Logik entfernt oder umgangen wurde.
- externe Embeds ohne Consent geladen werden.
- mobile Ansicht horizontal überläuft.
