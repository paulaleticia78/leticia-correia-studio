"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Testimonial } from "@/data/testimonials";
import { IconStar } from "./Icons";

/**
 * Carrossel premium de avaliações.
 *
 * - Desktop: 3 cartões visíveis por linha.
 * - Mobile: 2 cartões visíveis, com deslize (swipe) nativo.
 * - Avança automaticamente devagar; pausa quando o utilizador interage
 *   (hover, toque, arrastar ou clique nas setas) e retoma pouco depois.
 * - Com apenas 1 avaliação confirmada, mostra-a como um cartão único em
 *   destaque, sem simular um carrossel vazio.
 */
export default function ReviewsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const resumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [paused, setPaused] = useState(false);

  const pauseThenResume = useCallback(() => {
    setPaused(true);
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => setPaused(false), 6000);
  }, []);

  useEffect(() => () => {
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
  }, []);

  useEffect(() => {
    if (paused || testimonials.length < 2) return;
    const el = trackRef.current;
    if (!el) return;

    const id = setInterval(() => {
      if (!el) return;
      const card = el.querySelector<HTMLElement>("[data-review-card]");
      const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.5;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + step, behavior: "smooth" });
    }, 4500);

    return () => clearInterval(id);
  }, [paused, testimonials.length]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-review-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.5;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
    pauseThenResume();
  };

  if (testimonials.length === 0) return null;

  if (testimonials.length === 1) {
    const t = testimonials[0];
    return (
      <div className="mx-auto mt-12 max-w-xl">
        <ReviewCard testimonial={t} />
      </div>
    );
  }

  return (
    <div className="relative mt-12">
      <div
        ref={trackRef}
        onMouseEnter={pauseThenResume}
        onTouchStart={pauseThenResume}
        className="scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 pb-2"
      >
        {testimonials.map((t) => (
          <div
            key={t.id}
            data-review-card
            className="w-[85%] shrink-0 snap-start sm:w-[46%] lg:w-[31.5%]"
          >
            <ReviewCard testimonial={t} />
          </div>
        ))}
      </div>

      {testimonials.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Avaliação anterior"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-clay-500/30 bg-white/80 text-ink-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-clay-500 hover:bg-clay-500 hover:text-white"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Próxima avaliação"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-clay-500/30 bg-white/80 text-ink-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-clay-500 hover:bg-clay-500 hover:text-white"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}

function ReviewCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-[1.5rem] border border-gold-300/40 bg-white/85 p-7 shadow-card backdrop-blur-sm">
      <span className="flex gap-0.5 text-gold-500" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, s) => (
          <IconStar key={s} className="h-3.5 w-3.5" />
        ))}
      </span>
      <blockquote className="text-sm leading-relaxed text-ink-800">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-auto text-xs font-semibold uppercase tracking-wide text-rose-600">
        {testimonial.author} · {testimonial.source}
      </figcaption>
    </div>
  );
}
