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
    "border-amber-300/80 bg-[linear-gradient(180deg,#f4cf85,#c7923f)] text-stone-950 shadow-[0_0_30px_rgba(215,161,74,0.22)] hover:brightness-110",
  secondary:
    "border-amber-200/42 bg-black/50 text-amber-100 hover:border-amber-200/80 hover:bg-amber-950/30",
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
    "inline-flex min-h-11 items-center justify-center rounded-sm border px-5 py-2.5 text-sm font-extrabold uppercase tracking-[0.08em] transition",
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
