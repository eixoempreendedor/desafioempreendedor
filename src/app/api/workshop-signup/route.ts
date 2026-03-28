import { NextResponse } from "next/server";

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

    // Send to Google Sheets via Apps Script webhook
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, telefone, empresa, timestamp, origem: origem || "workshop" }),
      }).catch(() => {
        // Don't fail the request if webhook fails
        console.error("Webhook failed, but signup saved");
      });
    }

    // Log for Vercel logs (always available)
    console.log("LEAD_SIGNUP:", JSON.stringify({ nome, telefone, empresa, origem, timestamp }));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erro interno" },
      { status: 500 }
    );
  }
}
