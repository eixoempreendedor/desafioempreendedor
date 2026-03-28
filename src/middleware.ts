import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  // Workshop domain → serve /workshop page
  if (host.includes("empresarioricovsempresariopobre")) {
    const url = request.nextUrl.clone();
    if (url.pathname === "/") {
      url.pathname = "/workshop";
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
