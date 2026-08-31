import { cn } from "@/lib/utils";

interface MediaPlaceholderProps {
  label?: string;
  aspectRatio?: "1/1" | "4/3" | "16/9";
  tone?: "dark" | "light";
  className?: string;
}

export default function MediaPlaceholder({
  label = "AIRIK",
  aspectRatio = "16/9",
  tone = "dark",
  className,
}: MediaPlaceholderProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        className
      )}
      style={{
        aspectRatio,
        borderRadius: "var(--radius-sm)",
        backgroundColor: isDark
          ? "var(--color-surface-dark)"
          : "var(--color-surface-light)",
        border: "1px solid var(--color-border)",
      }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="text-xs font-medium tracking-[0.2em] uppercase"
          style={{
            color: isDark
              ? "var(--color-text-muted)"
              : "var(--color-text-dark-muted)",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
