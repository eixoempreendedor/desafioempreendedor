"use client";

import { useState } from "react";
import { reformaCheckItems } from "@/data/reforma";

const VEREDITOS = [
  {
    min: 0,
    label: "Exposição baixa",
    text: "Pelo que você marcou, a sua empresa não está no pior cenário. Ainda assim, preço e cadastro vão precisar de revisão até 2027 — só que com menos pressa que a média.",
  },
  {
    min: 3,
    label: "Exposição média",
    text: "Tem dinheiro em jogo aqui. Pelo menos duas das frentes que você marcou costumam aparecer com valor relevante quando a gente abre as notas dos últimos 12 meses.",
  },
  {
    min: 6,
    label: "Exposição alta",
    text: "Esse é o perfil que mais perde nos próximos dois anos — e também o que mais tem crédito para trás. Vale levantar antes de tomar qualquer decisão de preço ou de regime.",
  },
];

function pushEvent(score: number) {
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer?.push({ event: "reforma_check", reforma_check_score: score });
}

export default function ReformaCheck() {
  const [marcados, setMarcados] = useState<number[]>([]);
  const [enviado, setEnviado] = useState(false);

  function toggle(i: number) {
    setMarcados((atual) =>
      atual.includes(i) ? atual.filter((x) => x !== i) : [...atual, i]
    );
  }

  const score = marcados.length;
  const veredito = [...VEREDITOS].reverse().find((v) => score >= v.min)!;

  return (
    <div>
      <div className="space-y-2">
        {reformaCheckItems.map((item, i) => {
          const ativo = marcados.includes(i);
          return (
            <button
              key={i}
              type="button"
              onClick={() => toggle(i)}
              aria-pressed={ativo}
              className={`flex w-full cursor-pointer items-start gap-3 border px-5 py-4 text-left transition-colors ${
                ativo
                  ? "border-gold bg-gold/10 text-white"
                  : "border-gray-border bg-black-card text-gray-text hover:border-gold/50"
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border text-xs ${
                  ativo
                    ? "border-gold bg-gold text-black-deep"
                    : "border-gray-border text-transparent"
                }`}
              >
                &#10003;
              </span>
              <span>{item}</span>
            </button>
          );
        })}
      </div>

      {!enviado ? (
        <button
          type="button"
          disabled={score === 0}
          onClick={() => {
            setEnviado(true);
            pushEvent(score);
          }}
          className="mt-6 w-full cursor-pointer bg-gold px-8 py-4 font-heading text-xl tracking-wider text-black-deep uppercase transition-all hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-40"
        >
          {score === 0 ? "Marque o que se aplica a você" : "Ver meu resultado"}
        </button>
      ) : (
        <div className="mt-6 border border-gold bg-gold/10 p-6">
          <p className="font-heading text-2xl tracking-wide text-gold uppercase">
            {veredito.label} — {score} de {reformaCheckItems.length}
          </p>
          <p className="mt-3 leading-relaxed text-gray-text">{veredito.text}</p>
          <a
            href="#analise"
            className="mt-5 inline-block bg-gold px-6 py-3 font-heading text-lg tracking-wider text-black-deep uppercase transition-all hover:bg-gold-light"
          >
            Quero o levantamento da minha empresa
          </a>
          <p className="mt-3 text-xs text-gray-muted">
            Isso é um indicativo, não um diagnóstico. O número só aparece quando
            a gente abre as suas notas.
          </p>
        </div>
      )}
    </div>
  );
}
