interface IconArrowProps {
  direction?: "left" | "right" | "up" | "down";
  size?: number;
  className?: string;
}

export default function IconArrow({
  direction = "left",
  size = 20,
  className = "",
}: IconArrowProps) {
  const paths = {
    left: {
      d: "M19 12H5M12 19l-7-7 7-7",
    },
    right: {
      d: "M5 12h14M12 5l7 7-7 7",
    },
    up: {
      d: "M12 19V5M5 12l7-7 7 7",
    },
    down: {
      d: "M12 5v14M19 12l-7 7-7-7",
    },
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d={paths[direction].d}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
