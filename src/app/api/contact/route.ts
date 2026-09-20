import { NextResponse } from "next/server";

/**
 * ENDPOINT DE CONTACTO — INTEGRAÇÃO NECESSÁRIA
 * ----------------------------------------------------------------
 * Recebe os dados do formulário mas ainda NÃO envia nenhum email.
 *
 * Para ativar o envio, integra um serviço como:
 *   - Resend (https://resend.com)
 *   - SendGrid (https://sendgrid.com)
 *   - Formspree (https://formspree.io) — alternativa sem backend
 *
 * Exemplo com Resend (depois de instalar "resend" e definir
 * RESEND_API_KEY nas variáveis de ambiente):
 *
 *   import { Resend } from "resend";
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({
 *     from: "site@studioleticiacorreia.pt",
 *     to: "[INSERIR EMAIL DO STUDIO]",
 *     subject: `Nova mensagem de ${name}`,
 *     text: message,
 *   });
 * ----------------------------------------------------------------
 */

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body ?? {};

    if (!name || !message) {
      return NextResponse.json(
        { ok: false, error: "Nome e mensagem são obrigatórios." },
        { status: 400 }
      );
    }

    // TODO: integrar serviço de email real (ver comentário acima).
    console.log("Nova mensagem de contacto:", { name, phone, email, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Não foi possível processar o pedido." },
      { status: 500 }
    );
  }
}
