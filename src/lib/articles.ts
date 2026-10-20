/**
 * mkatub's own articles — written for this launch (2026-10-20), not
 * imported from klovers. Content is general, factual language-learning
 * guidance; nothing here invents student numbers, reviews, or results.
 * Where it's useful to send a reader to Reham's longer personal story,
 * it links out to the existing, real post on kloversegy.com rather than
 * duplicating or re-writing it.
 */

export interface Article {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // ISO date
  body: string[]; // paragraphs; a string starting with "## " is a subheading
}

export const articles: Article[] = [
  {
    slug: "fusha-vs-egyptian-arabic",
    title: "Fusha vs. Egyptian Arabic: which should you actually learn first?",
    description:
      "Modern Standard Arabic and spoken Egyptian dialect serve different goals. Here's how to tell which one matches yours.",
    publishedAt: "2026-10-20",
    body: [
      "Arabic learners run into this question almost immediately, and the honest answer is: it depends on what you're actually trying to do, not on which one is \"more correct.\"",
      "## What Fusha (Modern Standard Arabic) is for",
      "Fusha is the formal, written register used in media, religious texts, official documents, and news broadcasts across the entire Arab world. It doesn't change from country to country — the Arabic you read in an Egyptian newspaper is grammatically the same Arabic you'd read in a Moroccan or Saudi one. If your goal is reading, writing, formal correspondence, religious study, or passing a standardized exam, Fusha is the register you need.",
      "What it's not great at: casual conversation. Almost nobody uses Fusha to chat with friends, order food, or argue about football — using it in those situations tends to sound stiff, the way reciting a legal document would sound in English small talk.",
      "## What Egyptian Arabic is for",
      "Egyptian Arabic is a spoken dialect — how people in Egypt actually talk day to day. It's also, for a reason worth knowing if you're choosing a first dialect, the dialect most widely understood across the rest of the Arab world, largely because of decades of Egyptian film, television, and music exported region-wide. A Lebanese or Gulf Arabic speaker who's never been to Egypt will usually still follow Egyptian Arabic without much trouble, which isn't generally true in reverse with other dialects.",
      "If your goal is actually holding a conversation — traveling, working with Arabic-speaking colleagues, or talking with family or friends — a spoken dialect, not Fusha, is what gets you there.",
      "## Most people end up learning some of both",
      "In practice the two aren't really competitors. Someone who wants to read the news and also have real conversations will end up with some working knowledge of both, and a good tutor will help you figure out the actual mix for your goal rather than assuming more is automatically better. A free intro call is usually enough to sort this out for a specific person — there isn't a single right answer that applies to everyone.",
    ],
  },
  {
    slug: "starting-arabic-from-zero",
    title: "Starting Arabic from zero: a realistic first month",
    description:
      "What actually happens in the first weeks of learning Arabic — the script, the sounds, and the most common place beginners get stuck.",
    publishedAt: "2026-10-20",
    body: [
      "Arabic has a reputation for being intimidating to start, mostly because of the script and a handful of sounds that don't exist in most European languages. Neither one is actually the hard part long-term — they're just unfamiliar in the first few weeks.",
      "## Week 1-2: the alphabet is a shape problem, not a grammar problem",
      "Arabic script has 28 letters, most of which change shape depending on whether they're at the start, middle, or end of a word — similar in spirit to cursive joining in English, just more consistent about it. This feels like the biggest wall in week one, but it's mechanical: recognizing shapes and sounding out letters is a skill that comes from repetition, not talent, and most learners who stick with it for two consistent weeks stop finding it mysterious.",
      "## Weeks 2-4: the sounds that don't exist in English",
      "A handful of Arabic consonants — ع ('ayn), ح (ḥa), and ق (qaf), among others — are produced further back in the throat than any English sound. Reading about how to make them helps less than hearing a native speaker say them repeatedly and imitating, which is the main reason live lessons tend to move faster here than self-study apps: a tutor can hear exactly what you're doing differently and correct it in real time instead of leaving you guessing.",
      "## What decides whether the first month sticks",
      "The most common first-month mistake isn't underestimating the script or the sounds — it's trying to learn Fusha grammar and spoken conversation at the same time with no particular goal in mind, which splits attention across two different registers of the language before either one feels solid. Picking a goal first (read and write, or hold a conversation, or both, deliberately) and building toward that specific goal tends to produce faster, less frustrating progress than trying to cover everything evenly from day one.",
    ],
  },
  {
    slug: "why-egyptian-arabic",
    title: "Why Egyptian Arabic is often the first dialect people learn",
    description:
      "Egyptian Arabic isn't the only spoken dialect worth learning, but there's a concrete reason it's usually the easiest to start with.",
    publishedAt: "2026-10-20",
    body: [
      "Arabic has no single \"standard\" spoken dialect the way Fusha is a standard written one — Egyptian, Levantine, Gulf, and Maghrebi Arabic are genuinely distinct in vocabulary, pronunciation, and idiom, closer to the relationship between, say, Portuguese and Spanish than between two accents of the same language.",
      "Egyptian Arabic's practical advantage isn't that it's \"easier\" linguistically — it's exposure. Egypt has been the center of Arabic-language film, television, and music production for most of the last century, and that media has circulated across the entire Arab world for decades. The practical result: a beginner who learns Egyptian Arabic is far more likely to be understood by a stranger in Beirut, Amman, or Riyadh than someone who starts with a smaller regional dialect, even though none of those dialects are technically Egyptian.",
      "That's a real, concrete advantage for a first dialect, not just a convenient starting point — but it's still worth being honest that it is one dialect among several, each legitimate for the region where it's spoken. If your goal is specifically Levantine or Gulf Arabic because of a place you're going or people you're talking to, that's a perfectly good reason to start there instead once a tutor for it is available.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
