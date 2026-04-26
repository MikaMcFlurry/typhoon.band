# Typhoon Website – Datenmodell & Admin-Struktur v1

**Projekt:** Typhoon Website  
**Stand:** 2026-04-26  
**Zweck:** Planungsgrundlage für die spätere Umsetzung mit ChatGPT 5.5  
**Wichtig:** Dieses Dokument enthält noch keinen Code und keine SQL-Migration.

---

## 1. Projektbasis

Die Typhoon Website wird als individuelle Band-Website geplant mit:

- öffentlicher Website
- sicherem Admin-Bereich
- mehrsprachigen Inhalten
- Musik-/Demo-Streaming
- Galerie
- Shows
- Booking-Anfrage
- rechtlichen Seiten
- späterer Vorbereitung für Pressebereich, Shop und Tickets

### Final geplanter Stack

| Bereich | Entscheidung |
|---|---|
| Frontend | Next.js |
| Hosting | Vercel |
| Code-Versionierung | GitHub |
| Auth | Supabase Auth |
| Datenbank | Supabase Postgres |
| Storage | Supabase Storage |
| E-Mail-Versand | Resend |
| Domain | typhoon.band |
| Hauptsprache | Deutsch |
| Weitere Sprachen | Englisch, Türkisch |

---

## 2. Musikalische Positionierung

Typhoon wird positioniert als Band mit:

- Bluesrock
- Funk
- Soul
- Jazz
- Southern Rock
- türkischsprachigen Texten
- amerikanisch-europäischem Sound
- starker Live-Energie
- erfahrener Besetzung

Empfohlene Hero-Headline:

```text
Blues, Funk & Turkish Soul.
```

Empfohlene Subline:

```text
Typhoon verbindet Bluesrock, Funk, Soul, Jazz und Southern Rock mit türkischsprachigen Texten und kraftvoller Live-Energie.
```

---

## 3. Grundprinzip des Datenmodells

Die Website-Inhalte sollen nicht hart im Code gepflegt werden.

Stattdessen:

```text
Next.js Website
↓
Supabase Auth
↓
Supabase Postgres
↓
Supabase Storage
↓
Resend
```

### Grundregeln

- GitHub enthält nur Code.
- Keine Uploads in GitHub speichern.
- Keine Secrets in GitHub speichern.
- Inhalte, Shows, Songs, SEO und Rechtliches liegen in Supabase.
- Bilder, Songs und Medien liegen in Supabase Storage.
- E-Mails laufen über Resend.
- Admin-Zugriff wird serverseitig geprüft.
- Supabase RLS ist Pflicht.

---

## 4. Sprachen-Konzept

### Sprachen

```text
de = Deutsch, Default
en = Englisch
tr = Türkisch
```

### Empfehlung

Für übersetzbare Inhalte werden eigene Translation-Tabellen genutzt.

Beispiel:

```text
band_pages
band_page_translations
```

Nicht empfohlen:

```text
title_de
title_en
title_tr
```

### Warum Translation-Tabellen?

- sauberer erweiterbar
- bessere Datenstruktur
- einfacher für Admin-Oberfläche
- später weitere Sprachen möglich
- weniger Chaos bei optional fehlenden Übersetzungen

---

# 5. Tabellenübersicht

## 5.1 `admin_profiles`

Verwaltet Admin-Nutzer zusätzlich zu Supabase Auth.

| Feld | Typ / Inhalt | Zweck |
|---|---|---|
| `id` | UUID | interne ID |
| `user_id` | UUID | Verbindung zu Supabase Auth |
| `display_name` | Text | Anzeigename |
| `email` | Text | Admin-E-Mail |
| `role` | Enum | `owner`, `admin`, `editor` |
| `is_active` | Boolean | Account aktiv/inaktiv |
| `last_login_at` | Timestamp | letzter Login |
| `created_at` | Timestamp | erstellt am |
| `updated_at` | Timestamp | geändert am |

### Rollen

```text
owner
admin
editor
```

Für MVP aktiv:

```text
owner
admin
```

`editor` wird vorbereitet, aber noch nicht zwingend genutzt.

---

## 5.2 `site_settings`

