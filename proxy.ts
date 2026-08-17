import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LOCALE_COOKIE, isLocale, localeFromAcceptLanguage, localeFromCountry } from "@/lib/i18n/config";

export function proxy(request: NextRequest) {
  const existing = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(existing)) {
    return NextResponse.next();
  }

  const country = request.headers.get("x-vercel-ip-country");
  const locale = country
    ? localeFromCountry(country)
    : localeFromAcceptLanguage(request.headers.get("accept-language"));

  const response = NextResponse.next();
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|sample-data|api/).*)"],
};
