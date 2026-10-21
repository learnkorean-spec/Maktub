"use client";

import { useRef } from "react";
import type { Reel } from "@/lib/reels";

/**
 * Self-learning video grid. Each card shows the reel's real poster frame
 * until tapped, then plays inline with native controls — no custom
 * player chrome to maintain, no autoplay-with-sound surprises.
 *
 * Only one reel plays at a time: starting one pauses whichever was
 * already running, so reels don't talk over each other.
 */
export function ReelGallery({ reels }: { reels: Reel[] }) {
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  function handlePlay(slug: string) {
    for (const [otherSlug, el] of Object.entries(videoRefs.current)) {
      if (otherSlug !== slug && el && !el.paused) {
        el.pause();
      }
    }
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {reels.map((reel) => (
        <div
          key={reel.slug}
          className="overflow-hidden rounded-card border border-ink/10 bg-white"
        >
          <div className="relative aspect-[9/16] w-full bg-ink/5">
            <video
              ref={(el) => {
                videoRefs.current[reel.slug] = el;
              }}
              className="h-full w-full object-cover"
              src={reel.video}
              poster={reel.poster}
              controls
              playsInline
              preload="none"
              onPlay={() => handlePlay(reel.slug)}
            >
              Your browser doesn&rsquo;t support inline video. You can{" "}
              <a href={reel.video}>download the clip</a> instead.
            </video>
            <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold text-ivory">
              Reel {reel.order} / {reels.length}
            </span>
          </div>
          <div className="p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-sage">
              {reel.rangeLabel}
            </p>
            <h3 className="mt-1 font-heading text-lg font-bold text-ink">
              {reel.title}
            </h3>
            <p className="mt-1 text-sm text-ink/60">
              {reel.letters.join(" · ")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
