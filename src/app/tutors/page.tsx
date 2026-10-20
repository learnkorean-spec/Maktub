import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PrimaryCTA } from "@/components/PrimaryCTA";

export const metadata: Metadata = {
  title: "Tutors & Trial Booking",
  description:
    "Meet the real tutor teaching at mkatub today. No invented profiles — more tutors are listed here only once they're actually teaching.",
};

export default function TutorsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <section className="border-b border-ink/10 bg-ivory py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
              Tutors & Trial Booking
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-ink/70">
              One real tutor today. We don&rsquo;t pad this page with
              placeholder profiles — a dialect only shows a tutor here once
              someone is actually teaching it.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="grid gap-10 overflow-hidden rounded-card border border-ink/10 md:grid-cols-2">
              <div className="relative min-h-64">
                <Image
                  src="/photography/egyptian-cairo-rooftop-study.jpg"
                  alt="A Cairo rooftop at sunset — no portrait photo of this tutor is published yet"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-lime px-3 py-1 text-xs font-semibold text-ink">
                  Teaching now
                </span>
                <h2 className="mt-4 font-heading text-2xl font-bold text-ink">
                  Reham
                </h2>
                <p className="mt-1 text-sm font-medium text-ink/60">
                  Egyptian Arabic &middot; Modern Standard Arabic
                </p>
                <p className="mt-4 text-ink/75 leading-relaxed">
                  A native Egyptian Arabic speaker who has spent years
                  explaining languages across cultures — Korean-Arabic
                  interpreting, international operations, and teaching
                  students in more than fifteen countries. Whether you need
                  Modern Standard Arabic for reading, writing and formal use,
                  or real spoken Egyptian dialect for conversation,
                  she&rsquo;ll help you find what matches your goal.
                </p>
                <p className="mt-4 text-xs text-ink/50">
                  No profile photo is published yet — one goes up once an
                  image release is confirmed.
                </p>
                <div className="mt-6">
                  <PrimaryCTA href="/book-trial">Book a trial with Reham</PrimaryCTA>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-card border border-dashed border-ink/15 bg-sand/30 p-8 text-center">
              <h3 className="font-heading text-lg font-bold text-ink">
                More tutors join as dialects open
              </h3>
              <p className="mt-2 text-sm text-ink/60">
                Levantine and Gulf Arabic go live here the moment a real
                native tutor is confirmed for them — not before.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
