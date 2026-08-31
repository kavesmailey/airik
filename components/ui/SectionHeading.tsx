type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "right" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "right",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center items-center"
      : "text-right items-start";

  return (
    <div className={`flex max-w-4xl flex-col ${alignment}`}>
      {eyebrow && (
        <span className="mb-7 text-sm font-medium text-black/40">
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-7 max-w-3xl text-base leading-8 text-black/55 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
