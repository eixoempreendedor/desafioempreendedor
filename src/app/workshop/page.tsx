import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import CTAButton from "@/components/CTAButton";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WorkshopForm from "@/components/WorkshopForm";
import { workshopFAQ } from "@/data/workshop";

const WA_WORKSHOP =
  "https://wa.me/5561981726782?text=Quero%20garantir%20minha%20vaga%20no%20workshop%20gratuito";

export const metadata: Metadata = {
  title: "Workshop Gratuito — Empresário Rico x Empresário Pobre",
  description:
    "Workshop gratuito e presencial para donos de empresa em Alexânia. 25 de abril de 2026. Descubra o que trava o crescimento do seu negócio.",
  openGraph: {
    title: "Workshop Gratuito — Empresário Rico x Empresário Pobre",
    description:
      "25 de abril em Alexânia. Gratuito e presencial para donos de PME.",
    images: ["/og-workshop.jpg"],
  },
};

export default function WorkshopPage() {
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
            <CTAButton text="Garantir vaga" href="#inscricao" className="!px-5 !py-2 !text-sm" />
          </div>
        </header>

        {/* HERO */}
        <section className="flex min-h-[90vh] flex-col items-center justify-center px-6 pt-16 text-center">
          <p className="mb-4 text-sm font-medium tracking-widest text-gold uppercase">
            Workshop Gratuito e Presencial
          </p>
          <h1 className="font-heading text-5xl leading-tight tracking-wide text-white uppercase md:text-7xl">
            Empresário Rico
            <br />
            <span className="text-gold">x</span> Empresário Pobre
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-text md:text-xl">
            Não é dinheiro. Não é sorte. Não é o mercado.
            <br />
            É comportamento. É decisão. É o que você faz com as 14 horas que
            passa dentro do seu negócio todo dia.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 text-sm text-gray-text">
            <span className="font-semibold text-white">25 de abril</span>
            <span className="text-gray-border">|</span>
            <span>Alexânia, GO</span>
            <span className="text-gray-border">|</span>
            <span className="text-gold">Gratuito</span>
          </div>

          {/* FORMULÁRIO DE INSCRIÇÃO */}
          <div id="inscricao" className="mx-auto mt-8 w-full max-w-md">
            <WorkshopForm />
          </div>

          {/* VSL - Substituir pelo vídeo quando gravar */}
          {/*
          <div className="mx-auto mt-12 w-full max-w-2xl overflow-hidden border border-gray-border">
            <div className="relative aspect-video bg-black-soft">
              <iframe
                src="YOUR_VIDEO_URL"
                className="absolute inset-0 h-full w-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
          */}
        </section>

        {/* O QUE VOCÊ VAI DESCOBRIR */}
        <Section id="descobrir" dark>
          <SectionTitle subtitle="Não é palestra motivacional. Não é frase de efeito. É diagnóstico.">
            Em 2 horas, você vai sair sabendo o que trava o seu negócio
          </SectionTitle>
          <div className="space-y-6">
            {[
              {
                title: "O padrão que separa quem cresce de quem fica parado",
                text: "E como identificar em qual grupo você está hoje.",
              },
              {
                title: "Por que você trabalha cada vez mais e o negócio não responde",
                text: "O erro silencioso que 8 em cada 10 donos de PME cometem sem perceber.",
              },
              {
                title: "O que mudar primeiro",
                text: "Quando tudo parece urgente, existe uma ordem certa. Você vai sair com ela.",
              },
              {
                title: "O custo real de continuar no piloto automático",
                text: "Em dinheiro, em tempo e em saúde.",
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
          <p className="mt-10 text-lg text-gray-text">
            Você vai olhar pro seu negócio com clareza — talvez pela primeira
            vez em anos.
          </p>
        </Section>

        {/* PARA QUEM É */}
        <Section id="para-quem">
          <SectionTitle>Esse workshop é pra você se:</SectionTitle>
          <ul className="space-y-4 text-lg leading-relaxed">
            {[
              "Você é dono de empresa em Alexânia, Abadiânia, Olhos d'Água ou região.",
              "Você sente que trabalha demais e o negócio não anda. Fatura, mas não sobra.",
              "Você quer clareza sobre o que mudar primeiro — sem precisar de um MBA ou de um guru.",
              "Já tentou várias coisas e nada colou de verdade.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1 text-gold">&#10003;</span>
                <span className="text-gray-text">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 border-l-2 border-gold pl-6 text-lg text-white">
            Se você é funcionário do próprio negócio — trabalha mais que qualquer
            empregado, não tira férias, é o último a sair — esse workshop é pra
            você.
          </p>
          <div className="mt-10">
            <CTAButton text="Quero participar" href="#inscricao" />
          </div>
        </Section>

        {/* QUEM É LUIZ CURTI */}
        <Section id="quem" dark>
          <div className="mb-10 flex flex-col items-center gap-8 md:flex-row md:items-start">
            <Image
              src="/images/luiz-perfil.png"
              alt="Luiz Curti"
              width={200}
              height={200}
              className="h-40 w-40 shrink-0 rounded-full object-cover"
            />
            <div>
              <SectionTitle>Quem conduz o workshop</SectionTitle>
            </div>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-gray-text">
            <p>
              Meu nome é <span className="text-white">Luiz Curti</span>. Sou
              consultor de negócios para pequenas e médias empresas.
            </p>
            <p>
              Nos últimos anos, trabalhei de perto com empresários que tinham o
              mesmo perfil: gente séria, que trabalha duro, que construiu algo
              real — mas que chegou num ponto onde o esforço parou de dar
              resultado. O negócio não quebra, mas também não cresce.
            </p>
            <p>
              Eu ajudo esses empresários a enxergar o que está travado, organizar
              o que está bagunçado e montar um plano que funciona na prática.
            </p>
          </div>
          <div className="my-8 flex items-center gap-6 border border-gray-border bg-black-card p-5">
            <p className="font-heading text-4xl text-gold">31.000+</p>
            <p className="text-gray-text">
              empresários já passaram por esse método em todo o Brasil.
              Agora ele chega a Alexânia.
            </p>
          </div>
          <div className="mt-8 border-t border-gray-border pt-8">
            <p className="text-lg font-semibold text-gold">
              Por que Alexânia?
            </p>
            <p className="mt-3 text-gray-text leading-relaxed">
              Trouxe esse trabalho pra Alexânia porque acredito que consultor bom
              não fica só em capital. As empresas daqui sustentam famílias, geram
              emprego e movem a economia da região. Elas merecem acesso ao mesmo
              nível de trabalho que uma empresa em Brasília ou Goiânia tem.
            </p>
          </div>
        </Section>

        {/* ALEXÂNIA — DIVISOR VISUAL */}
        <section className="relative h-52 overflow-hidden md:h-64">
          <Image
            src="/images/alexania.jpg"
            alt="Vista aérea de Alexânia, GO"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black-deep/70" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <p className="font-heading text-3xl tracking-wide text-gold uppercase md:text-4xl">
              25 de abril — Alexânia, GO
            </p>
            <p className="mt-2 text-gray-text">
              Workshop gratuito e presencial
            </p>
          </div>
        </section>

        {/* DETALHES DO EVENTO */}
        <Section id="detalhes">
          <SectionTitle>Informações do workshop</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Data", value: "25 de abril de 2026 (sexta-feira)" },
              { label: "Horário", value: "A confirmar" },
              { label: "Local", value: "Alexânia, GO" },
              { label: "Duração", value: "Aproximadamente 2 horas" },
              { label: "Investimento", value: "Gratuito" },
              { label: "Vagas", value: "Limitadas" },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-gray-border bg-black-card px-5 py-4"
              >
                <p className="text-sm text-gray-muted">{item.label}</p>
                <p className="mt-1 font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <CTAButton text="Reservar minha vaga" href="#inscricao" />
          </div>
        </Section>

        {/* POR QUE GRATUITO */}
        <Section id="gratuito" dark>
          <SectionTitle>&ldquo;Se é bom, por que é de graça?&rdquo;</SectionTitle>
          <div className="space-y-4 text-lg leading-relaxed text-gray-text">
            <p>Pergunta justa. Vou ser honesto.</p>
            <p>
              Esse workshop é a porta de entrada para o meu trabalho em Alexânia.
              Eu estou lançando o Desafio Empreendedor — um programa presencial de
              7 meses para donos de empresa que querem resultados reais.
            </p>
            <p>
              Mas antes de pedir qualquer investimento, eu quero que você me
              conheça. Quero que sente na cadeira, escute o que eu tenho pra dizer
              e decida por conta própria se faz sentido.
            </p>
            <p>
              Não tem pegadinha. Não vai ter venda forçada no dia. O workshop
              entrega valor de verdade. Se no final você quiser saber mais sobre o
              Desafio, a gente conversa. Se não quiser, você sai com clareza sobre
              o seu negócio e pronto. Já valeu.
            </p>
            <p className="font-semibold text-white">
              Quero que você conheça o trabalho antes de investir. Simples assim.
            </p>
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq">
          <SectionTitle>Perguntas frequentes</SectionTitle>
          <FAQ items={workshopFAQ} />
        </Section>

        {/* CTA FINAL COM FORMULÁRIO */}
        <Section dark>
          <div className="text-center">
            <h2 className="font-heading text-4xl tracking-wide text-gold uppercase md:text-5xl">
              Uma conversa de 2 horas pode mudar a direção do seu negócio.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-text">
              Você não precisa de mais esforço. Precisa de clareza. As vagas são
              limitadas porque o evento é presencial. Quando acabar, acabou.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-md">
            <WorkshopForm />
          </div>
        </Section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