Globale Website-Einstellungen.

| Feld | Zweck |
|---|---|
| `id` | ID |
| `site_name` | z. B. Typhoon |
| `default_language` | `de` |
| `logo_url` | Logo aus Storage |
| `favicon_url` | Favicon |
| `primary_email` | z. B. info@typhoon.band |
| `booking_email` | booking@typhoon.band |
| `phone` | Telefonnummer |
| `footer_text` | Footer-Text |
| `is_maintenance_mode` | Wartungsmodus |
| `created_at` | erstellt am |
| `updated_at` | geändert am |

### Initiale Werte

```text
site_name: Typhoon
default_language: de
primary_email: info@typhoon.band
booking_email: booking@typhoon.band
phone: +49 176 64472296
```

---

## 5.3 `platform_links`

Externe Plattformen.

| Feld | Zweck |
|---|---|
| `id` | ID |
| `platform` | Plattformname |
| `url` | Profil-Link |
| `is_active` | anzeigen ja/nein |
| `sort_order` | Reihenfolge |
| `created_at` | erstellt am |
| `updated_at` | geändert am |

### Erlaubte Plattformen

```text
spotify
youtube
instagram
facebook
soundcloud
bandcamp
```

### Anzeige-Regel

```text
URL leer = nicht anzeigen
URL gesetzt + aktiv = anzeigen
```

---

# 6. Rechtliche Inhalte

## 6.1 `legal_pages`

| Feld | Zweck |
|---|---|
| `id` | ID |
| `type` | Art der rechtlichen Seite |
| `is_published` | veröffentlicht ja/nein |
| `created_at` | erstellt am |
| `updated_at` | geändert am |

### Erlaubte Typen

```text
imprint
privacy
cookies
```

---

## 6.2 `legal_page_translations`

| Feld | Zweck |
|---|---|
| `id` | ID |
| `legal_page_id` | Verbindung zu `legal_pages` |
| `language` | `de`, `en`, `tr` |
| `title` | Seitentitel |
| `content` | Inhalt |
| `updated_at` | geändert am |

### Rechte

Nur `owner` darf rechtliche Inhalte bearbeiten.

---

## 6.3 Initiales Impressum

```text
Mika Hertler
Am Schwarzen Steg 5a
95448 Bayreuth
Deutschland

E-Mail: info@typhoon.band
Telefon: +49 176 64472296
```

### Kritischer Hinweis

Die Impressumsdaten müssen im Admin anpassbar sein.  
Vor Livegang sollte final geprüft werden, ob diese Person rechtlich korrekt als Website-Betreiber genannt wird.

---

# 7. Startseite / Hero

## 7.1 `hero_sections`

| Feld | Zweck |
|---|---|
| `id` | ID |
| `background_image_url` | Hero-Bild |
| `featured_song_id` | hervorgehobener Song |
| `primary_cta_target` | Ziel CTA 1 |
| `secondary_cta_target` | Ziel CTA 2 |
| `is_active` | aktiv ja/nein |
| `created_at` | erstellt am |
| `updated_at` | geändert am |

---

## 7.2 `hero_translations`

| Feld | Zweck |
|---|---|
| `id` | ID |
| `hero_id` | Verbindung zu `hero_sections` |
| `language` | `de`, `en`, `tr` |
| `headline` | Hauptheadline |
| `subheadline` | Unterzeile |
| `primary_cta_label` | Text CTA 1 |
| `secondary_cta_label` | Text CTA 2 |

### Empfohlener Startinhalt DE

```text
Headline:
Blues, Funk & Turkish Soul.

Subheadline:
Typhoon verbindet Bluesrock, Funk, Soul, Jazz und Southern Rock mit türkischsprachigen Texten und kraftvoller Live-Energie.

CTA 1:
Demos anhören

CTA 2:
Booking anfragen
```

---

# 8. Band-Info

## 8.1 `band_pages`

| Feld | Zweck |
|---|---|
| `id` | ID |
| `hero_image_url` | Bandbild |
| `is_published` | veröffentlicht ja/nein |
| `created_at` | erstellt am |
| `updated_at` | geändert am |

---

## 8.2 `band_page_translations`

