/**
 * SERVIÇOS
 * ----------------------------------------------------------------
 * REGRA: só entram aqui serviços confirmados pelo Studio (Instagram
 * @leticiacorreia.pt, material de marketing próprio fornecido pela
 * Letícia/quem gere o site, ou os links de marcação fornecidos
 * diretamente por quem gere o site). Não inventar serviços que o
 * Studio não ofereça, nem preços, nem links.
 *
 * LIGAÇÃO DIRETA POR SERVIÇO (Noona):
 * 19 dos 20 serviços abaixo têm `bookingUrl` confirmado — 12 de Pestanas
 * + 7 de Sobrancelhas, cada um identificado a partir do link fornecido,
 * lendo o nome e o preço reais mostrados nessa página de marcação do
 * Noona (noona.pt/leticiacorreiastudio/experience/...). Nome e preço vêm
 * exatamente do que está publicado nessas páginas — não foram
 * inventados nem estimados. Nota: o catálogo real do Noona é mais
 * granular do que a estrutura inicial pensada para o site (ex.: em vez
 * de um único "Brow Lamination" e um único "Design de Sobrancelhas",
 * existem variantes próprias como "Brow Lamination + Coloração",
 * "Brow Lamination com Design de Sobrancelhas", "Design Estratégico",
 * "Threading", "Henna", "Nanopigmentação" e "Retoque Anual Nano") — por
 * isso os nomes/preços destes serviços foram atualizados para
 * corresponder exatamente ao que está confirmado no Noona.
 *
 * Procedimento Labial é o ÚNICO serviço sem link direto confirmado entre
 * os fornecidos até agora. Por isso `bookingUrl` fica por preencher (o
 * botão usa o link geral do Noona como alternativa) e `price` fica como
 * placeholder — nunca inventados. Ver `SERVICOS_SEM_LINK_DIRETO` abaixo.
 *
 * Categorias fixas: "Pestanas", "Sobrancelhas", "Lábios".
 * ----------------------------------------------------------------
 */

export type ServiceCategory = "Pestanas" | "Sobrancelhas" | "Lábios";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  shortDescription: string;
  longDescription: string;
  duration: string;
  price: string;
  image: string;
  featured?: boolean;
  highlights: string[];
  /** Link de marcação direto e específico deste serviço no Noona — usa siteConfig.bookingUrl enquanto não houver um confirmado. */
  bookingUrl?: string;
};

