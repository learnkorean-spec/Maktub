import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { CourseDirectory } from "@/components/CourseDirectory";
import { TRIAL_BOOKING_URL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Courses & Dialects",
  description:
    "Find the right Arabic dialect for your goal — Egyptian Arabic and Modern Standard Arabic are open now; more dialects open as real tutors join.",
};

export default function CoursesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <section className="border-b border-ink/10 bg-ivory py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
              Courses & Dialects
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-ink/70">
              Find the dialect that matches what you actually want to do —
              read and write formally, or speak the way people really talk.
              We only open a dialect once a real native tutor is teaching it.
            </p>
            <div className="mt-8">
              <CourseDirectory />
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="font-heading text-xl font-bold text-ink sm:text-2xl">
              Not sure which one you need?
            </h2>
            <p className="mt-3 text-ink/70">
              A free intro call sorts that out in a few minutes — tell us your
              goal and starting point, and we&rsquo;ll point you at the right
              dialect.
            </p>
            <div className="mt-6">
              <PrimaryCTA href={TRIAL_BOOKING_URL} variant="lime">
                Book a trial class
              </PrimaryCTA>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