| Feld | Zweck |
|---|---|
| `id` | ID |
| `band_page_id` | Verbindung zu `band_pages` |
| `language` | `de`, `en`, `tr` |
| `intro_text` | kurzer Einstieg |
| `main_text` | Haupttext |
| `press_short_text` | kurzer Pressetext, vorbereitet |
| `press_long_text` | langer Pressetext, vorbereitet |

### Hinweis

Ein sichtbarer Pressebereich kommt noch nicht ins MVP, wird aber vorbereitet.

---

# 9. Bandmitglieder

## 9.1 `band_members`

| Feld | Zweck |
|---|---|
| `id` | ID |
| `name` | Name |
| `instrument` | Instrument / Rolle |
| `image_url` | Bild, optional |
| `sort_order` | Reihenfolge |
| `is_visible` | sichtbar ja/nein |
| `created_at` | erstellt am |
| `updated_at` | geändert am |

---

## 9.2 `band_member_translations`

| Feld | Zweck |
|---|---|
| `id` | ID |
| `band_member_id` | Verbindung zu `band_members` |
| `language` | `de`, `en`, `tr` |
| `bio_short` | Kurzbeschreibung |
| `bio_long` | längere Bio |

### Wichtig

Einzelbilder sind aktuell noch nicht vorhanden.  
Der Bereich wird vorbereitet und kann später vom Admin eingeblendet werden.

### Admin-Schalter

```text
Mitgliederbereich anzeigen: ja/nein
Einzelnes Mitglied anzeigen: ja/nein
```

---

# 10. Songs / Demos

## 10.1 `songs`

| Feld | Zweck |
|---|---|
| `id` | ID |
| `title` | Songtitel |
| `slug` | URL-/Systemname |
| `audio_url` | Audiodatei aus Storage |
| `cover_image_url` | Coverbild, optional |
| `status` | Demo, Single etc. |
| `is_streamable` | streambar ja/nein |
| `is_downloadable` | Download erlaubt ja/nein |
| `is_featured` | im Hero hervorheben |
| `sort_order` | Reihenfolge |
| `is_visible` | sichtbar ja/nein |
| `created_at` | erstellt am |
| `updated_at` | geändert am |

### Status-Werte

```text
demo
single
album_track
unreleased
```

### Start-Songs

```text
Sen-Benim
Karanfill
Gece Yine Düştün
Farksilin
Çılgın
Bir Tek Sen
```

### Aktuelle Regeln

```text
status = demo
is_streamable = true
is_downloadable = false
```

### Kritischer Hinweis

Sobald Audio im Browser abgespielt wird, kann ein technischer Download nie vollständig verhindert werden.  
Es sollen aber keine Download-Buttons angezeigt werden und Dateizugriffe sollen möglichst kontrolliert erfolgen.

---

# 11. Galerie / Medien

## 11.1 `media_items`

| Feld | Zweck |
|---|---|
| `id` | ID |
| `type` | Medientyp |
| `file_url` | Datei |
| `thumbnail_url` | Vorschaubild |
| `category` | Kategorie |
| `sort_order` | Reihenfolge |
| `is_visible` | sichtbar ja/nein |
| `created_at` | erstellt am |
| `updated_at` | geändert am |

### Typen

```text
image
video_thumbnail
press_image
logo
other
```

---

## 11.2 `media_item_translations`

| Feld | Zweck |
|---|---|
| `id` | ID |
| `media_item_id` | Verbindung zu `media_items` |
| `language` | `de`, `en`, `tr` |
| `title` | Titel |
| `description` | Beschreibung |
| `alt_text` | Alt-Text |

### Upload-Regeln

- Dateityp prüfen
- Dateigröße begrenzen
- Bilder optimieren
- keine ausführbaren Dateien
- Dateinamen bereinigen
- Alt-Text pflegbar machen

---

# 12. Videos

## 12.1 `videos`

| Feld | Zweck |
|---|---|
| `id` | ID |
| `platform` | YouTube, Vimeo etc. |
| `external_url` | externer Link |
| `thumbnail_url` | Vorschaubild |
| `sort_order` | Reihenfolge |
| `is_visible` | sichtbar ja/nein |
| `requires_consent` | Consent nötig |
| `created_at` | erstellt am |
| `updated_at` | geändert am |

