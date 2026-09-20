type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.25em] ${
            light ? "text-clay-400" : "text-clay-600"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl ${
          light ? "text-cream-50" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-balance text-base leading-relaxed sm:text-lg ${
            light ? "text-cream-100/75" : "text-ink-700"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
