interface MediaPlaceholderProps {
  aspectRatio?: string;
  label?: string;
  tone?: "dark" | "light" | "accent";
  className?: string;
}

export default function MediaPlaceholder({
  aspectRatio = "4/3",
  label = "تصویر کارگاه آیریک",
  tone = "dark",
  className = "",
}: MediaPlaceholderProps) {
  const tones = {
    dark: {
      bg: "var(--color-surface)",
      border: "var(--color-border)",
      text: "var(--color-text-muted)",
      icon: "var(--color-text-faint)",
    },
    light: {
      bg: "var(--color-surface-light)",
      border: "var(--color-border-light)",
      text: "var(--color-text-dark-muted)",
      icon: "var(--color-text-dark-faint)",
    },
    accent: {
      bg: "rgba(232, 89, 12, 0.08)",
      border: "rgba(232, 89, 12, 0.3)",
      text: "var(--color-accent)",
      icon: "var(--color-accent)",
    },
  };

  const t = tones[tone];

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{
        aspectRatio,
        backgroundColor: t.bg,
        border: `1px solid ${t.border}`,
        borderRadius: "var(--radius-md)",
      }}
      role="img"
      aria-label={label}
    >
      <div className="relative z-10 flex flex-col items-center gap-2 px-4 text-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke={t.icon}
          strokeWidth="1"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-xs font-medium" style={{ color: t.text }}>
          {label}
        </span>
      </div>
    </div>
  );
}
