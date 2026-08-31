import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "muted" | "dark";
  size?: "default" | "large" | "compact";
}

export default function Section({
  children,
  className,
  id,
  tone = "default",
  size = "default",
}: SectionProps) {
  const background =
    tone === "dark"
      ? "var(--color-surface-dark)"
      : tone === "muted"
        ? "var(--color-surface-muted)"
        : "var(--color-background)";

  const spacing =
    size === "large"
      ? "var(--space-5xl)"
      : size === "compact"
        ? "var(--space-2xl)"
        : "var(--space-4xl)";

  return (
    <section
      id={id}
      className={cn("w-full", className)}
      style={{
        backgroundColor: background,
        paddingTop: spacing,
        paddingBottom: spacing,
      }}
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16">
        {children}
      </div>
    </section>
  );
}