### Plattformen

```text
youtube
vimeo
facebook
instagram
custom
```

---

## 12.2 `video_translations`

| Feld | Zweck |
|---|---|
| `id` | ID |
| `video_id` | Verbindung zu `videos` |
| `language` | `de`, `en`, `tr` |
| `title` | Titel |
| `description` | Beschreibung |
| `consent_text` | Hinweistext vor dem Laden |

### Regel

Externe Videos werden nicht automatisch geladen.  
Stattdessen:

```text
Vorschaubild → Button „Video laden“ → Consent → Embed laden
```

---

# 13. Shows

## 13.1 `shows`

| Feld | Zweck |
|---|---|
| `id` | ID |
| `date` | Datum |
| `start_time` | Uhrzeit |
| `city` | Stadt |
| `venue` | Location |
| `country` | Land |
| `status` | Status |
| `ticket_mode` | Ticket-Art |
| `external_ticket_url` | externer Ticketlink |
| `internal_ticket_enabled` | später eigener Verkauf |
| `is_visible` | sichtbar ja/nein |
| `created_at` | erstellt am |
| `updated_at` | geändert am |

### Status-Werte

```text
scheduled
sold_out
cancelled
private
past
```

### Ticket-Modi

```text
none
external
internal
both
```

---

## 13.2 `show_translations`

| Feld | Zweck |
|---|---|
| `id` | ID |
| `show_id` | Verbindung zu `shows` |
| `language` | `de`, `en`, `tr` |
| `title` | Show-Titel |
| `description` | Beschreibung |
| `button_label` | Button-Text |

### Website-Anzeige

- kommende Shows
- vergangene Shows
- abgesagte Shows optional
- private Shows nicht öffentlich anzeigen

### Admin-Funktionen

```text
Show anlegen
Show bearbeiten
Show ausblenden
Show absagen
Show als vergangen markieren
Ticketlink ergänzen
Ticketmodus setzen
```

---

# 14. Booking-Anfragen

## 14.1 `booking_requests`

| Feld | Zweck |
|---|---|
| `id` | ID |
| `name` | Name |
| `email` | E-Mail |
| `phone` | Telefonnummer, optional |
| `event_date` | gewünschtes Datum |
| `event_location` | Ort |
| `event_type` | Art der Veranstaltung |
| `message` | Nachricht |
| `status` | Bearbeitungsstatus |
| `ip_hash` | IP nur gehasht oder optional gar nicht |
| `user_agent` | optional, kritisch prüfen |
| `created_at` | erstellt am |
| `updated_at` | geändert am |

### Status-Werte

```text
new
read
answered
done
spam
```

### Ablauf

```text
Formular absenden
↓
Validierung
↓
Spam-Schutz
↓
Speicherung in Supabase
↓
Mail über Resend an booking@typhoon.band
↓
Anzeige im Admin
```

### Datenschutz-Regeln

- Nur notwendige Daten abfragen.
- Telefonnummer optional.
- IP nicht roh speichern.
- Datenschutzhinweis direkt am Formular.
- Aufbewahrungsfrist später definieren.
- Spam-Schutz ohne unnötiges Tracking bevorzugen.

---

# 15. SEO

## 15.1 `seo_entries`

| Feld | Zweck |
|---|---|
| `id` | ID |
| `route` | Seitenroute |
| `language` | `de`, `en`, `tr` |
| `title` | SEO-Titel |
| `description` | Meta Description |
| `og_image_url` | Social Preview Bild |
| `noindex` | nicht indexieren |
| `created_at` | erstellt am |
| `updated_at` | geändert am |

### Beispiel-Routen

```text
/de
/de/band
/de/musik
/de/shows
/de/booking
/en
/en/band
/tr
/tr/band
```

### Bearbeitungsrechte

```text
owner
admin
```

Editor darf SEO zunächst nicht bearbeiten.

---

# 16. Consent / Cookies

## 16.1 `consent_settings`

