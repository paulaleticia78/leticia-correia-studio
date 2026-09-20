/**
 * GALERIA / PORTFÓLIO
 * ----------------------------------------------------------------
 * REGRA: só podem existir aqui fotografias reais e identificáveis
 * como trabalho do Studio Letícia Correia (Instagram @leticiacorreia.pt
 * ou material fornecido diretamente pela Letícia). Nunca usar fotos
 * de outras profissionais, outros estúdios ou bancos de imagens como
 * se fossem trabalhos da Letícia.
 *
 * Os ficheiros abaixo apontam para `/public/images/portfolio/` e
 * `/public/images/antes-depois/` — atualmente com placeholders
 * claramente identificados (ver README) à espera das fotografias
 * reais. Substitui o `src` de cada item mantendo a categoria certa;
 * não repetir a mesma imagem em mais do que uma secção.
 * ----------------------------------------------------------------
 */

export type GalleryCategory = "pestanas" | "sobrancelhas" | "labios" | "antes-depois";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  /** proporção original da foto, para preservar o enquadramento editorial */
  aspect?: "portrait" | "square" | "landscape";
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", src: "/images/portfolio/sobrancelhas-01.jpg", alt: "Design de sobrancelhas — Studio Letícia Correia", category: "sobrancelhas", aspect: "portrait" },
  { id: "g2", src: "/images/portfolio/pestanas-01.jpg", alt: "Lash Lifting — Studio Letícia Correia", category: "pestanas", aspect: "square" },
  { id: "g3", src: "/images/portfolio/sobrancelhas-02.jpg", alt: "Brow Lamination — Studio Letícia Correia", category: "sobrancelhas", aspect: "landscape" },
  { id: "g4", src: "/images/portfolio/pestanas-02.jpg", alt: "Resultado de Lash Lifting — Studio Letícia Correia", category: "pestanas", aspect: "portrait" },
  { id: "g5", src: "/images/antes-depois/sobrancelhas-antes-depois-01.jpg", alt: "Antes e depois — sobrancelhas, Studio Letícia Correia", category: "antes-depois", aspect: "landscape" },
  { id: "g6", src: "/images/antes-depois/pestanas-antes-depois-01.jpg", alt: "Antes e depois — Lash Lifting, Studio Letícia Correia", category: "antes-depois", aspect: "landscape" },
  { id: "g7", src: "/images/portfolio/sobrancelhas-03.jpg", alt: "Detalhe de sobrancelhas — Studio Letícia Correia", category: "sobrancelhas", aspect: "square" },
  { id: "g8", src: "/images/portfolio/pestanas-03.jpg", alt: "Detalhe de pestanas — Studio Letícia Correia", category: "pestanas", aspect: "portrait" },
  { id: "g9", src: "/images/portfolio/pestanas-04.jpg", alt: "Sessão de pestanas em curso — Studio Letícia Correia", category: "pestanas", aspect: "portrait" },
  { id: "g10", src: "/images/portfolio/pestanas-05.jpg", alt: "Cuidado no detalhe durante o tratamento de pestanas — Studio Letícia Correia", category: "pestanas", aspect: "portrait" },
];

export const galleryFilters: { id: GalleryCategory | "todos"; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "pestanas", label: "Pestanas" },
  { id: "sobrancelhas", label: "Sobrancelhas" },
  { id: "labios", label: "Lábios" },
  { id: "antes-depois", label: "Antes & Depois" },
];

export const beforeAfterItems: GalleryItem[] = galleryItems.filter((i) => i.category === "antes-depois");
