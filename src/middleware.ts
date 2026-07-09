import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

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
