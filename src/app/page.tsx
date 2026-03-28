import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import CTAButton from "@/components/CTAButton";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { homeFAQ, beforeAfter } from "@/data/home";

const WA_DESAFIO =
  "https://wa.me/5561981726782?text=Quero%20saber%20mais%20sobre%20o%20Desafio%20Empreendedor";

export const metadata: Metadata = {
  title: "Desafio Empreendedor — 7 meses de trabalho real no seu negócio",
  description:
    "Programa presencial de 7 meses para donos de PME em Alexânia e região. Consultoria individual, encontros mensais, avaliação comportamental. Turma limitada a 10 empresas.",
  openGraph: {
    title: "Desafio Empreendedor — Alexânia",
    description:
      "7 meses de trabalho real. Presencial. Para donos de PME. Turma de 10.",
    images: ["/og-home.jpg"],
  },
};

export default function HomePage() {
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
            <CTAButton text="WhatsApp" href={WA_DESAFIO} className="!px-5 !py-2 !text-sm" />
          </div>
        </header>

        {/* HERO */}
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/images/luiz-corredor.jpg"
              alt=""
              fill
              className="object-cover object-top opacity-15"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black-deep/60 via-black-deep/80 to-black-deep" />
          </div>
          <div className="relative z-10">
            <h1 className="font-heading text-5xl leading-tight tracking-wide text-white uppercase md:text-7xl">
              Seu negócio não precisa
              <br />
              de mais esforço.
              <br />
              <span className="text-gold">Precisa de trabalho de verdade.</span>
            </h1>
          </div>
          <p className="relative z-10 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-text md:text-xl">
            O Desafio Empreendedor é um programa presencial de 7 meses para
            donos de PME em Alexânia e região que estão cansados de girar em
            círculo — e prontos para mudar de dentro pra fora.
          </p>
          <div className="relative z-10">
            <CTAButton
              text="Quero conversar no WhatsApp"
              href={WA_DESAFIO}
              className="mt-8"
            />
            <p className="mt-3 text-sm text-gray-muted">
              Conversa de 15 minutos. Sem compromisso. Sem enrolação.
            </p>
          </div>
        </section>

        {/* PROBLEMA */}
        <Section id="problema" dark>
          <SectionTitle>A dor que ninguém fala em voz alta</SectionTitle>
          <div className="space-y-5 text-lg leading-relaxed text-gray-text">
            <p>
              Você abre às seis. Fecha às dez da noite. Sábado tá lá. Domingo,
              quando precisa, tá lá também. Faz de tudo um pouco: vende, cobra,
              resolve pepino com fornecedor, cobre funcionário, paga conta
              atrasada, apaga incêndio. Todo dia.
            </p>
            <p>
              E o negócio continua do mesmo tamanho de três anos atrás.
            </p>
            <p>
              Não é falta de trabalho. Você trabalha demais. O problema é o{" "}
              <span className="text-white font-semibold">tipo</span> de
              trabalho. Você está tão ocupado operando que não sobra espaço pra
              pensar, planejar e decidir como dono.
            </p>
            <div className="my-8 border border-gray-border bg-black-card p-6">
              <p className="font-semibold text-white">
                Faz o teste mental.
              </p>
              <p className="mt-2">
                Imagina que você some por 15 dias. Sem celular, sem WhatsApp, sem
                &ldquo;só uma olhadinha&rdquo;. O que acontece com seu negócio?
              </p>
              <p className="mt-2">
                Se a resposta te dá frio na barriga, você não tem uma empresa.
                Tem um emprego que você mesmo criou — e dos piores: sem férias,
                sem 13º, sem hora pra parar.
              </p>
            </div>
            <p>
              A verdade que ninguém quer ouvir: o problema da sua empresa não é o
              mercado, não é o cliente, não é o funcionário.
            </p>
            <p className="text-3xl font-heading tracking-wide text-gold uppercase">
              É o dono.
            </p>
            <p>
              Isso não é defeito. É padrão. E padrão se quebra — com método, com
              processo e com{" "}
              <span className="text-white font-semibold">
                trabalho de verdade
              </span>
              .
            </p>
          </div>
        </Section>

        {/* QUEM SOU EU */}
        <Section id="quem">
          <div className="flex flex-col gap-10 md:flex-row md:gap-12">
            <div className="shrink-0">
              <Image
                src="/images/luiz-mesa.jpg"
                alt="Luiz Curti — Consultor empresarial"
                width={400}
                height={500}
                className="w-full max-w-[300px] border-2 border-gray-border object-cover md:w-[280px]"
              />
            </div>
            <div>
              <SectionTitle>Luiz Curti</SectionTitle>
              <div className="space-y-4 text-lg leading-relaxed text-gray-text">
                <p>
                  Sou consultor empresarial e trabalho diretamente com donos de PME.
                </p>
                <p>
                  Eu sei como é estar no lugar que você está. Já vivi o ciclo de
                  trabalhar 14 horas por dia e não ver resultado proporcional. Já
                  tive medo de olhar os números. Já confundi esforço com progresso.
                  E aprendi, da forma mais cara possível, que o gargalo de uma
                  empresa pequena quase sempre é o comportamento do dono.
                </p>
                <p>
                  Não sou palestrante. Não vendo motivação. Minha metodologia é
                  baseada em{" "}
                  <span className="text-white font-semibold">trabalho</span>:
                  diagnóstico comportamental, consultoria presencial dentro da
                  empresa, encontros mensais com conteúdo aplicado e
                  acompanhamento individual.
                </p>
                <p>
                  O método por trás do Desafio Empreendedor já formou mais de{" "}
                  <span className="text-gold font-semibold">31 mil empresários</span>{" "}
                  em todo o Brasil. Agora, pela primeira vez, esse processo chega
                  a Alexânia — com turma presencial e atenção individual.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* ALEXÂNIA — DIVISOR VISUAL */}
        <section className="relative h-64 overflow-hidden md:h-80">
          <Image
            src="/images/alexania.jpg"
            alt="Vista aérea de Alexânia, GO"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black-deep/70" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <p className="font-heading text-4xl tracking-wide text-gold uppercase md:text-5xl">
              Alexânia, GO
            </p>
            <p className="mt-2 text-gray-text">
              Primeira turma do Desafio Empreendedor na região
            </p>
          </div>
        </section>

        {/* NÚMEROS / SOCIAL PROOF */}
        <section className="border-y border-gray-border bg-black-soft px-6 py-12">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              { number: "31.000+", label: "Empresários formados no Brasil" },
              { number: "7", label: "Meses de acompanhamento" },
              { number: "10", label: "Empresas por turma" },
              { number: "1ª", label: "Turma em Alexânia" },
            ].map((item, i) => (
              <div key={i}>
                <p className="font-heading text-4xl tracking-wide text-gold md:text-5xl">
                  {item.number}
                </p>
                <p className="mt-2 text-sm text-gray-text">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* O QUE É */}
        <Section id="programa" dark>
          <SectionTitle subtitle="Não é curso. Não é palestra. Não é evento de fim de semana. É trabalho.">
            O que é o Desafio Empreendedor
          </SectionTitle>
          <p className="mb-10 text-lg text-gray-text leading-relaxed">
            Programa presencial de 7 meses para donos de empresa que querem
            parar de apagar incêndio e começar a construir um negócio que
            funciona de verdade.
          </p>

          <p className="mb-6 font-heading text-2xl tracking-wide text-gold uppercase">
            Como o programa funciona
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Diagnóstico",
                text: "Avaliação comportamental empresarial completa, mapeamento financeiro e análise da operação. Antes de mudar qualquer coisa, você precisa enxergar onde está.",
              },
              {
                title: "Encontros mensais",
                text: "Encontros presenciais com conteúdo aplicado, dinâmicas vivenciais e troca real entre empresários da região. Não é aula — é trabalho.",
              },
              {
                title: "Consultoria na empresa",
                text: "Um consultor vai até o seu negócio. Olha seus números, sua operação, sua equipe. E te ajuda a implantar o que você aprendeu nos encontros.",
              },
              {
                title: "Acompanhamento",
                text: "Durante 7 meses, você é cobrado, orientado e desafiado a agir diferente. Não é sobre saber mais — é sobre fazer diferente.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-gray-border bg-black-card p-6"
              >
                <p className="font-heading text-xl tracking-wide text-gold uppercase">
                  {item.title}
                </p>
                <p className="mt-3 text-gray-text leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-3">
            <p className="mb-4 font-semibold text-white">O que está incluído:</p>
            {[
              "Encontros mensais presenciais — conteúdo aplicado, dinâmicas vivenciais, troca entre empresários",
              "Consultoria individual na sua empresa — um consultor vai até o seu negócio",
              "Avaliação comportamental empresarial — antes e depois, evolução medida com dados reais",
              "Leituras aplicadas — livros escolhidos com propósito",
              "Dinâmicas vivenciais — exercícios que mexem com o jeito que você age",
              "Duração: 7 meses — porque mudança real não acontece num fim de semana",
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <span className="mt-1 text-gold">&#10003;</span>
                <p className="text-gray-text">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* PARA QUEM É */}
        <Section id="para-quem">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <SectionTitle>É pra você se:</SectionTitle>
              <ul className="space-y-3">
                {[
                  "Você é dono de empresa em Alexânia ou região",
                  "Trabalha mais do que deveria e o negócio não cresce",
                  "Se você sai, tudo para — e isso te preocupa",
                  "Fatura, mas não sabe quanto sobra no final do mês",
                  "Já tentou curso, palestra, coach — nada mudou",
                  "Está cansado de apagar incêndio",
                  "Entende que o primeiro a mudar tem que ser você",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-text">
                    <span className="text-gold">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionTitle>Não é pra você se:</SectionTitle>
              <ul className="space-y-3">
                {[
                  "Busca fórmula mágica ou resultado sem esforço",
                  "Quer alguém que faça o trabalho por você",
                  "Não está disposto a olhar pra si mesmo com honestidade",
                  "Acha que o problema é sempre o mercado ou o governo",
                  "Quer mais uma certificação pra parede",
                  "Não tem disponibilidade pra 7 meses de processo",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-text">
                    <span className="text-red-400">&#10007;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-10 text-center text-lg text-white">
            O Desafio Empreendedor é para quem está disposto a{" "}
            <span className="text-gold font-semibold">trabalhar</span> — de
            verdade.
          </p>
        </Section>

        {/* ANTES E DEPOIS */}
        <Section id="resultado" dark>
          <SectionTitle subtitle="Não tem promessa de 'fature 10x'. Tem mudança real que você mede.">
            O que muda em 7 meses
          </SectionTitle>
          <div className="space-y-3">
            {beforeAfter.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-1 gap-0 border border-gray-border sm:grid-cols-2"
              >
                <div className="border-b border-gray-border bg-black-card px-5 py-4 sm:border-b-0 sm:border-r">
                  <p className="text-sm text-gray-muted">Antes</p>
                  <p className="mt-1 text-gray-text">{item.before}</p>
                </div>
                <div className="bg-black-soft px-5 py-4">
                  <p className="text-sm text-gold">Depois</p>
                  <p className="mt-1 text-white">{item.after}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* COMO FUNCIONA — 3 PASSOS */}
        <Section id="passos">
          <SectionTitle subtitle="Sem burocracia. Sem formulário de 40 perguntas.">
            Como funciona
          </SectionTitle>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Conversa no WhatsApp",
                text: "Você me chama no WhatsApp e a gente conversa. Quero entender seu negócio, sua situação e seus desafios. Sem script, sem pressão.",
              },
              {
                step: "2",
                title: "Entrevista presencial",
                text: "Eu vou até a sua empresa. Conheço o negócio, conheço o empresário. Nosso trabalho é olho no olho — e começa antes mesmo da turma.",
              },
              {
                step: "3",
                title: "Entra pra Turma",
                text: "Se fizer sentido pra você e pra mim, entra na primeira turma. São 7 meses de trabalho real, presencial, com acompanhamento na sua empresa.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="border border-gray-border bg-black-soft p-6"
              >
                <span className="font-heading text-5xl text-gold">
                  {item.step}
                </span>
                <p className="mt-3 font-heading text-xl tracking-wide text-white uppercase">
                  {item.title}
                </p>
                <p className="mt-3 text-gray-text leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton text="Quero dar o primeiro passo" href={WA_DESAFIO} />
          </div>
        </Section>

        {/* DIFERENCIAIS */}
        <Section id="diferenciais" dark>
          <SectionTitle>
            Por que isso é diferente de tudo que você já viu
          </SectionTitle>
          <div className="space-y-8">
            {[
              {
                title: "Presencial, não online.",
                text: "Não é aula gravada. Não é live no Instagram. É gente de verdade, numa sala de verdade, olho no olho. Porque mudança de comportamento não acontece através de uma tela.",
              },
              {
                title: "Consultor na SUA empresa.",
                text: "Não é você que vai até o consultor. O consultor vai até você. Entra na sua operação, olha seus números, conversa com sua equipe. Trabalho real, onde o problema está.",
              },
              {
                title: "Turma de 10, não de 200.",
                text: "Você não vai ser mais um número numa plateia. Vai estar com outros empresários da região, enfrentando desafios parecidos. Atenção individual de verdade.",
              },
              {
                title: "Avaliação comportamental antes e depois.",
                text: "Mapeamos seu perfil no início e no final. Você vê com dados onde mudou, onde avançou e o que ainda precisa ajustar.",
              },
              {
                title: "7 meses, não fim de semana.",
                text: "Não existe atalho para mudança real. O Desafio dura 7 meses porque é o tempo que um processo sério precisa pra mudar o jeito que você pensa, decide e age.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 border-l-2 border-gold pl-6">
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-gray-text leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq">
          <SectionTitle>Perguntas frequentes</SectionTitle>
          <FAQ items={homeFAQ} />
        </Section>

        {/* CTA FINAL */}
        <Section dark>
          <div className="text-center">
            <p className="text-sm font-medium tracking-widest text-gold uppercase">
              Primeira turma em Alexânia
            </p>
            <h2 className="mt-4 font-heading text-4xl tracking-wide text-white uppercase md:text-5xl">
              10 vagas. Quando fecha, fecha.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-text">
              Se você leu até aqui, alguma coisa te trouxe. Talvez o cansaço.
              Talvez a honestidade de reconhecer que algo precisa mudar. O
              primeiro passo é uma conversa de 15 minutos no WhatsApp.
            </p>
            <CTAButton
              text="Chamar no WhatsApp agora"
              href={WA_DESAFIO}
              className="mt-8"
            />
            <p className="mt-4 text-sm text-gray-muted">
              Não é mais esforço que vai mudar seu negócio.{" "}
              <span className="text-gold">É trabalho de verdade.</span>
            </p>
          </div>
        </Section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
