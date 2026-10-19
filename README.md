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

Per the full 30-page brand/product blueprint's "Items Claude must never
invent" list (section 26) — these gate anything beyond the current
scaffold, not just polish:

| # | Area | Status |
|---|---|---|
| 1 | Real tutors: profiles, qualifications, spoken dialects, profile images, intro videos — beyond Reham (bio only, no photo) | **Missing** |
| 2 | Product inventory — which of Egyptian / MSA / Levantine / Gulf / Moroccan are actually taught at launch | **Missing** — only Egyptian + MSA marked `available` today |
| 3 | Pricing — free vs. paid trial, duration, lesson packages, currency, invoices, taxes | **Missing** |
| 4 | Scheduling — tutor hours, minimum notice, booking/cancellation/reschedule/holiday rules | **Missing** — `/book-trial` is a placeholder until this exists |
| 5 | Payment entity — registered company, legal merchant of record, Stripe jurisdiction | **Missing** |
| 6 | Hosting + domain — DNS access, email sender, brand/trademark clearance | `mkatub.kloversegy.com` chosen; DNS CNAME + Vercel project linkup still pending (see Deployment below) |
| 7 | Media + language — approved tutor photos, real recordings, native-reviewed dialect copy | **Missing** |
| 8 | Policies — privacy, terms, refunds, student/tutor agreements | **Missing** |
| — | Supabase project | **Missing** — not created yet |
| — | `.env` values | **Missing** — no `.env.example` yet since no provider is wired |

## Reference: full blueprint highlights not yet implemented

Captured from the complete 30-page brand/product PDF (supersedes the
condensed master-prompt `.md` in `docs/brand/` wherever the two differ)
so Stage 2+ work has a real spec to build against instead of re-deriving
it:

- **Brand rule enforced in code:** "NO NEON TEXT ON WHITE" — lime (`#B6FF00`)
  is a fill/background only on light surfaces; dark `ink` text goes on top
  of it, never the reverse. (Fixed 2026-10-20: `HowItWorks` numerals were
  lime-on-white; now ink-on-lime pill badges.)
- **Route map (priority order):** `/` → `/courses` (Courses & Dialects) →
  `/tutors` (Tutors & Trial) → `/book-trial` (conversion stepper). Only
  Home and a `/book-trial` placeholder exist; `/courses` and `/tutors` are
  the actual Stage 2 targets, not `/book-trial` polish.
- **UI tokens:** 12-col desktop / 8 tablet / 4 mobile grid, max content
  width 1280px; 8px spacing baseline (4/8/12/16/24/32/48/64/96); radii
  12/18/24px, pills capped at 999px (no arbitrary curves); type scale H1
  56–72px / H2 40px / H3 28px, body 16–18px, labels 14px, line-height
  1.4–1.55; every interactive component needs default/hover/active/
  disabled/loading/error/empty/success states.
- **Component library to build once (reused across pages):** Marketing —
  Navbar, Hero, DialectTile, TutorPreview, HowItWorks, FAQ, Footer.
  Discovery — DialectFilter, GoalFilter, CourseCard, CourseCompare,
  AudioPlayer. Trust — TutorCard, VerifiedProfileFields, IntroVideo,
  ReviewDisplay (real only). Conversion — TrialCTA, TimezonePicker,
  SlotPicker, BookingStepper, PaymentGate. System — Dialog, Toast,
  Skeleton, EmptyState, ErrorBoundary, ConsentBanner.
- **Data schema (Supabase/Postgres, RLS-gated):** `dialects` (slug,
  display_name, locale, description, published, hero_media); `courses`
  (dialect_id, level, outcomes, price_ref, publication_state); `tutors`
  (public_name, portrait, bio, credentials, verification_status);
  `tutor_dialects` (tutor_id, dialect_id, proficiency,
  availability_priority); `lesson_types` (title, duration, payment_policy,
  provider_event_type_id); `booking_records` (tutor_id, learner_id/email,
  UTC start, status, provider_id); `leads`/consent (email, purpose,
  consent_timestamp, source, retention_policy); `lesson_progress` [P1].
  Public catalog readable anonymously; learner booking/contact data
  visible only to its owner and authorised admin — never client-side
  authorization alone.
- **Booking state machine:** draft → slot_selected → pending_payment /
  pending_confirmation → confirmed → completed/cancelled, with
  reconciliation on failure. Webhooks must verify signature, dedupe event
  IDs, and be idempotent. Error UX: no slots → show alternatives; provider
  down → "try later"; payment cancelled → never show success; duplicate
  request → stable message, not a second booking.
- **Accessibility target:** WCAG 2.2 AA — body contrast ≥4.5:1, large
  text ≥3:1, 44px touch targets, form errors tied to inputs (never
  colour-only), captions/transcripts on every tutor audio/video sample,
  correct `lang`/`dir` annotation, functional at 200% zoom and with
  reduced motion.
- **SEO:** SSR'd HTML, canonical tags, descriptive titles, XML sitemap,
  OpenGraph/social cards; unique pages per real course (no thin pages for
  untaught dialects); English-first launch, true RTL + `lang`/`hreflang`
  only for pages that are actually localised; structured data only for
  real Organization/Course/FAQ facts — never invented review ratings.
- **Build sequence (4 sprints) per the blueprint:** 1) Foundation — tokens,
  logo, header, shared components, content model (= what's done here). 2)
  Three core pages — Courses filters/URLs, native audio, tutor directory +
  detail, booking UI states, mobile QA. 3) Real integrations — Supabase +
  RLS, Cal.com live availability, transactional email, payments if
  approved, webhook reliability. 4) Release quality — SEO, accessibility,
  localisation, E2E flows, analytics/consent, performance, production
  deploy.
- **Analytics events (names to use verbatim when instrumented):**
  `dialect_filter_used`, `course_card_opened`, `sample_audio_played`,
  `view_tutors`, `tutor_filter_used`, `tutor_profile_viewed`,
  `trial_cta_clicked`, `calendar_opened`, `slot_selected`,
  `details_submitted`, `checkout_started`, `booking_confirmed`,
  `lesson_attended`, `next_lesson_booked`, `feedback_submitted` (only if
  real). No analytics wired yet.

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
