export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "Onde fica o Letícia Correia Studio?",
    answer: "Estamos na Rua de Costa Cabral, Prédio 777 A, Sala 8, 4200-224 Porto. Consulta a página de Contactos para mapa e direções.",
  },
  {
    id: "faq-2",
    question: "Como faço uma marcação?",
    answer:
      "Podes agendar através do botão \"Agendar o meu horário\" em qualquer página do site — que te leva à nossa plataforma de marcações (Noona) — ou contactar-nos diretamente por WhatsApp.",
  },
  {
    id: "faq-3",
    question: "Preciso de vir sem maquilhagem para tratamentos de sobrancelhas e pestanas?",
    answer:
      "[INSERIR RECOMENDAÇÃO — ex: recomendamos vir sem maquilhagem na zona dos olhos para o tratamento correr da melhor forma.]",
  },
  {
    id: "faq-4",
    question: "Que formas de pagamento aceitam?",
    answer: "[INSERIR FORMAS DE PAGAMENTO ACEITES]",
  },
  {
    id: "faq-5",
    question: "Com que antecedência devo marcar?",
    answer: "[INSERIR POLÍTICA DE MARCAÇÃO E CANCELAMENTO]",
  },
];
