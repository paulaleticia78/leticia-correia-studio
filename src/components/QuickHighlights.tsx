import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "./Icons";
import { beforeAfterItems } from "@/data/gallery";

/**
 * Faixa de 3 cartões logo abaixo do Hero — Ambiente do Estúdio, Antes & Depois
 * e Ensaio de Campanha. Usa apenas fotografias reais já existentes no projeto;
 * o cartão "Ensaio de Campanha" mantém-se honesto como "Em breve" — não simula
 * uma campanha que ainda não existe.
 */
export default function QuickHighlights() {
  const beforeAfter = beforeAfterItems[0];

  return (
    <section className="relative -mt-10 pb-4 sm:-mt-14">
      <div className="container-content">
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {/* Ambiente do Estúdio */}
          <Link
            href="/sobre"
            className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[1.75rem] shadow-soft transition-transform duration-300 hover:-translate-y-1"
          >
            <Image
              src="/images/studio/studio-sobre.jpg"
              alt="Ambiente do Studio Letícia Correia"
              fill
              sizes="(min-width: 640px) 32vw, 90vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/10 to-transparent" />
            <div className="relative z-10 flex items-end justify-between gap-3 p-5 sm:p-6">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-cream-100">
                  Ambiente do Estúdio
                </p>
                <p className="mt-1 max-w-[14rem] font-display text-lg text-cream-50">
                  Um espaço pensado para o seu bem-estar
                </p>
              </div>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream-50/90 text-ink-900 transition-transform duration-300 group-hover:translate-x-0.5">
                <IconArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>

          {/* Antes e Depois */}
          {beforeAfter ? (
            <Link
              href="/galeria"
              className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[1.75rem] shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              <Image
                src={beforeAfter.src}
                alt={beforeAfter.alt}
                fill
                sizes="(min-width: 640px) 32vw, 90vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/10 to-transparent" />
              <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50/90 text-ink-900 shadow-soft">
                <span className="text-xs">↔</span>
              </div>
              <div className="relative z-10 flex items-end justify-between gap-3 p-5 sm:p-6">
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-cream-100">
                    Antes &amp; Depois
                  </p>
                  <p className="mt-1 max-w-[14rem] font-display text-lg text-cream-50">
                    Resultados reais
                  </p>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream-50/90 text-ink-900 transition-transform duration-300 group-hover:translate-x-0.5">
                  <IconArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ) : null}

          {/* Ensaio de Campanha — Em breve (sem simular campanha inexistente) */}
          <div className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-cream-200 via-sand-300 to-rose-200 shadow-soft">
            <Image
              src="/images/services/destaque.jpg"
              alt=""
              aria-hidden="true"
              fill
              sizes="(min-width: 640px) 32vw, 90vw"
              className="object-cover opacity-25"
            />
            <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-2 p-5 text-center sm:p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-clay-600">
                Ensaio de Campanha
              </p>
              <p className="font-display text-2xl tracking-[0.08em] text-ink-900">Em breve</p>
              <p className="max-w-[14rem] text-xs text-ink-600">Nova campanha a caminho</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
