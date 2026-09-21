"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

const SESSION_KEY = "lcs-splash-shown";

/**
 * Abertura de marca "ENTRAR NO STUDIO".
 *
 * - Só aparece uma vez por sessão de navegador (sessionStorage), nunca
 *   em cada navegação interna.
 * - Não bloqueia o carregamento nem a indexação: o conteúdo real da
 *   página já está no DOM por baixo — isto é apenas uma sobreposição
 *   visual adicionada depois da hidratação, no cliente. Em JS
 *   desativado ou no primeiro paint, simplesmente não aparece.
 * - Respeita `prefers-reduced-motion`.
 */
export default function SplashIntro() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    try {
      if (!sessionStorage.getItem(SESSION_KEY)) {
        setVisible(true);
      }
    } catch {
      // sessionStorage indisponível (ex: navegação privada) — não mostrar a splash.
    }
  }, []);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [visible]);

  if (!visible) return null;

  const handleEnter = () => {
    setClosing(true);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // ignorar — pior caso, a splash volta a aparecer numa próxima visita
    }
    window.setTimeout(() => setVisible(false), 550);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-gradient-to-br from-cream-100 via-sand-200 to-rose-200 px-6 text-center transition-opacity duration-500 motion-reduce:transition-none ${
        closing ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      role="dialog"
      aria-label={`Abertura — ${siteConfig.name}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-1/4 h-64 w-64 rounded-full bg-rose-300/30 blur-3xl"
      />

      <div
        className={`flex flex-col items-center gap-3 transition-all duration-700 motion-reduce:transition-none ${
          closing ? "-translate-y-3 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <p className="font-display text-3xl uppercase leading-tight tracking-[0.15em] text-ink-900 sm:text-4xl">
          Letícia Correia
          <br />
          <span className="text-xl tracking-[0.4em] text-clay-600 sm:text-2xl">Studio</span>
        </p>
        <p className="mt-2 font-display text-lg italic text-ink-700 sm:text-xl">
          Beleza real, em cada detalhe.
        </p>
      </div>

      <button
        type="button"
        onClick={handleEnter}
        className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[length:220%_220%] bg-[position:0%_50%] bg-gradient-to-r from-sand-500 via-clay-500 to-gold-500 px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-ink-900 shadow-[0_10px_26px_-10px_rgba(185,151,107,0.6)] transition-all duration-500 hover:bg-[position:100%_50%] hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_20px_42px_-12px_rgba(169,120,103,0.6)] motion-reduce:transition-none ${
          closing ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
        } delay-100`}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-[transform,opacity] duration-700 ease-out group-hover:translate-x-[280%] group-hover:opacity-100"
        />
        <span className="relative z-10">Entrar no Studio</span>
      </button>
    </div>
  );
}
