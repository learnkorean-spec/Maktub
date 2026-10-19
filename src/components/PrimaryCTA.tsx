import Link from "next/link";
import type { ReactNode } from "react";

type PrimaryCTAProps = {
  href: string;
  children: ReactNode;
  variant?: "lime" | "outline-light" | "outline-dark";
  className?: string;
};

const variantClasses: Record<NonNullable<PrimaryCTAProps["variant"]>, string> = {
  lime: "bg-lime text-ink hover:brightness-95",
  "outline-light": "border border-white/70 text-white hover:bg-white/10",
  "outline-dark": "border border-ink/70 text-ink hover:bg-ink/5",
};

export function PrimaryCTA({ href, children, variant = "lime", className = "" }: PrimaryCTAProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition focus-visible:outline-offset-4 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
