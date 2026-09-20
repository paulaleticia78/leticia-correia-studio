/**
 * AVALIAÇÕES
 * ----------------------------------------------------------------
 * REGRA: não inventar avaliações nem alterar o texto de avaliações
 * reais. O Studio tem atualmente uma avaliação agregada confirmada —
 * ver `siteConfig.googleRating` (5,0/5, 8 avaliações) — mostrada em
 * `Testimonials.tsx` sem inventar comentários.
 *
 * Este array só deve ser preenchido com o texto EXATO e o nome real
 * de avaliações que a Letícia confirme (copiadas tal como aparecem no
 * Google/Instagram, sem edições). Fica vazio por agora — pronto para
 * edição no painel administrativo assim que houver texto confirmado.
 * ----------------------------------------------------------------
 */

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  source: string;
};

/**
 * Texto exato e não alterado, partilhado pela própria cliente numa
 * conversa de WhatsApp reencaminhada pelo Studio (Instagram Stories,
 * "Feedback da cliente"). As duas frases originais foram mantidas
 * juntas, como a cliente escreveu.
 */
export const testimonials: Testimonial[] = [
  {
    id: "t-carolina-gomes",
    quote:
      "Só para dizer que estou a amaaaaar o resultado final! As sobrancelhas já \"acalmaram\" e estão no sítio que deviam estar e estão mesmo naturais e perfeitas! E as pestanas também 🙌 Obrigada pelo cuidado e paciência com as minhas mil perguntas de pessoa que experimentou isto pela 1.a vez 😅",
    author: "Carolina Gomes",
    source: "Cliente · WhatsApp",
  },
];
