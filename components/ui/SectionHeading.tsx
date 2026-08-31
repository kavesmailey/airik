interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "right" | "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "right",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "text-center items-center"
      : align === "left"
        ? "text-left items-start"
        : "text-right items-end";

  return (
    <div
      className={`flex max-w-3xl flex-col ${alignment}`}
      style={{
        gap: "var(--space-sm)",
      }}
    >
      {eyebrow && (
        <span
          className="text-xs font-semibold tracking-[0.16em]"
          style={{
            color: "var(--color-accent)",
          }}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
        style={{
          color: "var(--color-text)",
          lineHeight: "1.15",
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          className="max-w-2xl text-base md:text-lg"
          style={{
            color: "var(--color-text-muted)",
            lineHeight: "var(--line-height-relaxed)",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
