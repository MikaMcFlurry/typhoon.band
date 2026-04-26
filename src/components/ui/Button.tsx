import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
};

const variants = {
  primary:
    "border-amber-300/80 bg-amber-300 text-stone-950 shadow-[0_0_28px_rgba(245,186,80,0.2)] hover:bg-amber-200",
  secondary:
    "border-amber-200/46 bg-black/42 text-amber-100 hover:border-amber-200/80 hover:bg-stone-900",
  ghost: "border-transparent bg-transparent text-stone-200 hover:text-amber-100",
};

export function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
}: ButtonProps) {
  const classes = [
    "inline-flex min-h-11 items-center justify-center rounded-sm border px-5 py-2.5 text-sm font-bold uppercase transition",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300",
    variants[variant],
    className,
  ].join(" ");

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
