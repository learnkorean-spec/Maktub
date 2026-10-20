"use client";

import { useState } from "react";
import { dialects, type DialectStatus } from "@/lib/content";
import { DialectCard } from "./DialectCard";

type Filter = "all" | DialectStatus;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "available", label: "Open now" },
  { value: "coming-soon", label: "Coming soon" },
];

/**
 * Client component so the filter pills actually filter — no fake interactivity.
 * Still only ever shows the real dialect roster from src/lib/content.ts.
 */
export function CourseDirectory() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = dialects.filter((d) => filter === "all" || d.status === filter);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter dialects"
        className="flex flex-wrap gap-2"
      >
        {filters.map((f) => {
          const active = filter === f.value;
          return (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              aria-pressed={active}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-offset-4 ${
                active ? "bg-lime text-ink" : "bg-sand/60 text-ink/70 hover:bg-sand"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-sm text-ink/60">No dialects match that filter yet.</p>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {visible.map((dialect) => (
            <DialectCard key={dialect.slug} dialect={dialect} />
          ))}
        </div>
      )}
    </div>
  );
}
