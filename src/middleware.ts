import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  // Workshop domain — OFFLINE (campanha isolada futura)
  // Redireciona para a homepage do Desafio por enquanto
  if (host.includes("empresarioricovsempresariopobre")) {
    const url = request.nextUrl.clone();
    url.hostname = "desafioempreendedoralexania.luizcurti.com.br";
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Block direct access to /workshop
  if (request.nextUrl.pathname === "/workshop") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/workshop"],
};
