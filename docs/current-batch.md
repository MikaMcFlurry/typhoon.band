# Current Batch – Frontend Fix, Hero Asset, Audio, Content Corrections

## Goal

Implement a focused correction batch for the current Typhoon frontend.

This is not a full rebuild.

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

## Priority

### P0
- use new hero image
- keep large Typhoon logo overlay above hero image
- improve gold palette
- make UI smoother/less boxy
- correct band member data/order
- pass build

### P1
- create demo audio folder
- copy MP3 demos from Drive if available
- wire real audio playback
- update song types/data

### P2
- update README
- update .gitignore
- polish docs only if needed

---

## Required fixes

### 1. New hero image

Use primary hero image:

```text
/public/assets/reference/typhoon-band-hero-new.jpeg
```

Fallbacks:

```text
/public/assets/reference/typhoon-band-hero-new.jpg
/public/assets/reference/typhoon-band-hero.jpg
/public/assets/reference/typhoon-band-hero.jpeg
```

The new image already includes:
- singer Typhoon in color
- rest of the band in sepia/grunge look
- no text inside the image

Do not generate a new hero image in code.

### 2. Hero logo overlay

The Typhoon handwritten logo must remain a separate overlay layer.

Requirements:
- absolute positioned
- high z-index
- above the hero image
- gold/cream look
- subtle glow/drop-shadow
- large and dominant on desktop
- responsive on tablet/mobile
- never buried under gradients
- not placed as normal inline content
- header logo remains smaller and separate

### 3. Color correction

Replace yellow-looking accents with refined gold/champagne/bronze.

Use the rules in:

```text
docs/typhoon-design-system.md
```

Gold should feel premium and warm, not bright yellow.

### 4. Smoother UI

Make UI surfaces smoother:
- rounded premium cards
- softer borders
- pill buttons
- refined shadows
- subtle inner light
- polished glass/bronze panels

Reduce:
- harsh rectangular card grids
- cheap yellow outlines
- boxy layouts

### 5. Demo audio

Create or verify:

```text
/public/assets/audio/demos/
```

Add a README.md inside this folder if it does not exist.

The source MP3 files may be available in Google Drive:

```text
Musik/Typhoon/Demos
```

Use the MP3 files directly if available. Do not convert unless absolutely necessary.

Expected final filenames:

```text
sen-benim.mp3
karanfill.mp3
gece-yine-dustun.mp3
farksilin.mp3
cilgin.mp3
bir-tek-sen.mp3
```

Do not commit raw/non-MP3 audio files.

### 6. Audio player

Update song data/types and player UI so demo songs can be played directly from local MP3 paths.

Requirements:
- HTML audio playback
- local files only
- no download button
- no external player
- no Spotify/SoundCloud embed
- handle missing files gracefully
- one song should play at a time if reasonably possible
- works on homepage teaser and music page

### 7. Band member corrections

Use exact member facts from:

```text
docs/typhoon-content-facts.md
```

Must fix:
- singer is Typhoon, not Taifun
- Schack is Saxophon
- Jürgen is Gitarre
- Daniel must not appear
- singer card first
- 8 musicians represented

### 8. README and .gitignore

Update README.md with:
- new hero image
- demo audio folder
- expected MP3 filenames
- corrected member data
- frontend-only status
- no backend/Supabase/Admin/Resend yet

Update `.gitignore` to block raw audio/project files:

```text
*.wav
*.aiff
*.aif
*.flac
*.m4a
*.logicx
*.als
*.band
```

Allow MP3 demo files:

```text
!public/assets/audio/demos/*.mp3
```

Avoid duplicates.

---

## Before finishing

Run:

```bash
npm run lint
npm run build
```

Fix all errors.

## Final summary

Report:
1. changed files
2. visual fixes completed
3. audio files added/mapped
4. member corrections completed
5. lint/build result
6. what remains intentionally unimplemented
