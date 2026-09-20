import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/config/site";

function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <div className="flex gap-0.5 text-gold-500" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`${className} fill-current`}>
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center gap-10">
      {/* Avaliação agregada real — não inventar texto de avaliações */}
      <div className="flex flex-col items-center gap-3 rounded-3xl bg-white px-10 py-10 text-center shadow-card">
        <Stars className="h-6 w-6" />
        <p className="font-display text-4xl text-ink-900">
          {siteConfig.googleRating.value.toFixed(1)}
          <span className="text-lg text-ink-500">/5</span>
        </p>
        <p className="text-sm text-ink-600">
          Baseado em {siteConfig.googleRating.count} avaliações no Google
        </p>
        {siteConfig.googleReviewsUrl.startsWith("http") && (
          <a
            href={siteConfig.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 text-xs font-medium uppercase tracking-wide text-clay-600 underline underline-offset-4 hover:text-clay-500"
          >
            Ver avaliações no Google
          </a>
        )}
      </div>

      {testimonials.length > 0 && (
        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.id} className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-card">
              <Stars className="h-4 w-4" />
              <blockquote className="text-sm leading-relaxed text-ink-800">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto text-xs font-semibold uppercase tracking-wide text-ink-600">
                {t.author} · {t.source}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}
