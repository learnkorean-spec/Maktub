import Image from "next/image";
import { tutor } from "@/lib/content";
import { PrimaryCTA } from "./PrimaryCTA";

/**
 * The one tutor confirmed as real right now: Reham, who also teaches
 * Korean at Klovers and already teaches Arabic to foreigners at
 * kloversegy.com/learn-arabic. Bio, quote and photo pulled from that page
 * on 2026-10-20 (src/lib/content.ts) — not invented for maktub.
 */
export function MeetTutor() {
  return (
    <section className="border-b border-ink/10 bg-forest py-20 text-white">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 md:grid-cols-[14rem_1fr] md:items-center">
        <div className="relative mx-auto h-56 w-56 shrink-0 overflow-hidden rounded-full border-4 border-lime/80 md:mx-0">
          <Image
            src={tutor.photo}
            alt={tutor.name}
            fill
            sizes="14rem"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Meet your tutor
          </h2>
          <p className="mt-4 text-lg italic leading-snug text-lime">
            &ldquo;{tutor.quote}&rdquo;
          </p>
          <p className="mt-5 text-lg leading-relaxed text-white/85">{tutor.bio}</p>
          <div className="mt-7">
            <PrimaryCTA href="/tutors" variant="outline-light">
              Meet {tutor.name.split(" ")[0]}
            </PrimaryCTA>
          </div>
        </div>
      </div>
    </section>
  );
}
