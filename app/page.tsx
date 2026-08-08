import Link from "next/link";

const sectors = [
  {
    name: "Dienstleistungen",
    detail: "IT & Beratung, Reinigung/Gebäudeservice, Finanz- & Personaldienstleistungen",
  },
  {
    name: "Handel",
    detail: "Großhandel, Einzelhandel, Kfz-Handel",
  },
  {
    name: "Industrie & Verarbeitendes Gewerbe",
    detail: "Maschinenbau, Metallverarbeitung, Elektrotechnik",
  },
  {
    name: "Baugewerbe & Handwerk",
    detail: "Bauhauptgewerbe, Ausbaugewerbe, klassisches Handwerk",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Prototyp — Studienprojekt
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
          Passende App-Ideen für Ihr mittelständisches Unternehmen
        </h1>
        <p className="mt-6 text-lg text-slate-600">
          WebSurface schlägt geprüfte, praxisnahe App-Konzepte vor — entweder anhand
          Ihrer Branche oder, optional, anhand einer echten Analyse anonymisierter
          Geschäftsdaten. WebSurface generiert keinen automatischen Produktivcode,
          sondern belastbare Konzept-Briefs als Entscheidungsgrundlage.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/onboarding"
            className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Branche auswählen
          </Link>
          <Link
            href="/analyse"
            className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Geschäftsdaten analysieren
          </Link>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="text-xl font-semibold text-slate-900">
          Die vier Kernbereiche des Mittelstands
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="rounded-lg border border-slate-200 bg-white p-5"
            >
              <h3 className="font-semibold text-slate-900">{sector.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{sector.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-lg border border-amber-200 bg-amber-50 p-6">
        <h2 className="font-semibold text-amber-900">Datenschutz &amp; Transparenz</h2>
        <p className="mt-2 text-sm text-amber-800">
          Bei der optionalen Datenanalyse werden Rohdaten ausschließlich im
          Arbeitsspeicher verarbeitet und nicht dauerhaft gespeichert — es
          entstehen nur aggregierte Kennzahlen. Empfehlungen werden regelbasiert
          erzeugt und automatisiert gekennzeichnet. Details siehe{" "}
          <Link href="/datenschutz" className="underline">
            Datenschutzerklärung
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
