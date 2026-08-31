/**
 * ═══════════════════════════════════════════════════════════════
 * BUTTON — Reusable button/link component
 * ═══════════════════════════════════════════════════════════════
 */

import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const baseClasses = "btn-primary";
  const variantClasses =
    variant === "primary" ? "btn-primary" : "btn-secondary";
  const sizeClasses = {
    sm: "min-h-10 px-4 text-xs",
    md: "min-h-12 px-6 text-sm",
    lg: "min-h-14 px-8 text-base",
  }[size];

  const combinedClasses = `${variantClasses} ${sizeClasses} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
