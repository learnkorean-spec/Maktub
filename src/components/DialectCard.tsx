import type { Dialect } from "@/lib/content";

export function DialectCard({ dialect }: { dialect: Dialect }) {
  const available = dialect.status === "available";

  return (
    <div
      className={`rounded-card border p-6 transition ${
        available
          ? "border-ink/10 bg-white hover:border-lime hover:shadow-sm"
          : "border-dashed border-ink/15 bg-sand/40 opacity-80"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-heading text-lg font-bold text-ink">{dialect.name}</h3>
        <span
          className="font-arabic text-base text-ink/60"
          lang="ar"
          dir="rtl"
        >
          {dialect.arabicName}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink/70">{dialect.description}</p>
      <span
        className={`mt-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
          available ? "bg-lime text-ink" : "bg-ink/10 text-ink/60"
        }`}
      >
        {available ? "Open for trial classes" : "Coming soon"}
      </span>
    </div>
  );
}
