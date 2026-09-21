import Image from "next/image";
import { IconCheck, IconHeart, IconLeaf, IconSparkle } from "./Icons";

/**
 * "Experiência Letícia Correia" — secção emocional/premium.
 * Usa apenas conceitos de atendimento (não inventar certificados,
 * anos de experiência ou qualificações não comprovadas). Cada cartão
 * tem agora uma fotografia real de fundo, discreta, para deixar de
 * parecer um bloco vazio de texto.
 */
const pillars = [
  {
    icon: <IconHeart />,
    title: "Atendimento personalizado",
    text: "Cada marcação pensada para ti, do primeiro contacto ao resultado final.",
    image: "/images/leticia/leticia-retrato-02.jpg",
  },
  {
    icon: <IconSparkle />,
    title: "Atenção ao detalhe",
    text: "Técnica cuidada em cada gesto, para um acabamento preciso e duradouro.",
    image: "/images/detalhes/detalhe-trabalho-03.jpg",
  },
  {
    icon: <IconLeaf />,
    title: "Ambiente confortável",
    text: "Um espaço pensado para relaxares durante o teu momento de cuidado.",
    image: "/images/detalhes/detalhe-produtos-02.jpg",
  },
  {
    icon: <IconCheck />,
    title: "Resultado natural",
    text: "Realce a tua beleza sem perder a tua naturalidade — sempre à tua medida.",
    image: "/images/extensao-cilios/extensao-cilios-01.jpg",
  },
];

export default function ExperienceSection() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {pillars.map((p) => (
        <div
          key={p.title}
          className="group relative flex flex-col items-start gap-3 overflow-hidden rounded-2xl bg-white p-6 text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
        >
          <div className="absolute inset-0">
            <Image
              src={p.image}
              alt=""
              aria-hidden="true"
              fill
              sizes="(min-width: 1024px) 22vw, (min-width: 640px) 44vw, 90vw"
              className="object-cover opacity-[0.08] transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-clay-500/10 text-clay-600">
            {p.icon}
          </span>
          <h3 className="relative z-10 font-display text-lg text-ink-900">{p.title}</h3>
          <p className="relative z-10 text-sm leading-relaxed text-ink-600">{p.text}</p>
        </div>
      ))}
    </div>
  );
}
