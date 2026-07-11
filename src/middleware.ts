import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  // Domínios da campanha de Formosa (ex.: gestaoenetworkingformosa,
  // desafioempreendedorformosa) — servem a página do workshop na raiz,
  // mantendo a URL limpa (rewrite, não redirect)
  if (host.includes("formosa")) {
    if (request.nextUrl.pathname === "/") {
      const url = request.nextUrl.clone();
      url.pathname = "/workshop";
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  // Domínio da campanha antiga (Empresário Rico x Pobre) — redireciona
  // para a página do workshop atual (Gestão & Networking — Formosa)
  if (host.includes("empresarioricovsempresariopobre")) {
    const url = request.nextUrl.clone();
    url.hostname = "desafioempreendedoralexania.luizcurti.com.br";
    url.pathname = "/workshop";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/workshop"],
};
