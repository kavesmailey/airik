import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  disabled = false,
  onClick,
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[var(--color-accent)] text-[var(--color-accent-foreground)] hover:opacity-90",
    secondary:
      "bg-[var(--color-surface-dark)] text-[var(--color-text)] hover:opacity-90",
    outline:
      "border border-[var(--color-border)] bg-transparent text-[var(--color-text)] hover:bg-[var(--color-surface-muted)]",
    ghost:
      "bg-transparent text-[var(--color-text)] hover:bg-[var(--color-surface-muted)]",
  };

  const sizes = {
    sm: "min-h-9 px-4 text-sm",
    md: "min-h-11 px-5 text-sm",
    lg: "min-h-13 px-7 text-base",
  };

  const classes = cn(
    "inline-flex items-center justify-center gap-2",
    "font-medium transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
