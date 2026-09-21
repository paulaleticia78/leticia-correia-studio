import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import { IconCheck, IconClock } from "@/components/Icons";
import { getServiceBySlug, services } from "@/data/services";
import { siteConfig } from "@/config/site";

type Props = {
  params: { servico: string };
};

export function generateStaticParams() {
  return services.map((s) => ({ servico: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.servico);
  if (!service) return {};

  return {
    title: service.name,
    description: service.shortDescription,
    alternates: { canonical: `/servicos/${service.slug}` },
    openGraph: {
      title: `${service.name} | ${siteConfig.name}`,
      description: service.shortDescription,
      images: [{ url: service.image }],
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.servico);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug && s.category === service.category).slice(0, 3);

  return (
    <>
      <section className="bg-cream-100 pb-14 pt-28 sm:pb-16 sm:pt-36">
        <div className="container-content">
          <nav className="mb-6 text-xs text-ink-700">
            <Link href="/servicos" className="hover:text-clay-600">
              Serviços
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink-900">{service.name}</span>
          </nav>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-clay-600">
            {service.category}
          </span>
          <h1 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink-900 text-balance sm:text-5xl">
            {service.name}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-700 sm:text-lg">
            {service.shortDescription}
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-content grid gap-12 lg:grid-cols-2 lg:items-start">
          <AnimatedSection className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-soft">
            <Image
              src={service.image}
              alt={service.name}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </AnimatedSection>

          <AnimatedSection delay={100} className="flex flex-col gap-8">
            <p className="text-base leading-relaxed text-ink-700">{service.longDescription}</p>

            <ul className="flex flex-col gap-3">
              {service.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-ink-800">
                  <span className="mt-0.5 text-clay-600">
                    <IconCheck />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-6 rounded-2xl bg-white p-6 shadow-card">
              <div className="flex items-center gap-2 text-sm text-ink-700">
                <IconClock />
                {service.duration}
              </div>
              <div className="font-display text-2xl text-clay-600">{service.price}</div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href={service.bookingUrl ?? siteConfig.bookingUrl}>{siteConfig.ctaPrimary}</Button>
              <Button href={siteConfig.contact.whatsappHref} variant="secondary">
                {siteConfig.ctaWhatsapp}
              </Button>
            </div>
            <p className="text-xs text-ink-faint text-ink-500">
              A marcação abre em nova aba — esta página do site fica aberta, para voltares facilmente.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding bg-cream-100">
          <div className="container-content">
            <AnimatedSection>
              <h2 className="font-display text-2xl text-ink-900 sm:text-3xl">
                Outros serviços de {service.category}
              </h2>
            </AnimatedSection>
            <div className="mt-8 flex flex-wrap gap-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/servicos/${r.slug}`}
                  className="rounded-full bg-white px-5 py-3 text-sm font-medium text-ink-800 shadow-card transition-colors hover:text-clay-600"
                >
                  {r.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
