# CLAUDE.md – Typhoon Website

## Purpose

This file contains durable project rules for Claude Code.

Claude should always read this file before implementing changes.

## Project

Typhoon band website.

The website is a custom, premium, cinematic band website for Typhoon with:
- public frontend
- later password-protected admin area
- later Supabase backend
- later Resend booking mail
- later shop/ticket preparation

## Current phase

Current phase: frontend/design/audio correction.

Do not implement yet:
- Supabase
- Auth
- Admin
- Database
- Resend
- Mail sending
- Shop
- Analytics
- External embeds

Only implement backend work when explicitly instructed in a future batch.

---

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- GitHub
- Vercel
- Supabase later
- Resend later

## Quality requirements

Before finishing implementation work:

```bash
npm run lint
npm run build
```

Fix:
- build errors
- TypeScript errors
- unused imports
- broken links
- obvious asset path problems
- horizontal mobile overflow

Do not add heavy dependencies unless explicitly approved.

---

## Durable documentation rule

Always keep project documentation updated when changing:
- assets
- folders
- environment variables
- integration requirements
- audio/media handling
- setup steps
- project constraints

Always keep:
- `README.md`
- `.gitignore`
- relevant files in `/docs`

updated when necessary.

Avoid duplicate `.gitignore` entries.

---

## Visual identity

The website must feel like a premium cinematic band website:
- dark black / dark brown base
- warm sepia atmosphere
- elegant real gold, not yellow
- smoky concert-poster look
- modern smooth UI
- large dramatic hero image
- handwritten Typhoon logo as an overlay layer above the hero image
- music, live energy, bluesrock/funk/soul atmosphere
- raw but elegant

Avoid:
- generic card website
- harsh yellow
- flat orange
- sharp rectangular boxes everywhere
- cheap grunge overload
- Impact-like cheap typography
- unnecessary UI libraries
- Bootstrap / Material UI / shadcn unless explicitly requested

The logo is the decorative script element. Do not fake this with a cheap display font.

---

## Security and privacy rules for later phases

When backend work starts later:
- no secrets in frontend
- no service role key in browser
- Supabase RLS is mandatory
- admin access must be server-side protected
- uploads must be validated
- Resend API key must be server-side only
- no external embeds without consent
- no analytics without consent

These are not part of the current frontend-only batch unless explicitly requested.

---

## Final response expectation

After each implementation batch, summarize:

1. changed files
2. visual/content fixes completed
3. audio files added/mapped, if applicable
4. member corrections completed, if applicable
5. lint/build result
6. what remains intentionally unimplemented
