import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import InfoCard from "@/components/InfoCard";
import BookingSection from "@/components/BookingSection";
import { IconCheck, IconClock, IconHeart } from "@/components/Icons";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Agendar",
  description: "Agende o seu momento no Studio Letícia Correia, online ou por WhatsApp.",
  alternates: { canonical: "/agendar" },
};

export default function AgendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Marcação"
        title="Reserve o seu momento"
        description="Escolhe a forma mais confortável para marcares a tua sessão no Studio Letícia Correia."
        image="/images/detalhes/detalhe-produtos.jpg"
      />

      <BookingSection />

      <section className="section-padding bg-cream-50">
        <div className="container-content">
          <AnimatedSection className="flex flex-col items-start gap-4 rounded-[2rem] bg-gradient-to-br from-sand-300 to-rose-200 p-8 shadow-card sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-clay-600">
              WhatsApp
            </span>
            <h2 className="font-display text-2xl text-ink-900 sm:text-3xl">
              Prefere falar connosco primeiro?
            </h2>
            <p className="text-sm leading-relaxed text-ink-700">
              Envia-nos uma mensagem e ajudamos a escolher o tratamento certo para ti.
            </p>
            <Button href={siteConfig.contact.whatsappHref} variant="primary" className="mt-2">
              {siteConfig.ctaWhatsapp}
            </Button>
          </AnimatedSection>

          <AnimatedSection className="mt-12 grid gap-5 sm:grid-cols-3">
            <InfoCard icon={<IconClock />} title="Antecedência">
              [INSERIR POLÍTICA DE MARCAÇÃO — ex: recomendamos marcar com alguns dias de antecedência.]
            </InfoCard>
            <InfoCard icon={<IconCheck />} title="Antes da sessão">
              [INSERIR RECOMENDAÇÕES — ex: vir sem maquilhagem na zona a tratar.]
            </InfoCard>
            <InfoCard icon={<IconHeart />} title="Cancelamentos">
              [INSERIR POLÍTICA DE CANCELAMENTO OU REAGENDAMENTO.]
            </InfoCard>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