export const services: Service[] = [
  // ---- Pestanas — links diretos confirmados (Noona) ----
  {
    slug: "lifting-de-pestanas-com-coloracao",
    name: "Lifting de Pestanas com Coloração",
    category: "Pestanas",
    shortDescription: "Curvatura e alongamento aparente das pestanas, com coloração.",
    longDescription:
      "Lifting e alinhamento das pestanas naturais, com coloração opcional para um efeito semelhante ao do rímel. O tratamento inclui hidratação e nutrição dos fios, com resultado que dura entre 6 a 8 semanas.",
    duration: "[INSERIR DURAÇÃO]",
    price: "35,00 €",
    image: "/images/lash-lifting/lash-lifting-ia-01.jpg",
    featured: true,
    bookingUrl: "https://noona.pt/leticiacorreiastudio/experience/5B8HuxTo3Kw2nXpsR",
    highlights: ["Resultado natural, sem extensões", "Dura entre 6 a 8 semanas", "Inclui coloração"],
  },
  {
    slug: "lifting-coreano-com-coloracao",
    name: "Lifting Coreano c/ Coloração",
    category: "Pestanas",
    shortDescription: "Técnica coreana de alta tecnologia, com coloração.",
    longDescription:
      "Técnica coreana com produtos de alta tecnologia para realçar a curvatura, o alinhamento e o cuidado das pestanas, com hidratação e nutrição intensivas. Ideal para pestanas grossas, lisas, muito finas ou sensíveis. Resultado dura entre 6 a 8 semanas.",
    duration: "[INSERIR DURAÇÃO]",
    price: "40,00 €",
    image: "/images/lash-lifting/lash-lifting-ia-01.jpg",
    bookingUrl: "https://noona.pt/leticiacorreiastudio/experience/hVGNy7taJYrYvU4YvyCB1bku",
    highlights: ["Produtos de alta tecnologia", "Indicado para pestanas sensíveis ou finas", "Dura entre 6 a 8 semanas"],
  },
  {
    slug: "extensao-de-pestanas-fio-a-fio",
    name: "Extensão de Pestanas Fio a Fio",
    category: "Pestanas",
    shortDescription: "Efeito natural e elegante, fio a fio.",
    longDescription:
      "Extensões individuais aplicadas fio a fio sobre as pestanas naturais, criando um efeito natural e elegante, com mais definição e leveza. Personalizado ao formato do olho, para quem procura dispensar o rímel no dia a dia.",
    duration: "[INSERIR DURAÇÃO]",
    price: "32,00 €",
    image: "/images/extensao-cilios/extensao-cilios-01.jpg",
    featured: true,
    bookingUrl: "https://noona.pt/leticiacorreiastudio/experience/uSupnsdNiyDLxkQRV3u7RMu5",
    highlights: ["Efeito natural e elegante", "Personalizado ao formato do olho", "Dispensa o rímel diário"],
  },
  {
    slug: "extensao-volume-egipcio",
    name: "Extensão Volume Egípcio",
    category: "Pestanas",
    shortDescription: "Fibras mais leves e finas, volume subtil.",
    longDescription:
      "Extensões com fibras mais leves e finas que criam um volume subtil e um resultado natural. Duração aproximada de 3 a 4 semanas.",
    duration: "[INSERIR DURAÇÃO]",
    price: "35,00 €",
    image: "/images/extensao-cilios/extensao-cilios-02.jpg",
    bookingUrl: "https://noona.pt/leticiacorreiastudio/experience/uD85DTQtrMk66ghQYcZeEoZs",
    highlights: ["Volume subtil e natural", "Fibras leves e finas", "Dura entre 3 a 4 semanas"],
  },
  {
    slug: "extensao-fox-eyes",
    name: "Extensão Fox Eyes",
    category: "Pestanas",
    shortDescription: "Efeito lifting no canto externo do olho.",
    longDescription:
      "Técnica que cria um efeito lifting no canto externo do olho, deixando o olhar mais puxado e elegante — um tratamento moderno que realça o olhar mantendo uma aparência natural, ideal para o dia a dia.",
    duration: "[INSERIR DURAÇÃO]",
    price: "40,00 €",
    image: "/images/extensao-cilios/extensao-cilios-03.jpg",
    bookingUrl: "https://noona.pt/leticiacorreiastudio/experience/f6Pcfe4uQRRMLYb8x9mqClBU",
    highlights: ["Efeito lifting no canto externo", "Olhar mais puxado e elegante", "Aparência natural"],
  },
  {
    slug: "extensao-efeito-wispy",
    name: "Extensão Efeito Wispy",
    category: "Pestanas",
    shortDescription: "Efeito em leque, textura e movimento.",
    longDescription: "Extensão de pestanas com efeito wispy, criando textura e movimento para um olhar mais expressivo.",
    duration: "[INSERIR DURAÇÃO]",
    price: "38,00 €",
    image: "/images/extensao-cilios/extensao-cilios-04.jpg",
    bookingUrl: "https://noona.pt/leticiacorreiastudio/experience/zNIZRN0aVu0k9ExsAVJAYNCX",
    highlights: ["Efeito wispy, com textura e movimento", "Olhar mais expressivo"],
  },
  {
    slug: "extensao-efeito-rimel",
    name: "Extensão Efeito Rímel",
    category: "Pestanas",
    shortDescription: "Efeito semelhante ao rímel, com mais volume.",
    longDescription:
      "Fios aplicados cuidadosamente sobre as pestanas naturais, proporcionando mais volume, definição e curvatura — um efeito sofisticado semelhante ao da aplicação de rímel, mantendo uma aparência natural.",
    duration: "[INSERIR DURAÇÃO]",
    price: "38,00 €",
    image: "/images/extensao-cilios/extensao-cilios-01.jpg",
    bookingUrl: "https://noona.pt/leticiacorreiastudio/experience/Hv9MpW9qfCuicrReo7qdQOfp",
    highlights: ["Mais volume, definição e curvatura", "Efeito semelhante ao rímel"],
  },
  {
    slug: "extensao-volume-soft",
    name: "Extensão Volume Soft",
    category: "Pestanas",
    shortDescription: "Volume suave e natural.",
    longDescription: "Extensão de pestanas com volume soft, para um resultado suave e natural.",
    duration: "[INSERIR DURAÇÃO]",
    price: "35,00 €",
    image: "/images/extensao-cilios/extensao-cilios-01.jpg",
    bookingUrl: "https://noona.pt/leticiacorreiastudio/experience/McFeMfcdM8z5nr2bwfuJLLnq",
    highlights: ["Volume suave", "Resultado natural"],
  },
  {
    slug: "extensao-volume-brasil-egipcio-brow-lamination",
    name: "Extensão Volume Brasil/Egípcio + Brow Lamination",
    category: "Pestanas",
    shortDescription: "Pacote combinado: extensão de pestanas + brow lamination.",
    longDescription:
      "Pacote combinado com extensão de pestanas (volume Brasil ou Egípcio) e Brow Lamination na mesma sessão.",
    duration: "[INSERIR DURAÇÃO]",
    price: "65,00 €",
    image: "/images/brow-lamination/brow-lamination-ia-01.jpg",
    bookingUrl: "https://noona.pt/leticiacorreiastudio/experience/I4NGjVkoBhf6hQHYrD3uHJsk",
    highlights: ["Extensão de pestanas + Brow Lamination", "Pacote combinado numa só sessão"],
  },
  {
    slug: "manutencao-de-extensao",
    name: "Manutenção de Extensão",
    category: "Pestanas",
    shortDescription: "Brasil / Wispy / Rímel / Egípcio — até 20 dias.",
    longDescription:
      "Manutenção para extensões de pestanas nos estilos Brasil, Wispy, Rímel ou Egípcio, para pestanas com até 20 dias.",
    duration: "[INSERIR DURAÇÃO]",
    price: "30,00 €",
    image: "/images/extensao-cilios/extensao-cilios-01.jpg",
    bookingUrl: "https://noona.pt/leticiacorreiastudio/experience/xkCo5NDbpapkjvXIo5zOmNek",
    highlights: ["Para extensões com até 20 dias", "Estilos Brasil, Wispy, Rímel ou Egípcio"],
  },
  {
    slug: "manutencao-fox-eyes",
    name: "Manutenção Fox Eyes",
    category: "Pestanas",
    shortDescription: "Manutenção do efeito Fox Eyes — até 20 dias.",
    longDescription: "Manutenção da extensão Fox Eyes, válida para procedimentos com até 20 dias.",
    duration: "[INSERIR DURAÇÃO]",
    price: "33,00 €",
    image: "/images/extensao-cilios/extensao-cilios-01.jpg",
    bookingUrl: "https://noona.pt/leticiacorreiastudio/experience/daEMb96TQN7lKcE0vN1vteVG",
    highlights: ["Para extensões Fox Eyes com até 20 dias"],
  },
  {
    slug: "remocao-de-extensao",
    name: "Remoção de Extensão",
    category: "Pestanas",
    shortDescription: "Remoção profissional da extensão de pestanas.",
    longDescription: "Remoção profissional e segura da extensão de pestanas.",
    duration: "[INSERIR DURAÇÃO]",
    price: "10,00 €",
    image: "/images/extensao-cilios/extensao-cilios-01.jpg",
    bookingUrl: "https://noona.pt/leticiacorreiastudio/experience/ciRejpV1kvCCbuBBvNZwAr1Q",
    highlights: ["Remoção segura e profissional"],
  },

  // ---- Sobrancelhas — links diretos confirmados (Noona) ----
  {
    slug: "brow-lamination",
    name: "Brow Lamination + Coloração",
    category: "Sobrancelhas",
    shortDescription:
      "Alinhamento e disciplina dos pelos para sobrancelhas mais cheias e definidas, com coloração.",
    longDescription:
      "O Brow Lamination disciplina e alinha os pelos da sobrancelha na direção desejada, criando um efeito mais cheio, definido e uniforme, com coloração incluída para um acabamento natural.",
    duration: "[INSERIR DURAÇÃO]",
    price: "35,00 €",
    image: "/images/brow-lamination/brow-lamination-ia-01.jpg",
    featured: true,
    bookingUrl: "https://noona.pt/leticiacorreiastudio/experience/UwBacE0HX6KbImIw6wNvNJij",
    highlights: [
      "Sobrancelhas mais cheias e definidas",
      "Inclui coloração",
      "Acabamento natural",
    ],
  },
  {
    slug: "brow-lamination-com-design",
    name: "Brow Lamination com Design de Sobrancelhas",
    category: "Sobrancelhas",
    shortDescription: "Pacote combinado: Brow Lamination + design de sobrancelhas.",
    longDescription:
      "Pacote combinado que junta o Brow Lamination (alinhamento e disciplina dos pelos) com um design de sobrancelhas personalizado, na mesma sessão.",
    duration: "[INSERIR DURAÇÃO]",
    price: "30,00 €",
    image: "/images/brow-lamination/brow-lamination-ia-01.jpg",
    bookingUrl: "https://noona.pt/leticiacorreiastudio/experience/5iWyrdEDvFPMACSEnUTkcDC2",
    highlights: ["Brow Lamination + Design numa só sessão", "Resultado alinhado e simétrico"],
  },
  {
    slug: "design-de-sobrancelhas",
    name: "Design Estratégico de Sobrancelhas",
    category: "Sobrancelhas",
    shortDescription:
      "Limpeza (linha ou pinça) com desenho personalizado, mais spa de sobrancelhas.",
    longDescription:
      "Design de sobrancelhas personalizado, com limpeza feita a linha ou pinça e desenho adaptado ao formato do rosto, complementado com um spa de sobrancelhas.",
    duration: "[INSERIR DURAÇÃO]",
    price: "14,00 €",
    image: "/images/sobrancelhas/sobrancelhas-ia-01.jpg",
    bookingUrl: "https://noona.pt/leticiacorreiastudio/experience/sCbeBvH8JmGa4UwG9AHZmkvk",
    highlights: [
      "Limpeza a linha ou pinça",
      "Desenho personalizado",
      "Inclui spa de sobrancelhas",
    ],
  },
  {
    slug: "threading-sobrancelhas",
    name: "Threading Sobrancelhas",
    category: "Sobrancelhas",
    shortDescription: "Design feito a linha (técnica de threading).",
    longDescription: "Design de sobrancelhas feito com a técnica de threading (linha), para um contorno preciso.",
    duration: "[INSERIR DURAÇÃO]",
    price: "12,00 €",
    image: "/images/sobrancelhas/sobrancelhas-ia-01.jpg",
    bookingUrl: "https://noona.pt/leticiacorreiastudio/experience/CCN3wbgqoptOBzbm8rE4q5Iy",
    highlights: ["Design feito a linha", "Contorno preciso"],
  },
  {
    slug: "henna-sobrancelhas",
    name: "Henna",
    category: "Sobrancelhas",
    shortDescription: "Coloração natural que realça o desenho das sobrancelhas.",
    longDescription: "Aplicação de henna para realçar a cor e o desenho das sobrancelhas, com efeito natural.",
    duration: "[INSERIR DURAÇÃO]",
    price: "8,00 €",
    image: "/images/extensao-cilios/extensao-cilios-01.jpg",
    bookingUrl: "https://noona.pt/leticiacorreiastudio/experience/T8UMDs6TO9ha0pnC4lmDosjD",
    highlights: ["Coloração natural", "Realça o desenho da sobrancelha"],
  },
  {
    slug: "micropigmentacao",
    name: "Nanopigmentação",
    category: "Sobrancelhas",
    shortDescription: "Resultados naturais e duradouros — dura cerca de 1 ano.",
    longDescription:
      "Nanopigmentação de sobrancelhas, técnica semipermanente que preenche falhas imitando fios naturais, com duração aproximada de 1 ano. Inclui retoque de cortesia 30 dias depois.",
    duration: "[INSERIR DURAÇÃO]",
    price: "150,00 €",
    image: "/images/micropigmentacao/micropigmentacao-01.jpg",
    featured: true,
    bookingUrl: "https://noona.pt/leticiacorreiastudio/experience/yaVSXkzc0PoCqja6feYYqIFI",
    highlights: [
      "Dura cerca de 1 ano",
      "Retoque de cortesia aos 30 dias",
      "Preenche falhas com efeito de fio natural",
    ],
  },
  {
    slug: "retoque-anual-nano",
    name: "Retoque Anual Nano",
    category: "Sobrancelhas",
    shortDescription: "Retoque anual para quem já tem Nanopigmentação.",
    longDescription: "Retoque anual da Nanopigmentação, para manter o resultado ao longo do tempo.",
    duration: "[INSERIR DURAÇÃO]",
    price: "120,00 €",
    image: "/images/micropigmentacao/micropigmentacao-01.jpg",
    bookingUrl: "https://noona.pt/leticiacorreiastudio/experience/ZfMUz4UK6Jrg2VrtQKOU3OBI",
    highlights: ["Manutenção anual da Nanopigmentação"],
  },

  // ---- Lábios — sem link direto confirmado ----
  {
    slug: "procedimento-labial",
    name: "Procedimento Labial",
    category: "Lábios",
    shortDescription: "Hidratação, volume e definição.",
    longDescription:
      "Tratamento dedicado aos lábios, com foco em hidratação, volume e definição, para um resultado natural e cuidado.",
    duration: "[INSERIR DURAÇÃO]",
    price: "[INSERIR PREÇO]",
    image: "/images/labios/labios-01.jpg",
    highlights: [
      "Hidratação profunda",
      "Volume e definição naturais",
      "Realce e cuidado dos lábios",
    ],
  },
];

/**
 * Serviços cujo link direto de marcação ainda não foi confirmado entre os
 * fornecidos (usam siteConfig.bookingUrl como alternativa). Corrigir aqui
 * assim que a Letícia confirmar o link direto de cada um no Noona.
 */
export const SERVICOS_SEM_LINK_DIRETO = ["procedimento-labial"];

/**
 * Categorias que o Studio menciona no posicionamento (Pestanas /
 * Sobrancelhas / Lábios) mas que ainda não têm serviços confirmados
 * com nome oficial. Mostradas na página de Serviços como "brevemente
 * disponível / a confirmar" — nunca com um nome de serviço inventado.
 */
export const unconfirmedCategories: ServiceCategory[] = [];

export const serviceCategories: ServiceCategory[] = ["Pestanas", "Sobrancelhas", "Lábios"];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory) {
  return services.filter((s) => s.category === category);
}
