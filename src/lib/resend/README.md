# Resend placeholder

No Resend client and no real booking email delivery are implemented in Batch 1.

Planned later integration:

- Server-side booking action or route handler
- Validation and rate limiting
- Email delivery to `booking@typhoon.band`
- Optional persistence of booking requests in Supabase

Security note: `RESEND_API_KEY` must only be used server-side and must never be exposed to the browser.
