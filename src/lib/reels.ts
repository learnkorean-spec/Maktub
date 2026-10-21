/**
 * Self-learning video reels — short, silent-friendly-but-narrated
 * flashcard animations teaching the Arabic alphabet, 4 letters at a
 * time. Real, already-produced media (see README "Configured vs
 * missing" row 7, "real recordings") supplied directly for maktub's
 * own self-learning page — not stock footage, not invented content.
 *
 * Files live in public/reels/. Each reel has a matching poster frame
 * (public/reels/<slug>-poster.jpg) generated from the video itself, so
 * the page never has to fall back to a generic/stock thumbnail.
 */

export interface Reel {
  slug: string;
  /** 1-indexed reel number, matches the on-screen "REEL n / 7" badge. */
  order: number;
  title: string;
  /** The 4 (or in the last reel, fewer/none extra) letters covered, in order. */
  letters: string[];
  rangeLabel: string; // e.g. "Letters 1–4 of 28"
  video: string;
  poster: string;
  durationSeconds: number;
}

export const reels: Reel[] = [
  {
    slug: "alphabet-1",
    order: 1,
    title: "Alif, Baa', Taa', Thaa'",
    letters: ["alif", "baa'", "taa'", "thaa'"],
    rangeLabel: "Letters 1–4 of 28",
    video: "/reels/alphabet-1.mp4",
    poster: "/reels/alphabet-1-poster.jpg",
    durationSeconds: 7,
  },
  {
    slug: "alphabet-2",
    order: 2,
    title: "Jeem, Haa', Khaa', Daal",
    letters: ["jeem", "haa'", "khaa'", "daal"],
    rangeLabel: "Letters 5–8 of 28",
    video: "/reels/alphabet-2.mp4",
    poster: "/reels/alphabet-2-poster.jpg",
    durationSeconds: 8,
  },
  {
    slug: "alphabet-3",
    order: 3,
    title: "Dhaal, Raa', Zay, Seen",
    letters: ["dhaal", "raa'", "zay", "seen"],
    rangeLabel: "Letters 9–12 of 28",
    video: "/reels/alphabet-3.mp4",
    poster: "/reels/alphabet-3-poster.jpg",
    durationSeconds: 8,
  },
  {
    slug: "alphabet-4",
    order: 4,
    title: "Sheen, Saad, Daad, Taa' (heavy)",
    letters: ["sheen", "saad", "daad", "taa' (heavy)"],
    rangeLabel: "Letters 13–16 of 28",
    video: "/reels/alphabet-4.mp4",
    poster: "/reels/alphabet-4-poster.jpg",
    durationSeconds: 8,
  },
  {
    slug: "alphabet-5",
    order: 5,
    title: "Zaa' (heavy), 'Ayn, Ghayn, Faa'",
    letters: ["zaa' (heavy)", "'ayn", "ghayn", "faa'"],
    rangeLabel: "Letters 17–20 of 28",
    video: "/reels/alphabet-5.mp4",
    poster: "/reels/alphabet-5-poster.jpg",
    durationSeconds: 8,
  },
  {
    slug: "alphabet-6",
    order: 6,
    title: "Qaaf, Kaaf, Laam, Meem",
    letters: ["qaaf", "kaaf", "laam", "meem"],
    rangeLabel: "Letters 21–24 of 28",
    video: "/reels/alphabet-6.mp4",
    poster: "/reels/alphabet-6-poster.jpg",
    durationSeconds: 8,
  },
  {
    slug: "alphabet-7",
    order: 7,
    title: "Noon, Haa', Waw, Yaa'",
    letters: ["noon", "haa'", "waw", "yaa'"],
    rangeLabel: "Letters 25–28 of 28",
    video: "/reels/alphabet-7.mp4",
    poster: "/reels/alphabet-7-poster.jpg",
    durationSeconds: 8,
  },
];
