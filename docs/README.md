# Typhoon Docs v2

These documents replace older batch documents.

Use this set as the active source of truth:

```text
/CLAUDE.md
/docs/current-batch.md
/docs/typhoon-content-facts.md
/docs/typhoon-design-system.md
/docs/typhoon-assets.md
/docs/typhoon-technical-plan-v2.md
```

## How to use with Claude Code

Use a short prompt:

```text
Read CLAUDE.md and docs/current-batch.md. Execute the current batch exactly as described. Do not implement backend, Supabase, Admin, Resend, database, shop, analytics or external embeds. Run npm run lint and npm run build before finishing.
```

## Important

Do not keep old contradictory batch instruction files in `/docs`, especially if they contain outdated names like Taifun, Jürgen as saxophonist, or Daniel as guitarist.
