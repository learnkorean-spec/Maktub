# MAKTUB — Claude Code implementation master prompt

**Project:** maktub (Arabic: مكتوب), a live Arabic-learning platform for international learners.  
**Input source of truth:** `MAKTUB_Complete_Brand_Moodboard_Claude_Code_Handoff.pdf`  
**Artwork:** `maktub_master_moodboard.png`, `homepage_reference.png`, `courses_reference.png`, `tutors_reference.png`, `selected_logo_concept_04.png` in the handoff archive.  
**IMPORTANT:** Visual images are illustrative moodboards, **not verified product data**. Don't carry their invented reviews, metrics, tutor details, dates, prices, or claimed features into production.

## Role and operating procedure

Act as the principal frontend engineer, UX lead, product architect, accessibility specialist and QA owner. Your objective is a **real, conversion-focused, performant, accessible, responsive implementation**, not a static clone of a screenshot. 99/100 is the design aspiration, **not a factual score** or a reason to claim a measured result.

1. **Inspect before building.** Determine whether this folder already contains a working project; inspect package metadata, git status, routes, styles, reusable components, credentials and integration providers. Reuse suitable existing infrastructure instead of replacing it by default. Do not commit secrets.
2. Give a brief build plan with current-state findings, milestones and business-data blockers. Make reasonable reversible technical decisions. Ask only for blockers that cannot be solved safely.
3. Implement in small integrated increments. Run lint, type-check, automated tests and build after each milestone. Inspect actual rendered pages at desktop and mobile widths. Fix failures before claiming success.
4. Finish with a route map, screenshots, tests, actual working integrations, pending configuration, deployment steps and a concise changelog. Separate what works from mock/demo mode.

## Brand lock

- **Written brand:** `maktub` (lowercase Latin / Franco-Arabic). Secondary Arabic: `مكتوب`. Do **not** change to `Maktoub`, `Maktub`, `Nafham` or another brand without approval.
- **Selected logo:** concept #4: bold, soft, modern, dark-green/black abstract **M** letterform with a distinctive lime-green circular dot/accent and compact `maktub` wordmark. Tagline: **ARABI MADE SIMPLE.** Rebuild as clean original vector SVG rather than using the screenshot crop as the shipping logo. It must be readable at 24px and in an app icon. Prepare horizontal, compact, light, dark, mono exports.
- **Design tokens:** primary neon lime `#B6FF00`; deep forest `#0B2D1F`; ink `#061B17`; ivory `#FFF9EC`; sand `#EADFCB`; sage `#6B8F5B`; terracotta `#C47F5A`; white `#FFFFFF`.
- **Colour usage:** Neon lime for high-emphasis CTA, active selection, learning progress and micro highlights. Deep forest for premium high-contrast hero and select panels. Ivory/white on informational surfaces. Use **dark text on lime** and never use neon-on-ivory for body text. Avoid excessive glow and WhatsApp icon/mark imitation.
- **Typography:** Plus Jakarta Sans for headings, Inter for interface/body, Noto Sans Arabic or Cairo for Arabic script. Use accessible font fallbacks, language tagging and proper RTL.
- **Brand voice:** Human, conversational, confident, welcoming; not a luxury hotel, not a tourist agency, not a children's game. Egyptian Arabic first without excluding other real dialects.
- **Hero English copy:** `Speak real Arabic. Connect for real.`  
  Subheading: `Learn Egyptian Arabic, Modern Standard Arabic and other supported dialects in live classes with native-speaking tutors.`  
  Primary CTA `Book a trial class`; secondary CTA `Explore dialects`.
- **Franco-Arabic accent:** `Ehki Arabi. B'sara7a.` and `Ahlan fi maktub` may appear in selected accent copy. The language team must review spellings before publication. Franco/Arabizi should not replace native Arabic script in teaching material.

## Product positioning

The differentiator is a streamlined pathway from **dialect selection -> genuine tutor discovery -> actual booking -> practical live speaking**. Authentic native voices and clear expectations beat inflated badges or decorative travel content. This is live teaching, not an app that simply claims to teach by itself.

**Primary learner segments:** absolute beginners, travellers and expatriates, family/heritage learners, and work/study learners. Help people distinguish *spoken dialects* from formal Modern Standard Arabic. Never treat all regional varieties as one uniform accent.

## Required MVP routes

