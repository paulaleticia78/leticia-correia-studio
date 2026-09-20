"use client";

import { createElement, useEffect, useRef, type ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
};

/**
 * Wraps content in a fade-up reveal that triggers once the element
 * scrolls into view. Pure IntersectionObserver — no external deps.
 */
export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  as = "div",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      className: `reveal ${className}`,
      style: { transitionDelay: `${delay}ms` },
    },
    children
  );
}
