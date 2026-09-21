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
  { id: "g1", src: "/images/sobrancelhas/sobrancelhas-ia-01.jpg", alt: "Design de sobrancelhas — Studio Letícia Correia", category: "sobrancelhas", aspect: "portrait" },
  { id: "g2", src: "/images/lash-lifting/lash-lifting-ia-01.jpg", alt: "Lash Lifting — Studio Letícia Correia", category: "pestanas", aspect: "square" },
  { id: "g3", src: "/images/brow-lamination/brow-lamination-ia-01.jpg", alt: "Brow Lamination — Studio Letícia Correia", category: "sobrancelhas", aspect: "landscape" },
  { id: "g4", src: "/images/extensao-cilios/extensao-cilios-04.jpg", alt: "Resultado de extensão de pestanas — Studio Letícia Correia", category: "pestanas", aspect: "portrait" },
  { id: "g7", src: "/images/extensao-cilios/extensao-cilios-01.jpg", alt: "Detalhe do olhar — Studio Letícia Correia", category: "sobrancelhas", aspect: "square" },
  { id: "g8", src: "/images/extensao-cilios/extensao-cilios-02.jpg", alt: "Detalhe de pestanas — Studio Letícia Correia", category: "pestanas", aspect: "portrait" },
  { id: "g9", src: "/images/portfolio/pestanas-04.jpg", alt: "Sessão de pestanas em curso — Studio Letícia Correia", category: "pestanas", aspect: "portrait" },
  { id: "g10", src: "/images/portfolio/pestanas-05.jpg", alt: "Cuidado no detalhe durante o tratamento de pestanas — Studio Letícia Correia", category: "pestanas", aspect: "portrait" },
];

export const galleryFilters: { id: GalleryCategory | "todos"; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "pestanas", label: "Pestanas" },
  { id: "sobrancelhas", label: "Sobrancelhas" },
  { id: "labios", label: "Lábios" },
];

/**
 * Antes & Depois: por enquanto não existem, entre as fotografias reais
 * já fornecidas ao projeto, pares genuínos de "antes" e "depois" do
 * mesmo procedimento — por isso esta lista fica vazia em vez de simular
 * uma comparação com fotos que não formam um par real. A secção
 * "Antes & Depois" do site (`AntesDepois.tsx`) mostra isto de forma
 * honesta, com fotografias reais de cada tratamento e uma nota "em
 * preparação", pronta para ligar um par real assim que existir (ver
 * `antesDepoisEntries` em `AntesDepois.tsx`).
 */
export const beforeAfterItems: GalleryItem[] = [];
