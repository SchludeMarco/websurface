"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BRANCH_CHANGE_EVENT, readStoredBranchNames } from "./branch-storage";
import { useI18n } from "@/lib/i18n/client";

export default function BranchBadge() {
  const { messages } = useI18n();
  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    function sync() {
      setNames(readStoredBranchNames());
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
        {messages.branchBadge.none} ·{" "}
        <Link
          href="/onboarding"
          className="font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          {messages.branchBadge.choose}
        </Link>
      </p>
    );
  }

  const label = names.length === 1 ? messages.branchBadge.selectedOne : messages.branchBadge.selectedMany;

  return (
    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
      {label}: <span className="font-medium text-slate-700 dark:text-slate-300">{names.join(", ")}</span>{" "}
      ·{" "}
      <Link
        href="/onboarding"
        className="font-medium text-blue-600 hover:underline dark:text-blue-400"
      >
        {messages.branchBadge.change}
      </Link>
    </p>
  );
}
