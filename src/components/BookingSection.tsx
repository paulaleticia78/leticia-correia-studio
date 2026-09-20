import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import Button from "./Button";
import { IconArrowRight, IconCheck } from "./Icons";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";

/**
 * Secção exclusiva de marcações — "Agende o Seu Momento".
 *
 * Mostra os serviços com preço (quando confirmado) e um botão de
 * marcação por serviço, mais uma área dedicada ao sistema de
 * marcações do Noona:
 *  - se `siteConfig.noonaEmbedUrl` estiver preenchido com um URL de
 *    iframe (gerado em Noona HQ → Online Bookings → Visibility →
 *    "Allow online bookings on your website"), mostra o widget
 *    oficial embutido, responsivo;
 *  - caso contrário, mostra um cartão de marcação com a identidade
 *    do Noona preservada (não é um link genérico solto) e uma nota
 *    clara para quem gere o site sobre como ativar o widget.
 */
export default function BookingSection() {
  const hasEmbed = siteConfig.noonaEmbedUrl.startsWith("http");

  return (
    <section id="marcacoes" className="section-padding bg-gradient-to-b from-cream-100 via-sand-300/40 to-cream-100">
      <div className="container-content">
        <AnimatedSection className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-clay-600">
            Marcações
          </span>
          <h2 className="font-display text-3xl text-ink-900 text-balance sm:text-4xl">
            Agende o Seu Momento
          </h2>
          <p className="text-base leading-relaxed text-ink-700">
            Escolha o tratamento e marque em poucos passos, diretamente através da nossa
            plataforma de marcações — sem sair da experiência {siteConfig.name}.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          {/* Lista de serviços com preço e marcação direta */}
          <AnimatedSection delay={80}>
            <div className="flex flex-col divide-y divide-ink-900/10 overflow-hidden rounded-[1.75rem] bg-white shadow-card">
              {services.map((service) => (
                <div
                  key={service.slug}
                  className="flex flex-wrap items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-cream-100/60 sm:px-8"
                >
                  <div className="min-w-0">
                    <Link
                      href={`/servicos/${service.slug}`}
                      className="font-display text-lg text-ink-900 hover:text-clay-600"
                    >
                      {service.name}
                    </Link>
                    <p className="mt-0.5 truncate text-sm text-ink-600">{service.shortDescription}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-4">
                    <span className="font-display text-lg text-clay-600">{service.price}</span>
                    <Button
                      href={service.bookingUrl ?? siteConfig.bookingUrl}
                      className="!px-5 !py-2.5 text-xs"
                    >
                      Agendar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Área do sistema de marcações (Noona) */}
          <AnimatedSection delay={160}>
            {hasEmbed ? (
              <div className="overflow-hidden rounded-[1.75rem] bg-white p-2 shadow-card">
                <iframe
                  src={siteConfig.noonaEmbedUrl}
                  title={`Marcações online — ${siteConfig.name} (${siteConfig.bookingPlatform})`}
                  className="h-[640px] w-full rounded-[1.4rem] border-0"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="flex h-full flex-col gap-6 rounded-[1.75rem] border border-gold-500/25 bg-white p-8 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-300/40 font-display text-lg text-clay-600">
                    N
                  </span>
                  <div>
                    <p className="font-display text-lg text-ink-900">Marcações por {siteConfig.bookingPlatform}</p>
                    <p className="text-xs text-ink-600">Plataforma oficial de marcações do Studio</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-ink-700">
                  Escolha o dia, a hora e o profissional diretamente na plataforma{" "}
                  {siteConfig.bookingPlatform}, de forma simples e segura — em poucos toques, no
                  telemóvel ou no computador.
                </p>
                <ul className="flex flex-col gap-2.5 text-sm text-ink-700">
                  <li className="flex items-center gap-2">
                    <IconCheck className="h-4 w-4 text-clay-600" /> Confirmação imediata
                  </li>
                  <li className="flex items-center gap-2">
                    <IconCheck className="h-4 w-4 text-clay-600" /> Lembretes automáticos
                  </li>
                  <li className="flex items-center gap-2">
                    <IconCheck className="h-4 w-4 text-clay-600" /> Funciona perfeitamente no telemóvel
                  </li>
                </ul>
                <Button href={siteConfig.bookingUrl} className="mt-auto w-full">
                  <span className="flex items-center gap-2">
                    {siteConfig.ctaPrimary} <IconArrowRight />
                  </span>
                </Button>
                {/* Nota para quem gere o site — não visível como aviso de erro, apenas comentário técnico. */}
                {/* Para embutir o widget oficial do Noona diretamente nesta secção, gera o código
                    de iframe em Noona HQ → Online Bookings → Visibility → "Allow online bookings on
                    your website" e cola o URL em siteConfig.noonaEmbedUrl (src/config/site.ts). */}
              </div>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
