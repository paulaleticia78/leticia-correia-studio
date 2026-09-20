/**
 * PRODUTOS — estrutura preparada para uma futura loja.
 * ----------------------------------------------------------------
 * Ainda NÃO existe uma loja completa. Este ficheiro só define o tipo e
 * um array vazio para que, quando o Studio confirmar os produtos que
 * vende (ex: ceras, produtos de cabelo/beleza), baste adicionar itens
 * aqui — sem reconstruir o projeto.
 *
 * REGRAS (mantidas quando esta lista for preenchida):
 * - não inventar produtos, preços ou descrições;
 * - não apresentar produtos de terceiros como se fossem do Studio;
 * - só publicar quando o Studio confirmar catálogo e preços reais.
 *
 * A página `/produtos` já existe (src/app/produtos/page.tsx) mas não
 * está ligada no menu principal — fica pronta para ativação futura.
 * ----------------------------------------------------------------
 */

export type Product = {
  slug: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category?: string;
};

export const products: Product[] = [];
