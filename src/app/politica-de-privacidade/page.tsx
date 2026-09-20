import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Política de privacidade do ${siteConfig.name}.`,
  alternates: { canonical: "/politica-de-privacidade" },
  robots: { index: false, follow: true },
};

const sections = [
  {
    title: "1. Quem somos",
    body: `${siteConfig.name}, com morada em ${siteConfig.address.line1}, ${siteConfig.address.line2} ("nós", "o Studio"), é responsável pelo tratamento dos dados pessoais recolhidos através deste site. Para qualquer questão relacionada com privacidade, contacta-nos através de ${siteConfig.contact.email}.`,
  },
  {
    title: "2. Que dados recolhemos",
    body: "Recolhemos os dados que nos fornece voluntariamente através do formulário de contacto ou de marcação, nomeadamente: nome, número de telefone, endereço de email e o conteúdo da mensagem enviada. Também podemos recolher dados de navegação anónimos através de ferramentas de análise, quando aplicável.",
  },
  {
    title: "3. Para que utilizamos os dados",
    body: "Os dados fornecidos são utilizados exclusivamente para responder a pedidos de contacto, gerir marcações e comunicar sobre os serviços do Studio. Não vendemos nem partilhamos os teus dados com terceiros para fins de marketing sem o teu consentimento explícito.",
  },
  {
    title: "4. Base legal do tratamento",
    body: "O tratamento dos dados baseia-se no consentimento fornecido ao submeter o formulário de contacto, e/ou na execução de diligências pré-contratuais necessárias para responder ao teu pedido, nos termos do Regulamento Geral sobre a Proteção de Dados (RGPD).",
  },
  {
    title: "5. Plataformas de terceiros",
    body: "Este site pode encaminhar-te para plataformas externas de marcação online e para o WhatsApp, cujas políticas de privacidade próprias se aplicam à informação partilhada nessas plataformas. Recomendamos a leitura das respetivas políticas de privacidade.",
  },
  {
    title: "6. Prazo de conservação",
    body: "[INSERIR PRAZO DE CONSERVAÇÃO DOS DADOS — ex: os dados são conservados apenas durante o tempo necessário para responder ao pedido ou gerir a relação comercial, salvo obrigação legal de conservação superior.]",
  },
  {
    title: "7. Os teus direitos",
    body: "Nos termos do RGPD, tens direito a aceder, retificar, apagar, limitar o tratamento e opor-te ao tratamento dos teus dados pessoais, bem como o direito à portabilidade dos dados. Para exercer estes direitos, contacta-nos através de [INSERIR EMAIL OU CONTACTO PARA EXERCÍCIO DE DIREITOS].",
  },
  {
    title: "8. Cookies",
    body: "[INSERIR INFORMAÇÃO SOBRE COOKIES — ex: este site utiliza cookies essenciais ao funcionamento e, quando aplicável, cookies de análise. Podes gerir as tuas preferências através das definições do teu navegador.]",
  },
  {
    title: "9. Alterações a esta política",
    body: "Esta política de privacidade pode ser atualizada periodicamente. A versão mais recente estará sempre disponível nesta página.",
  },
  {
    title: "10. Reclamações",
    body: "Se considerares que o tratamento dos teus dados pessoais viola o RGPD, tens o direito de apresentar reclamação junto da Comissão Nacional de Proteção de Dados (CNPD) — www.cnpd.pt.",
  },
];

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <PageHero
        eyebrow="Informação legal"
        title="Política de Privacidade"
        description="Última atualização: [INSERIR DATA]"
      />

      <section className="section-padding bg-cream-50">
        <div className="container-content max-w-3xl">
          <div className="flex flex-col gap-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-display text-xl text-ink-900 sm:text-2xl">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">{s.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-xs text-ink-600">
            Este documento é um modelo genérico de política de privacidade e não substitui
            aconselhamento jurídico. Recomendamos a revisão por um profissional qualificado antes
            da publicação definitiva, de forma a garantir total conformidade com o RGPD e demais
            legislação aplicável em Portugal.
          </p>
        </div>
      </section>
    </>
  );
}
