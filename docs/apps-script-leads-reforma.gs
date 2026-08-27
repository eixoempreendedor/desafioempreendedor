/**
 * Recebe os leads da campanha da reforma tributária (/reforma-tributaria)
 * e grava na planilha "Leads Reforma Tributária".
 *
 * Como instalar:
 *  1. Abra a planilha → Extensões → Apps Script.
 *  2. Apague o conteúdo do Code.gs e cole este arquivo.
 *  3. Implantar → Nova implantação → Tipo: App da Web.
 *       Executar como: Eu
 *       Quem pode acessar: Qualquer pessoa
 *  4. Copie a URL gerada (termina em /exec).
 *  5. Vercel → projeto desafioempreendedor → Settings → Environment Variables:
 *       GOOGLE_SHEETS_WEBHOOK_REFORMA = <a URL do passo 4>
 *  6. Redeploy na Vercel (env nova só vale no próximo deploy).
 *
 * O script é vinculado à planilha, então não precisa de ID aqui.
 * A ordem das colunas abaixo tem que bater com o cabeçalho da primeira aba.
 */

function doPost(e) {
  try {
    const lead = JSON.parse(e.postData.contents);
    const aba = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    aba.appendRow([
      formatarData(lead.timestamp), // Data/Hora
      lead.nome || "",              // Nome
      lead.empresa || "",           // Empresa
      lead.telefone || "",          // WhatsApp
      lead.regime || "",            // Regime
      lead.faturamento || "",       // Faturamento
      lead.origem || "",            // Origem
      "Novo",                       // Status
      "Não",                        // Arquivos recebidos?
      "Não",                        // Análise entregue?
      "",                           // Próximo passo
      "",                           // Observações
    ]);

    return responder({ ok: true });
  } catch (erro) {
    return responder({ ok: false, erro: String(erro) });
  }
}

function formatarData(iso) {
  const data = iso ? new Date(iso) : new Date();
  return Utilities.formatDate(data, "America/Sao_Paulo", "dd/MM/yyyy HH:mm");
}

function responder(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
