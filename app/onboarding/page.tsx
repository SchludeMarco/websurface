import { prisma } from "@/lib/prisma";
import OnboardingForm from "./onboarding-form";

export default async function OnboardingPage() {
  const sectors = await prisma.sector.findMany({
    include: { subsectors: { orderBy: { name: "asc" } } },
    orderBy: { name: "asc" },
  });

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        Welche Kernbereiche betreffen Ihr Unternehmen?
      </h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Wählen Sie einen oder mehrere Kernbereiche des Mittelstands aus. Die
        Unterbranchen sind optional und verfeinern nur die Beschreibung —
        die Ideen-Zuordnung erfolgt aktuell auf Ebene der Kernbereiche.
      </p>
      <OnboardingForm sectors={sectors} />
    </div>
  );
}
