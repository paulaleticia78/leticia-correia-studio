import Image from "next/image";
import { siteConfig } from "@/config/site";
import Button from "./Button";

export default function FeaturedBanner() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-cream-100 via-sand-300 to-rose-200">
      <div className="absolute inset-0">
        <Image
          src="/images/services/destaque.jpg"
          alt="Campanha em destaque do Studio Letícia Correia"
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-gold-500/25 blur-3xl"
      />
      <div className="relative z-10 flex flex-col items-start gap-5 px-8 py-14 sm:px-14 sm:py-20">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-clay-600">
          Em destaque
        </span>
        <h2 className="max-w-md font-display text-3xl leading-tight text-ink-900 text-balance sm:text-4xl">
          [INSERIR CAMPANHA OU SERVIÇO EM DESTAQUE]
        </h2>
        <p className="max-w-sm text-sm leading-relaxed text-ink-700 sm:text-base">
          [INSERIR DESCRIÇÃO BREVE DA CAMPANHA — ex: promoção sazonal, novo serviço ou pacote especial.]
        </p>
        <Button href={siteConfig.bookingUrl} variant="primary">
          {siteConfig.ctaPrimary}
        </Button>
      </div>
    </div>
  );
}
