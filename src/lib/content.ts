/**
 * Real-data-only content for the homepage.
 *
 * Per the brand/master prompt's integrity rule, nothing here is invented:
 * no fake star ratings, no "2,000+ students," no tutors or dialects that
 * aren't actually running yet. Items not yet confirmed are marked
 * `status: "coming-soon"` and rendered as an honest disabled state rather
 * than left out silently or faked in.
 *
 * TODO (business-data blocker — see README "Configured vs missing"
 * matrix): confirm final dialect roster, pricing, and whether any other
 * tutors join besides Reham before this goes further than Stage 1.
 */

/**
 * maktub has no booking backend of its own (no Supabase project, no
 * Cal.com) — see the README's business-data blocker table. Rather than
 * fake a calendar, every "Book a trial" CTA links to the one real,
 * already-live trial-booking system: Reham's PersonalTrialBooking widget
 * on kloversegy.com/learn-arabic, wired to real availability
 * (personal_trial_slots) with a WhatsApp fallback if no time works. The
 * `#trial-booking` anchor was added there on 2026-10-20 specifically so
 * this link lands on the widget, not the top of the page.
 */
export const TRIAL_BOOKING_URL = "https://kloversegy.com/learn-arabic#trial-booking";

/**
 * Reham's bio facts, pulled from her existing, already-public page at
 * kloversegy.com/learn-arabic (src/pages/LearnArabicPage.tsx in the
 * klovers repo) on 2026-10-20 — not re-derived or invented for maktub.
 */
export const tutor = {
  name: "Reham Elshrkawy",
  photo: "/tutors/reham.jpg",
  dialects: "Egyptian Arabic · Modern Standard Arabic",
  quote:
    "I know exactly where a translation breaks down between languages: the same gap that makes textbook Arabic feel nothing like real use.",
  bio: "A native Egyptian Arabic speaker who has spent years explaining languages across cultures: Korean-Arabic interpreting, international operations, and teaching students in more than fifteen countries. She also founded and runs Klovers, an online academy teaching Korean since 2013. Whether you need Modern Standard Arabic for reading, writing and formal use, or real spoken Egyptian dialect for conversation, she'll help you find what matches your goal.",
};

export type DialectStatus = "available" | "coming-soon";

export interface Dialect {
  slug: string;
  name: string;
  arabicName: string;
  description: string;
  status: DialectStatus;
  /**
   * Location/atmosphere photography (public/photography/) tied to where
   * each dialect is spoken — not a tutor photo, and never a specific
   * claimed student/review (still none of those exist — see the integrity
   * rule above).
   *
   * 2026-10-20 (Re, explicit): these now include people in the scene
   * (friends/learners chatting, not posed "testimonial" shots), overriding
   * this file's earlier "never show people" note. Re's reasoning: Reham
   * has had real students for years, so a lived-in scene with people
   * doesn't misrepresent anything — it's still not a specific claimed
   * review or enrollment count, just ambiance.
   */
  image: string;
  imageAlt: string;
}

export const dialects: Dialect[] = [
  {
    slug: "egyptian",
    name: "Egyptian Arabic",
    arabicName: "مصري",
    description:
      "Real spoken Egyptian dialect: how people actually talk, and the dialect most widely understood across the Arab world thanks to Egyptian film and TV.",
    status: "available",
    image: "/photography/egyptian-cairo-rooftop-study.jpg",
    imageAlt: "Friends chatting on a Cairo rooftop at sunset, minarets and the pyramids on the skyline",
  },
  {
    slug: "msa",
    name: "Modern Standard Arabic",
    arabicName: "الفصحى",
    description:
      "The formal, written register: reading, writing, religious texts, media, and official documents. The same everywhere in the Arab world.",
    status: "available",
    image: "/photography/msa-marrakech-rooftop.jpg",
    imageAlt: "Two people talking on a riad terrace overlooking a Marrakech skyline at golden hour",
  },
  {
    slug: "levantine",
    name: "Levantine Arabic",
    arabicName: "شامي",
    description: "Syria, Lebanon, Jordan and Palestine.",
    status: "coming-soon",
    image: "/photography/levantine-sunset-mosque.jpg",
    imageAlt: "Two people talking on a stone terrace overlooking a Levantine old-city skyline at sunset",
  },
  {
    slug: "gulf",
    name: "Gulf Arabic",
    arabicName: "خليجي",
    description: "Saudi Arabia, the UAE, Kuwait and beyond.",
    status: "coming-soon",
    image: "/photography/gulf-dubai-skyline.jpg",
    imageAlt: "People talking on a terrace with a Gulf city skyline at dusk",
  },
];

export const howItWorks = [
  {
    title: "A free intro call",
    body: "Tell us your goal (Fusha, Egyptian dialect, or both) and where you're starting from. Zero is completely fine.",
  },
  {
    title: "Matched with a native tutor",
    body: "Live, one-on-one or small-group classes with a tutor who actually speaks the dialect you want, explained in English first.",
  },
  {
    title: "Built around what you need",
    body: "Travel, work, family, exams, or everyday conversation: lessons follow your actual goal, not a fixed textbook order.",
  },
];

export const faq = [
  {
    q: "What's the difference between Modern Standard Arabic (Fusha) and a spoken dialect?",
    a: "Fusha is the formal, written Arabic used in media, religious texts and official documents, and it's the same everywhere in the Arab world. A spoken dialect (Egyptian, for example) is how people actually talk day to day. Many learners study both; your tutor will help you find the right mix for your goal.",
  },
  {
    q: "Do I need to know any Arabic already to start?",
    a: "No, lessons start from zero, whether you're learning Fusha or a spoken dialect.",
  },
  {
    q: "Which dialects are actually available right now?",
    a: "Egyptian Arabic and Modern Standard Arabic are live today. Other dialects are listed as coming soon: we only open a dialect once we have a real native tutor teaching it, not before.",
  },
  {
    q: "Why does \"Book a trial class\" take me to kloversegy.com?",
    a: "maktub is Reham's Arabic-teaching brand, run alongside Klovers, the Korean-teaching academy she's run since 2013. Trial booking lives on Klovers' site because that's where her real, live scheduling already works; you'll land straight on the Arabic trial booking section.",
  },
];
