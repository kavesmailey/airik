import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "right" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "right",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <Reveal className={`${align === "center" ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className="text-sm font-medium" style={{ color: "var(--color-accent)" }}>
          {eyebrow}
        </p>
      )}
      <h2
        className="mt-3 text-4xl font-bold sm:text-5xl lg:text-6xl"
        style={{
          color: isDark ? "var(--color-text)" : "var(--color-text-dark)",
          lineHeight: "var(--line-height-tight)",
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="mt-5 max-w-2xl text-lg"
          style={{
            color: isDark ? "var(--color-text-muted)" : "var(--color-text-dark-muted)",
            lineHeight: "var(--line-height-relaxed)",
            marginInline: align === "center" ? "auto" : undefined,
          }}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
