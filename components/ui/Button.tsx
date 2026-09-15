import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-[#8BC53D] text-[#FFFFFF] hover:-translate-y-0.5 hover:bg-[#8BC53D]/90",

  secondary:
    "border border-[#022F12] bg-[#022F12] text-[#FFFFFF] hover:bg-[#021408]",

  outline:
    "border border-[#022F12] bg-transparent text-[#022F12] hover:bg-[#022F12] hover:text-[#FFFFFF]",

  text:
    "text-[#022F12] hover:opacity-60",
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
  const classes = [
    "inline-flex items-center justify-center gap-3 rounded-full",
    "transition-all duration-200",
    "font-medium",
    variants[variant],
    sizes[size],
    className,
  ].join(" ");

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
