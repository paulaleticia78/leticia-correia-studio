import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

const variantStyles: Record<ButtonVariant, string> = {
  // Degradê champagne → bege → rosé, com brilho, elevação e leve escala no hover —
  // é o CTA mais destacado do site (marcação).
  primary:
    "bg-[length:200%_200%] bg-[position:0%_50%] bg-gradient-to-r from-sand-500 via-sand-400 to-clay-500 text-ink-900 shadow-[0_10px_26px_-10px_rgba(185,151,107,0.55)] hover:bg-[position:100%_50%] hover:shadow-[0_18px_40px_-12px_rgba(185,151,107,0.65)] hover:-translate-y-1 hover:scale-[1.015] font-semibold uppercase tracking-[0.12em]",
  dark:
    "bg-[length:200%_200%] bg-[position:0%_50%] bg-gradient-to-r from-clay-500 via-clay-400 to-gold-500 text-ink-900 shadow-[0_10px_26px_-10px_rgba(201,149,134,0.55)] hover:bg-[position:100%_50%] hover:shadow-[0_18px_40px_-12px_rgba(201,149,134,0.65)] hover:-translate-y-1 hover:scale-[1.015] font-semibold uppercase tracking-[0.12em]",
  secondary:
    "bg-white/60 border border-gold-500/40 text-ink-900 hover:border-gold-500 hover:bg-gold-300/20 hover:-translate-y-0.5 hover:shadow-card",
  ghost: "bg-transparent text-ink-900 hover:text-clay-600 hover:-translate-y-0.5 underline underline-offset-4",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-[350ms] ease-out active:scale-[0.96] active:shadow-none";
  const classes = `${base} ${variantStyles[variant]} ${className}`;

  const isExternalLike =
    external ||
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("https://wa.me");

  if (isExternalLike) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("tel:") ? undefined : "_blank"}
        rel={href.startsWith("tel:") ? undefined : "noopener noreferrer"}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
