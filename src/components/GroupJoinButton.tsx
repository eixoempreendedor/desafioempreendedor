"use client";

import { WORKSHOP_WHATSAPP_GROUP } from "@/data/workshop";

export default function GroupJoinButton() {
  return (
    <button
      type="button"
      onClick={() => {
        window.location.href = WORKSHOP_WHATSAPP_GROUP;
      }}
      className="mt-8 inline-block cursor-pointer bg-gold px-10 py-4 font-heading text-2xl tracking-wider text-black-deep uppercase transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
    >
      Entrar no grupo do WhatsApp
    </button>
  );
}
