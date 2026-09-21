import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Galeria",
  description: "Portefólio real do Letícia Correia Studio: pestanas, sobrancelhas, lábios e transformações antes & depois.",
  alternates: { canonical: "/galeria" },
};

export default function GaleriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Portefólio"
        title="Galeria"
        description="Uma seleção de trabalhos realizados no Studio Letícia Correia."
        image="/images/portfolio/pestanas-04.jpg"
      />

      <section className="section-padding bg-cream-50">
        <div className="container-content">
          <AnimatedSection>
            <GalleryGrid />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
