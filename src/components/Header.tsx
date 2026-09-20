"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import Button from "./Button";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        isScrolled || isOpen
          ? "border-gold-500/20 bg-cream-50/95 backdrop-blur shadow-card"
          : "border-transparent bg-cream-50/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-content flex h-20 items-center justify-between">
        <Link href="/" className="font-display text-xl tracking-wide text-ink-900 sm:text-2xl">
          Letícia<span className="text-clay-500"> Correia</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            const isBooking = item.href === "/agendar";
            if (isBooking) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                    active
                      ? "bg-clay-500 text-white"
                      : "bg-gold-300/35 text-clay-600 hover:bg-gold-300/55"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors duration-200 ${
                  active ? "text-clay-600" : "text-ink-700 hover:text-ink-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={siteConfig.bookingUrl} className="!px-6 !py-2.5 text-xs">
            {siteConfig.ctaPrimary}
          </Button>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-ink-900 transition-transform duration-300 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-ink-900 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-ink-900 transition-transform duration-300 ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="container-content flex flex-col gap-1 pb-6">
            {siteConfig.nav.map((item) => {
              const active = pathname === item.href;
              const isBooking = item.href === "/agendar";
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-3.5 text-base transition-colors ${
                    isBooking
                      ? "font-semibold text-clay-600"
                      : active
                        ? "bg-ink-900/5 text-clay-600"
                        : "text-ink-800 hover:bg-ink-900/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button href={siteConfig.bookingUrl} className="mt-3 w-full">
              {siteConfig.ctaPrimary}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
