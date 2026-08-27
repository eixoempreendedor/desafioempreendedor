// Dados da campanha "Análise Tributária Reservada" (reforma tributária).
// Página: /reforma-tributaria

export const REFORMA_WHATSAPP =
  "https://wa.me/5561981726782?text=Quero%20a%20an%C3%A1lise%20tribut%C3%A1ria%20reservada%20da%20minha%20empresa";

// Linha do tempo da transição (LC 214/2025)
export const reformaTimeline = [
  {
    ano: "2026",
    titulo: "Ano de teste — e já está acabando",
    texto:
      "CBS e IBS entram com alíquotas simbólicas, compensáveis. Na prática, é o ano em que sua empresa deveria estar limpando cadastro, revisando preço e descobrindo onde tem crédito. Quem usar 2026 chega em 2027 pronto.",
  },
  {
    ano: "2027",
    titulo: "A CBS passa a valer de verdade",
    texto:
      "PIS e COFINS acabam, o IPI é zerado na maioria dos casos e o crédito passa a ser amplo para quem está no regime regular. É aqui que o comprador PJ começa a escolher fornecedor pelo crédito que recebe.",
  },
  {
    ano: "2029 a 2032",
    titulo: "ICMS e ISS vão sendo desligados",
    texto:
      "A transição acontece ano a ano, com dois sistemas rodando ao mesmo tempo. Empresa desorganizada paga duas vezes o preço da bagunça: erra no velho e erra no novo.",
  },
  {
    ano: "2033",
    titulo: "Só sobra o modelo novo",
    texto:
      "Quem chegar aqui sem entender a mecânica de crédito não vai perder no imposto: vai perder cliente para o concorrente que entendeu antes.",
  },
];

// Sintomas — usado no bloco "isso está acontecendo com você"
export const reformaSintomas = [
  "Seus clientes são outras empresas — e alguns já começaram a perguntar quanto de crédito a sua nota gera.",
  "Você compra de fornecedor de outro estado e paga guia de DIFAL sem saber direito por quê.",
  "Você nunca viu um comparativo de regimes feito com os números da SUA empresa — só ouviu \"fica no Simples\".",
  "Você revende produto de bebida, autopeça, cosmético ou farmácia e paga o DAS cheio, sem segregar receita.",
  "Você não sabe quanto de imposto está dentro do seu preço de venda — reajusta no feeling.",
  "Seu cadastro de produtos tem NCM e CST herdados de quando a empresa abriu, e ninguém revisou desde então.",
];

// Frentes de crédito que costumam aparecer numa análise
export const reformaCreditos = [
  {
    titulo: "DIFAL cobrado de empresa do Simples",
    texto:
      "O STF já decidiu que a cobrança do diferencial de alíquota de optante do Simples, do jeito que vários estados fizeram, não se sustenta. Quem pagou pode ter direito a reaver — em regra, os últimos 5 anos.",
    base: "STF — ADI 5469 e Tema 1093",
  },
  {
    titulo: "Produtos monofásicos dentro do DAS",
    texto:
      "Bebida, autopeça, cosmético, higiene, medicamento: PIS e COFINS já foram pagos lá na indústria. Se a sua empresa revende e não segrega essas receitas, está pagando de novo todo mês.",
    base: "Lei Complementar 123 — segregação de receitas",
  },
  {
    titulo: "ICMS-ST retido a maior",
    texto:
      "Substituição tributária calcula o imposto por um preço presumido. Quando você vende por menos que o presumido, a diferença é sua — e quase ninguém pede de volta.",
    base: "STF — Tema 201",
  },
  {
    titulo: "ICMS na base do PIS/COFINS",
    texto:
      "A tese mais conhecida do país continua rendendo revisão em empresa de Lucro Presumido e Lucro Real que nunca ajustou a apuração.",
    base: "STF — Tema 69",
  },
];

