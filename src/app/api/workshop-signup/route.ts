import { NextResponse } from "next/server";

// Normaliza telefone BR pra formato Z-API (55 + DDD + numero)
function normPhone(raw: string): string {
  let d = String(raw).replace(/\D/g, "");
  if (d.length <= 11 && !d.startsWith("55")) d = "55" + d;
  return d;
}

// Envia texto via Z-API (instancia principal). Nao lanca — loga e segue.
async function zapiSendText(phone: string, message: string) {
  const instance = process.env.ZAPI_INSTANCE_ID;
  const token = process.env.ZAPI_TOKEN;
  const clientToken = process.env.ZAPI_CLIENT_TOKEN;
  if (!instance || !token || !clientToken) {
    console.warn("[zapi] credenciais ausentes — pulando envio");
    return;
  }
  const url = `https://api.z-api.io/instances/${instance}/token/${token}/send-text`;
  try {
    const r = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-Token": clientToken,
      },
      body: JSON.stringify({ phone, message }),
    });
    if (!r.ok) {
      console.error(`[zapi] falha ${r.status} ao enviar pra ${phone}`);
    }
  } catch (e) {
    console.error("[zapi] erro no envio:", (e as Error).message);
  }
}

export async function POST(request: Request) {
  try {
    const { nome, telefone, empresa, origem } = await request.json();

    if (!nome || !telefone || !empresa) {
      return NextResponse.json(
        { error: "Preencha todos os campos" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const primeiroNome = String(nome).trim().split(/\s+/)[0];
    const leadPhone = normPhone(telefone);

    // 1) Avisa o Luiz (numero da instancia principal)
    const notifyPhone = process.env.LEAD_NOTIFY_PHONE || "5561981726782";
    const aviso =
      `🔔 *NOVO LEAD — Desafio Empreendedor Alexânia*\n\n` +
      `👤 ${nome}\n` +
      `🏢 ${empresa}\n` +
      `📱 ${telefone}\n\n` +
      `Origem: ${origem || "desafio"}`;

    // 2) Auto-resposta pro lead
    const boasVindas =
      `Olá, ${primeiroNome}! Aqui é o Luiz Curti. 👋\n\n` +
      `Recebi seu cadastro no *Desafio Empreendedor Alexânia*. ` +
      `Em breve a gente conversa pra entender o momento da sua empresa.\n\n` +
      `Se quiser adiantar, é só me responder por aqui.\n\n` +
      `— Lado a lado.`;

    await Promise.all([
      zapiSendText(notifyPhone, aviso),
      zapiSendText(leadPhone, boasVindas),
    ]);

    // 3) Google Sheets (opcional — se a env existir)
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, telefone, empresa, timestamp, origem: origem || "desafio" }),
      }).catch(() => {
        console.error("Webhook failed, but signup saved");
      });
    }

    // 4) Log sempre disponivel nos logs da Vercel
    console.log("LEAD_SIGNUP:", JSON.stringify({ nome, telefone, empresa, origem, timestamp }));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erro interno" },
      { status: 500 }
    );
  }
}
