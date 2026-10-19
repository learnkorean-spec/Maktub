# mkatub (مكتوب)

Live Arabic-learning platform for international learners. Brand: `mkatub`
(Latin/Franco-Arabic), secondary Arabic `مكتوب`. Tagline: **Arabi made
simple.**

Source of truth for brand/product decisions:
[`docs/brand/MKATUB_CLAUDE_CODE_MASTER_PROMPT.md`](docs/brand/MKATUB_CLAUDE_CODE_MASTER_PROMPT.md).
The moodboard images in `docs/brand/` are illustrative reference only —
per that file, their invented reviews/metrics/tutor details never belong
in product code (see `src/lib/content.ts`'s comment).

## Status: Stage 1 of 4

Per the master prompt's delivery stages, this repo currently has:

- Next.js App Router + TypeScript + Tailwind scaffold
- Design tokens (lime / forest / ink / ivory / sand / sage / terracotta)
  wired as Tailwind theme colors in `src/app/globals.css`
- Fonts: Plus Jakarta Sans (headings), Inter (body), Cairo (Arabic script)
- Original logo (`src/components/Logo.tsx`, static exports in
  `public/brand/`) — a clean placeholder true to the brand spec, not a
  trademark-ready redraw (see note in that file)
- Shared layout: `SiteHeader`, `SiteFooter`, `PrimaryCTA`,
  `MobileStickyCTA`
- Homepage (`/`) — hero, dialect picker, how-it-works, tutor section, FAQ
- `/book-trial` — honest "almost ready" placeholder (no fake calendar)

Not yet built: `/courses`, `/tutors`, live booking, payments, auth,
database, SEO/analytics instrumentation, accessibility/performance test
pass. These are Stages 2–4 in the master prompt and are blocked on the
business inputs below for anything beyond scaffolding.

## Local development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npx eslint .    # lint
npx tsc --noEmit  # typecheck
```

## Data integrity rule (non-negotiable, from the master prompt)

Nothing in this codebase invents ratings, student counts, reviews,
tutors, prices, or availability. `src/lib/content.ts` documents which
dialects/tutors are real today (Egyptian Arabic + Modern Standard Arabic,
tutor: Reham) and marks everything else `coming-soon`. Extend that file
honestly as real data arrives — don't hardcode marketing numbers from the
moodboard images, which are illustrative only.

## Configured vs. missing (business-data blockers)

| Area | Status |
|---|---|
| Dialect roster beyond Egyptian + MSA | **Missing** — confirm before adding more `DialectCard`s |
| Tutor roster beyond Reham | **Missing** |
| Pricing / currency / trial policy (free vs. paid) | **Missing** |
| Cancellation / rescheduling rules | **Missing** |
| Legal merchant entity + jurisdiction | **Missing** |
| Scheduling provider (Cal.com account + API) | **Missing** — `/book-trial` is a placeholder until this exists |
| Payment provider (Stripe account, approved) | **Missing** — only pursue after prices/currency/merchant entity are set |
| Domain | `mkatub.kloversegy.com` (subdomain of kloversegy.com — DNS + Vercel project still need wiring, see below) |
| Image releases for tutor photos | **Missing** — no tutor photo shipped here yet |
| Supabase project | **Missing** — not created yet |
| `.env` values | **Missing** — no `.env.example` yet since no provider is wired |

## Deployment (subdomain of kloversegy.com)

This is a separate Vercel project from the `klovers` repo, pointed at
`mkatub.kloversegy.com`:

1. Create a new Vercel project linked to this repo.
2. Add `mkatub.kloversegy.com` as a domain on that Vercel project.
3. In the DNS zone for `kloversegy.com` (wherever it's hosted — check the
   `klovers` repo/Vercel project for the current registrar/DNS provider),
   add the CNAME record Vercel's domain-add flow gives you for `mkatub`.
4. Once `kloversegy.com/learn-arabic` is redirected here (see the
   `klovers` repo), that redirect should point at this domain.

## Relationship to the `klovers` repo

`kloversegy.com/learn-arabic` (in the `learnkorean-spec/klovers` repo)
currently serves a similar purpose — Arabic lessons for foreigners — under
different, Klovers-adjacent branding. Per 2026-10-20 decision: once
`mkatub.kloversegy.com` is live, `/learn-arabic` and `/ar/learn-arabic` in
`klovers` get redirected here. Until then, both pages exist independently.
