"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PrimaryCTA } from "./PrimaryCTA";
import { TRIAL_BOOKING_URL } from "@/lib/content";

type NavLink = { href: string; label: string };

/**
 * Mobile menu toggle + slide-down panel for SiteHeader.
 *
 * Fixes a real bug: the desktop <nav> in SiteHeader is `hidden md:flex`,
 * so below the `md` breakpoint none of Courses/Tutors/Articles/FAQ were
 * reachable at all — no hamburger menu existed. This restores access to
 * every primary nav link on mobile, which is most of our traffic coming
 * from Instagram.
 */
export function MobileNav({ navLinks }: { navLinks: NavLink[] }) {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the panel is open.
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        className="relative flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-ink/5"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          aria-hidden="true"
          className="shrink-0"
        >
          {open ? (
            <path
              d="M4 4L18 18M18 4L4 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ) : (
            <>
              <path d="M2 5.5H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M2 11H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M2 16.5H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </>
          )}
        </svg>
      </button>

      {open ? (
        <div
          id="mobile-nav-panel"
          className="fixed inset-x-0 top-[57px] z-30 h-[calc(100vh-57px)] overflow-y-auto border-t border-ink/10 bg-ivory"
        >
          <nav
            aria-label="Primary"
            className="flex flex-col divide-y divide-ink/10 px-4 sm:px-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-4 text-lg font-medium text-ink/90"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-4 py-6 sm:px-6">
            <PrimaryCTA
              href={TRIAL_BOOKING_URL}
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Book a trial class
            </PrimaryCTA>
          </div>
        </div>
      ) : null}
    </div>
  );
}
