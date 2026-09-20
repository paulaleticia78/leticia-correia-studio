import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import Button from "@/components/Button";
import { IconClock, IconMail, IconPhone, IconPin } from "@/components/Icons";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contactos",
  description: "Morada, telefone, horário e localização do Studio Letícia Correia.",
  alternates: { canonical: "/contactos" },
};

export default function ContactosPage() {
  return (
    <>
      <PageHero
        eyebrow="Fala connosco"
        title="Contactos"
        description="Estamos disponíveis por WhatsApp, telefone ou presencialmente."
      />

      <section className="section-padding bg-cream-50">
        <div className="container-content grid gap-12 lg:grid-cols-2">
          <AnimatedSection className="flex flex-col gap-8">
            <div className="flex flex-col gap-5 rounded-2xl bg-white p-6 shadow-card sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-clay-500/10 text-clay-600">
                  <IconPin />
                </span>
                <div>
                  <p className="font-display text-lg text-ink-900">Morada</p>
                  <p className="mt-1 text-sm text-ink-700">
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}
                  </p>
                  <a
                    href={siteConfig.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-medium text-clay-600 underline underline-offset-4"
                  >
                    Abrir direções no Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-clay-500/10 text-clay-600">
                  <IconPhone />
                </span>
                <div>
                  <p className="font-display text-lg text-ink-900">Telefone / WhatsApp</p>
                  <a href={siteConfig.contact.phoneHref} className="mt-1 block text-sm text-ink-700 hover:text-clay-600">
                    {siteConfig.contact.phoneDisplay}
                  </a>
                  <a
                    href={siteConfig.contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-700 hover:text-clay-600"
                  >
                    {siteConfig.ctaWhatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-clay-500/10 text-clay-600">
                  <IconMail />
                </span>
                <div>
                  <p className="font-display text-lg text-ink-900">Email</p>
                  <p className="mt-1 text-sm text-ink-700">{siteConfig.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-clay-500/10 text-clay-600">
                  <IconClock />
                </span>
                <div>
                  <p className="font-display text-lg text-ink-900">Horário</p>
                  <ul className="mt-1 space-y-0.5 text-sm text-ink-700">
                    {siteConfig.hours.map((h) => (
                      <li key={h.days}>
                        {h.days}: {h.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <Button href={siteConfig.bookingUrl} className="self-start">
              {siteConfig.ctaPrimary}
            </Button>
          </AnimatedSection>

          <AnimatedSection delay={120} className="flex flex-col gap-8">
            <div className="rounded-2xl bg-white p-6 shadow-card sm:p-8">
              <h2 className="font-display text-xl text-ink-900">Envia-nos uma mensagem</h2>
              <p className="mt-1 text-sm text-ink-700">
                Respondemos assim que possível durante o horário de funcionamento.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-12">
          <MapEmbed />
        </AnimatedSection>
      </section>
    </>
  );
}
