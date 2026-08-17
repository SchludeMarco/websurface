"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BRANCH_CHANGE_EVENT, BRANCH_STORAGE_KEY } from "./branch-storage";

export default function BranchBadge() {
  const [branch, setBranch] = useState<string | null>(null);

  useEffect(() => {
    function sync() {
      setBranch(window.localStorage.getItem(BRANCH_STORAGE_KEY));
    }
    sync();
    window.addEventListener(BRANCH_CHANGE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(BRANCH_CHANGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  if (!branch) {
    return (
      <div className="border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-6 py-1.5 text-xs text-slate-500 dark:text-slate-400">
          <span>Noch keine Branche ausgewählt</span>
          <Link
            href="/onboarding"
            className="font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            Branche wählen
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="border-b border-blue-100 bg-blue-50 dark:border-blue-950 dark:bg-blue-950/40">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-6 py-1.5 text-xs text-blue-800 dark:text-blue-200">
        <span>
          Ausgewählte Branche: <strong className="font-semibold">{branch}</strong>
        </span>
        <Link href="/onboarding" className="font-medium hover:underline">
          Ändern
        </Link>
      </div>
    </div>
  );
}