| Feld | Zweck |
|---|---|
| `id` | ID |
| `category` | Kategorie |
| `is_required` | technisch notwendig |
| `is_enabled` | aktiv |
| `created_at` | erstellt am |
| `updated_at` | geändert am |

### Kategorien

```text
necessary
external_media
statistics
marketing
```

### MVP

```text
necessary
external_media
```

### Später optional

```text
statistics
marketing
```

---

## 16.2 `consent_translations`

| Feld | Zweck |
|---|---|
| `id` | ID |
| `category` | Verbindung zur Kategorie |
| `language` | `de`, `en`, `tr` |
| `title` | Titel |
| `description` | Beschreibung |
| `button_label` | Button-Text |

---

# 17. Pressebereich, vorbereitet

## 17.1 `press_assets`

| Feld | Zweck |
|---|---|
| `id` | ID |
| `type` | Art des Presseassets |
| `file_url` | Datei |
| `is_visible` | sichtbar ja/nein |
| `sort_order` | Reihenfolge |
| `created_at` | erstellt am |
| `updated_at` | geändert am |

### Typen

```text
press_text
logo
press_photo
tech_rider
stage_rider
other
```

### MVP-Regel

```text
is_visible = false
```

Der Pressebereich wird noch nicht öffentlich angezeigt, aber strukturell vorbereitet.

---

# 18. Shop- und Ticket-Vorbereitung

Der Shop wird nicht im MVP gebaut.

Das Datenmodell soll aber spätere Erweiterungen nicht blockieren.

## Später mögliche Tabellen

```text
products
product_translations
product_variants
orders
order_items
payments
tickets
ticket_scans
discount_codes
shipping_methods
tax_settings
```

## Shows sind bereits vorbereitet durch

```text
ticket_mode
external_ticket_url
internal_ticket_enabled
```

Damit können Shows später entweder:

- keinen Ticketlink haben
- auf externe Ticketshops verlinken
- interne Tickets verkaufen
- beides kombinieren

---

# 19. Admin-Menü-Struktur

## Hauptnavigation

```text
Dashboard
Startseite
Band
Mitglieder
Musik
Galerie
Videos
Shows
Booking
Plattformen
SEO
Rechtliches
Einstellungen
Admin-Nutzer
```

---

## 19.1 Dashboard

Zeigt:

```text
Neue Booking-Anfragen
Kommende Shows
Zuletzt bearbeitete Inhalte
Fehlende Übersetzungen
Fehlende SEO-Daten
```

Warnungen:

```text
Impressum nicht veröffentlicht
Datenschutz fehlt
Externe Medien aktiv, aber Consent-Text fehlt
Booking-Mail nicht gesetzt
Social-Link ungültig
```

---

## 19.2 Startseite

Bearbeitbar:

```text
Hero-Bild
Headline
Subheadline
CTA 1
CTA 2
Featured Song
```

Sprachen:

```text
DE / EN / TR
```

---

## 19.3 Band

Bearbeitbar:

```text
Intro
Haupttext
Kurzbeschreibung
Pressebeschreibung vorbereitet
Hero-Bild
Veröffentlichungsstatus
```

---

## 19.4 Mitglieder

Bearbeitbar:

```text
Name
Instrument
Bild
Kurz-Bio
Lang-Bio
Reihenfolge
Sichtbarkeit
```

Bereich global ein-/ausblendbar.

---

## 19.5 Musik

Bearbeitbar:

```text
Songtitel
Audiodatei
Cover
Status
Sichtbarkeit
Reihenfolge
Featured Song
```

Kein Download-Button.

---

## 19.6 Galerie

Bearbeitbar:

```text
Bilder hochladen
Titel
Beschreibung
Alt-Text
Kategorie
Reihenfolge
Sichtbarkeit
```

---

## 19.7 Videos

Bearbeitbar:

```text
Plattform
URL
Vorschaubild
Titel
Beschreibung
Sichtbarkeit
Reihenfolge
Consent-Hinweis
```

---

## 19.8 Shows

Bearbeitbar:

```text
Datum
Uhrzeit
Stadt
Land
Location
Beschreibung
Status
Ticketmodus
Externer Ticketlink
Sichtbarkeit
```

---

