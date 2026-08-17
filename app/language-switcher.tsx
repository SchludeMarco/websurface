"use client";

import { useRouter } from "next/navigation";
import { locales, localeLabels, LOCALE_COOKIE, type Locale } from "@/lib/i18n/config";
import { useI18n } from "@/lib/i18n/client";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, messages } = useI18n();

  function changeLocale(next: Locale) {
    if (next === locale) return;
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  }

  return (
    <select
      value={locale}
      onChange={(e) => changeLocale(e.target.value as Locale)}
      aria-label={messages.languageSwitcher.label}
      className="h-9 shrink-0 rounded-md border border-slate-300 bg-white px-2 text-sm text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
    >
      {locales.map((l) => (
        <option key={l} value={l}>
          {localeLabels[l]}
        </option>
      ))}
    </select>
  );
}
