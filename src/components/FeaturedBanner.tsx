import Image from "next/image";
import { siteConfig } from "@/config/site";
import { liftDuploCampaign } from "@/data/campaign";
import Button from "./Button";
import { IconArrowRight } from "./Icons";

/**
 * Campanha em destaque — "LIFT DUPLO" (Lash Lifting + Brow Lamination).
 * Ver `src/data/campaign.ts` para a explicação de por que o preço e o
 * link de marcação dedicados ainda ficam por confirmar.
 */
export default function FeaturedBanner() {
  const campaign = liftDuploCampaign;

  return (
    <div className="relative grid overflow-hidden rounded-[2rem] bg-gradient-to-br from-cream-100 via-sand-200 to-rose-200 shadow-soft lg:grid-cols-2">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold-500/30 blur-3xl"
      />
      <div className="relative z-10 order-2 flex flex-col items-start gap-5 px-8 py-12 sm:px-14 sm:py-16 lg:order-1 lg:py-20">
        <span className="inline-flex items-center gap-2 rounded-full bg-gold-300/40 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-clay-700">
          Campanha em destaque
        </span>
        <h2 className="max-w-md font-display text-4xl leading-tight text-ink-900 text-balance sm:text-5xl">
          {campaign.name}
        </h2>
        <p className="max-w-sm font-display text-lg italic leading-relaxed text-clay-700">
          {campaign.subtitle}
        </p>
        <p className="max-w-sm text-sm leading-relaxed text-ink-700 sm:text-base">
          {campaign.description}
        </p>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-600">
          {campaign.services}
        </p>
        <div className="flex items-center gap-3">
          <span className="font-display text-2xl text-clay-600">
            {campaign.price ?? "Preço a confirmar"}
          </span>
        </div>
        <Button href={campaign.bookingUrl ?? siteConfig.bookingUrl} variant="dark">
          <span className="flex items-center gap-2">
            {campaign.cta} <IconArrowRight />
          </span>
        </Button>
        {!campaign.bookingUrl && (
          <p className="max-w-sm text-xs text-ink-500">
            Abre o {siteConfig.bookingPlatform} — escolha os dois tratamentos (Lash Lifting + Brow
            Lamination) diretamente na marcação.
          </p>
        )}
      </div>
      <div className="relative order-1 aspect-[4/3] w-full lg:order-2 lg:aspect-auto">
        <Image
          src={campaign.image}
          alt={`Campanha ${campaign.name} — ${siteConfig.name}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/20 via-transparent to-transparent lg:bg-gradient-to-r lg:from-cream-100/40 lg:via-transparent lg:to-transparent" />
      </div>
    </div>
  );
}
