import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/config/site";
import AnimatedSection from "./AnimatedSection";
import Button from "./Button";
import { IconStar } from "./Icons";
import ReviewsCarousel from "./ReviewsCarousel";

/**
 * Avaliações do Google — secção premium.
 *
 * REGRA: só mostrar avaliações reais e públicas associadas ao Studio
 * (ver `src/data/testimonials.ts`). Nunca inventar depoimentos nem
 * alterar o sentido/texto de um comentário real.
 *
 * Sem integração automática com o Google Business Profile disponível
 * neste ambiente — os dados vêm de `siteConfig.googleRating` e de
 * `testimonials.ts`, ambos editáveis manualmente (painel administrativo
 * futuro) até existir uma ligação automática.
 */
export default function GoogleReviewsSection() {
  const { value, count } = siteConfig.googleRating;
  const hasReviewsUrl = siteConfig.googleReviewsUrl.startsWith("http");

  return (
    <section
      id="avaliacoes"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-sand-300/40 via-cream-100 to-cream-100"
    >
      {/* detalhes decorativos discretos em dourado/rosé */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-rose-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-gold-300/30 blur-3xl"
      />

      <div className="container-content relative">
        <AnimatedSection className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
            Avaliações do Google
          </span>
          <h2 className="mt-3 font-display text-3xl text-ink-900 sm:text-4xl">
            O que dizem as nossas clientes.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={80} className="mx-auto mt-10 flex max-w-sm flex-col items-center gap-2 text-center">
          <span className="flex gap-1 text-gold-500 animate-fade-in" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar key={i} className="h-5 w-5" />
            ))}
          </span>
          <p className="animate-fade-up font-display text-5xl text-ink-900">
            {value.toFixed(1).replace(".", ",")}
          </p>
          <p className="text-sm text-ink-600">
            {count} avaliações no Google · Letícia Correia Studio
          </p>
        </AnimatedSection>

        {testimonials.length > 0 && (
          <AnimatedSection delay={120} className="mx-auto max-w-5xl">
            <ReviewsCarousel testimonials={testimonials} />
          </AnimatedSection>
        )}

        <AnimatedSection delay={200} className="mt-12 flex justify-center">
          {hasReviewsUrl ? (
            <Button href={siteConfig.googleReviewsUrl} variant="secondary">
              Ver todas as avaliações no Google
            </Button>
          ) : (
            <p className="text-xs text-ink-faint text-ink-500">
              [INSERIR LINK DIRETO PARA AS AVALIAÇÕES GOOGLE — botão &ldquo;Ver todas no
              Google&rdquo; fica pronto assim que o link for adicionado em
              <code className="mx-1 rounded bg-ink-900/5 px-1.5 py-0.5">siteConfig.googleReviewsUrl</code>]
            </p>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
