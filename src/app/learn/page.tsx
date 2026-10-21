import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { ReelGallery } from "@/components/ReelGallery";
import { reels } from "@/lib/reels";
import { TRIAL_BOOKING_URL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Learn: Free Self-Study Reels",
  description:
    "Free short video reels teaching the Arabic alphabet, 4 letters at a time — watch anytime, no sign-up, no trial required.",
  alternates: { canonical: "/learn" },
};

export default function LearnPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <section className="border-b border-ink/10 bg-ivory py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
              Learn: free self-study reels
            </h1>
            <p className="mt-4 text-lg text-ink/70">
              The Arabic alphabet, 28 letters, in 7 short reels — 4 letters
              each, with how it sounds and an English comparison for every
              one. Free to watch any time, no account or trial needed.
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <ReelGallery reels={reels} />
          </div>
        </section>

        <section className="bg-ivory py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="font-heading text-xl font-bold text-ink sm:text-2xl">
              Ready to actually speak it?
            </h2>
            <p className="mt-3 text-ink/70">
              These reels get you reading the letters. A real tutor is what
              turns that into speaking and understanding Arabic.
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
