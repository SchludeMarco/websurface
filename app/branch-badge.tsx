"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BRANCH_CHANGE_EVENT, BRANCH_STORAGE_KEY } from "./branch-storage";

function readBranchNames(): string[] {
  const raw = window.localStorage.getItem(BRANCH_STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed;
  } catch {
    // Legacy format from before branches were stored as JSON: a plain
    // ", "-joined string. Recover it instead of dropping the selection.
    return raw.split(", ").filter(Boolean);
  }
  return [];
}

export default function BranchBadge() {
  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    function sync() {
      setNames(readBranchNames());
    }
    sync();
    window.addEventListener(BRANCH_CHANGE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(BRANCH_CHANGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  if (names.length === 0) {
    return (
      <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
        Noch keine Branche ausgewählt ·{" "}
        <Link
          href="/onboarding"
          className="font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          Branche wählen
        </Link>
      </p>
    );
  }

  const label = names.length === 1 ? "Ausgewählte Branche" : "Ausgewählte Branchen";

  return (
    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
      {label}: <span className="font-medium text-slate-700 dark:text-slate-300">{names.join(", ")}</span>{" "}
      ·{" "}
      <Link
        href="/onboarding"
        className="font-medium text-blue-600 hover:underline dark:text-blue-400"
      >
        Ändern
      </Link>
    </p>
  );
}
