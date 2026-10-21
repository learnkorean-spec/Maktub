import { PrimaryCTA } from "./PrimaryCTA";

/**
 * Homepage teaser for the free /learn self-study reels (see
 * src/app/learn/page.tsx). Dark forest surface, so the lime CTA/accents
 * are safe here per the brand rule: lime is fill/background only on
 * light surfaces, never neon text on white. On this dark surface lime is
 * used as text/fill against ink, same contrast logic, just inverted.
 */
export function LearnPromo() {
  return (
    <section className="border-b border-ink/10 bg-forest py-16 text-white sm:py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 sm:px-6 md:flex-row md:justify-between">
        <div className="max-w-xl text-center md:text-left">
          <p className="font-heading text-xs font-bold uppercase tracking-wide text-lime">
            Free &middot; self-paced
          </p>
          <h2 className="mt-3 font-heading text-2xl font-bold sm:text-3xl">
            New: learn the Arabic alphabet on your own
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            All 28 letters, 4 at a time, in 7 short video reels with how
            each one sounds. Watch any time, no account or trial needed.
          </p>
          <div className="mt-7">
            <PrimaryCTA href="/learn" variant="lime">
              Start learning &rarr;
            </PrimaryCTA>
          </div>
        </div>
        <div className="flex shrink-0 gap-3" aria-hidden="true">
          <span className="flex h-28 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/5 font-heading text-4xl font-extrabold text-lime">
            ا
          </span>
          <span className="mt-5 flex h-28 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/5 font-heading text-4xl font-extrabold text-white">
            ب
          </span>
          <span className="flex h-28 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/5 font-heading text-4xl font-extrabold text-lime">
            ت
          </span>
        </div>
      </div>
    </section>
  );
}