1. `/` — **Homepage**: responsive sticky navigation, powerful hero with permissioned genuine tutor imagery, CTA, audio/sample opportunity, dialect selector, three-step how-it-works section, selected real teachers, learner FAQ, footer and repeated appropriately placed conversion opportunity. A mobile fixed/sticky booking CTA must not cover other actions.
2. `/courses` — **Courses & Dialects**: dialect choices and goals; genuine course cards showing what the user will learn, level, format and tutor availability; filtering by dialect/goal/level where real records exist; URL-query-synchronised filter; sample audio with transcript/translation; stateful reset and empty states; course-detail link if inventory exists. Launch only supported dialects.
3. `/tutors` — **Tutors & Trial Booking**: filter by dialect and real availability; verified, consented tutor photo, public biography, relevant teaching credentials, native languages and teaching focus; sample introduction video when available; tutor detail and prominent real booking CTA.
4. `/book-trial` — **Shareable booking route or accessible flow**: steps are dialect/objective -> tutor/actual availability -> time and displayed timezone -> accurate lesson length and price/policy -> contact details -> conditional payment -> provider-verified confirmation. The path must recover from unavailable slots and third-party errors. It must be possible to open directly, with or without preselected parameters.

MVP navigation should only display working pages or meaningful on-page anchors. Hide/defer `Resources`, `Pricing`, community, course progress and lessons until the content and functionality exist.

## Desktop/mobile design standards

- Design for widths 360, 390, 768, 1024 and 1440px; 12-column maximum 1280px desktop; 4-column mobile; consistent 8px spacing system and cards with ~12-24px radius.
- Desktop home hero: split storytelling photo + legible large heading + two CTAs; evidence-based benefits. Other sections stay calmer and mostly light.
- Mobile: priority order heading, core promise, trial CTA, small image/proof; horizontal scrollable dialect pills with accessible focus; one-column bookings; safe-area aware sticky CTA; no horizontally clipped content.
- Functional states: hover, focus-visible, pressed, loading, disabled, error, empty, success for relevant components. Skeleton placeholders for slow real queries.
- Animations: subtle and interruptible, honor reduced-motion.
- Images: actual consented tutor portraits, curated documentary-style context and local/regional specificity. Always use properly licensed files, optimised responsive sizes and informative alt text.
- No layouts composed as a single flattened background image. Make real semantic HTML components.

## UI component inventory

Create a reusable set: `SiteHeader`, `SiteFooter`, `PrimaryCTA`, `MobileStickyCTA`, `Hero`, `DialectSelector`, `DialectCard`, `CourseCard`, `CourseFilters`, `DialectAudioSample`, `TutorCard`, `TutorFilter`, `TutorDetail`, `VideoPreview`, `HowItWorks`, `TrialBookingStepper`, `TimezoneSelector`, `AvailabilityPicker`, `PolicySummary`, `BookingConfirmation`, `FAQ`, `FormField`, `AccessibleDialog`, `Toast`, `LoadingSkeleton`, `ErrorState`, `EmptyState`, `CookieConsent`.

Use the design tokens centrally (CSS custom properties, Tailwind theme where appropriate). Avoid one-off arbitrary colours or duplicated component implementations.

## Technical defaults (only if repository does not dictate otherwise)

- Next.js App Router + TypeScript + Tailwind CSS. SSR/SSG for marketing/SEO content, controlled client components for filters and scheduling. Use Next font optimisation and image handling.
- Supabase Postgres + Auth + Storage with restrictive Row Level Security. Public published catalogue is readable; private learner and booking records require authorised access.
- Cal.com for actual scheduling as the MVP source of truth, via documented embeddable booking or supported API. No generated fake availability or silent double-booking. Build provider adapters instead of coupling every UI component to one external service.
- Stripe Checkout for paid lessons **only after the merchant entity, real prices, supported currency, tax and cancellation rules are supplied and approved**. Verify server-side webhooks; confirmation should never depend solely on a redirect URL.
- Verified transactional email delivery for booking confirmation, rescheduling and cancellation. Marketing opt-in must be separate and explicit.
- Error logging (not PII-heavy), privacy-safe analytics and a documented production environment variables file.

## Minimum data model

Implement typed representations (with migrations only when appropriate) for:

- `dialects`: slug, display name, publication status, description, region examples, samples.
- `courses`: dialect reference, public slug, supported level, learning goals, format, outcomes, publication status, real pricing reference.
- `tutors`: consented display name/photo, biography, verified credentials, spoken/teaching dialects, availability provider reference, publication status.
- `tutor_dialects`: tutor-to-dialect association, specificity and proficiency.
- `lesson_types`: real duration, trial policy, payment requirement, scheduling-provider mapping.
- `booking_records`: opaque provider ID, tutor/learner, timestamp stored in UTC, original timezone label, policy version, state, server-side metadata.
- `leads` and `consent_records`: purpose, permission, source, timestamp, retention/deletion controls.
- `learning_progress`: **P1 only**, after actual lessons and dashboard exist.

