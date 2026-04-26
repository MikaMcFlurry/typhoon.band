# Supabase placeholder

No Supabase client, schema, Auth logic, Storage logic, database tables or RLS policies are implemented in Batch 1.

Planned later integration:

- Supabase Auth for the admin area
- Postgres tables for content, shows, media and booking requests
- Storage buckets for images and audio
- RLS policies for safe admin and public access

Security note: `SUPABASE_SERVICE_ROLE_KEY` must only be used server-side. It must never be exposed through `NEXT_PUBLIC_*` variables or browser bundles.
