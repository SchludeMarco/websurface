export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Impressum
      </h1>

      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>Hinweis (Prototyp):</strong> Dieses Projekt ist ein
        Studien-/Portfolio-Prototyp ohne realen Geschäftsbetrieb. Alle mit{" "}
        <code>[…]</code> markierten Angaben sind Platzhalter. Vor einem
        echten produktiven Einsatz müssen sie durch geprüfte, echte Angaben
        ersetzt werden — nichts an dieser Seite ist eine reale Anbieterkennzeichnung.
      </div>

      <section className="mt-8 space-y-2 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)
        </h2>
        <p>[Firmenname / Rechtsform]</p>
        <p>[Straße, Hausnummer]</p>
        <p>[Postleitzahl, Ort]</p>
        <p>[Land]</p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Vertreten durch
        </h2>
        <p>[Vor- und Nachname der Geschäftsführung]</p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">Kontakt</h2>
        <p>Telefon: [Telefonnummer]</p>
        <p>E-Mail: [E-Mail-Adresse]</p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Registereintrag
        </h2>
        <p>Eintragung im Handelsregister [falls zutreffend].</p>
        <p>Registergericht: [Registergericht]</p>
        <p>Registernummer: [Registernummer]</p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Umsatzsteuer-Identifikationsnummer
        </h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
          [USt-IdNr., falls vorhanden]
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h2>
        <p>
          Entfällt — diese Website bietet keine journalistisch-redaktionellen
          Inhalte an.
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          EU-Streitschlichtung
        </h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit, abrufbar unter{" "}
          <span className="underline">ec.europa.eu/consumers/odr</span>.
          WebSurface richtet sich ausschließlich an Unternehmen (B2B), sodass
          keine gesetzliche Pflicht zur Nennung besteht — wir weisen dennoch
          transparent darauf hin. Wir sind nicht verpflichtet und nicht
          bereit, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Haftung für Inhalte
        </h2>
        <p>
          Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten
          nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen
          zu überwachen. Verpflichtungen zur Entfernung oder Sperrung der
          Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
          hiervon unberührt.
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">
          Haftung für Links
        </h2>
        <p>
          Diese App enthält aktuell keine Links auf externe Inhalte Dritter.
          Sollten künftig Links eingebunden werden, gilt: Für die Inhalte der
          verlinkten Seiten ist ausschließlich deren Betreiber verantwortlich.
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">Urheberrecht</h2>
        <p>
          Die durch die Betreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter
          (z. B. Open-Source-Bibliotheken) sind als solche gekennzeichnet.
        </p>
      </section>
    </div>
  );
}
