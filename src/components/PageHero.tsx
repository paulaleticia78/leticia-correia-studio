import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  /** Fotografia real opcional, mostrada em fundo (baixa opacidade) para dar mais vida ao cabeçalho. */
  image?: string;
};

export default function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-cream-100 pb-14 pt-28 sm:pb-16 sm:pt-36">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.16]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream-100 via-cream-100/85 to-cream-100/40" />
        </>
      )}
      <div className="container-content relative flex flex-col gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-clay-600">
          {eyebrow}
        </span>
        <h1 className="max-w-2xl font-display text-4xl leading-tight text-ink-900 text-balance sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-xl text-base leading-relaxed text-ink-700 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
