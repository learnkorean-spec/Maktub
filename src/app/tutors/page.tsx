import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { tutor, TRIAL_BOOKING_URL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tutors & Trial Booking",
  description:
    "Meet the real tutor teaching at maktub today. No invented profiles: more tutors are listed here only once they're actually teaching.",
  alternates: { canonical: "/tutors" },
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
              placeholder profiles: a dialect only shows a tutor here once
              someone is actually teaching it.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="grid gap-10 overflow-hidden rounded-card border border-ink/10 md:grid-cols-[22rem_1fr]">
              <div className="relative min-h-80">
                <Image
                  src={tutor.photo}
                  alt={tutor.name}
                  fill
                  sizes="(min-width: 768px) 22rem, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-lime px-3 py-1 text-xs font-semibold text-ink">
                  Teaching now
                </span>
                <h2 className="mt-4 font-heading text-2xl font-bold text-ink">
                  {tutor.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-ink/60">{tutor.dialects}</p>
                <p className="mt-4 italic leading-snug text-ink/80">
                  &ldquo;{tutor.quote}&rdquo;
                </p>
                <p className="mt-4 text-ink/75 leading-relaxed">{tutor.bio}</p>
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <PrimaryCTA href={TRIAL_BOOKING_URL}>Book a trial with Reham</PrimaryCTA>
                  <a
                    href="https://kloversegy.com/blog/meet-reham-hungarian-arabic-korean-teacher"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-ink/60 underline decoration-1 underline-offset-4 hover:text-ink"
                  >
                    Read her full story on Klovers →
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-card border border-dashed border-ink/15 bg-sand/30 p-8 text-center">
              <h3 className="font-heading text-lg font-bold text-ink">
                More tutors join as dialects open
              </h3>
              <p className="mt-2 text-sm text-ink/60">
                Levantine and Gulf Arabic go live here the moment a real
                native tutor is confirmed for them, not before.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
