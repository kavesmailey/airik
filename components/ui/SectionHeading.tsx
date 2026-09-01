type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "right" | "center";
  tone?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "right",
  tone = "light",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center items-center"
      : "text-right items-start";

  const colors =
    tone === "dark"
      ? {
          eyebrow: "text-white/45",
          title: "text-white",
          description: "text-white/60",
        }
      : {
          eyebrow: "text-black/40",
          title: "text-black",
          description: "text-black/55",
        };

  return (
    <div className={`flex max-w-4xl flex-col ${alignment}`}>
      {eyebrow && (
        <span className={`mb-7 text-sm font-medium ${colors.eyebrow}`}>
          {eyebrow}
        </span>
      )}

      <h2
        className={`text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl ${colors.title}`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-7 max-w-3xl text-base leading-8 md:text-lg ${colors.description}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
