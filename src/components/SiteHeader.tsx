import Link from "next/link";
import { Logo } from "./Logo";
import { PrimaryCTA } from "./PrimaryCTA";
import { MobileNav } from "./MobileNav";
import { TRIAL_BOOKING_URL } from "@/lib/content";

const navLinks = [
  { href: "/courses", label: "Courses" },
  { href: "/tutors", label: "Tutors" },
  { href: "/articles", label: "Articles" },
  { href: "/#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-ivory/90 backdrop-blur">
      {/* Every page's <main> carries id="main-content" for exactly this —
          lets keyboard and screen-reader users jump straight past the nav.
          Visually hidden until it receives focus. */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" aria-label="mkatub home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <PrimaryCTA
            href={TRIAL_BOOKING_URL}
            className="hidden text-sm px-5 py-2.5 sm:inline-flex"
          >
            Book a trial class
          </PrimaryCTA>
          <MobileNav navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
}
