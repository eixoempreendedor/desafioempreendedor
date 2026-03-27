const WHATSAPP_URL = "https://wa.me/5561981726782?text=Quero%20saber%20mais%20sobre%20o%20Desafio%20Empreendedor";

export default function CTAButton({
  text = "Quero participar",
  className = "",
  href,
}: {
  text?: string;
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href || WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-gold px-8 py-4 font-heading text-xl tracking-wider text-black-deep uppercase transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 ${className}`}
    >
      {text}
    </a>
  );
}
