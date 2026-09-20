import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";
import { siteConfig } from "@/config/site";
import { IconArrowRight } from "./Icons";
import Button from "./Button";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-transform duration-300 hover:-translate-y-1">
      <Link href={`/servicos/${service.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {service.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-cream-50/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-clay-600">
            Popular
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-clay-600">
          {service.category}
        </span>
        <Link href={`/servicos/${service.slug}`} className="w-fit">
          <h3 className="font-display text-xl text-ink-900 transition-colors group-hover:text-clay-600">
            {service.name}
          </h3>
        </Link>
        <p className="text-sm leading-relaxed text-ink-700">{service.shortDescription}</p>
        <div className="mt-auto flex items-center justify-between gap-4 pt-4">
          <span className="font-display text-xl text-clay-600">{service.price}</span>
          <Link
            href={`/servicos/${service.slug}`}
            className="flex items-center gap-1 text-xs font-medium text-ink-700 transition-transform duration-300 hover:text-clay-600 group-hover:translate-x-0.5"
          >
            Saber mais <IconArrowRight />
          </Link>
        </div>
        <Button
          href={service.bookingUrl ?? siteConfig.bookingUrl}
          className="mt-3 w-full !py-2.5 text-xs"
        >
          Agendar
        </Button>
      </div>
    </div>
  );
}
