import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Atalho pro grupo de WhatsApp do workshop (o Meta não aceita link
      // chat.whatsapp.com direto no botão do formulário — este atalho no
      // nosso domínio resolve)
      {
        source: "/grupo",
        destination: "https://chat.whatsapp.com/DD25rboaQitFDSJaqEUFtH",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
