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

export type DialectStatus = "available" | "coming-soon";

export interface Dialect {
  slug: string;
  name: string;
  arabicName: string;
  description: string;
  status: DialectStatus;
}

export const dialects: Dialect[] = [
  {
    slug: "egyptian",
    name: "Egyptian Arabic",
    arabicName: "مصري",
    description:
      "Real spoken Egyptian dialect — how people actually talk, and the dialect most widely understood across the Arab world thanks to Egyptian film and TV.",
    status: "available",
  },
  {
    slug: "msa",
    name: "Modern Standard Arabic",
    arabicName: "الفصحى",
    description:
      "The formal, written register — reading, writing, religious texts, media, and official documents. The same everywhere in the Arab world.",
    status: "available",
  },
  {
    slug: "levantine",
    name: "Levantine Arabic",
    arabicName: "شامي",
    description: "Syria, Lebanon, Jordan and Palestine.",
    status: "coming-soon",
  },
  {
    slug: "gulf",
    name: "Gulf Arabic",
    arabicName: "خليجي",
    description: "Saudi Arabia, the UAE, Kuwait and beyond.",
    status: "coming-soon",
  },
];

export const howItWorks = [
  {
    title: "A free intro call",
    body: "Tell us your goal — Fusha, Egyptian dialect, or both — and where you're starting from. Zero is completely fine.",
  },
  {
    title: "Matched with a native tutor",
    body: "Live, one-on-one or small-group classes with a tutor who actually speaks the dialect you want, explained in English first.",
  },
  {
    title: "Built around what you need",
    body: "Travel, work, family, exams, or everyday conversation — lessons follow your actual goal, not a fixed textbook order.",
  },
];

export const faq = [
  {
    q: "What's the difference between Modern Standard Arabic (Fusha) and a spoken dialect?",
    a: "Fusha is the formal, written Arabic used in media, religious texts and official documents, and it's the same everywhere in the Arab world. A spoken dialect — Egyptian, for example — is how people actually talk day to day. Many learners study both; your tutor will help you find the right mix for your goal.",
  },
  {
    q: "Do I need to know any Arabic already to start?",
    a: "No — lessons start from zero, whether you're learning Fusha or a spoken dialect.",
  },
  {
    q: "Which dialects are actually available right now?",
    a: "Egyptian Arabic and Modern Standard Arabic are live today. Other dialects are listed as coming soon — we only open a dialect once we have a real native tutor teaching it, not before.",
  },
];
