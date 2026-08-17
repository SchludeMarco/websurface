import Link from "next/link";
import { getLocale } from "@/lib/i18n/get-locale";
import { messagesByLocale } from "@/lib/i18n/messages";

export default async function HomePage() {
  const locale = await getLocale();
  const { home } = messagesByLocale[locale];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
          {home.eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          {home.title}
        </h1>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">{home.description}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/onboarding"
            className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            {home.ctaBranch}
          </Link>
          <Link
            href="/analyse"
            className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {home.ctaAnalyse}
          </Link>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{home.sectorsTitle}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {home.sectors.map((sector) => (
            <div
              key={sector.name}
              className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">{sector.name}</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{sector.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-lg border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950/60">
        <h2 className="font-semibold text-amber-900 dark:text-amber-200">{home.privacyTitle}</h2>
        <p className="mt-2 text-sm text-amber-800 dark:text-amber-300">
          {home.privacyBodyPre}{" "}
          <Link href="/datenschutz" className="underline">
            {home.privacyLinkText}
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
