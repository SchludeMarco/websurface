export const BRANCH_STORAGE_KEY = "websurface:selectedBranch";
export const BRANCH_CHANGE_EVENT = "websurface:branch-changed";

export function readStoredBranchNames(): string[] {
  if (typeof window === "undefined") return [];
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
