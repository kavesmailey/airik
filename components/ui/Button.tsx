import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "text";
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

export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm transition-all duration-200 ${variants[variant]} ${className}`;

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
