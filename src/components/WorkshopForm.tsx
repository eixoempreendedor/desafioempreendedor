"use client";

import { useState } from "react";

const WA_RICARDO = "https://wa.me/556199319238";

export default function WorkshopForm() {
  const [form, setForm] = useState({ nome: "", telefone: "", empresa: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function formatPhone(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/workshop-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Erro ao enviar");
      setStatus("success");

      // Redirect to WhatsApp after 2 seconds
      setTimeout(() => {
        const msg = encodeURIComponent(
          `Olá! Meu nome é ${form.nome}, sou da empresa ${form.empresa}. Quero confirmar minha vaga no workshop gratuito do dia 25/04. Fiz minha inscrição pelo site.`
        );
        window.open(`${WA_RICARDO}?text=${msg}`, "_blank");
      }, 2000);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-gold bg-gold/10 p-8 text-center">
        <p className="font-heading text-2xl tracking-wide text-gold uppercase">
          Vaga reservada!
        </p>
        <p className="mt-3 text-gray-text">
          {form.nome}, você será redirecionado para o WhatsApp do Ricardo, nosso coordenador, para confirmar sua vaga.
        </p>
        <p className="mt-2 text-sm text-gray-muted">
          Se não abrir automaticamente,{" "}
          <a
            href={`${WA_RICARDO}?text=${encodeURIComponent(`Olá! Meu nome é ${form.nome}, sou da empresa ${form.empresa}. Quero confirmar minha vaga no workshop gratuito do dia 25/04. Fiz minha inscrição pelo site.`)}`}
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
        <label htmlFor="nome" className="mb-1 block text-sm text-gray-text">
          Seu nome completo
        </label>
        <input
          id="nome"
          type="text"
          required
          placeholder="Ex: João Silva"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
          className="w-full border border-gray-border bg-black-card px-4 py-3 text-white placeholder:text-gray-muted focus:border-gold focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="telefone" className="mb-1 block text-sm text-gray-text">
          WhatsApp / Telefone
        </label>
        <input
          id="telefone"
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
        <label htmlFor="empresa" className="mb-1 block text-sm text-gray-text">
          Nome da sua empresa
        </label>
        <input
          id="empresa"
          type="text"
          required
          placeholder="Ex: Padaria do João"
          value={form.empresa}
          onChange={(e) => setForm({ ...form, empresa: e.target.value })}
          className="w-full border border-gray-border bg-black-card px-4 py-3 text-white placeholder:text-gray-muted focus:border-gold focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-gold px-8 py-4 font-heading text-xl tracking-wider text-black-deep uppercase transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 disabled:opacity-50"
      >
        {status === "loading" ? "Enviando..." : "Garantir minha vaga"}
      </button>

      {status === "error" && (
        <p className="text-center text-sm text-red-400">
          Erro ao enviar. Tente novamente ou chame direto no WhatsApp: (61)
          8172-6782.
        </p>
      )}

      <p className="text-center text-xs text-gray-muted">
        Gratuito. Sem spam. Seus dados são usados apenas para confirmar sua
        vaga.
      </p>
    </form>
  );
}
