import Link from "next/link";
import { getLocale } from "@/lib/i18n/get-locale";
import { messagesByLocale } from "@/lib/i18n/messages";

export default async function DatenschutzPage() {
  const locale = await getLocale();
  const { datenschutz } = messagesByLocale[locale];
  const { sections } = datenschutz;

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        {datenschutz.title}
      </h1>

      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-900 dark:bg-amber-950/60 dark:text-amber-200">
        <strong>{datenschutz.noticePre}</strong> {datenschutz.noticeBody}
      </div>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {sections.controller.title}
        </h2>
        <p>
          {sections.controller.bodyPre}{" "}
          <Link href="/impressum" className="underline">
            {sections.controller.linkText}
          </Link>{" "}
          {sections.controller.bodyPost}
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{sections.logs.title}</h2>
        <p>{sections.logs.body}</p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {sections.onboarding.title}
        </h2>
        <p>
          {sections.onboarding.bodyPre} <code>{sections.onboarding.code}</code>{" "}
          {sections.onboarding.bodyPost}
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {sections.analysis.title}
        </h2>
        <p>{sections.analysis.intro}</p>
        <ul className="list-disc space-y-1 pl-5">
          {sections.analysis.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {sections.automated.title}
        </h2>
        <p>{sections.automated.body}</p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {sections.retention.title}
        </h2>
        <p>
          {sections.retention.bodyPre} <strong>{sections.retention.emphasis}</strong>{" "}
          {sections.retention.bodyPost}
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {sections.cookies.title}
        </h2>
        <p>
          {sections.cookies.bodyPre} <code>{sections.cookies.code}</code> {sections.cookies.bodyPost}
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {sections.hosting.title}
        </h2>
        <p>
          {sections.hosting.bodyPre} <code>{sections.hosting.code}</code>
          {sections.hosting.bodyPost}
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {sections.rights.title}
        </h2>
        <p>
          {sections.rights.bodyPre}{" "}
          <Link href="/impressum" className="underline">
            {sections.rights.linkText}
          </Link>{" "}
          {sections.rights.bodyPost}
        </p>
      </section>
    </div>
  );
}
