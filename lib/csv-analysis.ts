import { parse } from "csv-parse/sync";

export type CsvRow = {
  Datum: string;
  Kategorie: string;
  Produkt: string;
  Menge: string;
  Umsatz: string;
};

export type CategorySeasonality = {
  category: string;
  minMonthRevenue: number;
  maxMonthRevenue: number;
  ratio: number;
};

export type AnalysisMetrics = {
  rowCount: number;
  totalRevenue: number;
  revenueByCategory: { category: string; revenue: number; share: number }[];
  revenueByMonth: { month: string; revenue: number }[];
  topProducts: { product: string; revenue: number }[];
  categorySeasonality: CategorySeasonality[];
};

const REQUIRED_COLUMNS = ["Datum", "Kategorie", "Produkt", "Menge", "Umsatz"];

export class CsvValidationError extends Error {}

/**
 * Verarbeitet die CSV ausschließlich im Arbeitsspeicher. Es werden keine
 * Rohdaten (einzelne Zeilen) zurückgegeben oder persistiert — nur
 * aggregierte Kennzahlen, siehe README-Abschnitt "Datenschutz".
 */
export function analyzeSalesCsv(csvText: string): AnalysisMetrics {
  const records = parse(csvText, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  }) as CsvRow[];

  if (records.length === 0) {
    throw new CsvValidationError("Die Datei enthält keine Datenzeilen.");
  }

  const header = Object.keys(records[0]);
  const missing = REQUIRED_COLUMNS.filter((col) => !header.includes(col));
  if (missing.length > 0) {
    throw new CsvValidationError(
      `Fehlende Spalten: ${missing.join(", ")}. Erwartet werden: ${REQUIRED_COLUMNS.join(", ")}.`
    );
  }

  const revenueByCategoryMap = new Map<string, number>();
  const revenueByMonthMap = new Map<string, number>();
  const revenueByProductMap = new Map<string, number>();
  const revenueByCategoryMonthMap = new Map<string, Map<string, number>>();

  let totalRevenue = 0;

  for (const row of records) {
    const revenue = Number(row.Umsatz);
    if (!Number.isFinite(revenue)) {
      throw new CsvValidationError(
        `Ungültiger Umsatz-Wert in Zeile mit Produkt "${row.Produkt}".`
      );
    }
    const month = row.Datum.slice(0, 7); // YYYY-MM
    const category = row.Kategorie;

    totalRevenue += revenue;
    revenueByCategoryMap.set(
      category,
      (revenueByCategoryMap.get(category) ?? 0) + revenue
    );
    revenueByMonthMap.set(month, (revenueByMonthMap.get(month) ?? 0) + revenue);
    revenueByProductMap.set(
      row.Produkt,
      (revenueByProductMap.get(row.Produkt) ?? 0) + revenue
    );

    const monthMap =
      revenueByCategoryMonthMap.get(category) ?? new Map<string, number>();
    monthMap.set(month, (monthMap.get(month) ?? 0) + revenue);
    revenueByCategoryMonthMap.set(category, monthMap);
  }

  const revenueByCategory = Array.from(revenueByCategoryMap.entries())
    .map(([category, revenue]) => ({
      category,
      revenue,
      share: totalRevenue > 0 ? revenue / totalRevenue : 0,
    }))
    .sort((a, b) => b.revenue - a.revenue);

  const revenueByMonth = Array.from(revenueByMonthMap.entries())
    .map(([month, revenue]) => ({ month, revenue }))
    .sort((a, b) => a.month.localeCompare(b.month));

  const topProducts = Array.from(revenueByProductMap.entries())
    .map(([product, revenue]) => ({ product, revenue }))
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 5);

  const categorySeasonality: CategorySeasonality[] = Array.from(
    revenueByCategoryMonthMap.entries()
  )
    .map(([category, monthMap]) => {
      const values = Array.from(monthMap.values());
      const minMonthRevenue = Math.min(...values);
      const maxMonthRevenue = Math.max(...values);
      const ratio =
        minMonthRevenue > 0
          ? maxMonthRevenue / minMonthRevenue
          : maxMonthRevenue > 0
            ? Infinity
            : 0;
      return { category, minMonthRevenue, maxMonthRevenue, ratio };
    })
    .sort((a, b) => b.ratio - a.ratio);

  return {
    rowCount: records.length,
    totalRevenue,
    revenueByCategory,
    revenueByMonth,
    topProducts,
    categorySeasonality,
  };
}
