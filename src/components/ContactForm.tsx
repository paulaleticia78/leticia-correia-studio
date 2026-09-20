"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Falha no envio");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-ink-900/15 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-600/45 transition-colors focus:border-clay-500 focus:outline-none focus:ring-2 focus:ring-clay-500/20";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-ink-700">
            Nome *
          </label>
          <input id="name" name="name" required className={inputClasses} placeholder="O teu nome" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wide text-ink-700">
            Telefone
          </label>
          <input id="phone" name="phone" className={inputClasses} placeholder="912 345 678" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-ink-700">
          Email
        </label>
        <input id="email" name="email" type="email" className={inputClasses} placeholder="tu@email.com" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-ink-700">
          Mensagem *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClasses}
          placeholder="Como podemos ajudar?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-ink-900 px-7 py-3.5 text-sm font-semibold text-cream-50 shadow-card transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-ink-800 hover:shadow-soft active:scale-[0.96] disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "loading" ? "A enviar..." : "Enviar mensagem"}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-700">Mensagem enviada com sucesso. Obrigada!</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-700">
          Não foi possível enviar a mensagem. Tenta novamente ou contacta-nos por WhatsApp.
        </p>
      )}
    </form>
  );
}
