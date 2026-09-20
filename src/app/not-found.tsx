import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-cream-100 px-5 text-center">
      <span className="font-display text-6xl text-clay-600">404</span>
      <h1 className="font-display text-2xl text-ink-900 sm:text-3xl">Página não encontrada</h1>
      <p className="max-w-sm text-sm text-ink-700">
        A página que procuras não existe ou foi movida.
      </p>
      <Button href="/">Voltar ao início</Button>
    </section>
  );
}
