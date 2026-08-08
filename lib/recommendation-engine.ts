import type { AnalysisMetrics } from "./csv-analysis";

export type Recommendation = {
  ideaSlug: string;
  rationale: string;
};

const SEASONALITY_RATIO_THRESHOLD = 3;
const CATEGORY_CONCENTRATION_THRESHOLD = 0.45;

/**
 * Regelbasierte (nicht KI-gestützte) Zuordnung von Kennzahlen zu einer
 * konkreten App-Idee. Bewusst deterministisch statt LLM-basiert gehalten,
 * damit der Prototyp ohne externe API-Anbindung reproduzierbar läuft und
 * EU-AI-Act-Fragen im MVP nicht schlagend werden (siehe Konzeptdokument).
 */
export function recommendFromMetrics(metrics: AnalysisMetrics): Recommendation {
  const strongestSeasonality = metrics.categorySeasonality[0];

  if (
    strongestSeasonality &&
    Number.isFinite(strongestSeasonality.ratio) &&
    strongestSeasonality.ratio >= SEASONALITY_RATIO_THRESHOLD
  ) {
    const ratio = strongestSeasonality.ratio.toFixed(1);
    return {
      ideaSlug: "bestellvorhersage",
      rationale:
        `Die Kategorie "${strongestSeasonality.category}" schwankt zwischen den Monaten ` +
        `um den Faktor ${ratio} (${formatCurrency(strongestSeasonality.minMonthRevenue)} bis ` +
        `${formatCurrency(strongestSeasonality.maxMonthRevenue)} Umsatz). Eine Bestell- & ` +
        `Nachfrageprognose würde helfen, Einkaufsmengen an diese Saisonalität anzupassen und ` +
        `sowohl Überbestände in schwachen als auch Engpässe in starken Monaten zu vermeiden.`,
    };
  }

  const topCategory = metrics.revenueByCategory[0];
  if (topCategory && topCategory.share >= CATEGORY_CONCENTRATION_THRESHOLD) {
    return {
      ideaSlug: "lager-bestandsmanagement",
      rationale:
        `Die Kategorie "${topCategory.category}" macht ${(topCategory.share * 100).toFixed(0)}% ` +
        `des Gesamtumsatzes aus. Ein Lager- & Bestandsmanagement mit Nachbestell-Alarm speziell ` +
        `für diese Kategorie würde das größte Umsatzrisiko (Lieferengpässe) gezielt absichern.`,
    };
  }

  return {
    ideaSlug: "pos-zentralreporting",
    rationale:
      `Der Umsatz verteilt sich relativ gleichmäßig auf ${metrics.revenueByCategory.length} ` +
      `Kategorien ohne starke saisonale Ausreißer. Ein zentrales Kassen-/POS-Reporting würde hier ` +
      `den größten Mehrwert bringen, um Entwicklungen über alle Kategorien hinweg tagesaktuell zu erkennen.`,
  };
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}
