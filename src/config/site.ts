/**
 * CONFIGURAÇÃO CENTRAL DO SITE — Letícia Correia Studio
 * ----------------------------------------------------------------
 * Ficheiro único para alterar nome, descrição, contactos, horário,
 * redes sociais, link de marcação e número de WhatsApp.
 *
 * Tudo entre parênteses retos, ex: [INSERIR EMAIL], é um placeholder
 * por preencher. Os dados abaixo marcados como confirmados foram
 * fornecidos diretamente — nada foi inventado.
 *
 * NOTA: o domínio do site (studioConfig.url) foi assumido a partir do
 * handle de Instagram (@leticiacorreia.pt) — confirma e substitui se
 * o domínio real for diferente.
 * ----------------------------------------------------------------
 */

export const BOOKING_URL = "https://noona.app/leticiacorreiastudio";
export const WHATSAPP_NUMBER = "+351 938 435 436";

export const siteConfig = {
  name: "Letícia Correia Studio",
  shortName: "Letícia Correia",
  heroName: "Letícia Correia Studio",
  heroSubtitle: "Pestanas • Sobrancelhas • Lábios",
  tagline: "Realce a sua beleza, preserve a sua naturalidade.",
  positioning: "Pestanas, sobrancelhas e lábios, no Porto.",
  description:
    "Studio Letícia Correia no Porto. Especialista em pestanas, sobrancelhas e lábios, com foco em resultados naturais, personalizados e atendimento de excelência.",
  url: "https://www.leticiacorreia.pt",
  locale: "pt_PT",
  country: "Portugal",

  bookingUrl: BOOKING_URL,
  bookingPlatform: "Noona",
  // Widget oficial de marcações do Noona (iframe), gerado em
  // Noona HQ → Online Bookings → Visibility → "Allow online bookings
  // on your website". Cola aqui o URL do iframe assim que a Letícia o
  // gerar na conta Noona do Studio — o site passa a mostrar o widget
  // embutido automaticamente. Enquanto ficar vazio, mostra-se o cartão
  // de marcação com o link direto para o Noona.
  noonaEmbedUrl: "",

  contact: {
    phoneDisplay: "+351 938 435 436",
    phoneHref: "tel:+351938435436",
    // Assume-se o mesmo número para WhatsApp — confirma se for diferente.
    whatsappNumber: WHATSAPP_NUMBER,
    whatsappHref: "https://wa.me/351938435436",
    email: "[INSERIR EMAIL]",
  },

  address: {
    line1: "Rua de Costa Cabral, Prédio 777 A, Sala 8",
    line2: "4200-224 Porto, Portugal",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+de+Costa+Cabral%2C+Pr%C3%A9dio+777+A%2C+Sala+8%2C+4200-224+Porto",
    mapsEmbedUrl:
      "https://www.google.com/maps?q=Rua+de+Costa+Cabral,+777,+4200-224+Porto&output=embed",
  },

  hours: [
    { days: "Segunda a sexta", time: "[INSERIR HORÁRIO]" },
    { days: "Sábado", time: "[INSERIR HORÁRIO]" },
    { days: "Domingo", time: "[INSERIR HORÁRIO OU ENCERRADO]" },
  ],

  social: {
    instagram: "https://www.instagram.com/leticiacorreia.pt/",
    instagramHandle: "@leticiacorreia.pt",
    facebook: "[INSERIR LINK FACEBOOK]",
    tiktok: "[INSERIR LINK TIKTOK]",
  },

  // Avaliação agregada confirmada — não inventar texto de depoimentos.
  googleRating: {
    value: 5.0,
    count: 8,
  },
  googleReviewsUrl: "[INSERIR LINK DIRETO PARA AS AVALIAÇÕES GOOGLE]",

  // Ordem pedida: Início | Sobre | Serviços | Portfólio | Avaliações | Contactos | Agendar
  // "Produtos" fica de fora do menu por agora (ver src/data/products.ts) —
  // a estrutura do site já permite adicionar essa página sem reconstruir o projeto.
  nav: [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Portfólio", href: "/galeria" },
    { label: "Avaliações", href: "/#avaliacoes" },
    { label: "Contactos", href: "/contactos" },
    { label: "Agendar", href: "/agendar" },
  ],

  ctaPrimary: "Agendar o meu horário",
  ctaFinal: "Agendar agora",
  ctaWhatsapp: "Falar pelo WhatsApp",
} as const;

export type SiteConfig = typeof siteConfig;
