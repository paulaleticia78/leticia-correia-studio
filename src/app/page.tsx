import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import QuickHighlights from "@/components/QuickHighlights";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import FeaturedBanner from "@/components/FeaturedBanner";
import BookingSection from "@/components/BookingSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import AntesDepois from "@/components/AntesDepois";
import ExperienceSection from "@/components/ExperienceSection";
import Faq from "@/components/Faq";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import QuickLinkGrid from "@/components/QuickLinkGrid";
import {
  IconCheck,
  IconHeart,
  IconInstagram,
  IconLeaf,
  IconPhone,
  IconPin,
  IconSparkle,
  IconStar,
} from "@/components/Icons";
import { services } from "@/data/services";
import { galleryItems } from "@/data/gallery";
import { siteConfig } from "@/config/site";

const featuredServices = services.filter((s) => s.featured).slice(0, 3);

const quickStartLinks = [
  { label: "Sobrancelhas", title: "Desenhar as sobrancelhas", href: "/servicos/design-de-sobrancelhas", icon: <IconSparkle /> },
  { label: "Pestanas", title: "Realçar o olhar com Lash Lifting", href: "/servicos/lifting-de-pestanas-com-coloracao", icon: <IconHeart /> },
  { label: "Sobrancelhas", title: "Sobrancelhas mais cheias com Brow Lamination", href: "/servicos/brow-lamination", icon: <IconLeaf /> },
  { label: "Marcação", title: "Marcar agora", href: siteConfig.bookingUrl, icon: <IconCheck /> },
];

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Hero />
      <QuickHighlights />

      {/* Escolhe o primeiro passo */}
      <section className="section-padding bg-cream-50">
        <div className="container-content">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Por onde começar"
              title="Escolhe o teu primeiro passo."
              description="Uma entrada simples para chegares rapidamente ao cuidado certo."
            />
          </AnimatedSection>
          <div className="mt-10">
            <AnimatedSection>
              <QuickLinkGrid items={quickStartLinks} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Sobre o Studio */}
      <section className="section-padding bg-cream-50">
        <div className="container-content grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <SectionHeading
              eyebrow="O Studio"
              title="Um espaço dedicado ao cuidado e à beleza natural."
              description="Letícia Correia Studio, no Porto — especialista em pestanas, sobrancelhas e lábios, com foco em resultados naturais, personalizados e atendimento de excelência."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/sobre" variant="secondary">
                Conhecer o Studio
              </Button>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100} className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-soft">
            <Image
              src="/images/detalhes/detalhe-produtos.jpg"
              alt={`Cuidado e atenção ao detalhe no ${siteConfig.name}`}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Experiência Letícia Correia */}
      <section className="section-padding bg-cream-100">
        <div className="container-content">
          <AnimatedSection>
            <SectionHeading
              eyebrow="A experiência"
              title="A Experiência Letícia Correia"
              description="Cuidado, técnica e uma experiência verdadeiramente premium, em cada marcação."
              align="center"
            />
          </AnimatedSection>
          <div className="mt-12">
            <AnimatedSection>
              <ExperienceSection />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="section-padding bg-cream-50">
        <div className="container-content">
          <AnimatedSection className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Serviços"
              title="Pestanas, sobrancelhas e lábios."
              description="Tratamentos pensados para realçar a tua beleza natural."
            />
            <Link
              href="/servicos"
              className="shrink-0 text-sm font-medium text-clay-600 underline underline-offset-4 hover:text-clay-500"
            >
              Ver todos os serviços →
            </Link>
          </AnimatedSection>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 80}>
                <ServiceCard service={service} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 flex justify-center">
            <Button href={siteConfig.bookingUrl}>{siteConfig.ctaPrimary}</Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Destaque */}
      <section className="bg-cream-50 pb-16 sm:pb-20 lg:pb-28">
        <div className="container-content">
          <AnimatedSection>
            <FeaturedBanner />
          </AnimatedSection>
        </div>
      </section>

      {/* Portfólio preview */}
      <section className="section-padding bg-cream-100">
        <div className="container-content">
          <AnimatedSection className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Portefólio"
              title="Resultados que refletem cuidado e técnica."
            />
            <Link
              href="/galeria"
              className="shrink-0 text-sm font-medium text-clay-600 underline underline-offset-4 hover:text-clay-500"
            >
              Ver galeria completa →
            </Link>
          </AnimatedSection>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {galleryItems.slice(0, 4).map((item, i) => (
              <AnimatedSection
                key={item.id}
                delay={i * 60}
                className="relative aspect-square overflow-hidden rounded-2xl"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 23vw, 46vw"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 flex justify-center">
            <Button href={siteConfig.bookingUrl}>{siteConfig.ctaPrimary}</Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Antes & Depois */}
      <section className="section-padding bg-cream-50">
        <div className="container-content">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Transformações"
              title="Antes & Depois"
              description="Lash Lifting, Brow Lamination e a combinação dos dois — Lifting Duplo."
              align="center"
            />
          </AnimatedSection>
          <div className="mt-12">
            <AnimatedSection>
              <AntesDepois />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Agende o Seu Momento */}
      <BookingSection />

      {/* Avaliações do Google */}
      <GoogleReviewsSection />

      {/* FAQ */}
      <section className="section-padding bg-cream-50">
        <div className="container-content max-w-3xl">
          <AnimatedSection>
            <SectionHeading eyebrow="Perguntas frequentes" title="Informação útil sobre o Studio." />
          </AnimatedSection>
          <AnimatedSection className="mt-10">
            <Faq />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA final — Encontre-nos */}
      <section id="encontre-nos" className="relative overflow-hidden bg-gradient-to-b from-cream-200 via-sand-300 to-rose-200">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gold-500/20 blur-3xl" />
        <div className="container-content relative flex flex-col items-center gap-6 py-20 text-center sm:py-28">
          <AnimatedSection className="flex flex-col items-center gap-6">
            <h2 className="max-w-xl font-display text-3xl text-ink-900 text-balance sm:text-4xl">
              Pronta para realçar a sua beleza?
            </h2>
            <p className="max-w-md text-ink-600">
              Agende o seu momento no {siteConfig.name}.
            </p>
            <Button href={siteConfig.bookingUrl}>{siteConfig.ctaFinal}</Button>
          </AnimatedSection>

          <AnimatedSection
            delay={100}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-ink-900/10 pt-10 text-sm text-ink-700"
          >
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-clay-600"
            >
              <IconInstagram className="h-4 w-4" />
              Instagram
            </a>
            <a href={siteConfig.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-clay-600">
              <IconPhone className="h-4 w-4" />
              WhatsApp/Telefone
            </a>
            <a
              href={siteConfig.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-clay-600"
            >
              <IconPin className="h-4 w-4" />
              Localização
            </a>
            {siteConfig.googleReviewsUrl.startsWith("http") ? (
              <a
                href={siteConfig.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-clay-600"
              >
                <IconStar className="h-4 w-4" />
                Google Reviews
              </a>
            ) : (
              <a href="#avaliacoes" className="flex items-center gap-2 hover:text-clay-600">
                <IconStar className="h-4 w-4" />
                Google Reviews
              </a>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
