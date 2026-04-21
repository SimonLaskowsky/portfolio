// Four L-shaped tick marks inset at the corners of a container — reads
// as registration marks on an architectural drawing. Parent needs
// `position: relative`.

type Props = {
  className?: string;
  inset?: string;
  size?: string;
  color?: string;
};

export default function RegistrationMarks({
  className = "",
  inset = "0.5rem",
  size = "0.6rem",
  color = "rgba(242, 239, 232, 0.35)",
}: Props) {
  const armStyle = { background: color };
  const cornerStyle = {
    position: "absolute" as const,
    width: size,
    height: size,
  };

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute z-10 ${className}`}
      style={{ inset }}
    >
      {/* Top-left */}
      <div style={{ ...cornerStyle, top: 0, left: 0 }}>
        <div
          style={{ ...armStyle, position: "absolute", top: 0, left: 0, width: "100%", height: "1px" }}
        />
        <div
          style={{ ...armStyle, position: "absolute", top: 0, left: 0, width: "1px", height: "100%" }}
        />
      </div>
      {/* Top-right */}
      <div style={{ ...cornerStyle, top: 0, right: 0 }}>
        <div
          style={{ ...armStyle, position: "absolute", top: 0, right: 0, width: "100%", height: "1px" }}
        />
        <div
          style={{ ...armStyle, position: "absolute", top: 0, right: 0, width: "1px", height: "100%" }}
        />
      </div>
      {/* Bottom-left */}
      <div style={{ ...cornerStyle, bottom: 0, left: 0 }}>
        <div
          style={{ ...armStyle, position: "absolute", bottom: 0, left: 0, width: "100%", height: "1px" }}
        />
        <div
          style={{ ...armStyle, position: "absolute", bottom: 0, left: 0, width: "1px", height: "100%" }}
        />
      </div>
      {/* Bottom-right */}
      <div style={{ ...cornerStyle, bottom: 0, right: 0 }}>
        <div
          style={{ ...armStyle, position: "absolute", bottom: 0, right: 0, width: "100%", height: "1px" }}
        />
        <div
          style={{ ...armStyle, position: "absolute", bottom: 0, right: 0, width: "1px", height: "100%" }}
        />
      </div>
    </div>
  );
}
