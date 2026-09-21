import Image from "next/image";
import { siteConfig } from "@/config/site";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 via-cream-100 to-cream-200">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-gold-300/30 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-rose-200/40 blur-3xl" />
      <div className="container-content relative grid items-center gap-10 pb-16 pt-28 sm:pb-20 sm:pt-36 lg:grid-cols-2 lg:gap-16 lg:pb-28 lg:pt-40">
        <div className="flex flex-col gap-6 animate-fade-up">
          <h1 className="max-w-lg font-display text-4xl uppercase leading-[1.08] tracking-[0.02em] text-ink-900 text-balance sm:text-5xl lg:text-6xl">
            {siteConfig.heroName}
          </h1>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay-600 sm:text-base">
            {siteConfig.heroSubtitle}
          </p>
          <p className="max-w-md font-display text-xl leading-relaxed text-ink-700 sm:text-2xl">
            {siteConfig.tagline}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <Button href={siteConfig.bookingUrl}>{siteConfig.ctaPrimary}</Button>
            <Button href={siteConfig.contact.whatsappHref} variant="secondary">
              {siteConfig.ctaWhatsapp}
            </Button>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-ink-600">
            <span className="flex items-center gap-1.5">
              <span className="flex gap-0.5 text-gold-500" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current">
                    <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
                  </svg>
                ))}
              </span>
              {siteConfig.googleRating.value.toFixed(1)}/5 · {siteConfig.googleRating.count} avaliações
            </span>
            <span aria-hidden="true">·</span>
            <span>{siteConfig.address.line1}</span>
            <span aria-hidden="true">·</span>
            <a href={siteConfig.contact.phoneHref} className="hover:text-clay-600">
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] shadow-soft ring-1 ring-gold-500/25 lg:aspect-[3/4]">
          <Image
            src="/images/leticia/leticia-retrato.jpg"
            alt={`Letícia Correia — ${siteConfig.name}`}
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
