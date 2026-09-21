"use client";

import Image from "next/image";
import { useRef, useState } from "react";

/**
 * Antes & Depois — Lash Lift, Brow Lamination e Brow + Lash.
 *
 * REGRA (pedida explicitamente pelo Studio): nunca inventar resultados
 * nem apresentar imagens de referência como se fossem trabalhos da
 * Letícia. Entre as fotografias reais já fornecidas ao projeto ainda
 * não existe, para nenhum dos três tratamentos, um par genuíno de
 * "antes" e "depois" do mesmo procedimento — por isso cada entrada usa
 * `before`/`after` (opcionais). Quando ambos existirem, o cartão mostra
 * automaticamente o slider de comparação arrastável; até lá, mostra a
 * fotografia real do tratamento com uma nota honesta "Em preparação",
 * em vez de simular um resultado.
 */
type Entry = {
  id: string;
  title: string;
  description: string;
  /** Fotografia real única (usada enquanto não houver par antes/depois). */
  photo: string;
  before?: string;
  after?: string;
};

const antesDepoisEntries: Entry[] = [
  {
    id: "lash-lift",
    title: "Lash Lift",
    description: "Curvatura e alongamento aparente das pestanas naturais.",
    photo: "/images/extensao-cilios/extensao-cilios-02.jpg",
  },
  {
    id: "brow-lamination",
    title: "Brow Lamination",
    description: "Sobrancelhas alinhadas, mais cheias e definidas.",
    photo: "/images/brow-lamination/brow-lamination-ia-01.jpg",
  },
  {
    id: "brow-lash",
    title: "Brow + Lash",
    description: "Os dois tratamentos combinados — um olhar completo.",
    photo: "/images/extensao-cilios/extensao-cilios-03.jpg",
  },
];

function CompareSlider({ before, after, title }: { before: string; after: string; title: string }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/5] w-full touch-none select-none overflow-hidden rounded-[1.75rem] shadow-soft sm:aspect-[16/11]"
      onMouseMove={(e) => {
        if (e.buttons === 1) updateFromClientX(e.clientX);
      }}
      onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
    >
      <Image src={after} alt={`${title} — depois`} fill sizes="(min-width: 640px) 46vw, 92vw" className="object-cover" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image src={before} alt={`${title} — antes`} fill sizes="(min-width: 640px) 46vw, 92vw" className="object-cover" />
      </div>
      <div
        className="absolute inset-y-0 flex w-0.5 -translate-x-1/2 items-center justify-center bg-cream-50"
        style={{ left: `${position}%` }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-50 text-ink-900 shadow-soft">
          ↔
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label={`Comparar antes e depois — ${title}`}
        className="absolute inset-x-0 bottom-3 mx-auto w-[85%] accent-clay-500"
      />
      <span className="absolute left-3 top-3 rounded-full bg-ink-950/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cream-50">
        Antes
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-ink-950/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cream-50">
        Depois
      </span>
    </div>
  );
}

export default function AntesDepois() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {antesDepoisEntries.map((entry) => (
        <div key={entry.id} className="flex flex-col gap-3">
          {entry.before && entry.after ? (
            <CompareSlider before={entry.before} after={entry.after} title={entry.title} />
          ) : (
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] bg-ink-900/5 shadow-soft sm:aspect-[16/11]">
              <Image
                src={entry.photo}
                alt={entry.title}
                fill
                sizes="(min-width: 640px) 32vw, 92vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/5 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-cream-50/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-clay-600">
                Em preparação
              </span>
            </div>
          )}
          <div>
            <h3 className="font-display text-lg text-ink-900">{entry.title}</h3>
            <p className="text-sm leading-relaxed text-ink-600">{entry.description}</p>
          </div>
        </div>
      ))}
      <p className="sm:col-span-3 mt-1 text-center text-xs text-ink-500">
        As fotografias de antes &amp; depois reais de cada tratamento estão a ser preparadas — assim que
        estiverem disponíveis, aparecem aqui com o efeito de comparação arrastável.
      </p>
    </div>
  );
}
