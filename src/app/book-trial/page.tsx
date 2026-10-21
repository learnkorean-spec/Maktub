import { redirect } from "next/navigation";
import { TRIAL_BOOKING_URL } from "@/lib/content";

/**
 * maktub has no booking backend of its own — see src/lib/content.ts. Every
 * CTA now links straight to the real trial-booking widget on
 * kloversegy.com/learn-arabic, so this route (kept for any old links)
 * just forwards there instead of showing its own placeholder.
 */
export default function BookTrialPage() {
  redirect(TRIAL_BOOKING_URL);
}
