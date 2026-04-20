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
          backgroundColor: "#0b0d0a",
          color: "#c7c2b6",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#9cd07a",
          }}
        >
          <span>Laskowski.studio</span>
          <span style={{ color: "#c7c2b6", opacity: 0.55 }}>
            Portfolio · 2026
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 112,
              lineHeight: 1,
              color: "#e8e3d5",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Editorial web,</span>
            <span style={{ fontStyle: "italic", color: "#9cd07a" }}>
              brutalist detail.
            </span>
          </div>
          <div
            style={{
              fontSize: 28,
              fontStyle: "italic",
              color: "#c7c2b6",
              opacity: 0.85,
              maxWidth: 820,
            }}
          >
            A studio of one, run by Szymon Laskowski. Selected works, walked
            as a floor plan.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#c7c2b6",
            opacity: 0.55,
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
