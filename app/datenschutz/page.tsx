export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        Datenschutzerklärung
      </h1>

      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-900 dark:bg-amber-950/60 dark:text-amber-200">
        <strong>Hinweis (Prototyp):</strong> Diese Erklärung beschreibt
        transparent den tatsächlichen Stand dieses Prototyps — inklusive der
        Punkte, die für einen echten Produktivbetrieb noch fehlen. Es werden
        bewusst keine Mechanismen behauptet, die im Code nicht existieren.
      </div>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          1. Verantwortlicher
        </h2>
        <p>
          Verantwortlich im Sinne der DSGVO ist der Betreiber dieser
          Anwendung, siehe{" "}
          <a href="/impressum" className="underline">
            Impressum
          </a>{" "}
          ([Platzhalter-Angaben im Prototyp]).
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          2. Server-Logfiles
        </h2>
        <p>
          Beim Aufruf dieser Anwendung verarbeitet der Hosting-Server
          technisch notwendig IP-Adresse, Zeitpunkt des Zugriffs und
          User-Agent, um den Betrieb sicherzustellen (Art. 6 Abs. 1 lit. f
          DSGVO, berechtigtes Interesse an Betriebssicherheit). Diese Daten
          werden nicht mit anderen Datenquellen zusammengeführt.
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          3. Branchenauswahl (Onboarding)
        </h2>
        <p>
          Ihre Auswahl der Kernbereiche/Unterbranchen wird als URL-Parameter
          zwischen den Seiten weitergegeben und zusätzlich im
          <code>localStorage</code> Ihres Browsers gespeichert, damit sie
          seitenübergreifend oben angezeigt werden kann. Diese Daten
          verbleiben ausschließlich auf Ihrem Gerät und werden nicht an den
          Server übertragen oder personenbezogen serverseitig gespeichert.
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          4. Optionale Datenanalyse (CSV-Upload)
        </h2>
        <p>
          Wenn Sie freiwillig eine CSV-Datei zur Analyse hochladen, gilt:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Die Datei wird ausschließlich im Arbeitsspeicher des Servers
            verarbeitet (<code>lib/csv-analysis.ts</code>) und danach
            verworfen — es erfolgt keine Speicherung der Rohdaten oder
            einzelner Zeilen auf Datenträgern.
          </li>
          <li>
            Gespeichert werden ausschließlich die aggregierten Kennzahlen
            (z. B. Umsatz je Kategorie und Monat) sowie die daraus
            abgeleitete Empfehlung — ohne Personenbezug.
          </li>
          <li>
            Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a
            DSGVO) über die Bestätigungs-Checkbox beim Upload.
          </li>
          <li>
            <strong>Verantwortung der hochladenden Person:</strong> Sie
            bestätigen beim Upload, dass die Datei anonymisiert ist und
            keinen Personenbezug enthält. Laden Sie keine Kundendaten,
            Namen, Kundennummern oder vergleichbare personenbezogene Daten
            hoch. Sollte eine hochgeladene Datei dennoch personenbezogene
            Daten enthalten, bliebe das hochladende Unternehmen dafür als
            datenschutzrechtlich Verantwortlicher zuständig — für den
            Produktivbetrieb wäre in diesem Fall eine
            Auftragsverarbeitungsvereinbarung (AVV) nach Art. 28 DSGVO
            erforderlich, die im aktuellen Prototypstadium nicht besteht.
          </li>
        </ul>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          5. Automatisiert erstellte Empfehlungen (Art. 22 DSGVO, EU AI Act)
        </h2>
        <p>
          Die App-Empfehlung nach einer Analyse wird durch eine
          <strong> regelbasierte, nicht lernende Logik</strong> erzeugt (kein
          KI-System im Sinne des EU AI Act im Auslieferungszustand dieses
          Prototyps). Es handelt sich um einen Vorschlag zur
          menschlichen Prüfung, nicht um eine automatisierte
          Entscheidung mit rechtlicher Wirkung im Sinne von Art. 22 DSGVO.
          Sollte künftig ein KI-/LLM-basiertes Modell angebunden werden,
          würde dies hier ergänzt und entsprechend den Transparenzpflichten
          des EU AI Act gekennzeichnet.
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          6. Speicherdauer
        </h2>
        <p>
          Im aktuellen Entwicklungsstand werden aggregierte Analyseergebnisse
          in der lokalen Datenbank gespeichert und{" "}
          <strong>nicht automatisiert gelöscht</strong> — ein Löschjob ist
          noch nicht implementiert. Für einen Produktivbetrieb ist eine
          automatische Löschfrist (z. B. 30 Tage) vorgesehen, siehe README.
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          7. Cookies & Tracking
        </h2>
        <p>
          Diese Anwendung verwendet keine Analyse-, Marketing- oder
          Tracking-Cookies und keine Drittanbieter-Dienste. Es werden nur
          technisch notwendige, temporäre Session-Daten des Frameworks
          verwendet. Zusätzlich speichert die App Ihre Branchenauswahl und
          Ihre Hell-/Dunkelmodus-Einstellung rein clientseitig im
          <code>localStorage</code> Ihres Browsers (keine Cookies, keine
          Übertragung an den Server, kein Tracking). Ein
          Cookie-Consent-Banner nach § 25 TTDSG ist daher nicht erforderlich.
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          8. Hosting
        </h2>
        <p>
          Im lokalen Entwicklungsbetrieb läuft diese Anwendung ausschließlich
          auf Ihrem eigenen Rechner. Für einen produktiven Betrieb ist ein
          Hosting in der EU (z. B. AWS-Region eu-central-1, Frankfurt)
          vorgesehen, siehe <code>infra/</code>-Verzeichnis.
        </p>
      </section>

      <section className="mt-8 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          9. Ihre Rechte
        </h2>
        <p>
          Sie haben nach Art. 15–21 DSGVO das Recht auf Auskunft,
          Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung.
          Wenden Sie sich hierzu an die im{" "}
          <a href="/impressum" className="underline">
            Impressum
          </a>{" "}
          genannte Kontaktadresse. Zudem besteht ein Beschwerderecht bei
          der zuständigen Datenschutzaufsichtsbehörde.
        </p>
      </section>
    </div>
  );
}
