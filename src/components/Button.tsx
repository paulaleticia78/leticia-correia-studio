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
  // Degradê champagne → rosé → dourado, com brilho, elevação e leve escala no hover —
  // é o CTA mais destacado do site (marcação).
  primary:
    "bg-[length:220%_220%] bg-[position:0%_50%] bg-gradient-to-r from-sand-500 via-clay-500 to-gold-500 text-ink-900 shadow-[0_10px_26px_-10px_rgba(185,151,107,0.6)] hover:bg-[position:100%_50%] hover:shadow-[0_20px_42px_-12px_rgba(169,120,103,0.6)] hover:-translate-y-1 hover:scale-[1.02] font-semibold uppercase tracking-[0.12em]",
  dark:
    "bg-[length:220%_220%] bg-[position:0%_50%] bg-gradient-to-r from-clay-400 via-rose-400 to-gold-500 text-ink-900 shadow-[0_10px_26px_-10px_rgba(169,120,103,0.6)] hover:bg-[position:100%_50%] hover:shadow-[0_20px_42px_-12px_rgba(169,120,103,0.65)] hover:-translate-y-1 hover:scale-[1.02] font-semibold uppercase tracking-[0.12em]",
  secondary:
    "bg-gradient-to-br from-white/70 to-rose-200/40 border border-gold-500/40 text-ink-900 hover:border-gold-500 hover:from-gold-300/25 hover:to-clay-400/20 hover:-translate-y-0.5 hover:shadow-card",
  ghost: "bg-transparent text-ink-900 hover:text-clay-600 hover:-translate-y-0.5 underline underline-offset-4",
};

const shineVariants: ButtonVariant[] = ["primary", "dark"];

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  ...rest
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-[350ms] ease-out active:scale-[0.96] active:shadow-none";
  const classes = `${base} ${variantStyles[variant]} ${className}`;
  const hasShine = shineVariants.includes(variant);

  const shine = hasShine ? (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-0 transition-[transform,opacity] duration-700 ease-out group-hover:translate-x-[280%] group-hover:opacity-100"
    />
  ) : null;

  const content = (
    <>
      {shine}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  );

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
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
