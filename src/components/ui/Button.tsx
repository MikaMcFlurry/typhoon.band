import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm";
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "btn btn-gold",
  secondary: "btn",
  ghost: "btn btn-ghost",
};

export function Button({ children, href, variant = "primary", size = "default", type = "button", onClick, className = "" }: ButtonProps) {
  const sizeClass = size === "sm" ? "btn-sm" : "";
  const classes = [variantClasses[variant], sizeClass, className].filter(Boolean).join(" ");

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
