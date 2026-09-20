import { IconCheck, IconHeart, IconLeaf, IconSparkle } from "./Icons";

/**
 * "Experiência Letícia Correia" — secção emocional/premium.
 * Usa apenas conceitos de atendimento (não inventar certificados,
 * anos de experiência ou qualificações não comprovadas).
 */
const pillars = [
  { icon: <IconHeart />, title: "Atendimento personalizado", text: "Cada marcação pensada para ti, do primeiro contacto ao resultado final." },
  { icon: <IconSparkle />, title: "Atenção ao detalhe", text: "Técnica cuidada em cada gesto, para um acabamento preciso e duradouro." },
  { icon: <IconLeaf />, title: "Ambiente confortável", text: "Um espaço pensado para relaxares durante o teu momento de cuidado." },
  { icon: <IconCheck />, title: "Resultado natural", text: "Realce a tua beleza sem perder a tua naturalidade — sempre à tua medida." },
];

export default function ExperienceSection() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {pillars.map((p) => (
        <div key={p.title} className="flex flex-col items-start gap-3 rounded-2xl bg-white p-6 text-left shadow-card">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-clay-500/10 text-clay-600">
            {p.icon}
          </span>
          <h3 className="font-display text-lg text-ink-900">{p.title}</h3>
          <p className="text-sm leading-relaxed text-ink-600">{p.text}</p>
        </div>
      ))}
    </div>
  );
}
