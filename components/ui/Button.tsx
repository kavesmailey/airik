import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "text";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-black text-white hover:-translate-y-0.5",
  secondary:
    "border border-black/15 text-black hover:border-black hover:bg-black hover:text-white",
  text:
    "text-black hover:opacity-50",
};

const sizes = {
  sm: "px-5 py-2.5 text-xs",
  md: "px-7 py-4 text-sm",
  lg: "px-8 py-5 text-base",
};

export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-3 rounded-full transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        <span aria-hidden="true">↗</span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      <span aria-hidden="true">↗</span>
    </button>
  );
}