## 19.9 Booking

Funktionen:

```text
Anfragen ansehen
Status ändern
Als Spam markieren
Als erledigt markieren
Antwort-Mail öffnen
```

Nicht nötig im MVP:

```text
vollständiges CRM
interne Kommentare
Dateianhänge
```

---

## 19.10 Plattformen

Bearbeitbar:

```text
Spotify URL
YouTube URL
Instagram URL
Facebook URL
SoundCloud URL
Bandcamp URL
```

Regel:

```text
URL leer = nicht anzeigen
URL gesetzt + aktiv = anzeigen
```

---

## 19.11 SEO

Bearbeitbar:

```text
Seitentitel
Meta Description
OpenGraph-Bild
Noindex
```

Pro Seite und Sprache.

---

## 19.12 Rechtliches

Nur `owner`.

Bearbeitbar:

```text
Impressum
Datenschutz
Cookie-Hinweise
Consent-Texte
```

---

## 19.13 Einstellungen

Bearbeitbar:

```text
Website-Name
Default-Sprache
Kontakt-E-Mail
Booking-E-Mail
Logo
Favicon
Footer-Text
Wartungsmodus
```

---

## 19.14 Admin-Nutzer

Nur `owner`.

Funktionen:

```text
Admin einladen
Rolle ändern
Account deaktivieren
Letzten Login sehen
```

---

# 20. Rollenrechte

## 20.1 Owner

Darf alles:

```text
Alle Inhalte bearbeiten
Rechtliches bearbeiten
Admin-Nutzer verwalten
SEO bearbeiten
Booking ansehen
Medien löschen
Plattformlinks ändern
Einstellungen ändern
Später Shop/Tickets verwalten
```

---

## 20.2 Admin

Darf:

```text
Startseite bearbeiten
Band bearbeiten
Mitglieder bearbeiten
Musik bearbeiten
Galerie bearbeiten
Videos bearbeiten
Shows bearbeiten
Booking ansehen
Plattformlinks bearbeiten
SEO bearbeiten
```

Darf nicht:

```text
Rechtliches bearbeiten
Admin-Nutzer verwalten
technische Einstellungen ändern
API-/Mail-Konfiguration ändern
```

---

## 20.3 Editor

Später optional.

Darf:

```text
Inhalte vorbereiten
Bilder hochladen
Shows vorbereiten
```

Darf nicht:

```text
veröffentlichen
löschen
Booking sehen
SEO ändern
Rechtliches ändern
Admins verwalten
```

---

# 21. Supabase-Sicherheitsregeln

## Pflicht

```text
RLS auf allen Tabellen aktivieren
Public Read nur für veröffentlichte Inhalte
Admin Write nur für aktive Admins
Owner-Rechte separat prüfen
Service Role Key niemals im Browser
Storage Buckets sauber trennen
Uploads serverseitig validieren
Resend API Key nur serverseitig nutzen
```

---

## Tabellenzugriff grob

| Tabelle | Öffentlich lesbar | Admin schreibbar | Owner-only |
|---|---:|---:|---:|
| `site_settings` | teilweise | ja | technische Felder |
| `platform_links` | aktive Links | ja | nein |
| `legal_pages` | veröffentlichte | nein | ja |
| `hero_sections` | aktive | ja | nein |
| `band_pages` | veröffentlichte | ja | nein |
| `band_members` | sichtbare | ja | nein |
| `songs` | sichtbare/streambare | ja | nein |
| `media_items` | sichtbare | ja | nein |
| `videos` | sichtbare | ja | nein |
| `shows` | sichtbare | ja | nein |
| `booking_requests` | nein | lesen/bearbeiten | nein |
| `seo_entries` | ja | ja | nein |
| `admin_profiles` | nein | nein | ja |

---

# 22. Storage-Struktur

## Buckets

```text
public-media
audio-demos
admin-private
press-assets
```

## `public-media`

Für:

```text
Logo
Favicon
Galeriebilder
Hero-Bilder
Bandbilder
Vorschaubilder
```

Öffentlich lesbar, aber nur Admins dürfen hochladen.

---

## `audio-demos`

Für:

```text
Demo-Songs
```

