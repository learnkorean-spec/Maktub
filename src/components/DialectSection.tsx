import Link from "next/link";
import { dialects } from "@/lib/content";
import { DialectCard } from "./DialectCard";

export function DialectSection() {
  return (
    <section id="dialects" className="border-b border-ink/10 bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
            Pick a dialect
          </h2>
          <Link
            href="/courses"
            className="whitespace-nowrap text-sm font-semibold text-ink/70 hover:text-ink"
          >
            See all courses →
          </Link>
        </div>
        <p className="mt-3 max-w-xl text-sm text-ink/60">
          We only open a dialect once a real native tutor is teaching it:
          nothing below is a placeholder pretending to be live.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {dialects.map((dialect) => (
            <DialectCard key={dialect.slug} dialect={dialect} />
          ))}
        </div>
      </div>
    </section>
  );
}
