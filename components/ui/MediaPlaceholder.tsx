import { cn } from "@/lib/utils";

interface MediaPlaceholderProps {
  label?: string;
  aspectRatio?: "1/1" | "4/3" | "16/9";
  tone?: "dark" | "light";
  className?: string;
  src?: string | null;
  alt?: string;
}

export default function MediaPlaceholder({
  label = "AYRIC",
  aspectRatio = "16/9",
  tone = "dark",
  className,
  src,
  alt = "",
}: MediaPlaceholderProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden",
        className
      )}
      style={{
        aspectRatio,
        borderRadius: "var(--radius-sm)",
        backgroundColor: isDark
          ? "var(--color-dark-green)"
          : "var(--color-soft-green)",
        border: "1px solid var(--color-dark-green)",
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />
      ) : (
        <>
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(var(--color-white) 1px, transparent 1px), linear-gradient(90deg, var(--color-white) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-xs font-medium uppercase tracking-[0.2em]"
              style={{
                color: isDark
                  ? "var(--color-white)"
                  : "var(--color-dark-green)",
                opacity: 0.7,
              }}
            >
              {label}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
