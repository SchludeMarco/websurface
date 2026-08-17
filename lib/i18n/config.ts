export const locales = ["de", "en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "de";
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const localeLabels: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  es: "Español",
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

// ISO 3166-1 alpha-2 country codes (as sent by Vercel's `x-vercel-ip-country`
// header) mapped to the closest supported UI locale.
const countryToLocale: Record<string, Locale> = {
  DE: "de",
  AT: "de",
  CH: "de",
  LI: "de",
  LU: "de",

  ES: "es",
  MX: "es",
  AR: "es",
  CO: "es",
  CL: "es",
  PE: "es",
  VE: "es",
  EC: "es",
  GT: "es",
  CU: "es",
  BO: "es",
  DO: "es",
  HN: "es",
  PY: "es",
  SV: "es",
  NI: "es",
  CR: "es",
  PA: "es",
  UY: "es",
  PR: "es",
  GQ: "es",
};

export function localeFromCountry(country?: string | null): Locale {
  if (!country) return defaultLocale;
  return countryToLocale[country.toUpperCase()] ?? "en";
}

// Fallback for local development / non-Vercel hosts where no geo header is
// available: derive a locale from the browser's Accept-Language header.
export function localeFromAcceptLanguage(header?: string | null): Locale {
  if (!header) return defaultLocale;
  const first = header.split(",")[0]?.trim().toLowerCase();
  if (!first) return defaultLocale;

  const [lang, region] = first.split("-");
  if (region) {
    const mapped = countryToLocale[region.toUpperCase()];
    if (mapped) return mapped;
  }
  if (isLocale(lang)) return lang;
  return defaultLocale;
}
