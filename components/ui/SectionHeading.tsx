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
    <Reveal
      className={`${align === "center" ? "text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <p className="text-sm font-medium text-accent">{eyebrow}</p>
      )}
      <h2
        className={`mt-3 text-4xl font-bold leading-[1.3] sm:text-5xl lg:text-6xl ${
          isDark ? "text-text" : "text-text-dark"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-lg leading-relaxed ${
            isDark ? "text-text-muted" : "text-text-dark-muted"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
