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
 * Os 13 serviços de Pestanas abaixo têm `bookingUrl` confirmado —
 * cada um foi identificado a partir do link fornecido, lendo o nome
 * e o preço reais mostrados nessa página de marcação do Noona
 * (noona.pt/leticiacorreiastudio/experience/...). Nome e preço vêm
 * exatamente do que está publicado nessas páginas — não foram
 * inventados nem estimados.
 *
 * Brow Lamination (standalone), Design de Sobrancelhas, Procedimento
 * Labial e Micropigmentação NÃO têm um link direto confirmado entre
 * os fornecidos — apenas "Extensão volume Brasil/egípcio + Brow
 * Lamination" (um combo) menciona brow lamination, mas como parte de
 * outro serviço, não como o próprio Brow Lamination. Por isso, para
 * estes 4 serviços, `bookingUrl` fica por preencher (o botão usa o
 * link geral do Noona como alternativa) e `price` fica como
 * placeholder — nunca inventados. Ver `SERVICOS_SEM_LINK_DIRETO`
 * abaixo para a lista exata a corrigir.
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

  // ---- Sobrancelhas / Lábios — sem link direto confirmado ----
  // Nenhum dos 12 links fornecidos corresponde a estes serviços (apenas o combo
  // acima menciona "Brow Lamination", como parte de outro serviço). Por isso o
  // botão "Agendar" usa o link geral do Noona (siteConfig.bookingUrl) até a
  // Letícia confirmar o link direto de cada um — ver SERVICOS_SEM_LINK_DIRETO.
  {
    slug: "brow-lamination",
    name: "Brow Lamination",
    category: "Sobrancelhas",
    shortDescription:
      "Alinhamento e disciplina dos pelos para sobrancelhas mais cheias e definidas.",
    longDescription:
      "O Brow Lamination disciplina e alinha os pelos da sobrancelha na direção desejada, criando um efeito mais cheio, definido e uniforme, com um acabamento natural.",
    duration: "[INSERIR DURAÇÃO]",
    price: "[INSERIR PREÇO]",
    image: "/images/brow-lamination/brow-lamination-ia-01.jpg",
    featured: true,
    highlights: [
      "Sobrancelhas mais cheias e definidas",
      "Efeito duradouro",
      "Acabamento natural",
    ],
  },
  {
    slug: "design-de-sobrancelhas",
    name: "Design de Sobrancelhas",
    category: "Sobrancelhas",
    shortDescription:
      "Correção de forma e simetria adaptada ao formato do rosto.",
    longDescription:
      "Um design de sobrancelhas personalizado, que respeita a estrutura natural do rosto e realça o olhar com simetria e precisão.",
    duration: "[INSERIR DURAÇÃO]",
    price: "[INSERIR PREÇO]",
    image: "/images/sobrancelhas/sobrancelhas-ia-01.jpg",
    highlights: [
      "Estudo de simetria facial",
      "Técnica personalizada",
      "Manutenção regular recomendada",
    ],
  },
  {
    slug: "micropigmentacao",
    name: "Micropigmentação",
    category: "Sobrancelhas",
    shortDescription: "Resultados naturais e duradouros.",
    longDescription:
      "Micropigmentação de sobrancelhas com técnica personalizada, para um resultado natural, duradouro e adaptado à simetria facial.",
    duration: "[INSERIR DURAÇÃO]",
    price: "[INSERIR PREÇO]",
    image: "/images/micropigmentacao/micropigmentacao-01.jpg",
    highlights: [
      "Resultado natural e duradouro",
      "Técnica personalizada",
      "Reduz a rotina de maquilhagem diária",
    ],
  },
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
export const SERVICOS_SEM_LINK_DIRETO = [
  "brow-lamination",
  "design-de-sobrancelhas",
  "micropigmentacao",
  "procedimento-labial",
];

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
