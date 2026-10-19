import { PrimaryCTA } from "./PrimaryCTA";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lime/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-2xl">
          <p className="font-arabic text-lg text-lime" dir="rtl" lang="ar">
            اهلا في مكتوب
          </p>
          <h1 className="mt-3 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
            Speak real Arabic.
            <br />
            <span className="text-lime">Connect for real.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Learn Egyptian Arabic, Modern Standard Arabic and other supported
            dialects in live classes with native-speaking tutors.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <PrimaryCTA href="/book-trial">Book a trial class</PrimaryCTA>
            <PrimaryCTA href="#dialects" variant="outline-light">
              Explore dialects
            </PrimaryCTA>
          </div>
        </div>
      </div>
    </section>
  );
}
