import { getLocale } from "@/lib/i18n/get-locale";
import { messagesByLocale } from "@/lib/i18n/messages";

export default async function ImpressumPage() {
  const locale = await getLocale();
  const { impressum } = messagesByLocale[locale];
  const { sections } = impressum;

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        {impressum.title}
      </h1>

      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-900 dark:bg-amber-950/60 dark:text-amber-200">
        <strong>{impressum.noticePre}</strong> {impressum.noticeBody}{" "}
        <code>[…]</code> {impressum.noticePost}
      </div>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {sections.provider.title}
        </h2>
        {sections.provider.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {sections.represented.title}
        </h2>
        {sections.represented.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{sections.contact.title}</h2>
        {sections.contact.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {sections.register.title}
        </h2>
        {sections.register.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{sections.vat.title}</h2>
        <p>{sections.vat.body}</p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {sections.responsible.title}
        </h2>
        <p>{sections.responsible.body}</p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {sections.dispute.title}
        </h2>
        <p>
          {sections.dispute.bodyPre}{" "}
          <span className="underline">{sections.dispute.bodyUrl}</span>. {sections.dispute.bodyPost}
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {sections.liabilityContent.title}
        </h2>
        <p>{sections.liabilityContent.body}</p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {sections.liabilityLinks.title}
        </h2>
        <p>{sections.liabilityLinks.body}</p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {sections.copyright.title}
        </h2>
        <p>{sections.copyright.body}</p>
      </section>
    </div>
  );
}
