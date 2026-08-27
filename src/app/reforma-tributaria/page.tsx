import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import CTAButton from "@/components/CTAButton";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadForm from "@/components/LeadForm";
import ReformaCheck from "@/components/ReformaCheck";
import {
  reformaCreditos,
  reformaEtapas,
  reformaFAQ,
  reformaSintomas,
  reformaTimeline,
} from "@/data/reforma";

export const metadata: Metadata = {
  title: "Reforma Tributária — Análise Reservada para Donos de Empresa",
  description:
    "Seu contador manda ficar no Simples. Descubra, com os números da sua empresa, se isso ainda te favorece na CBS/IBS — e quanto crédito tributário ficou para trás. Análise reservada.",
  openGraph: {
    title: "Reforma Tributária — Análise Reservada",
    description:
      "Simulação de regimes, mapa de créditos e a conta real do que a reforma faz com o seu preço. Sem passar pelo seu contador.",
    images: ["/images/luiz-mesa.jpg"],
  },
};

export default function ReformaTributariaPage() {
  return (
    <>
      <main>
        {/* HEADER */}
        <header className="fixed top-0 z-40 w-full border-b border-gray-border/50 bg-black-deep/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
            <Image
              src="/images/logo-full.png"
              alt="Desafio Empreendedor"
              width={180}
              height={40}
              className="h-8 w-auto"
            />
            <CTAButton
              text="Quero minha análise"
              href="#analise"
              className="!px-5 !py-2 !text-sm"
            />
          </div>
        </header>

        {/* HERO */}
        <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
          <p className="mb-4 text-sm font-medium tracking-widest text-gold uppercase">
            Análise tributária reservada — donos de empresa
          </p>
          <h1 className="font-heading text-4xl leading-tight tracking-wide text-white uppercase md:text-6xl">
            Seu contador mandou
            <br />
            ficar no Simples.
            <br />
            <span className="text-gold">E ele pode estar certo.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-text md:text-xl">
            Só que ninguém te mostrou a conta. Nem a do imposto que você paga
            hoje, nem a do crédito que a sua nota vai gerar (ou deixar de gerar)
            para o seu cliente a partir de 2027, nem a do que já foi pago a mais
            nos últimos 5 anos.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white">
            A gente abre essa conta com os números da sua empresa. E o seu
            contador não fica sabendo.
          </p>
          <div className="mt-8">
            <CTAButton text="Quero minha análise reservada" href="#analise" />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-text">
            <span>Levantamento sem custo</span>
            <span className="text-gray-border">|</span>
            <span>Sigilo total</span>
            <span className="text-gray-border">|</span>
            <span className="text-gold">Vagas por mês limitadas</span>
          </div>
        </section>

        {/* O JOGO MUDOU */}
        <Section id="simples" dark>
          <SectionTitle subtitle="Não é que ele seja ruim. É que ele é bom em uma coisa que está deixando de ser o jogo.">
            Por que todo contador diz &ldquo;fica no Simples&rdquo;
          </SectionTitle>
          <div className="space-y-5 text-lg leading-relaxed text-gray-text">
            <p>
              Porque por 20 anos essa foi a resposta certa. O Simples resolvia
              apuração, reduzia burocracia e dava previsibilidade. Seu contador
              aprendeu a jogar esse jogo — e joga bem.
            </p>
            <p>
              Só que o contador é pago para manter a sua empresa em dia. Ele
              recolhe, entrega obrigação, fecha o mês. Isso se chama{" "}
              <span className="font-semibold text-white">apurar imposto</span>.
            </p>
            <p>
              Planejar imposto é outra profissão. Recuperar crédito é uma
              terceira. Nenhuma das duas cabe no honorário mensal que você paga —
              e é justamente aí que está o dinheiro.
            </p>
            <div className="my-8 border border-gray-border bg-black-card p-6">
              <p className="font-semibold text-white">
                O detalhe que muda tudo a partir de 2027:
              </p>
              <p className="mt-3">
                No modelo novo, quem compra de você abate o imposto da nota que
                recebe. Empresa no regime regular passa crédito cheio. Empresa
                no Simples passa crédito limitado ao que efetivamente recolheu
                lá dentro.
              </p>
              <p className="mt-3">
                Traduzindo: se você vende para outras empresas, comprar de você
                pode ficar mais caro do que comprar do seu concorrente — pelo
                mesmo preço de tabela. Você não perde no imposto. Perde o
                cliente.
              </p>
            </div>
            <p>
              Para quem vende direto ao consumidor final, a conta muitas vezes
              continua fechando no Simples. Para quem vende para CNPJ, quase
              nunca alguém fez essa conta.
            </p>
            <p className="text-2xl font-heading tracking-wide text-gold uppercase">
              A pergunta não é &ldquo;sair ou ficar&rdquo;. É: alguém já calculou isso
              com os seus números?
            </p>
          </div>
        </Section>

        {/* LINHA DO TEMPO */}
        <Section id="prazo">
          <SectionTitle subtitle="A reforma não cai de uma vez. Ela chega em etapas — e cada etapa cobra uma decisão sua.">
            O relógio já está correndo
          </SectionTitle>
          <div className="space-y-5">
            {reformaTimeline.map((item) => (
              <div
                key={item.ano}
                className="border-l-2 border-gold bg-black-card/40 py-4 pl-6"
              >
                <p className="font-heading text-2xl tracking-wide text-gold">
                  {item.ano}
                </p>
                <p className="mt-1 font-semibold text-white">{item.titulo}</p>
                <p className="mt-1 leading-relaxed text-gray-text">{item.texto}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg leading-relaxed text-gray-text">
            Preço, cadastro de produto e regime tributário não se arrumam em
            dezembro. Empresa grande começou a se mexer em 2024, com time
            dedicado. Você tem 2026.
          </p>
        </Section>

        {/* AUTODIAGNÓSTICO */}
        <Section id="teste" dark>
          <SectionTitle subtitle="Marque o que se aplica à sua empresa. Leva 30 segundos e o resultado aparece aqui mesmo.">
            Você está no grupo que mais perde?
          </SectionTitle>
          <ReformaCheck />
        </Section>

        {/* SINTOMAS */}
        <Section id="sintomas">
          <SectionTitle>Se você se reconheceu em alguma dessas frases</SectionTitle>
          <ul className="space-y-4 text-lg leading-relaxed">
            {reformaSintomas.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1 text-gold">&#10003;</span>
                <span className="text-gray-text">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 border-l-2 border-gold pl-6 text-lg text-white">
            Nenhuma dessas coisas é culpa sua. Todas elas custam dinheiro todo
            mês.
          </p>
        </Section>

        {/* CRÉDITOS */}
        <Section id="creditos" dark>
          <SectionTitle subtitle="Antes de olhar pra frente, vale olhar pra trás. Tem imposto pago a mais que ainda dá pra reaver.">
            Você sabia que pode ter direito ao DIFAL de volta?
          </SectionTitle>
          <div className="space-y-5 text-lg leading-relaxed text-gray-text">
            <p>
              Toda vez que você comprou mercadoria de fornecedor de outro estado
              e pagou aquela guia de diferencial de alíquota, você pagou algo que
              o Supremo já decidiu que não podia ser cobrado assim de empresa do
              Simples.
            </p>
            <p>
              Isso não é tese de internet. É decisão do STF. E, em regra, o que
              foi pago nos últimos 5 anos pode ser levantado e pedido de volta.
            </p>
            <p className="font-semibold text-white">
              A maioria dos empresários nunca sequer somou quanto pagou.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {reformaCreditos.map((item) => (
              <div
                key={item.titulo}
                className="border border-gray-border bg-black-card p-6"
              >
                <p className="font-semibold text-white">{item.titulo}</p>
                <p className="mt-2 leading-relaxed text-gray-text">{item.texto}</p>
                <p className="mt-3 text-xs tracking-wide text-gold uppercase">
                  {item.base}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm leading-relaxed text-gray-muted">
            Sendo honesto com você: nada aqui é promessa de valor. Recuperação
            depende das suas notas, do seu estado e, em alguns casos, de medida
            específica com prazo próprio. O que a análise entrega é o número —
            quanto existe e se vale a pena ir atrás. Sem número, é chute dos dois
            lados.
          </p>
          <div className="mt-10">
            <CTAButton text="Quero saber quanto é o meu" href="#analise" />
          </div>
        </Section>

        {/* GRANDES PLAYERS */}
        <Section id="players">
          <SectionTitle>
            O que o grande player faz e a sua empresa não
          </SectionTitle>
          <div className="space-y-5 text-lg leading-relaxed text-gray-text">
            <p>
              A rede que abriu do lado da sua loja não é mais esperta que você.
              Ela só tem alguém cuidando disso em tempo integral: revisa cadastro
              fiscal, mede o imposto dentro de cada produto, negocia com
              fornecedor considerando crédito, revisa os últimos 5 anos e entra
              em 2027 com preço recalculado.
            </p>
            <p>
              Você faz isso entre atender cliente, cobrir funcionário que faltou
              e resolver pepino com fornecedor. E depois ouve que o problema é o
              mercado.
            </p>
            <p className="text-2xl font-heading tracking-wide text-gold uppercase">
              Não dá mais pra tocar empresa no improviso no Brasil.
            </p>
            <p>
              Não é sobre trabalhar mais. É sobre parar de deixar dinheiro na
              mesa por não ter quem olhe.
            </p>
          </div>
        </Section>

        {/* GESTÃO */}
        <Section id="gestao" dark>
          <SectionTitle subtitle="Crédito tributário não aparece em empresa desorganizada — ele simplesmente não consegue ser provado.">
            Imposto é consequência de gestão
          </SectionTitle>
          <div className="space-y-6">
            {[
              {
                title: "Cadastro sujo, crédito perdido",
                text: "NCM e CST errados no cadastro de produto fazem você pagar imposto que não devia e perder crédito que era seu. É o erro mais barato de corrigir e o mais caro de manter.",
              },
              {
                title: "Preço sem imposto dentro",
                text: "Se você não sabe quanto de tributo tem no seu preço de venda, você não está precificando: está torcendo. E em 2027 a conta muda de novo.",
              },
              {
                title: "Sem número, sem decisão",
                text: "Escolher regime tributário sem DRE e sem histórico de notas é apostar. Com os números na mão, a decisão leva 20 minutos.",
              },
              {
                title: "Split payment vem aí",
                text: "No modelo novo o imposto tende a ser separado na hora do pagamento. Empresa com cadastro e apuração bagunçados não vai perder só margem — vai travar caixa.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 border-l-2 border-gold pl-6">
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-gray-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* A ANÁLISE */}
        <Section id="como-funciona">
          <SectionTitle subtitle="Quatro passos. Nenhum deles passa pelo seu escritório de contabilidade.">
            Como funciona a análise reservada
          </SectionTitle>
          <div className="space-y-5">
            {reformaEtapas.map((etapa, i) => (
              <div
                key={etapa.titulo}
                className="flex gap-5 border border-gray-border bg-black-card p-6"
              >
                <p className="font-heading text-3xl leading-none text-gold">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div>
                  <p className="font-semibold text-white">{etapa.titulo}</p>
                  <p className="mt-1 leading-relaxed text-gray-text">
                    {etapa.texto}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border border-gold/40 bg-gold/5 p-6">
            <p className="font-heading text-2xl tracking-wide text-gold uppercase">
              Sobre o sigilo
            </p>
            <p className="mt-3 leading-relaxed text-gray-text">
              Eu não ligo para o seu contador, não peço nada a ele e não mando
              relatório para ninguém além de você. Os arquivos que uso são seus e
              você mesmo consegue baixar. Se a análise mostrar que ele estava
              certo o tempo todo, você vai saber com número na mão — e ele
              continua sendo o seu contador. Isso não é uma briga contra
              contabilidade. É você deixando de decidir no escuro.
            </p>
          </div>
        </Section>

        {/* PARA QUEM É */}
        <Section id="para-quem" dark>
          <SectionTitle>Para quem é — e para quem não é</SectionTitle>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-gray-border bg-black-card p-6">
              <p className="font-heading text-2xl tracking-wide text-gold uppercase">
                É pra você se
              </p>
              <ul className="mt-4 space-y-3 text-gray-text">
                {[
                  "Sua empresa fatura a partir de R$ 30 mil por mês.",
                  "Você vende para outras empresas ou compra de outro estado.",
                  "Comércio, indústria ou serviço com equipe e movimento real.",
                  "Você quer decidir com número, não com opinião.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 text-gold">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-gray-border bg-black-card p-6">
              <p className="font-heading text-2xl tracking-wide text-gray-muted uppercase">
                Não é pra você se
              </p>
              <ul className="mt-4 space-y-3 text-gray-text">
                {[
                  "Você é MEI ou a empresa está parada, sem faturamento.",
                  "Você está procurando um jeito de não pagar imposto. Aqui é tudo dentro da lei.",
                  "Você quer um número mágico hoje, sem mandar um arquivo sequer.",
                  "Você não pretende mudar nada, aconteça o que acontecer.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 text-gray-muted">&#10007;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* QUEM CONDUZ */}
        <Section id="quem">
          <div className="mb-10 flex flex-col items-center gap-8 md:flex-row md:items-start">
            <Image
              src="/images/luiz-perfil.png"
              alt="Luiz Curti"
              width={200}
              height={200}
              className="h-40 w-40 shrink-0 rounded-full object-cover"
            />
            <div>
              <SectionTitle>Quem conduz a análise</SectionTitle>
            </div>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-gray-text">
            <p>
              Meu nome é <span className="text-white">Luiz Curti</span>. Sou
              Consultor de Resultados Empresariais.
            </p>
            <p>
              O meu trabalho não é substituir o seu contador — é fazer a pergunta
              que ninguém está sendo pago pra fazer: essa empresa está pagando o
              que devia, no regime que devia, com o preço certo?
            </p>
            <p>
              Quando o assunto exige medida jurídica ou parecer técnico
              específico, a análise é feita com profissionais habilitados. Você
              não recebe achismo: recebe levantamento, simulação e uma
              recomendação clara do que fazer primeiro.
            </p>
          </div>
          <div className="my-8 flex items-center gap-6 border border-gray-border bg-black-card p-5">
            <p className="font-heading text-4xl text-gold">31.000+</p>
            <p className="text-gray-text">
              empresários já passaram pelo método de gestão que eu aplico em
              todo o Brasil.
            </p>
          </div>
        </Section>

        {/* FORMULÁRIO */}
        <Section id="analise" dark>
          <div className="text-center">
            <h2 className="font-heading text-4xl tracking-wide text-gold uppercase md:text-5xl">
              Peça a sua análise reservada
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-text">
              Preenche aqui e eu te chamo no WhatsApp com a lista do que preciso.
              Cada análise leva tempo de gente, então o número por mês é
              limitado. Quando fecha, entra na fila do mês seguinte.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-md">
            <LeadForm variant="reforma" />
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq">
          <SectionTitle>Perguntas frequentes</SectionTitle>
          <FAQ items={reformaFAQ} />
          <div className="mt-10 text-center">
            <CTAButton text="Quero minha análise reservada" href="#analise" />
          </div>
        </Section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
