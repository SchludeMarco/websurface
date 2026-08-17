import { prisma } from "@/lib/prisma";
import { getLocale } from "@/lib/i18n/get-locale";
import { messagesByLocale } from "@/lib/i18n/messages";
import OnboardingForm from "./onboarding-form";

export default async function OnboardingPage() {
  const locale = await getLocale();
  const { onboarding } = messagesByLocale[locale];
  const sectors = await prisma.sector.findMany({
    include: { subsectors: { orderBy: { name: "asc" } } },
    orderBy: { name: "asc" },
  });

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        {onboarding.title}
      </h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">{onboarding.description}</p>
      <OnboardingForm sectors={sectors} />
    </div>
  );
}
