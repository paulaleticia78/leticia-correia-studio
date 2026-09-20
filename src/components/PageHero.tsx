type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-cream-100 pb-14 pt-28 sm:pb-16 sm:pt-36">
      <div className="container-content flex flex-col gap-4">
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