// Etapas da análise
export const reformaEtapas = [
  {
    titulo: "Você manda os arquivos",
    texto:
      "XML das suas notas dos últimos 12 meses, as últimas guias (DAS ou apuração) e o cartão CNPJ. Leva 10 minutos e não passa pelo seu contador.",
  },
  {
    titulo: "A gente lê nota por nota",
    texto:
      "Levantamento do que você paga hoje, do que está embutido no seu preço e das frentes de crédito que aparecem no seu histórico.",
  },
  {
    titulo: "Simulação dos cenários",
    texto:
      "Seu faturamento rodado no Simples, no Presumido e no Real — e a projeção de como você fica na CBS/IBS a partir de 2027, inclusive o crédito que a sua nota passa a gerar para o seu cliente.",
  },
  {
    titulo: "Devolutiva de 40 minutos, só com você",
    texto:
      "Você recebe o mapa na mão e a gente conversa: onde tem dinheiro parado, o que dá para corrigir agora e o que precisa de medida específica. A decisão continua sendo sua.",
  },
];

export const reformaFAQ = [
  {
    question: "Isso é para me convencer a sair do Simples?",
    answer:
      "Não. Em boa parte dos casos a análise mostra que ficar no Simples continua sendo o melhor caminho — e aí você fica com número na mão em vez de achismo. O que não dá mais é decidir regime tributário no boca a boca, com a regra do jogo mudando até 2033.",
  },
  {
    question: "Meu contador vai ficar sabendo?",
    answer:
      "Não. A análise é reservada: a gente não liga para o seu escritório de contabilidade, não pede nada a ele e não manda relatório para ninguém além de você. Os arquivos que a gente usa são seus e você mesmo consegue baixar. Se você quiser levar o resultado para ele depois, aí é decisão sua.",
  },
  {
    question: "Meu contador é bom. Ele está errado?",
    answer:
      "Provavelmente não. A maioria dos contadores é muito boa naquilo que o mercado pediu por 20 anos: manter a empresa em dia e a guia paga. Só que apurar imposto é uma coisa e planejar imposto é outra — e recuperar crédito é uma terceira, que raramente está dentro do honorário mensal que você paga.",
  },
  {
    question: "Isso é alguma manobra para pagar menos imposto?",
    answer:
      "Não. Tudo o que a gente aponta está em lei, em decisão do STF ou na própria LC 214/2025. Não existe caixa dois, não existe nota fria, não existe empresa de fachada. O que existe é empresa grande usando há 20 anos o que a pequena nunca soube que tinha direito.",
  },
  {
    question: "Quanto custa?",
    answer:
      "O levantamento inicial não tem custo. Se aparecer crédito a recuperar ou reestruturação a fazer, a proposta vem depois, por escrito, com valor fechado e você decide sem pressa. Não tem venda no meio da devolutiva.",
  },
  {
    question: "E se não encontrar nada?",
    answer:
      "Você recebe o mapa do mesmo jeito, com a simulação dos cenários até 2033. Já sai sabendo quanto de imposto tem dentro do seu preço — coisa que a maioria dos donos de empresa não sabe responder.",
  },
  {
    question: "Quanto tempo demora?",
    answer:
      "Da hora que os arquivos chegam, cerca de 7 dias úteis para o levantamento e a simulação. A devolutiva é marcada com você, por chamada ou presencial.",
  },
  {
    question: "A reforma não é só lá em 2033?",
    answer:
      "O sistema novo termina de entrar em 2033, mas a CBS já vale para valer em 2027 — e é em 2027 que o seu cliente PJ começa a comparar fornecedor pelo crédito que recebe. Preço, cadastro e regime não se arrumam em dezembro. Se arrumam agora.",
  },
];

// Autodiagnóstico — quanto mais marcado, maior a exposição
export const reformaCheckItems = [
  "Vendo para outras empresas (CNPJ), não só para consumidor final.",
  "Compro de fornecedor de outro estado.",
  "Já paguei guia de DIFAL nos últimos 5 anos.",
  "Revendo bebida, autopeça, cosmético, higiene ou medicamento.",
  "Nunca vi um comparativo de regimes com os números da minha empresa.",
  "Não sei dizer quanto de imposto tem dentro do meu preço de venda.",
  "Meu cadastro de produtos (NCM/CST) não é revisado há mais de 2 anos.",
  "Meu faturamento está chegando perto do teto do Simples.",
];
