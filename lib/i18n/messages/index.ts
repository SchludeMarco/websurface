import type { Locale } from "../config";
import de from "./de";
import en from "./en";
import es from "./es";

export type { Messages } from "./de";

export const messagesByLocale: Record<Locale, typeof de> = { de, en, es };
