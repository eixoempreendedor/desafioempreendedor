"use client";

import { useState } from "react";
import { WORKSHOP_WHATSAPP_GROUP } from "@/data/workshop";

const WA_RICARDO = "https://wa.me/556199319238";
const WA_LUIZ = "https://wa.me/5561981726782";

type FormVariant = "workshop" | "desafio" | "reforma";

const MESSAGES: Record<
  FormVariant,
  { wa: string; success: string; button: string; destino: string; contato: string }
> = {
  workshop: {
    wa: "Olá! Meu nome é {nome}, sou da empresa {empresa}. Quero confirmar minha vaga no workshop Gestão & Networking do dia 20/07 em Formosa. Fiz minha inscrição pelo site.",
    success: "Vaga reservada!",
    button: "Garantir minha vaga",
    destino: WA_RICARDO,
    contato: "Ricardo, nosso coordenador",
  },
  desafio: {
    wa: "Olá! Meu nome é {nome}, sou da empresa {empresa}. Quero saber mais sobre o Desafio Empreendedor em Alexânia. Fiz meu cadastro pelo site.",
    success: "Cadastro recebido!",
    button: "Quero conversar",
    destino: WA_RICARDO,
    contato: "Ricardo, nosso coordenador",
  },
  reforma: {
    wa: "Olá, Luiz! Meu nome é {nome}, sou da empresa {empresa} ({regime}, faturamento {faturamento}). Quero a análise tributária reservada da minha empresa. Fiz meu cadastro pelo site.",
    success: "Solicitação recebida!",
    button: "Quero minha análise reservada",
    destino: WA_LUIZ,
    contato: "Luiz Curti",
  },
};

const REGIMES = [
  "Simples Nacional",
  "Lucro Presumido",
  "Lucro Real",
  "MEI",
  "Não sei dizer",
];

const FATURAMENTOS = [
  "Até R$ 30 mil por mês",
  "De R$ 30 mil a R$ 100 mil por mês",
  "De R$ 100 mil a R$ 400 mil por mês",
  "Acima de R$ 400 mil por mês",
];

export default function LeadForm({ variant = "desafio" }: { variant?: FormVariant }) {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    empresa: "",
    regime: "",
    faturamento: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const msg = MESSAGES[variant];
  const isReforma = variant === "reforma";

  function formatPhone(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  function buildWaUrl() {
    const text = msg.wa
      .replace("{nome}", form.nome)
      .replace("{empresa}", form.empresa)
      .replace("{regime}", form.regime)
      .replace("{faturamento}", form.faturamento);
    return `${msg.destino}?text=${encodeURIComponent(text)}`;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/workshop-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, origem: variant }),
      });

      if (!res.ok) throw new Error("Erro ao enviar");
      setStatus("success");

      setTimeout(() => {
        window.open(buildWaUrl(), "_blank");
      }, 2000);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-gold bg-gold/10 p-8 text-center">
        <p className="font-heading text-2xl tracking-wide text-gold uppercase">
          {msg.success}
        </p>
        <p className="mt-3 text-gray-text">
          {form.nome}, você será redirecionado para o WhatsApp do {msg.contato}.
        </p>
        {isReforma && (
          <p className="mt-3 text-sm text-gray-text">
            No WhatsApp eu te mando a lista do que preciso: XML das notas dos
            últimos 12 meses, as últimas guias e o cartão CNPJ. Nada disso passa
            pelo seu contador.
          </p>
        )}
        {variant === "workshop" && WORKSHOP_WHATSAPP_GROUP && (
          <a
            href={WORKSHOP_WHATSAPP_GROUP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block bg-gold px-6 py-3 font-heading text-lg tracking-wider text-black-deep uppercase transition-all hover:bg-gold-light"
          >
            Entrar no grupo do evento
          </a>
        )}
        <p className="mt-2 text-sm text-gray-muted">
          Se não abrir automaticamente,{" "}
          <a
            href={buildWaUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            clique aqui
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor={`nome-${variant}`} className="mb-1 block text-sm text-gray-text">
          Seu nome completo
        </label>
        <input
          id={`nome-${variant}`}
          type="text"
          required
          placeholder="Ex: João Silva"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
          className="w-full border border-gray-border bg-black-card px-4 py-3 text-white placeholder:text-gray-muted focus:border-gold focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor={`tel-${variant}`} className="mb-1 block text-sm text-gray-text">
          WhatsApp / Telefone
        </label>
        <input
          id={`tel-${variant}`}
          type="tel"
          required
          placeholder="(61) 99999-9999"
          value={form.telefone}
          onChange={(e) =>
            setForm({ ...form, telefone: formatPhone(e.target.value) })
          }
          className="w-full border border-gray-border bg-black-card px-4 py-3 text-white placeholder:text-gray-muted focus:border-gold focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor={`emp-${variant}`} className="mb-1 block text-sm text-gray-text">
          Nome da sua empresa
        </label>
        <input
          id={`emp-${variant}`}
          type="text"
          required
          placeholder="Ex: Padaria do João"
          value={form.empresa}
          onChange={(e) => setForm({ ...form, empresa: e.target.value })}
          className="w-full border border-gray-border bg-black-card px-4 py-3 text-white placeholder:text-gray-muted focus:border-gold focus:outline-none"
        />
      </div>

      {isReforma && (
        <>
          <div>
            <label htmlFor={`regime-${variant}`} className="mb-1 block text-sm text-gray-text">
              Regime tributário hoje
            </label>
            <select
              id={`regime-${variant}`}
              required
              value={form.regime}
              onChange={(e) => setForm({ ...form, regime: e.target.value })}
              className="w-full border border-gray-border bg-black-card px-4 py-3 text-white focus:border-gold focus:outline-none"
            >
              <option value="" disabled>
                Selecione
              </option>
              {REGIMES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor={`fat-${variant}`} className="mb-1 block text-sm text-gray-text">
              Faturamento médio
            </label>
            <select
              id={`fat-${variant}`}
              required
              value={form.faturamento}
              onChange={(e) => setForm({ ...form, faturamento: e.target.value })}
              className="w-full border border-gray-border bg-black-card px-4 py-3 text-white focus:border-gold focus:outline-none"
            >
              <option value="" disabled>
                Selecione
              </option>
              {FATURAMENTOS.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>
        </>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-gold px-8 py-4 font-heading text-xl tracking-wider text-black-deep uppercase transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 disabled:opacity-50"
      >
        {status === "loading" ? "Enviando..." : msg.button}
      </button>

      {status === "error" && (
        <p className="text-center text-sm text-red-400">
          Erro ao enviar. Tente novamente ou chame direto no WhatsApp: (61)
          9931-9238.
        </p>
      )}

      <p className="text-center text-xs text-gray-muted">
        {isReforma
          ? "Análise reservada. Seus dados não são compartilhados com o seu contador nem com terceiros."
          : "Sem spam. Seus dados são usados apenas para entrar em contato."}
      </p>
    </form>
  );
}
