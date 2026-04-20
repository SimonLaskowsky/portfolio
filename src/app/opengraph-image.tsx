import { ImageResponse } from "next/og";

export const alt = "Laskowski.studio — Szymon Laskowski";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: "72px",
          backgroundColor: "#0a0a0a",
          color: "#f2f0ec",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#f2f0ec",
            opacity: 0.7,
            fontFamily: "monospace",
          }}
        >
          <span>Laskowski.studio</span>
          <span style={{ opacity: 0.6 }}>Portfolio · 2026</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 128,
              lineHeight: 0.9,
              color: "#ffffff",
              display: "flex",
              flexDirection: "column",
              fontWeight: 900,
              letterSpacing: "-0.045em",
            }}
          >
            <span>A studio</span>
            <span style={{ fontWeight: 300, opacity: 0.55 }}>of one.</span>
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 300,
              color: "#f2f0ec",
              opacity: 0.75,
              maxWidth: 820,
              letterSpacing: "-0.01em",
            }}
          >
            Szymon Laskowski — editorial web, quiet detail. Selected works,
            walked as a floor plan.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 16,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#f2f0ec",
            opacity: 0.55,
            fontFamily: "monospace",
          }}
        >
          <span>laskowski.studio</span>
          <span>@_lasq_</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
