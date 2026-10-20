import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PrimaryCTA } from "@/components/PrimaryCTA";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <section className="flex min-h-[60vh] items-center border-b border-ink/10 bg-ivory py-16 sm:py-20">
          <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-sage">
              404
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl">
              This page wandered off.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">
              The link that brought you here might be old or mistyped. Here&rsquo;s
              where you probably meant to go.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <PrimaryCTA href="/">Back to mkatub</PrimaryCTA>
              <PrimaryCTA href="/courses" variant="outline-dark">
                See the courses
              </PrimaryCTA>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
