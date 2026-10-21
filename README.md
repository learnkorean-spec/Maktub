# maktub (مكتوب)

Live Arabic-learning platform for international learners. Brand: `maktub`
(Latin/Franco-Arabic), secondary Arabic `مكتوب`. Tagline: **Arabi made
simple.**

Source of truth for brand/product decisions:
[`docs/brand/MAKTUB_CLAUDE_CODE_MASTER_PROMPT.md`](docs/brand/MAKTUB_CLAUDE_CODE_MASTER_PROMPT.md).
The moodboard images in `docs/brand/` are illustrative reference only —
per that file, their invented reviews/metrics/tutor details never belong
in product code (see `src/lib/content.ts`'s comment).

## Status: Stage 1 of 4 (polished)

Per the master prompt's delivery stages, this repo currently has:

- Next.js App Router + TypeScript + Tailwind scaffold
- Design tokens (lime / forest / ink / ivory / sand / sage / terracotta)
  wired as Tailwind theme colors in `src/app/globals.css`
- Fonts: Plus Jakarta Sans (headings), Inter (body), Cairo (Arabic script)
- Original logo (`src/components/Logo.tsx`, static exports in
  `public/brand/`) — a clean placeholder true to the brand spec, not a
  trademark-ready redraw (see note in that file)
- Shared layout: `SiteHeader` (with mobile hamburger nav + skip link),
  `SiteFooter`, `PrimaryCTA`, `MobileStickyCTA`
- Homepage (`/`) — hero, dialect picker, how-it-works, tutor section, FAQ
- `/courses` — real-data course/dialect directory with a working filter
- `/tutors` — Reham's real bio/photo + trial CTA, honest "more tutors
  join as dialects open" placeholder
- `/articles` + `/articles/[slug]` — 3 real, non-invented articles
- `/book-trial` — redirects straight to the real trial-booking widget
- Real trial booking: every "Book a trial" CTA links to Reham's live
  `PersonalTrialBooking` widget on `kloversegy.com/learn-arabic#trial-booking`
  (Supabase-backed slots + WhatsApp fallback) — maktub has no booking
  backend of its own, so this links out rather than faking a calendar
- `not-found.tsx` — branded 404 (was the bare Next.js default)
- SEO: `sitemap.ts`, `robots.ts`, per-page metadata, a generated OG/
  Twitter-card image (`opengraph-image.tsx`)
- Accessibility: skip-to-content link, mobile nav keyboard/focus support
- Images: AVIF/WebP via `next/image`, `priority`/`sizes` tuned per image

Not yet built: live booking/payments/auth of its own, a database,
analytics instrumentation, a full accessibility/performance audit pass.
These are Stages 2–4 in the master prompt and are blocked on the
business inputs below for anything beyond the current polish.

## Local development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npx eslint .    # lint
npx tsc --noEmit  # typecheck
```

`npm audit` currently reports 5 high-severity findings, all in
`eslint-config-next`'s transitive `braces`/`micromatch`/`fast-glob`
dependency chain — a lint-time devDependency only, never bundled into
the shipped site. `npm audit fix --force` would downgrade
`eslint-config-next` to `14.2.35` (a breaking change against Next 16's
lint rules), so this is left as-is rather than risking the build
pipeline right before a launch; worth revisiting once there's time to
verify the downgrade doesn't break lint.

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

This is a separate Vercel project (`maktub`) from the `klovers` repo/
project, pointed at `mkatub.kloversegy.com`. The project and domain are
already set up; `mkatub.kloversegy.com` has appeared as a `READY` alias
on recent production deployments, so the CNAME is believed to have
resolved — if it ever looks unresolved again, that was last deferred by
the user's own instruction ("ignore this now") pending their own DNS/
registrar access, not something to re-investigate unprompted.

## Relationship to the `klovers` repo — do not redirect `/learn-arabic`

`kloversegy.com/learn-arabic` (in the `learnkorean-spec/klovers` repo) is
**not** legacy copy to be superseded. It is the one real, already-live
trial-booking system — Reham's `PersonalTrialBooking` widget, backed by
a real Supabase `personal_trial_slots` table with a WhatsApp fallback.
maktub has no booking backend of its own.

An earlier pass in this project briefly redirected `/learn-arabic` to
maktub and then reverted it on realizing this would have broken the only
real booking flow in production. The correct, current architecture is
the opposite direction: maktub's CTAs link **out to**
`kloversegy.com/learn-arabic#trial-booking` (see `TRIAL_BOOKING_URL` in
`src/lib/content.ts`). **Never add a redirect that sends `/learn-arabic`
or `/ar/learn-arabic` away from klovers** unless a human explicitly
decides klovers' own booking system is being retired and replaced with
something equivalent — that hasn't happened.
