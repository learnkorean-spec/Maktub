/**
 * Original mkatub logo, built as vector shapes (not a trace of the
 * moodboard screenshot). Two pieces:
 *
 * - `LogoMark`: the icon alone — a lime badge with a dark bold "m" and a
 *   small ink accent dot, echoing concept #4's circular accent while
 *   staying legible at 24px / as an app icon favicon.
 * - `Logo`: the full header lockup — mark + "mkatub" wordmark, with an
 *   optional tagline line.
 *
 * NOTE for whoever picks this up next: this is a clean, original,
 * production-usable placeholder true to the brand spec (name, colors,
 * circular accent, "m" emphasis) — not a final trademark-ready
 * letterform. A type/identity designer should still true up the curves
 * before this goes on a storefront sign or a legal filing.
 */

type LogoProps = {
  variant?: "light" | "dark";
  withTagline?: boolean;
  className?: string;
};

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="mkatub"
    >
      <rect width="48" height="48" rx="14" fill="#B6FF00" />
      <path
        d="M12 34V18.6h3.9l.3 2.4c.7-.9 1.5-1.6 2.5-2.1a7 7 0 0 1 3.2-.7c1.5 0 2.8.3 3.7 1 1 .6 1.7 1.5 2.1 2.7.7-1.1 1.6-2 2.7-2.6a7.6 7.6 0 0 1 3.7-1c2 0 3.6.6 4.7 1.8 1.1 1.2 1.7 3 1.7 5.4V34h-4.3v-8c0-1.4-.3-2.5-.8-3.2-.5-.7-1.4-1.1-2.5-1.1-1.3 0-2.3.5-3 1.4-.7.9-1.1 2.2-1.1 3.8V34h-4.3v-8c0-1.4-.3-2.5-.8-3.2-.5-.7-1.3-1.1-2.5-1.1-1.3 0-2.3.5-3 1.4-.7.9-1.1 2.2-1.1 3.8V34H12Z"
        fill="#061B17"
      />
      <circle cx="37" cy="12.5" r="3.5" fill="#0B2D1F" />
      <circle cx="38.1" cy="11.3" r="1" fill="#FFF9EC" />
    </svg>
  );
}

export function Logo({ variant = "dark", withTagline = false, className = "" }: LogoProps) {
  const wordmarkColor = variant === "dark" ? "#061B17" : "#FFF9EC";
  return (
    <div className={`inline-flex flex-col gap-1 ${className}`}>
      <div className="inline-flex items-center gap-2">
        <LogoMark className="h-8 w-8 shrink-0" />
        <span
          className="font-heading text-2xl font-extrabold tracking-tight"
          style={{ color: wordmarkColor }}
        >
          mkatub
        </span>
      </div>
      {withTagline && (
        <p className="text-xs font-semibold tracking-[0.18em] uppercase">
          <span style={{ color: wordmarkColor }}>Arabi </span>
          <span className="text-lime" style={{ color: "#8FCC00" }}>
            made simple.
          </span>
        </p>
      )}
    </div>
  );
}
