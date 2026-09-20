import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import { products } from "@/data/products";
import { siteConfig } from "@/config/site";

/**
 * Página preparada para uma futura loja de produtos do Studio
 * (ex: ceras, produtos de cabelo/beleza). Não está ligada no menu
 * principal por agora — a estrutura (rota, tipo `Product`, layout de
 * cards) já existe para quando o catálogo real for confirmado, sem
 * precisar reconstruir o site. Segue a mesma identidade visual:
 * bege + champagne + rosé + dourado.
 */
export const metadata: Metadata = {
  title: "Produtos",
  description: "Produtos do Letícia Correia Studio — brevemente disponível.",
  alternates: { canonical: "/produtos" },
};

export default function ProdutosPage() {
  return (
    <>
      <PageHero
        eyebrow="Loja"
        title="Produtos"
        description="Em breve, os produtos utilizados e recomendados pelo Studio."
      />

      <section className="section-padding bg-cream-50">
        <div className="container-content">
          {products.length === 0 ? (
            <AnimatedSection className="mx-auto flex max-w-lg flex-col items-center gap-5 rounded-[2rem] border border-gold-300/40 bg-white p-10 text-center shadow-card">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
                Brevemente
              </span>
              <p className="text-sm leading-relaxed text-ink-600">
                Esta página está pronta para receber os produtos vendidos pelo
                Studio assim que forem confirmados — sem preços ou catálogo
                inventados. Para dúvidas sobre produtos, contacta diretamente
                o Studio.
              </p>
              <Button href={siteConfig.contact.whatsappHref} variant="secondary">
                {siteConfig.ctaWhatsapp}
              </Button>
            </AnimatedSection>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <div key={p.slug} className="rounded-2xl bg-white p-5 shadow-card">
                  <h3 className="font-display text-lg text-ink-900">{p.name}</h3>
                  <p className="mt-1 text-sm text-ink-600">{p.description}</p>
                  <p className="mt-3 font-display text-lg text-clay-600">{p.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
