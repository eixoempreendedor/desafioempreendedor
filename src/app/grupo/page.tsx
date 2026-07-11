import type { Metadata } from "next";
import Image from "next/image";
import { WORKSHOP_WHATSAPP_GROUP } from "@/data/workshop";

export const metadata: Metadata = {
  title: "Grupo do Evento — Workshop Gestão & Networking",
  description:
    "Entre no grupo oficial do Workshop Gestão & Networking — Formosa, GO. 20/07, 19h, Agro Bar.",
  robots: { index: false },
};

export default function GrupoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Image
        src="/images/logo-full.png"
        alt="Desafio Empreendedor"
        width={200}
        height={44}
        className="h-10 w-auto"
      />
      <p className="mt-10 text-sm font-medium tracking-widest text-gold uppercase">
        Workshop Gestão &amp; Networking — Formosa
      </p>
      <h1 className="mt-3 font-heading text-4xl tracking-wide text-white uppercase md:text-5xl">
        Você está a um toque
        <br />
        do <span className="text-gold">grupo oficial</span>
      </h1>
      <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-gray-text">
        É por lá que saem todas as informações do evento — 20/07 (segunda),
        às 19h, no Agro Bar.
      </p>
      <a
        href={WORKSHOP_WHATSAPP_GROUP}
        className="mt-8 inline-block bg-gold px-10 py-4 font-heading text-2xl tracking-wider text-black-deep uppercase transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
      >
        Entrar no grupo do WhatsApp
      </a>
      <p className="mt-4 text-sm text-gray-muted">
        Gratuito · Vagas limitadas
      </p>
    </main>
  );
}
