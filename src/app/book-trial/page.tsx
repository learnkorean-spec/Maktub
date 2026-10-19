import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Book a trial class",
};

/**
 * Honest placeholder. No live scheduling provider is connected yet
 * (Cal.com credentials + real tutor availability are a listed business-data
 * blocker), so this does NOT fake a booking calendar or invented open
 * slots — it says plainly what's true today and gives a real contact path
 * once one exists.
 */
export default function BookTrialPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <section className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
          <h1 className="font-heading text-3xl font-bold text-ink">
            Trial booking is almost ready
          </h1>
          <p className="mt-4 text-ink/70">
            We&rsquo;re connecting real tutor availability before this page
            goes live with an actual calendar — no placeholder appointment
            slots here in the meantime.
          </p>
          <p className="mt-6 text-sm text-ink/50">
            Want to be notified the moment it opens? That&rsquo;s the next
            thing to wire up here.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
