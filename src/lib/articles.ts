/**
 * maktub's own articles — written for this launch (2026-10-20), not
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
  /**
   * Hero/thumbnail image (public/articles/<slug>.jpg), one per article.
   * Same photography set as the homepage dialect cards — location/atmosphere
   * shots, not claimed student photos (see content.ts's integrity note on
   * showing people in this photography).
   */
  image: string;
  imageAlt: string;
}

export const articles: Article[] = [
  {
    slug: "fusha-vs-egyptian-arabic",
    image: "/articles/fusha-vs-egyptian-arabic.jpg",
    imageAlt: "Two people talking over notebooks and tea on a Cairo balcony at golden hour",
    title: "Fusha vs. Egyptian Arabic: which should you actually learn first?",
    description:
      "Modern Standard Arabic and spoken Egyptian dialect serve different goals. Here's how to tell which one matches yours.",
    publishedAt: "2026-10-20",
    body: [
      "Arabic learners run into this question almost immediately, and the honest answer is: it depends on what you're actually trying to do, not on which one is \"more correct.\"",
      "## What Fusha (Modern Standard Arabic) is for",
      "Fusha is the formal, written register used in media, religious texts, official documents, and news broadcasts across the entire Arab world. It doesn't change from country to country: the Arabic you read in an Egyptian newspaper is grammatically the same Arabic you'd read in a Moroccan or Saudi one. If your goal is reading, writing, formal correspondence, religious study, or passing a standardized exam, Fusha is the register you need.",
      "What it's not great at: casual conversation. Almost nobody uses Fusha to chat with friends, order food, or argue about football, using it in those situations tends to sound stiff, the way reciting a legal document would sound in English small talk.",
      "## What Egyptian Arabic is for",
      "Egyptian Arabic is a spoken dialect: how people in Egypt actually talk day to day. It's also, for a reason worth knowing if you're choosing a first dialect, the dialect most widely understood across the rest of the Arab world, largely because of decades of Egyptian film, television, and music exported region-wide. A Lebanese or Gulf Arabic speaker who's never been to Egypt will usually still follow Egyptian Arabic without much trouble, which isn't generally true in reverse with other dialects.",
      "If your goal is actually holding a conversation (traveling, working with Arabic-speaking colleagues, or talking with family or friends), a spoken dialect, not Fusha, is what gets you there.",
      "## Most people end up learning some of both",
      "In practice the two aren't really competitors. Someone who wants to read the news and also have real conversations will end up with some working knowledge of both, and a good tutor will help you figure out the actual mix for your goal rather than assuming more is automatically better. A free intro call is usually enough to sort this out for a specific person; there isn't a single right answer that applies to everyone.",
    ],
  },
  {
    slug: "starting-arabic-from-zero",
    image: "/articles/starting-arabic-from-zero.jpg",
    imageAlt: "An open notebook, pen and tea on a quiet Cairo terrace at sunset, mosque skyline in the distance",
    title: "Starting Arabic from zero: a realistic first month",
    description:
      "What actually happens in the first weeks of learning Arabic: the script, the sounds, and the most common place beginners get stuck.",
    publishedAt: "2026-10-20",
    body: [
      "Arabic has a reputation for being intimidating to start, mostly because of the script and a handful of sounds that don't exist in most European languages. Neither one is actually the hard part long-term; they're just unfamiliar in the first few weeks.",
      "## Week 1-2: the alphabet is a shape problem, not a grammar problem",
      "Arabic script has 28 letters, most of which change shape depending on whether they're at the start, middle, or end of a word, similar in spirit to cursive joining in English, just more consistent about it. This feels like the biggest wall in week one, but it's mechanical: recognizing shapes and sounding out letters is a skill that comes from repetition, not talent, and most learners who stick with it for two consistent weeks stop finding it mysterious.",
      "## Weeks 2-4: the sounds that don't exist in English",
      "A handful of Arabic consonants (ع ('ayn), ح (ḥa), and ق (qaf), among others) are produced further back in the throat than any English sound. Reading about how to make them helps less than hearing a native speaker say them repeatedly and imitating, which is the main reason live lessons tend to move faster here than self-study apps: a tutor can hear exactly what you're doing differently and correct it in real time instead of leaving you guessing.",
      "## What decides whether the first month sticks",
      "The most common first-month mistake isn't underestimating the script or the sounds; it's trying to learn Fusha grammar and spoken conversation at the same time with no particular goal in mind, which splits attention across two different registers of the language before either one feels solid. Picking a goal first (read and write, or hold a conversation, or both, deliberately) and building toward that specific goal tends to produce faster, less frustrating progress than trying to cover everything evenly from day one.",
    ],
  },
  {
    slug: "why-egyptian-arabic",
    image: "/articles/why-egyptian-arabic.jpg",
    imageAlt: "Friends on a Cairo rooftop at sunset with the Nile and pyramids on the skyline",
    title: "Why Egyptian Arabic is often the first dialect people learn",
    description:
      "Egyptian Arabic isn't the only spoken dialect worth learning, but there's a concrete reason it's usually the easiest to start with.",
    publishedAt: "2026-10-20",
    body: [
      "Arabic has no single \"standard\" spoken dialect the way Fusha is a standard written one: Egyptian, Levantine, Gulf, and Maghrebi Arabic are genuinely distinct in vocabulary, pronunciation, and idiom, closer to the relationship between, say, Portuguese and Spanish than between two accents of the same language.",
      "Egyptian Arabic's practical advantage isn't that it's \"easier\" linguistically; it's exposure. Egypt has been the center of Arabic-language film, television, and music production for most of the last century, and that media has circulated across the entire Arab world for decades. The practical result: a beginner who learns Egyptian Arabic is far more likely to be understood by a stranger in Beirut, Amman, or Riyadh than someone who starts with a smaller regional dialect, even though none of those dialects are technically Egyptian.",
      "That's a real, concrete advantage for a first dialect, not just a convenient starting point, but it's still worth being honest that it is one dialect among several, each legitimate for the region where it's spoken. If your goal is specifically Levantine or Gulf Arabic because of a place you're going or people you're talking to, that's a perfectly good reason to start there instead once a tutor for it is available.",
    ],
  },
  {
    slug: "how-long-to-learn-arabic",
    image: "/articles/how-long-to-learn-arabic.jpg",
    imageAlt: "A group chatting and studying together on a Red Sea beach terrace at sunset",
    title: "How long does it actually take to learn Arabic?",
    description:
      "There's no single answer, but the honest range depends heavily on your goal, your native language, and whether you're learning Fusha, a dialect, or both.",
    publishedAt: "2026-10-20",
    body: [
      "Anyone searching for a timeline to \"fluent\" in Arabic will find wildly different numbers, because the question is really three different questions wearing one trench coat: how long to hold a basic conversation, how long to read and write comfortably, and how long to sound close to native. Those have different timelines, and conflating them is the main reason the advice online feels contradictory.",
      "## Conversational basics come first, and faster than people expect",
      "If your goal is ordering food, asking directions, and following simple conversation in a spoken dialect like Egyptian Arabic, consistent weekly lessons combined with regular practice can get a motivated beginner to a basic conversational level in a few months, not years. This is the stage most new learners underestimate: the script and a few unfamiliar sounds feel like the hard part, but they're a front-loaded cost, not an ongoing one.",
      "## Reading and writing Fusha is a longer, more linear climb",
      "Modern Standard Arabic grammar (verb conjugation patterns, the case system in formal writing, a large and often unfamiliar vocabulary) rewards steady, structured study more than it rewards immersion. Government language-training programs that classify languages by learning difficulty for English speakers consistently place Arabic in their hardest category, alongside Mandarin, Japanese, and Korean, with estimated classroom hours several times higher than for a language like Spanish or French. That's a useful reality check, not a discouragement: it just means Arabic is a marathon subject, and pacing matters more than intensity bursts.",
      "## The biggest variable isn't talent, it's whether your lessons match your actual goal",
      "Learners who split their attention evenly between formal grammar and spoken dialect from day one, with no particular reason to do either, tend to feel like they're making slow progress on both. Learners who pick one concrete goal (reading news, having conversations, understanding a partner's family, preparing for a specific exam) and build toward it tend to report feeling functional much sooner, even on an identical number of study hours. A tutor who asks what you actually want Arabic for before planning lessons is doing something that measurably changes the timeline, not just being polite about it.",
      "## A realistic way to think about it",
      "Basic spoken conversation: a few months of consistent lessons and practice. Comfortable reading and writing in Fusha: more like one to two years of steady study. Genuinely native-level fluency in either: an ongoing, years-long relationship with the language, the same as it would be for any adult learning a distant language seriously. None of those numbers are a promise; they depend on hours per week, prior language-learning experience, and how close your native language already is to Arabic's grammar and sound system.",
    ],
  },
  {
    slug: "arabic-for-english-speakers-challenges",
    image: "/articles/arabic-for-english-speakers-challenges.jpg",
    imageAlt: "A man on a video call with a laptop on a Cairo terrace, mosque skyline at sunset",
    title: "Arabic for English speakers: the real challenges (and the ones that don't matter)",
    description:
      "The script and a few throat sounds get all the attention, but they're not what actually slows English speakers down. Here's what does.",
    publishedAt: "2026-10-20",
    body: [
      "English speakers starting Arabic usually brace for the alphabet and a handful of unfamiliar sounds. Those are real adjustments, but they're front-loaded: a few weeks of discomfort, then they stop being the bottleneck. The things that actually slow English speakers down tend to show up later and get talked about less.",
      "## The script is a shape problem you solve once",
      "Arabic's 28 letters change form depending on their position in a word, which looks alarming on a first glance at a textbook page. In practice it's closer to learning cursive joining rules than learning new grammar: a mechanical skill that becomes automatic with repetition, not something that stays hard indefinitely the way some grammar points do.",
      "## Root-and-pattern morphology has no real English equivalent",
      "English builds words by adding prefixes and suffixes to a stable root (\"teach,\" \"teacher,\" \"teaching\"). Arabic builds huge families of related words (a writer, an office, something written, correspondence) from a three-letter consonant root slotted into different vowel patterns. There's no English shortcut for this concept; it has to be learned as a genuinely new way words work, which is why many English-speaking learners find Arabic vocabulary feels unpredictable at first, even after the alphabet stops being a problem.",
      "## Diglossia: formal and spoken Arabic genuinely differ",
      "Most European languages have a wide gap between formal and casual registers, but they're still clearly \"the same language.\" Arabic's formal register (Fusha) and spoken dialects differ enough in grammar, vocabulary, and pronunciation that an English speaker who only studies Fusha can struggle to follow ordinary conversation, and vice versa. This surprises people who assumed \"learning Arabic\" meant one thing; in practice it means choosing, and often eventually needing both.",
      "## Sentence structure and the absence of a verb \"to be\" in the present tense",
      "Arabic frequently omits an equivalent of \"is/are\" in present-tense sentences (\"the house big\" rather than \"the house is big\"), and verb-subject-object ordering is more flexible than English's fairly rigid subject-verb-object pattern. Neither is difficult once pointed out, but both are the kind of thing a self-study app often doesn't explain clearly, leaving learners to misdiagnose fluent Arabic sentences as \"broken\" English translations.",
      "## What this adds up to",
      "None of these are reasons Arabic is unlearnable for English speakers; they're just different from the kind of difficulty Spanish or French presents, where most of the challenge is vocabulary volume. Arabic's challenges are structural and conceptual, which is exactly the kind of thing that benefits from a tutor explaining the logic behind a pattern, rather than from memorizing more flashcards.",
    ],
  },
  {
    slug: "best-way-to-learn-arabic-alphabet",
    image: "/articles/best-way-to-learn-arabic-alphabet.jpg",
    imageAlt: "An open notebook and pen on a Cairo terrace table at sunset, ready for writing practice",
    title: "The best way to learn the Arabic alphabet (without burning out in week one)",
    description:
      "A practical order for learning Arabic letters, sounds, and joining rules, and the common mistake that makes the alphabet feel harder than it is.",
    publishedAt: "2026-10-20",
    body: [
      "Most people who give up on Arabic in the first two weeks don't quit because of grammar; they quit on the alphabet, usually because they tried to learn all 28 letters, all four positional forms, and all the unfamiliar sounds simultaneously. Breaking it into a sequence makes it dramatically more manageable.",
      "## Start with sound, not shape",
      "Before memorizing how a letter looks, learn how it sounds: ideally by listening to a native speaker pronounce it, not by reading a phonetic approximation in Latin letters, which routinely misleads beginners on sounds English doesn't have (ع, ح, ق, and a few others). This is the single biggest reason live instruction tends to outpace self-study apps in the first month: a human can hear exactly what you're doing wrong and correct it in real time.",
      "## Group letters by shared shapes, not alphabetical order",
      "Many Arabic letters are distinguished only by the number and position of dots above or below an otherwise identical shape (ب ت ث are the same base shape with different dots). Learning these as a family rather than as three unrelated entries in alphabetical order cuts the memorization load significantly, because you're really learning one shape and three dot-patterns, not three shapes.",
      "## Learn the four positional forms through real words, not isolated charts",
      "Every letter changes shape slightly depending on whether it's at the start, middle, or end of a word, or standing alone. Memorizing this from an isolated reference chart is the slow way. Reading real short words and noticing the pattern repeat is the fast way, because your brain is pattern-matching in context instead of cross-referencing a table.",
      "## Write before you type",
      "Handwriting Arabic letters, even briefly, builds muscle memory for stroke direction and connection points that typing skips entirely. This doesn't need to be extensive: a few minutes a day with a pen is enough to make the shapes feel familiar rather than foreign.",
      "## A realistic pace",
      "Most consistent learners can recognize and sound out all the letters within two to three weeks of regular practice, and stop finding the script mysterious within a month. If it's taking much longer than that, the usual cause isn't ability; it's trying to absorb too much at once instead of working through sound, then shape families, then positional forms, in that order.",
    ],
  },
  {
    slug: "online-tutor-vs-language-app",
    image: "/articles/online-tutor-vs-language-app.jpg",
    imageAlt: "Two people in conversation over a laptop on a Marrakech rooftop at sunset",
    title: "Online Arabic tutor vs. a language-learning app: what each is actually good for",
    description:
      "Apps and live tutors aren't competing for the same job. Here's where each genuinely helps, and where relying on only one tends to stall progress.",
    publishedAt: "2026-10-20",
    body: [
      "The app-versus-tutor debate usually gets framed as a competition, but the two tools are built for different parts of learning a language, and most people who make real progress with Arabic end up using something closer to both, even if a live tutor does most of the heavy lifting.",
      "## What apps are genuinely good at",
      "Spaced-repetition vocabulary apps are well-suited to exactly one job: getting words and basic phrases into long-term memory through repeated, low-effort review. They're available at 2am, they don't get tired of quizzing you, and for pure memorization they work about as well as any method does. Some also handle alphabet and script introduction reasonably well as a low-stakes first exposure.",
      "## Where apps consistently fall short with Arabic specifically",
      "Pronunciation feedback is the clearest gap. Arabic has several consonants produced further back in the throat than anything in English, and an app can play you a recording, but it can't listen to your attempt and tell you that your tongue placement is slightly off, the exact correction a live tutor gives in real time. The other gap is the Fusha-versus-dialect split: a lot of apps teach a generic, formal-leaning Arabic that doesn't match how anyone actually talks in Cairo, Beirut, or Riyadh, leaving learners who complete a whole app course still unable to follow ordinary conversation.",
      "## What a live tutor adds that self-study structurally can't",
      "Real-time correction, a lesson plan that adapts to your specific goal instead of a fixed curriculum order, and, for Arabic in particular, the ability to actually choose a dialect and get it taught by someone who speaks it natively, rather than a generic textbook composite. A tutor can also answer the \"wait, is this Fusha or dialect?\" question the instant it comes up, instead of leaving a learner to puzzle it out from an app's generic phrase bank.",
      "## A sensible combination",
      "Use an app for vocabulary repetition between lessons if it helps you personally; don't expect it to teach you to speak or to sort out the Fusha/dialect question on its own. Those are jobs for live instruction, which is also why most serious Arabic programs are built around a tutor relationship rather than treating the app as the whole plan.",
    ],
  },
  {
    slug: "business-arabic-what-you-actually-need",
    image: "/articles/business-arabic-what-you-actually-need.jpg",
    imageAlt: "Two people in conversation over a laptop with the Dubai skyline in the background",
    title: "Business Arabic: what professionals actually need (and what's a waste of time)",
    description:
      "Working with Arabic-speaking colleagues or clients doesn't require fluency in everything. Here's what to prioritize and what to skip.",
    publishedAt: "2026-10-20",
    body: [
      "Professionals picking up Arabic for work often default to a generic \"business Arabic\" course built around formal vocabulary lists, when the actual skill they need is narrower and more practical than that framing suggests.",
      "## Figure out which register your work actually uses",
      "Formal written communication (contracts, official correspondence, reports) happens in Fusha and barely changes across the Arab world. Everyday workplace conversation (meetings, small talk, phone calls, negotiating logistics) happens in whatever dialect your colleagues or clients actually speak, most often Egyptian, Gulf, or Levantine depending on the region. These are genuinely different skills, and most professionals need mainly one of them, not an even split of both.",
      "## Spoken fluency usually matters more than people expect",
      "A surprising amount of \"business Arabic\" demand is really \"I want to understand what's being said around me in meetings and build rapport in casual conversation,\" which is a dialect skill, not a formal-register one. Showing up with polished Fusha and no dialect ability can read as oddly stiff in a casual meeting, in roughly the way reciting a prepared statement would land strangely in an English small-talk moment.",
      "## Industry vocabulary is the easy part, usually self-taught",
      "Specific technical or industry terminology is straightforward to pick up once the underlying language skill (conversational ability or formal reading comprehension) is solid. It's a bad use of early lesson time to front-load jargon lists before you can hold a basic conversation or read a basic document; the vocabulary attaches easily to a working foundation but doesn't substitute for one.",
      "## What actually moves the needle",
      "Figure out whether your work calls for formal written Arabic, spoken conversational ability in a specific dialect, or genuinely both, and structure lessons around that from day one rather than a generic \"business Arabic\" curriculum built for no one's actual job in particular. A tutor who asks what your work actually involves before planning lessons will get you to something usable considerably faster than a one-size-fits-all course.",
    ],
  },
  {
    slug: "arabic-greetings-and-etiquette",
    image: "/articles/arabic-greetings-and-etiquette.jpg",
    imageAlt: "Two people greeting each other warmly on an Amman terrace at sunset",
    title: "Arabic greetings and etiquette: what to know before you say \"marhaba\"",
    description:
      "Arabic greetings carry more social weight than their English equivalents, and getting them slightly wrong is noticeable. Here's what actually matters.",
    publishedAt: "2026-10-20",
    body: [
      "Greetings in Arabic-speaking cultures tend to be longer, more ritualized, and more socially meaningful than a quick English \"hi, how are you\"; skipping the expected exchange, or cutting it short, reads as noticeably more abrupt than it would in English.",
      "## The religious greeting is extremely common, including in secular contexts",
      "\"As-salamu alaykum\" (peace be upon you) and its reply \"wa alaykum as-salam\" are used across the Arab world as an everyday greeting, not only in religious settings, by speakers of multiple faiths. \"Marhaba\" (hello) is a safe, universally understood alternative for any context, religious or not, which makes it a reasonable default for a learner who isn't sure which is more appropriate for a given situation.",
      "## The greeting exchange is often longer than one phrase",
      "A common pattern is greeting, asking after the other person's well-being, and sometimes asking after their family's well-being, before moving to the actual topic of conversation; skipping straight to business can come across as curt in a way it typically wouldn't in a brisk English-speaking context. This varies by country and setting, but erring toward a slightly longer, warmer exchange is rarely wrong.",
      "## Right-hand etiquette extends to greetings",
      "In much of the Arab world, the right hand is used for greetings, handing things over, and eating, with the left hand traditionally considered less appropriate for these purposes. This is a widely-held cultural norm worth knowing even for a learner who's only ever interacting with Arabic speakers abroad, since it comes up in handshakes and exchanging items alike.",
      "## Titles and formality matter more than in casual American English",
      "Using an honorific with someone's first name (the Arabic equivalent of \"Mr.\" or \"Dr.\" plus first name, rather than surname) is common and generally expected with anyone older, more senior, or simply new to you, until they invite more casual address. Jumping straight to first names with no title, which reads as normal friendliness in American English, can come across as presumptuous in a first interaction.",
      "## The short version",
      "When in doubt: use \"marhaba\" if you're unsure about \"as-salamu alaykum,\" don't rush past the well-wishing part of a greeting, use your right hand, and default to a title with someone's name until told otherwise. None of this requires fluency; it's a short list of habits that signal respect regardless of how much Arabic you actually speak yet.",
    ],
  },
  {
    slug: "egyptian-vs-levantine-vs-gulf-arabic",
    image: "/articles/egyptian-vs-levantine-vs-gulf-arabic.jpg",
    imageAlt: "A mixed group in Egyptian, Levantine and Gulf dress chatting together on a Cairo rooftop at sunset",
    title: "Egyptian vs. Levantine vs. Gulf Arabic: how different are they, really?",
    description:
      "Arabic dialects aren't accents of one spoken language; they're distinct enough that native speakers sometimes need to adjust to understand each other.",
    publishedAt: "2026-10-20",
    body: [
      "People sometimes assume Arabic dialects are like American versus British English: same language, different accent and a handful of swapped words. The reality is closer to the relationship between Portuguese and Spanish: mutually intelligible with effort for many speakers, but genuinely distinct in grammar, vocabulary, and pronunciation, not just accent.",
      "## Egyptian Arabic: the most widely understood",
      "Spoken in Egypt, with grammar and vocabulary that diverge noticeably from Fusha in everyday speech. Its main practical advantage for a learner is passive exposure: decades of Egyptian film, television, and music have circulated across the entire Arab world, so Egyptian Arabic tends to be understood by speakers of other dialects more easily than the reverse.",
      "## Levantine Arabic: Syria, Lebanon, Jordan, Palestine",
      "Softer consonant pronunciation than Gulf dialects in several respects, and vocabulary shaped by the region's history, including noticeable French influence in Lebanese Arabic specifically. Levantine and Egyptian Arabic are generally mutually intelligible with some adjustment, but they are not the same dialect, and idioms in particular don't always transfer.",
      "## Gulf Arabic: Saudi Arabia, the UAE, Kuwait, and beyond",
      "Often considered, among the major dialect groups, one of the closer to Fusha in some structural respects, though it has plenty of distinct vocabulary and pronunciation of its own, including loanwords from Farsi, Urdu, and English reflecting the region's trade and migration history. A learner who's only studied Egyptian Arabic will usually need real adjustment time to follow Gulf Arabic comfortably, and vice versa.",
      "## Why this matters for choosing what to learn",
      "There's no dialect that's simply \"more correct\"; each is the genuine, native way people in that region actually speak. The right one to learn depends entirely on who you're actually talking to: family, a partner, colleagues, or where you're planning to spend time. If that's not yet decided, Egyptian Arabic's wide passive comprehension across the region makes it a reasonable default starting point, not because it's superior, but because it travels furthest.",
    ],
  },
  {
    slug: "traveling-to-egypt-how-much-arabic",
    image: "/articles/traveling-to-egypt-how-much-arabic.jpg",
    imageAlt: "Friends laughing together closely on a Cairo terrace at sunset",
    title: "Traveling to Egypt: how much Arabic do you actually need?",
    description:
      "You can get by in Egypt's major tourist areas with minimal Arabic, but a little goes a long way: here's what's actually useful to learn before you go.",
    publishedAt: "2026-10-20",
    body: [
      "English is widely spoken in Egypt's major tourist infrastructure (hotels, airports, and businesses that deal regularly with foreign visitors), which leads some travelers to assume Arabic is optional. It's not required for a trip to go smoothly, but even a small amount changes the kind of trip you have.",
      "## What you can get away with knowing nothing of",
      "Major hotels, airport staff, and established tour operators in heavily touristed areas generally operate comfortably in English. A traveler who speaks zero Arabic can navigate these specific contexts without real difficulty.",
      "## Where a little Arabic changes the experience, not just the logistics",
      "Markets, smaller local restaurants, taxis outside tourist zones, and casual conversation with Egyptians who aren't in tourism-facing jobs are where even basic greetings and a handful of phrases noticeably shift how an interaction goes, from being treated as a generic tourist to being met with the warmth Egyptians are well known for extending to visitors who make a visible effort. This isn't about functional necessity; it's about the quality and warmth of the interaction.",
      "## The phrases worth actually learning before a trip",
      "Greetings (\"marhaba,\" \"as-salamu alaykum\"), \"thank you\" (\"shukran\"), basic numbers for haggling in markets, and a polite way to say you don't understand and ask someone to repeat themselves, cover a surprising amount of ground. None of this requires weeks of study: a handful of focused lessons before a trip, aimed specifically at travel scenarios rather than general curriculum order, is enough to notice a real difference.",
      "## Reading signage is a smaller win than it sounds",
      "Most signage in tourist areas includes English or transliteration, so reading Arabic script isn't the highest-value skill for a short trip; spoken basics and etiquette matter more. For a longer stay or a move to Egypt, that priority flips, and reading becomes genuinely worth the investment.",
      "## The honest takeaway",
      "You won't be stranded without Arabic in Egypt's tourist areas, but a short, travel-focused set of lessons before you go (not a full beginner curriculum) tends to be the highest-value use of prep time for a trip, and it's a different (shorter) list than what you'd study if your goal were long-term fluency.",
    ],
  },
  {
    slug: "fusha-quranic-arabic-religious-study",
    image: "/articles/fusha-quranic-arabic-religious-study.jpg",
    imageAlt: "A group talking together on a terrace overlooking Petra's ancient Treasury at sunset",
    title: "Learning Arabic for religious study: Fusha, Quranic Arabic, and the difference",
    description:
      "Students studying Arabic for religious reasons often conflate Quranic Arabic with Modern Standard Arabic. They're related but not identical: here's the distinction.",
    publishedAt: "2026-10-20",
    body: [
      "Many learners approach Arabic specifically to engage with religious texts, and quickly run into a vocabulary problem: \"Quranic Arabic,\" \"Classical Arabic,\" and \"Modern Standard Arabic\" get used loosely online as if they're interchangeable, when they're related but genuinely distinct.",
      "## Classical Arabic is the historical ancestor",
      "Classical Arabic is the language of the Quran and of early Arabic literature, poetry, and scholarship from roughly the 7th century onward. Modern Standard Arabic descends from it and shares the vast majority of its grammar and core vocabulary, but MSA has also absorbed newer vocabulary for modern concepts that simply didn't exist in the classical era, and a learner studying only MSA will find Classical texts recognizable but not identical in vocabulary and style.",
      "## Why this matters for a religious-study goal",
      "Someone whose goal is specifically reading and understanding the Quran in the original needs real exposure to Classical Arabic's vocabulary and rhetorical style, not just MSA grammar; the two overlap heavily but aren't a perfect substitute for each other. A tutor who understands this distinction can weight lessons toward Classical vocabulary and structures relevant to religious texts rather than assuming generic MSA study automatically covers it.",
      "## MSA grammar is still the right foundation to start from",
      "In practice, MSA's grammar (verb conjugation, sentence structure, the case system) is close enough to Classical Arabic's that building a solid MSA foundation first, then layering in Classical vocabulary and style specific to religious texts, is a more efficient path than trying to learn Classical Arabic grammar as a separate system from scratch.",
      "## What this means in planning lessons",
      "If religious study is the goal, say so explicitly when starting lessons: it changes which vocabulary and texts a tutor should prioritize, even though the grammatical foundation (MSA) is largely the same starting point as for any other formal-Arabic goal. Being specific about the end goal from the first lesson, rather than assuming \"Arabic\" is self-explanatory, consistently produces a more useful lesson plan.",
    ],
  },
  {
    slug: "one-on-one-tutoring-vs-classroom-arabic",
    image: "/articles/one-on-one-tutoring-vs-classroom-arabic.jpg",
    imageAlt: "A group of five talking together on an Amman rooftop overlooking the old city at sunset",
    title: "One-on-one Arabic tutoring vs. a classroom: why it matters more for Arabic than for most languages",
    description:
      "Group classes work fine for many languages, but Arabic's pronunciation demands and the Fusha/dialect split make individual attention disproportionately valuable.",
    publishedAt: "2026-10-20",
    body: [
      "Classroom language instruction works reasonably well for languages where the main task is vocabulary and grammar absorption. Arabic has two features that make one-on-one attention matter more than it would for, say, a beginner French or Spanish class.",
      "## Pronunciation correction doesn't scale to a group",
      "Several Arabic consonants (ع, ح, ق, ض, among others) are produced in parts of the mouth and throat that don't get used for any English sound, and the only reliable way to learn them is a native speaker hearing your specific attempt and correcting it in real time. In a group class of ten students, each person gets a fraction of that corrective attention; in a one-on-one lesson, every repetition is being actively listened to and adjusted.",
      "## Everyone in a classroom has a slightly different goal, and Arabic goals diverge a lot",
      "A classroom has to pick one curriculum (usually Fusha, since it's the standardized, textbook-friendly register) even though students in the room might actually want spoken Egyptian dialect, business Arabic, religious-text reading, or travel conversation. One-on-one lessons can be built entirely around one person's actual goal from lesson one, instead of a generic curriculum that happens to suit nobody perfectly.",
      "## Pacing differences compound quickly in Arabic specifically",
      "Because Arabic's script, sound system, and root-pattern grammar are all genuinely unfamiliar to most new learners regardless of native language, individual pacing differences show up fast and early, faster than in languages that share more cognates and structure with English. A classroom moving at the median student's pace routinely leaves some students bored and others lost within the first few weeks; a one-on-one lesson simply moves at the pace that's actually working.",
      "## Where classroom learning still has a place",
      "Group classes can work well for conversation practice once a foundation exists, and some learners genuinely enjoy the social element and accountability of a cohort. The tradeoff is real, though: faster, more targeted progress on pronunciation and goal-specific content one-on-one, versus the social and cost benefits of a group. For most people starting from zero with a specific goal in mind, the individual-attention side of that tradeoff tends to matter more with Arabic than it would with an easier, more familiar language.",
    ],
  },
  {
    slug: "egyptian-arabic-phrases-for-beginners",
    image: "/articles/egyptian-arabic-phrases-for-beginners.jpg",
    imageAlt: "Three friends with open notebooks and tea on a Red Sea beach terrace at sunset",
    title: "Egyptian Arabic phrases every beginner should actually start with",
    description:
      "Not a 200-word vocabulary dump: the small handful of Egyptian Arabic phrases that do the most work in a real conversation.",
    publishedAt: "2026-10-21",
    body: [
      "Most \"beginner phrases\" lists are really just a vocabulary dump sorted by category, which is a poor match for how a first real conversation actually goes. A shorter, more deliberately chosen set gets a beginner further.",
      "## Greetings carry more weight than they do in English",
      "\"Izzayak\" (how are you, to a man) or \"izzayik\" (to a woman) is the everyday greeting that does the work \"hey, how's it going\" does in English: more useful day to day than the more formal \"as-salamu alaykum\" for a casual chat, though that one is also fine anywhere. \"Ahlan\" (hi/welcome) is the safest single-word fallback when nothing else comes to mind.",
      "## The two phrases that keep a conversation alive",
      "\"Mesh fahem\" (I don't understand, said by a man) / \"mesh fahma\" (said by a woman), and \"tani, law samaht\" (again, please) do more to keep a real conversation going than another twenty vocabulary words would. Being able to signal confusion and ask for a repeat, politely, is what turns a stalled exchange into a continuing one.",
      "## \"Ezayak\" is more useful than \"how much\"",
      "Beginners often prioritize transactional phrases (prices, directions) over social ones, but a few words of warm, correctly-pronounced small talk tend to open doors further than functional vocabulary does: Egyptians are famously warm with learners who make a visible effort, and that effort registers more in greetings and manners than in market haggling.",
      "## A realistic starting list",
      "\"Ahlan\" (hi), \"izzayak/izzayik\" (how are you), \"kwayyes/kwayyesa\" (good, fine), \"shukran\" (thank you), \"min fadlak/fadlik\" (please), \"mesh fahem/fahma\" (I don't understand), and \"tani, law samaht\" (again, please): seven phrases, not seventy, and each one earns its place in an actual conversation rather than a flashcard deck.",
    ],
  },
  {
    slug: "arabic-for-korean-speakers",
    image: "/articles/arabic-for-korean-speakers.jpg",
    imageAlt: "Two men talking over a laptop and tea on a Red Sea beach terrace at sunset",
    title: "Arabic for Korean speakers: what's actually different (and what isn't)",
    description:
      "Korean and Arabic don't share a language family, a script, or sentence order: but the gap isn't as random as it looks once you know where it actually is.",
    publishedAt: "2026-10-21",
    body: [
      "Korean and Arabic have essentially nothing in common linguistically (different families, different scripts, different sentence structures), which can make the gap feel random rather than learnable. In practice, the differences cluster around a few specific, nameable things, not everything at once.",
      "## Sentence order is the first adjustment, and it's mechanical",
      "Korean is subject-object-verb; Arabic is typically verb-subject-object, with more flexibility than either Korean or English. This is a real adjustment, but it's a pattern to internalize through repetition, not a concept to puzzle out from first principles: closer to learning which side of the road to drive on than to learning new logic.",
      "## The script is unfamiliar in a different way than Hangul was",
      "Korean speakers already know what it's like to learn a non-Latin script from scratch, which is a genuine advantage: the experience of \"a new alphabet is a skill, not a mystery\" transfers directly. Arabic's script still has its own specifics (letters joining and changing shape by position) that Hangul doesn't, but the underlying confidence that a new script is learnable, not just for people who grew up with it, is already there.",
      "## Where the honest advantage is: sounds, not just confidence",
      "Korean has sounds and sound distinctions (tense versus plain consonants, for example) that English speakers often struggle to hear and produce accurately. Some of that same trained ear for subtle consonant distinctions genuinely helps with a few of Arabic's throat consonants, though it's not a free pass: a few of Arabic's sounds (ع, ح, ق) still need real, individual listening and correction regardless of a learner's native language.",
      "## A tutor who has actually done this conversion matters here specifically",
      "Most Arabic teaching material is written with English speakers in mind, which means the comparisons, analogies, and common-mistake warnings are tuned for English, not Korean. A tutor who has personally worked across Korean and Arabic, explaining one in terms of the other rather than just teaching both separately, tends to catch confusions a generic English-centric course wouldn't anticipate.",
    ],
  },
  {
    slug: "how-much-does-learning-arabic-cost",
    image: "/articles/how-much-does-learning-arabic-cost.jpg",
    imageAlt: "A group chatting and studying together on a Red Sea beach terrace at sunset",
    title: "How much does it actually cost to learn Arabic online?",
    description:
      "Prices for online Arabic lessons vary a lot, and most of that variation comes down to a handful of concrete factors, not randomness.",
    publishedAt: "2026-10-21",
    body: [
      "Searching for Arabic lesson prices turns up a wide range of numbers, which can look inconsistent until you notice what's actually driving the difference: a few concrete factors, not a mysterious market.",
      "## One-on-one versus group changes the math directly",
      "A private, one-on-one lesson costs more per hour than a seat in a group class, for the straightforward reason that a tutor's time is split across more students in a group: but a one-on-one hour also moves faster toward a specific goal, since none of it is spent waiting for the pace of other students. Whether that trade is worth it depends on the goal, not on which is \"objectively\" better value.",
      "## A native tutor versus a non-native teacher",
      "A native speaker who also knows how to teach, explaining pronunciation, dialect differences, and cultural context from lived experience rather than a textbook, is a genuinely different product from a non-native teacher working from the same materials a student could buy directly. That's a real quality difference worth weighing, not just a pricing quirk.",
      "## Platform overhead is part of what's being paid for",
      "Lessons booked through a large marketplace platform typically have the platform's commission built into the price, on top of what the tutor actually receives. Booking directly with an independent tutor often means a different price structure for the same lesson quality, since there's no marketplace cut in the middle.",
      "## A free intro call is worth insisting on before committing to anything",
      "A short, no-cost first conversation that actually assesses your starting point and goal, rather than selling a fixed package before knowing what you need, is a reasonable baseline to expect from any tutor or platform, regardless of price point. If a price is hard to evaluate in the abstract, whether a free call is offered first is a decent signal of how seriously a tutor is matching lessons to the actual person rather than a standard package.",
    ],
  },
  {
    slug: "learning-arabic-from-egyptian-movies-and-tv",
    image: "/articles/learning-arabic-from-egyptian-movies-and-tv.jpg",
    imageAlt: "Two women talking over tea on a Red Sea beach terrace at sunset",
    title: "Learning Arabic from Egyptian movies and TV: does it actually work?",
    description:
      "Egyptian film and television are a real, useful supplement to learning Egyptian Arabic: but not quite in the way most people assume.",
    publishedAt: "2026-10-21",
    body: [
      "Egyptian film and television are frequently recommended as an Arabic-learning shortcut, and there's a real reason behind the advice: but it works differently than \"watch enough and it clicks\" implies.",
      "## What media genuinely builds: ear training, not vocabulary recall",
      "Passive listening to Egyptian Arabic at natural speed trains your ear to the dialect's rhythm, intonation, and the sounds that don't exist in English, well before you can consciously understand most of what's said. That's a real, measurable benefit: it's just a different skill than vocabulary memorization, and it shows up as \"this sounds less foreign now\" rather than as new words you can define.",
      "## Where it falls short on its own",
      "Watching without a learning structure around it tends to produce passive recognition (words and phrases that feel familiar when heard again) without the active recall needed to actually produce them in conversation. Years of watching Egyptian film with no study behind it typically does far less for someone's spoken ability than a much smaller amount of active, structured practice.",
      "## The combination that actually works",
      "Watching with Arabic subtitles (not English ones, which train you to read past the Arabic entirely), pausing on phrases that repeat, and bringing specific lines or words to a tutor to unpack turns passive media into active material. This is also where a tutor earns their keep over a subscription app: explaining why a line was funny, or what register it was in, or which word was slang versus formal, is exactly the kind of context a caption can't supply.",
      "## A reasonable way to use it",
      "Treat Egyptian film and TV as a supplement that builds genuine ear-familiarity with the dialect in parallel with active lessons, not as a replacement for them. A beginner using media purely for immersion, with no active study alongside it, is the pattern most likely to feel like \"I've watched so much and still can't follow a real conversation.\"",
    ],
  },
  {
    slug: "common-beginner-mistakes-learning-arabic",
    image: "/articles/common-beginner-mistakes-learning-arabic.jpg",
    imageAlt: "A group talking together on a Marrakech rooftop at sunset",
    title: "Common beginner mistakes when learning Arabic (and simple fixes for each)",
    description:
      "A handful of mistakes account for most of the frustration beginners report with Arabic: none of them are about ability.",
    publishedAt: "2026-10-21",
    body: [
      "Most of the frustration beginners report with Arabic traces back to a short list of avoidable mistakes, not a lack of ability or an unusually hard language. Naming them tends to fix most of the problem on its own.",
      "## Mistake: studying Fusha and a dialect at the same time with no particular reason",
      "Splitting attention evenly between formal written Arabic and spoken dialect from day one, with no specific goal driving either, routinely produces the feeling of making slow progress on both. The fix is picking a primary goal first, reading and writing or conversation, and layering in the other register once the first one feels solid.",
      "## Mistake: learning pronunciation from Latin-letter transliteration",
      "Sounding out Arabic words from an English phonetic spelling (\"3ayn\" for ع, for example) is a common shortcut that reliably teaches the wrong sound, because several Arabic consonants simply don't exist in English and can't be accurately represented in Latin letters. Listening to and imitating a native speaker, even briefly, avoids baking in a mispronunciation that's harder to unlearn later than to learn correctly the first time.",
      "## Mistake: memorizing the alphabet from an isolated reference chart",
      "Cross-referencing a static chart of all 28 letters and their four positional forms is the slowest way to learn the script. Reading real short words and letting the positional patterns repeat in context sticks faster, because it's pattern recognition instead of table lookup.",
      "## Mistake: avoiding speaking until vocabulary feels \"ready\"",
      "Waiting to speak until a large vocabulary is built up first delays the exact practice, real-time production and correction, that builds speaking ability fastest. A beginner who starts attempting full sentences early, mistakes and all, with a tutor correcting in real time, usually ends up speaking more comfortably sooner than one who studies silently for months before trying.",
      "## Mistake: no particular goal at all",
      "\"I want to learn Arabic\" with nothing more specific behind it makes it hard for any tutor or course to prioritize what to teach first. Naming the actual goal (travel, a partner's family, religious texts, business, exam prep) from lesson one consistently produces faster, less frustrating progress than a generic, unfocused curriculum.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
