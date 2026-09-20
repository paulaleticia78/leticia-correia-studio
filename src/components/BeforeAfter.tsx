import Image from "next/image";
import { beforeAfterItems } from "@/data/gallery";

/**
 * Antes & Depois — apenas transformações reais publicadas pelo Studio.
 * Cada item aponta para uma única foto em `/images/antes-depois/`; se o
 * Studio fornecer pares antes/depois lado a lado, substitui a imagem
 * mantendo o mesmo `id`.
 */
export default function BeforeAfter() {
  if (beforeAfterItems.length === 0) return null;

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {beforeAfterItems.map((item) => (
        <div key={item.id} className="group relative overflow-hidden rounded-[1.75rem] bg-ink-900/5 shadow-soft">
          <div className="relative aspect-[4/5] w-full sm:aspect-[16/11]">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 640px) 46vw, 92vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink-950/80 to-transparent px-5 py-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-50">
              Antes
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-50">
              Depois
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
