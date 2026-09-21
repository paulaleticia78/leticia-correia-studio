/**
 * CAMPANHA "LIFTING DUPLO"
 * ----------------------------------------------------------------
 * Lash Lifting + Brow Lamination na mesma sessão.
 *
 * PREÇO: o Noona ainda não tem uma experiência de marcação específica
 * para exatamente esta combinação (Lash Lifting + Brow Lamination). O
 * combo mais próximo confirmado é "Extensão Volume Brasil/Egípcio +
 * Brow Lamination" (65,00 €) — mas é uma extensão de pestanas, não um
 * lifting, por isso não é o mesmo serviço e o preço não pode ser
 * reaproveitado sem inventar. Por regra do projeto (nunca inventar
 * preços), `price` fica `null` até a Letícia confirmar um valor — o
 * cartão mostra "Preço a confirmar" enquanto isso. Basta preencher o
 * valor aqui assim que estiver definido.
 *
 * LINK DE MARCAÇÃO: pela mesma razão, ainda não há um link direto do
 * Noona só para este combo. O botão usa por isso o link geral de
 * marcações (`siteConfig.bookingUrl`), com uma nota a pedir para
 * escolher os dois tratamentos na marcação. Assim que houver uma
 * experiência dedicada no Noona, basta preencher `bookingUrl` aqui.
 * ----------------------------------------------------------------
 */
export const liftDuploCampaign = {
  name: "LIFTING DUPLO",
  subtitle: "Dois detalhes. Um olhar completamente transformado.",
  services: "Lash Lifting + Brow Lamination",
  description:
    "Realce as pestanas e alinhe as sobrancelhas para um olhar mais aberto, definido e harmonioso.",
  cta: "QUERO O MEU LIFTING DUPLO",
  /** null = ainda não confirmado — não inventar. */
  price: null as string | null,
  /** null = ainda não há experiência Noona dedicada a este combo — não inventar. */
  bookingUrl: null as string | null,
  image: "/images/extensao-cilios/extensao-cilios-03.jpg",
};
