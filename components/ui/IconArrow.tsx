/**
 * ═══════════════════════════════════════════════════════════════
 * ICON ARROW — RTL-aware directional arrow
 * ═══════════════════════════════════════════════════════════════
 */

interface IconArrowProps {
  direction?: "left" | "right" | "up" | "down" | "up-left" | "up-right";
  size?: number;
  className?: string;
}

export default function IconArrow({
  direction = "left",
  size = 20,
  className = "",
}: IconArrowProps) {
  const paths: Record<string, string> = {
    left: "M19 12H5M12 19l-7-7 7-7", // Points left (correct for RTL "next")
    right: "M5 12h14M12 5l7 7-7 7", // Points right (correct for RTL "back")
    up: "M12 19V5M5 12l7-7 7 7",
    down: "M12 5v14M19 12l-7 7-7-7",
    "up-left": "M7 17L17 7M8 8h9v9",
    "up-right": "M17 17L7 7M16 8H7v9",
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[direction]} />
    </svg>
  );
}
