import Link from "next/link";
import { Logo } from "./Logo";
import { PrimaryCTA } from "./PrimaryCTA";

const navLinks = [
  { href: "/courses", label: "Courses" },
  { href: "/tutors", label: "Tutors" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-ivory/90 backdrop-blur">
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
        <PrimaryCTA href="/book-trial" className="text-sm px-5 py-2.5">
          Book a trial class
        </PrimaryCTA>
      </div>
    </header>
  );
}