Booking states should include `draft`, `pending_confirmation`/`pending_payment`, `confirmed`, `completed`, `cancelled` and error/reconciliation states; webhook handling must be idempotent.

## Data integrity, trust and compliance: non-negotiable

**Never create or publish fictional** ratings, 2,000+ students, tutor profiles, review counts, testimonials, star scores, certificates, prices, available appointments or learner dashboards. These may be shown as **prominently labelled DEMO fixtures in local development only**, never as live evidence. Show an honest empty or coming-soon alternative if no data exists.

Business settings required before production: dialect/course inventory, tutor roster, prices and currency, trial duration/free-or-paid policy, cancellation/rescheduling rules, legal merchant entity and jurisdiction, payment provider status, genuine availability, legal pages, domain/trademark clearance, image releases and content approval by native speakers.

## Arabic-language quality

Store phrase variants with `arabic_script`, `latin_transliteration`, `english_translation`, `dialect_slug`, `audio_url`, `speaker_credit`, and editorial review status. Preserve native script and correctly directioned content: `lang="ar" dir="rtl"`, with isolated Latin numbers/URLs as needed. Support English first; add full Arabic localisation only when copy is reviewed. Proper pronunciation and transliteration are pedagogical data, not arbitrary LLM guesses.

## Analytics + SEO

Instrument the funnel with `dialect_filter_used`, `sample_audio_played`, `course_viewed`, `tutor_profile_viewed`, `trial_cta_clicked`, `calendar_opened`, `slot_selected`, `booking_details_submitted`, `checkout_started` (when paid), `booking_confirmed` (only after genuine confirmation), and `lesson_attended` (if recorded). Include page, route, selected dialect, anonymous session and attribution only in consent-compliant ways.

Add unique page titles, descriptions, semantic H1/H2 structure, metadata and OpenGraph visuals, sitemap, canonical URLs, internal linking, language tagging, and relevant structured data only for genuine entities. Build content opportunities around real questions: Egyptian versus MSA, choosing an Arabic dialect, Egyptian greetings, travel Arabic and audio-backed everyday conversations.

## Accessibility and performance quality gates

- WCAG 2.2 AA target: minimum 4.5:1 for ordinary text, 3:1 for large text, visible focus, complete keyboard flow, meaningful form errors, labels, accessible dialog focus trapping, sensible touch targets, audio transcript and video captions.
- Responsive QA at 360/390/768/1024/1440; test 200% zoom and Arabic RTL areas.
- Performance targets: p75 LCP <= 2.5 seconds, CLS <= 0.1, INP <= 200ms on representative real or lab instrumentation, not as unverified promises.
- Web security: server validation, parameterised data operations, RLS, CSRF/payment-provider review, secret storage, rate limiting on public submissions, abuse protection and consent-aware logging.

## Delivery stages

**Stage 1:** repo audit, setup, fonts, logo vector, tokens, shared layout components, homepage.  
**Stage 2:** Courses/Dialects and Tutors pages with real semantic filters and honest seed-state handling; trial stepper; mobile.  
**Stage 3:** database/auth/RLS, live Cal.com bookings and confirmation email, optional real approved Stripe payments.  
**Stage 4:** SEO, analytics, GDPR/consent pages, E2E and accessibility tests, performance and cross-browser QA, deployment documentation.

Do not mark any stage completed until its testable deliverables actually work. If credentials are missing, implement typed provider abstraction and document the missing environment values rather than simulating production success.

## Final deliverables

1. Full source and production build; pages `/`, `/courses`, `/tutors`, `/book-trial` and accessible responsive navigation.
2. Original logo exports as SVG, PNG and favicon; design token documentation.
3. Functional filter, real-data tutor and book-trial components; correct empty/error/loading/success states.
4. Data migrations, RLS policies, integration abstractions, seed fixtures **only as development demo**.
5. `README.md` with setup, `.env.example`, provider configuration, scripts, testing and deployment.
6. QA evidence: commands and results for lint/typecheck/unit/E2E/build; screenshots at all target widths; accessibility/performance findings and unresolved issues.
7. A matrix of configured vs missing business inputs and all content requiring human/native-speaker approval.

**Do not stop at a static design. Deliver the most complete real working implementation possible with transparent blockers and no unsupported launch claims.**

## Recommended source documentation

- Next.js App Router: https://nextjs.org/docs/app
- Supabase Auth + RLS: https://supabase.com/docs/guides/auth
- Cal.com booking embed: https://cal.com/embed
- Stripe Checkout: https://docs.stripe.com/payments/checkout/quickstarts
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
