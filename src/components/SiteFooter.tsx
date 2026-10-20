import Link from "next/link";
import { Logo } from "./Logo";
import { TRIAL_BOOKING_URL } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-forest text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo variant="light" withTagline />
            <p className="mt-4 max-w-sm text-sm text-white/70">
              Live online Arabic classes with native-speaking tutors — Modern
              Standard Arabic and real spoken dialects, explained in English.
            </p>
          </div>
          <nav className="flex gap-10 text-sm" aria-label="Footer">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-white/90">Learn</span>
              <Link href="/courses" className="text-white/70 hover:text-white">
                Courses & Dialects
              </Link>
              <Link href="/tutors" className="text-white/70 hover:text-white">
                Tutors
              </Link>
              <Link href="/#how-it-works" className="text-white/70 hover:text-white">
                How it works
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-white/90">Company</span>
              <a
                href={TRIAL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white"
              >
                Book a trial class
              </a>
              <Link href="/articles" className="text-white/70 hover:text-white">
                Articles
              </Link>
            </div>
          </nav>
        </div>
        <p className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          {/* Static on purpose — next build's Cache Components mode treats
              `new Date()` as an unstable prerender value. Bump this by hand
              each year rather than computing it. */}
          © 2026 mkatub. Arabi made simple.
        </p>
      </div>
    </footer>
  );
}
