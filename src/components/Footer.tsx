export default function Footer() {
  return (
    <footer className="border-t border-gray-border bg-[#0D0D0F] px-6 py-12">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-heading text-2xl tracking-wide text-gold uppercase">
          Desafio Empreendedor
        </p>
        <p className="mt-2 text-sm text-gray-muted">
          Alexânia, GO — Programa presencial para donos de PME
        </p>
        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-text">
          <a
            href="https://wa.me/5561981726782"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gold"
          >
            WhatsApp: (61) 8172-6782
          </a>
          <span className="text-gray-border">|</span>
          <a
            href="https://instagram.com/luizcurti"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gold"
          >
            @luizcurti
          </a>
        </div>
        <p className="mt-8 text-xs text-gray-muted">
          &copy; {new Date().getFullYear()} Núcleo Consultoria. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
