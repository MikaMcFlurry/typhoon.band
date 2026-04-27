# Typhoon Technical Plan v2

## Current stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- GitHub
- Vercel
- Supabase later
- Resend later

## Current phase

Frontend-only.

No:
- Supabase
- Auth
- Admin
- Database
- Resend
- real mail sending
- shop
- analytics
- external embeds

## Future backend direction

When backend work starts later:

- Supabase Auth for admin accounts
- Supabase Postgres for content, shows, songs, booking requests, SEO, legal content
- Supabase Storage for uploads/media
- Resend for booking emails
- Vercel environment variables for secrets

## Admin roles planned later

```text
owner
admin
editor
```

MVP later:
- owner
- admin

## Security rules for later

- Supabase RLS on all relevant tables
- no service role key in browser
- no secrets in frontend
- server-side admin protection
- upload validation
- rate limiting for forms
- no external embeds without consent
- legal pages editable only by owner

## Future data areas

- site settings
- platform links
- legal pages
- hero content
- band pages
- band members
- songs
- media/gallery
- videos
- shows
- booking requests
- SEO
- consent settings
- press assets later
- shop/tickets later

## Current frontend data

Static data may exist in:

```text
src/data/members.ts
src/data/songs.ts
src/data/shows.ts
src/data/platform-links.ts
```

These should remain easy to replace with Supabase later.
