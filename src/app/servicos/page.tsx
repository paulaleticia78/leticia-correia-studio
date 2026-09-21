import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import { services, serviceCategories } from "@/data/services";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Serviços — Pestanas, Sobrancelhas e Lábios",
  description:
    "Conhece os serviços do Letícia Correia Studio, no Porto: Lifting de Pestanas, Extensão de Cílios, Brow Lamination e Design de Sobrancelhas.",
  alternates: { canonical: "/servicos" },
};

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Tratamentos"
        title="Serviços"
        description="Sobrancelhas, pestanas e cuidado facial, com técnica e atenção ao detalhe."
        image="/images/detalhes/detalhe-trabalho.jpg"
      />

      <section className="section-padding bg-cream-50">
        <div className="container-content flex flex-col gap-16">
          {serviceCategories.map((category) => {
            const categoryServices = services.filter((s) => s.category === category);
            return (
              <div key={category}>
                <AnimatedSection>
                  <h2 className="font-display text-2xl text-ink-900 sm:text-3xl">{category}</h2>
                </AnimatedSection>
                {categoryServices.length > 0 ? (
                  <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {categoryServices.map((service, i) => (
                      <AnimatedSection key={service.slug} delay={(i % 3) * 80}>
                        <ServiceCard service={service} />
                      </AnimatedSection>
                    ))}
                  </div>
                ) : (
                  <AnimatedSection>
                    <p className="mt-6 max-w-md text-sm text-ink-600">
                      Serviços de {category.toLowerCase()} a confirmar com o Studio — em breve
                      disponíveis aqui. Para saber mais, contacta diretamente o Studio.
                    </p>
                  </AnimatedSection>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-b from-cream-200 to-sand-300">
        <div className="container-content flex flex-col items-center gap-6 py-16 text-center sm:py-20">
          <h2 className="font-display text-2xl text-ink-900 sm:text-3xl">
            Não encontraste o que procuras?
          </h2>
          <p className="max-w-md text-ink-600">
            Fala connosco e ajudamos a encontrar o tratamento certo para ti.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={siteConfig.bookingUrl}>{siteConfig.ctaPrimary}</Button>
            <Button href="/contactos" variant="secondary">
              Contactar
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
