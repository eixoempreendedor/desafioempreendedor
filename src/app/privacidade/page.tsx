import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de privacidade do Desafio Empreendedor — como coletamos, usamos e protegemos seus dados.",
};

export default function PrivacidadePage() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="font-heading text-4xl tracking-wide text-white uppercase md:text-5xl">
          Política de <span className="text-gold">Privacidade</span>
        </h1>
        <p className="mt-2 text-sm text-gray-muted">
          Última atualização: 11 de julho de 2026
        </p>

        <div className="mt-10 space-y-8 leading-relaxed text-gray-text">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              1. Quem somos
            </h2>
            <p>
              Esta política se aplica aos sites, páginas de eventos e
              formulários do <span className="text-white">Desafio
              Empreendedor</span>, programa conduzido pelo consultor Luiz
              Curti, incluindo formulários de inscrição em workshops e
              cadastros veiculados em redes sociais (como Facebook e
              Instagram).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              2. Quais dados coletamos
            </h2>
            <p>
              Ao preencher nossos formulários, você pode nos informar:
              nome, telefone/WhatsApp, e-mail, nome da sua empresa e
              informações básicas sobre o seu negócio (como quantidade de
              pessoas na equipe). Não coletamos dados sensíveis.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              3. Para que usamos seus dados
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Confirmar sua inscrição em eventos e workshops;</li>
              <li>
                Entrar em contato por WhatsApp, telefone ou e-mail com
                informações sobre o evento em que você se inscreveu;
              </li>
              <li>
                Apresentar nossos programas e serviços de consultoria
                empresarial, quando houver interesse;
              </li>
              <li>Melhorar nossos conteúdos e eventos.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              4. Compartilhamento
            </h2>
            <p>
              Seus dados não são vendidos nem compartilhados com terceiros
              para fins de marketing. Eles são acessados apenas pela nossa
              equipe e por ferramentas que usamos para operar o atendimento
              (como plataformas de mensagens e de gestão de contatos), sempre
              limitadas a essa finalidade.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              5. Seus direitos (LGPD)
            </h2>
            <p>
              Nos termos da Lei Geral de Proteção de Dados (Lei
              13.709/2018), você pode solicitar a qualquer momento a
              confirmação, correção, atualização ou exclusão dos seus dados,
              bem como deixar de receber nossas mensagens. Basta pedir por
              qualquer canal de contato abaixo.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              6. Contato
            </h2>
            <p>
              WhatsApp: (61) 98172-6782 · E-mail:{" "}
              <a
                href="mailto:contato@luizcurti.com.br"
                className="text-gold underline"
              >
                contato@luizcurti.com.br
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
