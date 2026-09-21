import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conhece o Studio Letícia Correia e a filosofia por trás de cada tratamento.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="A nossa história"
        title="Sobre o Studio Letícia Correia"
        description="[INSERIR TEXTO DE APRESENTAÇÃO — história do studio, valores e o que o torna diferente.]"
        image="/images/leticia/leticia-trabalhando-02.jpg"
      />

      <section className="section-padding bg-cream-50">
        <div className="container-content grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
            <Image
              src="/images/extensao-cilios/extensao-cilios-02.jpg"
              alt={`Cuidado ao detalhe no ${siteConfig.name}`}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <SectionHeading
              eyebrow="A nossa missão"
              title="Cuidado personalizado, do primeiro contacto ao resultado final."
              description="[INSERIR TEXTO — filosofia de trabalho, técnicas utilizadas e o tipo de experiência que a cliente pode esperar.]"
            />
            <ul className="mt-6 flex flex-col gap-3 text-sm text-ink-700">
              <li>— [INSERIR DIFERENCIAL 1, ex: formação e certificações]</li>
              <li>— [INSERIR DIFERENCIAL 2, ex: produtos e marcas utilizadas]</li>
              <li>— [INSERIR DIFERENCIAL 3, ex: ambiente e atendimento]</li>
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-content grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <AnimatedSection className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full shadow-soft">
            <Image
              src="/images/leticia/leticia-retrato.jpg"
              alt="Letícia Correia"
              fill
              sizes="(min-width: 1024px) 30vw, 70vw"
              className="object-cover"
            />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <SectionHeading eyebrow="Profissional" title="Letícia Correia" />
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-700">
              [INSERIR BIOGRAFIA — percurso profissional, formação, especialidades e o que motiva o trabalho no Studio.]
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-content">
          <AnimatedSection>
            <SectionHeading
              eyebrow="No dia a dia do Studio"
              title="Técnica e atenção ao detalhe, em cada passo do tratamento."
              align="center"
            />
          </AnimatedSection>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            <AnimatedSection className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-2xl shadow-soft md:col-span-2 md:row-span-2 md:aspect-square">
              <Image
                src="/images/leticia/leticia-trabalhando-02.jpg"
                alt={`Procedimento em curso no ${siteConfig.name}`}
                fill
                sizes="(min-width: 768px) 45vw, 90vw"
                className="object-cover"
              />
            </AnimatedSection>
            <AnimatedSection delay={80} className="relative aspect-square overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="/images/detalhes/detalhe-trabalho-03.jpg"
                alt="Detalhe do trabalho nas pestanas — Studio Letícia Correia"
                fill
                sizes="(min-width: 768px) 23vw, 46vw"
                className="object-cover"
              />
            </AnimatedSection>
            <AnimatedSection delay={140} className="relative aspect-square overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="/images/detalhes/detalhe-trabalho-04.jpg"
                alt="Cuidado no detalhe durante o tratamento — Studio Letícia Correia"
                fill
                sizes="(min-width: 768px) 23vw, 46vw"
                className="object-cover"
              />
            </AnimatedSection>
            <AnimatedSection delay={200} className="relative aspect-square overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="/images/detalhes/detalhe-produtos-02.jpg"
                alt="Produtos utilizados nos tratamentos — Studio Letícia Correia"
                fill
                sizes="(min-width: 768px) 23vw, 46vw"
                className="object-cover"
              />
            </AnimatedSection>
            <AnimatedSection delay={260} className="relative aspect-square overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="/images/leticia/leticia-retrato-02.jpg"
                alt="Letícia Correia"
                fill
                sizes="(min-width: 768px) 23vw, 46vw"
                className="object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-cream-50">
        <div className="container-content flex flex-col items-center gap-6 py-16 text-center sm:py-20">
          <h2 className="font-display text-2xl text-ink-900 sm:text-3xl">
            Vem conhecer o Studio pessoalmente.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={siteConfig.bookingUrl}>{siteConfig.ctaPrimary}</Button>
            <Button href="/contactos" variant="ghost">
              Ver morada e horário
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
