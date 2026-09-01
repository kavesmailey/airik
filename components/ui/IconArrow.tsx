interface IconArrowProps {
  direction?:
    | "left"
    | "right"
    | "up"
    | "down"
    | "up-left"
    | "up-right"
    | "down-left"
    | "down-right";
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
    "up-left": {
      d: "M17 17 7 7M7 7h8M7 7v8",
    },
    "up-right": {
      d: "M7 17 17 7M17 7H9M17 7v8",
    },
    "down-left": {
      d: "M17 7 7 17M7 17h8M7 17V9",
    },
    "down-right": {
      d: "M7 7l10 10M17 17H9M17 17V9",
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
