import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({ children, href, variant = "primary", className, ...props }: Props) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font800 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-4 focus-visible:outline-blue-200",
    variant === "primary" && "brand-gradient text-white shadow-lg shadow-blue-900/15",
    variant === "secondary" && "border border-[var(--border)] bg-white text-[var(--brand-deep)] shadow-sm hover:border-blue-200",
    variant === "ghost" && "text-[var(--brand-blue-dark)] hover:bg-[var(--brand-light)]",
    variant === "dark" && "bg-[var(--brand-navy)] text-white",
    className,
  );
  if (href) return <Link className={classes} href={href} {...props}>{children}</Link>;
  return <button className={classes} {...props}>{children}</button>;
}
