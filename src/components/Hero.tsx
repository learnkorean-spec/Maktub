import Image from "next/image";
import { PrimaryCTA } from "./PrimaryCTA";
import { TRIAL_BOOKING_URL } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-forest text-white">
      <Image
        src="/photography/egyptian-cairo-rooftop-call.jpg"
        alt="A Cairo rooftop terrace at sunset, with minarets on the skyline"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_25%]"
      />
      {/* Brand rule: no neon text directly on a photo either — the dark
          overlay keeps white/lime text readable, same contrast intent as
          "no neon text on white." */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-forest/30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lime/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="max-w-2xl">
          <p className="font-arabic text-lg text-lime" dir="rtl" lang="ar">
            اهلا في مكتوب
          </p>
          <h1 className="mt-3 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
            Speak real Arabic.
            <br />
            <span className="text-lime">Connect for real.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Learn Egyptian Arabic, Modern Standard Arabic and other supported
            dialects in live classes with native-speaking tutors.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <PrimaryCTA href={TRIAL_BOOKING_URL}>Book a trial class</PrimaryCTA>
            <PrimaryCTA href="/courses" variant="outline-light">
              Explore dialects
            </PrimaryCTA>
          </div>
        </div>
      </div>
    </section>
  );
}
