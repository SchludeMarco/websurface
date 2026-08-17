"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Sector, Subsector } from "@prisma/client";
import { BRANCH_CHANGE_EVENT, BRANCH_STORAGE_KEY } from "../branch-storage";

type SectorWithSubsectors = Sector & { subsectors: Subsector[] };

export default function OnboardingForm({
  sectors,
}: {
  sectors: SectorWithSubsectors[];
}) {
  const router = useRouter();
  const [selected, setSelected] = useState<Set<string>>(new Set());

  function toggle(slug: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      return next;
    });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (selected.size > 0) {
      params.set("sectors", Array.from(selected).join(","));
    }

    const branchNames = sectors
      .filter((sector) => selected.has(sector.slug))
      .map((sector) => sector.name)
      .join(", ");
    window.localStorage.setItem(BRANCH_STORAGE_KEY, branchNames);
    window.dispatchEvent(new Event(BRANCH_CHANGE_EVENT));

    router.push(`/ideen?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      {sectors.map((sector) => (
        <label
          key={sector.id}
          className={`block cursor-pointer rounded-lg border p-5 transition ${
            selected.has(sector.slug)
              ? "border-blue-500 bg-blue-50 dark:border-blue-500 dark:bg-blue-950/40"
              : "border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
          }`}
        >
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={selected.has(sector.slug)}
              onChange={() => toggle(sector.slug)}
              className="mt-1 h-4 w-4"
            />
            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-100">{sector.name}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{sector.detail}</p>
              <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">
                {sector.subsectors.map((s) => s.name).join(" · ")}
              </p>
            </div>
          </div>
        </label>
      ))}

      <button
        type="submit"
        disabled={selected.size === 0}
        className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300 dark:disabled:bg-slate-700 dark:disabled:text-slate-400"
      >
        App-Ideen anzeigen
      </button>
    </form>
  );
}
