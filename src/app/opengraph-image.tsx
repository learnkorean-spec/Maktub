import { ImageResponse } from "next/og";

export const alt = "mkatub — Speak real Arabic. Connect for real.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand tokens duplicated here (not imported) because this file renders in
// the Edge/Node image-generation runtime, which can't read Tailwind's
// @theme CSS — see src/app/globals.css for the source of truth.
const LIME = "#B6FF00";
const FOREST = "#0b2d1f";
const IVORY = "#fff9ec";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: FOREST,
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* Same vector mark as src/components/Logo.tsx's LogoMark, inlined
              because this renders through Satori (next/og), which can't
              import React components that rely on Tailwind classes. */}
          <svg width="56" height="56" viewBox="0 0 48 48">
            <rect width="48" height="48" rx="14" fill={LIME} />
            <path
              d="M12 34V18.6h3.9l.3 2.4c.7-.9 1.5-1.6 2.5-2.1a7 7 0 0 1 3.2-.7c1.5 0 2.8.3 3.7 1 1 .6 1.7 1.5 2.1 2.7.7-1.1 1.6-2 2.7-2.6a7.6 7.6 0 0 1 3.7-1c2 0 3.6.6 4.7 1.8 1.1 1.2 1.7 3 1.7 5.4V34h-4.3v-8c0-1.4-.3-2.5-.8-3.2-.5-.7-1.4-1.1-2.5-1.1-1.3 0-2.3.5-3 1.4-.7.9-1.1 2.2-1.1 3.8V34h-4.3v-8c0-1.4-.3-2.5-.8-3.2-.5-.7-1.3-1.1-2.5-1.1-1.3 0-2.3.5-3 1.4-.7.9-1.1 2.2-1.1 3.8V34H12Z"
              fill={FOREST}
            />
            <circle cx="37" cy="12.5" r="3.5" fill="#0B2D1F" />
            <circle cx="38.1" cy="11.3" r="1" fill={IVORY} />
          </svg>
          <div style={{ fontSize: 34, fontWeight: 700, color: IVORY, letterSpacing: -0.5 }}>
            mkatub
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 64,
              fontWeight: 800,
              color: IVORY,
              lineHeight: 1.08,
              maxWidth: 980,
            }}
          >
            <span>Speak real Arabic.</span>
            <span>Connect for real.</span>
          </div>
          <div style={{ fontSize: 28, color: "#d9d2bd", maxWidth: 820 }}>
            Live classes with a real native-speaking tutor — Egyptian Arabic &amp; Modern
            Standard Arabic.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
