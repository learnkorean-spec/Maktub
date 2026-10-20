import { PrimaryCTA } from "./PrimaryCTA";
import { TRIAL_BOOKING_URL } from "@/lib/content";

/**
 * Mobile-only fixed booking CTA. Respects safe-area insets and sits above
 * the bottom edge without covering other on-page actions (it's a single
 * bar, not a full-width overlay of content).
 */
export function MobileStickyCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-ivory/95 p-3 backdrop-blur md:hidden"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <PrimaryCTA href={TRIAL_BOOKING_URL} className="w-full">
        Book a trial class
      </PrimaryCTA>
    </div>
  );
}
