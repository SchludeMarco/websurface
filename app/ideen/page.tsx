import Link from "next/link";
import { prisma } from "@/lib/prisma";

const effortLabel: Record<string, string> = {
  NIEDRIG: "Niedriger Aufwand",
  MITTEL: "Mittlerer Aufwand",
  HOCH: "Hoher Aufwand",
};

const impactLabel: Record<string, string> = {
  NIEDRIG: "Geringer Nutzen",
  MITTEL: "Mittlerer Nutzen",
  HOCH: "Hoher Nutzen",
};

export default async function IdeenPage({
  searchParams,
}: {
  searchParams: Promise<{ sectors?: string }>;
}) {
  const params = await searchParams;
  const sectorSlugs = params.sectors
    ? params.sectors.split(",").map((s) => s.trim()).filter(Boolean)
    : [];

  const [ideas, allSectors] = await Promise.all([
    prisma.appIdea.findMany({
      where: sectorSlugs.length
        ? { sectors: { some: { slug: { in: sectorSlugs } } } }
        : undefined,
      include: { sectors: { select: { slug: true, name: true } } },
      orderBy: { title: "asc" },
    }),
    prisma.sector.findMany({ where: { slug: { in: sectorSlugs } } }),
  ]);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            {sectorSlugs.length > 0 ? "Passende App-Ideen" : "Alle App-Ideen"}
          </h1>
          {allSectors.length > 0 && (
            <p className="mt-2 text-slate-600">
              Gefiltert nach: {allSectors.map((s) => s.name).join(", ")}
            </p>
          )}
        </div>
        <Link
          href="/onboarding"
          className="shrink-0 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
        >
          Auswahl ändern
        </Link>
      </div>

      {ideas.length === 0 ? (
        <p className="mt-10 text-slate-500">
          Keine Ideen für diese Auswahl gefunden.
        </p>
      ) : (
        <ul className="mt-10 space-y-4">
          {ideas.map((idea) => (
            <li
              key={idea.id}
              className="rounded-lg border border-slate-200 bg-white p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-lg font-semibold text-slate-900">
                  {idea.title}
                </h2>
                <div className="flex gap-2 text-xs">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
                    {effortLabel[idea.effort]}
                  </span>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700">
                    {impactLabel[idea.impact]}
                  </span>
                </div>
              </div>
              <p className="mt-2 text-sm text-slate-600">{idea.description}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-400">
                {idea.tags.map((tag) => (
                  <span key={tag} className="rounded bg-slate-50 px-2 py-1">
                    #{tag}
                  </span>
                ))}
                <span className="rounded bg-slate-50 px-2 py-1">
                  {idea.sectors.map((s) => s.name).join(", ")}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