Regeln:

```text
öffentlich streambar
kein Download-Button
Upload nur Admin
Dateigröße begrenzen
Dateityp prüfen
```

---

## `admin-private`

Für spätere interne Dateien.

Nicht öffentlich.

---

## `press-assets`

Für spätere Presse-Downloads.

Noch nicht öffentlich im MVP.

---

# 23. Booking-Mail-Flow mit Resend

## Ziel

Booking-Anfragen werden:

1. validiert
2. gespeichert
3. per E-Mail an `booking@typhoon.band` gesendet
4. im Admin angezeigt

## Empfohlene Mail-Konfiguration

```text
From: Typhoon Website <website@typhoon.band>
Reply-To: E-Mail des Anfragenden
To: booking@typhoon.band
```

Warum?

- verhindert Spoofing-Probleme
- direkte Antwort an Anfragenden möglich
- professioneller Absender

---

# 24. DSGVO-/Consent-Regeln

## Externe Dienste

Folgende Plattformen dürfen verlinkt werden:

```text
Spotify
YouTube
Instagram
Facebook
SoundCloud
Bandcamp
```

### Regel

Normale Links sind unkritischer.  
Embeds dürfen erst nach Consent geladen werden.

## Für MVP empfohlen

- keine Analytics
- keine Marketing-Pixel
- lokale Fonts
- selbst gehostete Demos
- Video-Embeds nur nach Consent
- klare Datenschutzhinweise am Booking-Formular

---

# 25. Nicht ins MVP

Nicht direkt bauen:

```text
Shop
Checkout
Payment
Kundenkonten
Newsletter
Ticket-QR-Scanner
Presse-Downloadbereich sichtbar
vollständiges CRM
automatische Übersetzung
```

Diese Bereiche werden nur vorbereitet.

---

# 26. MVP-Umsetzungsreihenfolge

## Phase 1: Grundsystem

```text
Next.js Projekt
Supabase verbinden
Auth einrichten
Admin-Rollen vorbereiten
Layout/Designbasis
Sprachsystem
```

## Phase 2: Inhalte

```text
Startseite
Bandseite
Musik/Demos
Galerie
Shows
Plattformlinks
Rechtliches
```

## Phase 3: Admin

```text
Login
Dashboard
Content-Editoren
Medien-Upload
Shows-Verwaltung
Booking-Verwaltung
SEO
```

## Phase 4: Booking

```text
Formular
Validierung
Spam-Schutz
Supabase Speicherung
Resend Mailversand
Admin-Status
```

## Phase 5: DSGVO / Launch

```text
Consent-System
Datenschutztexte einpflegen
Impressum prüfen
SEO prüfen
Mobile prüfen
Performance prüfen
Deployment auf typhoon.band
```

---

# 27. Kritische Warnungen für die spätere Umsetzung

## Nicht machen

```text
Admin nur clientseitig schützen
Service Role Key in NEXT_PUBLIC verwenden
Supabase Tabellen öffentlich beschreibbar machen
Uploads ungeprüft erlauben
Rechtstexte hart im Code speichern
Booking-Anfragen nur per E-Mail verschicken
alle Admins über einen gemeinsamen Login nutzen
externe Embeds ohne Consent laden
Audio-Downloads sichtbar anbieten
```

## Muss gemacht werden

```text
RLS sauber konfigurieren
Admin-Rollen serverseitig prüfen
Uploads validieren
Secrets nur in Vercel Environment Variables
Resend-Domain sauber verifizieren
SPF/DKIM/DMARC einrichten
Backup-Strategie für Supabase definieren
rechtliche Inhalte vor Livegang prüfen
```

---

# 28. Nächster Schritt

Als nächstes sollte erstellt werden:

```text
Typhoon Website – Technische Spezifikation v1 für ChatGPT 5.5
```

Diese Spezifikation sollte enthalten:

```text
Projektstruktur
Supabase Tabellen
RLS-Regeln
Admin-Routen
Public-Routen
Komponentenliste
Upload-Regeln
Booking-Mail-Flow
Designsystem
MVP-Umsetzungsreihenfolge
```

Erst danach sollte Code erstellt werden.
