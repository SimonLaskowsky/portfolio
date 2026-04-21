// Directional "sunbeam" for a plate — a single large radial gradient cast
// from a specific corner. Pair each plate with its own x/y/color so the
// floor reads like a real building with sunlight coming through clerestory
// windows instead of flat graphic-design lighting.
//
// Parent must be position:relative.

type Props = {
  /** horizontal origin, 0–100 */
  x: number;
  /** vertical origin, 0–100 */
  y: number;
  /** beam spread as % of the plate */
  size?: number;
  /** beam color in rgba() — low alpha */
  color?: string;
};

export default function Spotlight({
  x,
  y,
  size = 65,
  color = "rgba(255, 240, 200, 0.12)",
}: Props) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        background: `radial-gradient(${size}% ${size}% at ${x}% ${y}%, ${color}, transparent 72%)`,
      }}
    />
  );
}
