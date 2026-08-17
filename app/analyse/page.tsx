"use client";

import { useState } from "react";
import type { AnalysisMetrics } from "@/lib/csv-analysis";
import { useI18n } from "@/lib/i18n/client";
import { interpolate } from "@/lib/i18n/interpolate";

type AnalyzeResponse = {
  metrics: AnalysisMetrics;
  recommendedIdea: { title: string; description: string } | null;
  rationale: string;
  automatedNotice: string;
};

export default function AnalysePage() {
  const { locale, messages } = useI18n();
  const { analyse } = messages;
  const [file, setFile] = useState<File | null>(null);
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AnalyzeResponse | null>(null);

  async function loadSampleFile() {
    const response = await fetch("/sample-data/beispiel-handel-verkaufsdaten.csv");
    const blob = await response.blob();
    setFile(
      new File([blob], "beispiel-handel-verkaufsdaten.csv", { type: "text/csv" })
    );
    setError(null);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!file || !consent) return;

    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.set("file", file);
    formData.set("consent", "true");

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error ?? analyse.errorUnknownAnalysis);
      }
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : analyse.errorUnknown);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        {analyse.title}
      </h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">{analyse.description}</p>

      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-900 dark:bg-amber-950/60 dark:text-amber-200">
        {analyse.noticePre}{" "}
        <a href="/datenschutz" className="underline">
          {analyse.noticeLinkText}
        </a>
        .
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            {analyse.csvLabel}
          </label>
          <input
            type="file"
            accept=".csv,text/csv"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            className="mt-2 block w-full text-sm text-slate-600 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 dark:text-slate-400 dark:file:bg-blue-950 dark:file:text-blue-300 dark:hover:file:bg-blue-900"
          />
          <button
            type="button"
            onClick={loadSampleFile}
            className="mt-2 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            {analyse.sampleButton}
          </button>
          {file && (
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {interpolate(analyse.selectedFile, { name: file.name, size: Math.round(file.size / 1024) })}
            </p>
          )}
        </div>

        <label className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 h-4 w-4"
          />
          {analyse.consentLabel}
        </label>

        <button
          type="submit"
          disabled={!file || !consent || loading}
          className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300 dark:disabled:bg-slate-700 dark:disabled:text-slate-400"
        >
          {loading ? analyse.submitting : analyse.submit}
        </button>
      </form>

      {error && (
        <div className="mt-8 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/60 dark:text-red-300">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-10 space-y-6">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/40">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
              {analyse.automatedLabel}
            </p>
            <h2 className="mt-2 text-xl font-bold text-slate-900 dark:text-slate-100">
              {result.recommendedIdea?.title ?? analyse.noRecommendation}
            </h2>
            {result.recommendedIdea && (
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {result.recommendedIdea.description}
              </p>
            )}
            <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{result.rationale}</p>
            <p className="mt-4 text-xs text-blue-800 dark:text-blue-300">{result.automatedNotice}</p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">{analyse.metricsTitle}</h3>
            <dl className="mt-3 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-slate-500 dark:text-slate-400">{analyse.rowCount}</dt>
                <dd className="font-medium text-slate-900 dark:text-slate-100">
                  {result.metrics.rowCount}
                </dd>
              </div>
              <div>
                <dt className="text-slate-500 dark:text-slate-400">{analyse.totalRevenue}</dt>
                <dd className="font-medium text-slate-900 dark:text-slate-100">
                  {formatCurrency(result.metrics.totalRevenue, locale)}
                </dd>
              </div>
            </dl>

            <h4 className="mt-5 text-sm font-semibold text-slate-900 dark:text-slate-100">
              {analyse.revenueByCategory}
            </h4>
            <ul className="mt-2 space-y-1 text-sm">
              {result.metrics.revenueByCategory.map((c) => (
                <li key={c.category} className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">{c.category}</span>
                  <span className="text-slate-900 dark:text-slate-100">
                    {formatCurrency(c.revenue, locale)} ({(c.share * 100).toFixed(0)}%)
                  </span>
                </li>
              ))}
            </ul>

            <h4 className="mt-5 text-sm font-semibold text-slate-900 dark:text-slate-100">
              {analyse.seasonality}
            </h4>
            <ul className="mt-2 space-y-1 text-sm">
              {result.metrics.categorySeasonality.map((c) => (
                <li key={c.category} className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">{c.category}</span>
                  <span className="text-slate-900 dark:text-slate-100">
                    ×{Number.isFinite(c.ratio) ? c.ratio.toFixed(1) : "∞"}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-xs text-slate-400 dark:text-slate-500">{analyse.rawDataNotice}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function formatCurrency(value: number, locale: string): string {
  const localeTag = locale === "de" ? "de-DE" : locale === "es" ? "es-ES" : "en-GB";
  return new Intl.NumberFormat(localeTag, {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}
