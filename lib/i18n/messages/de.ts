const de = {
  meta: {
    title: "WebSurface — App-Ideen für den Mittelstand",
    description:
      "WebSurface findet passende App-Konzepte für mittelständische Unternehmen — branchenbasiert oder per Analyse anonymisierter Geschäftsdaten.",
  },
  nav: {
    onboarding: "Branchen wählen",
    ideen: "App-Ideen",
    analyse: "Datenanalyse",
    impressum: "Impressum",
    datenschutz: "Datenschutz",
  },
  footer: {
    copyright: "© {year} WebSurface — Prototyp, kein produktives Angebot",
  },
  languageSwitcher: {
    label: "Sprache wählen",
  },
  themeToggle: {
    ariaLabel: "Hell-/Dunkelmodus umschalten",
  },
  branchBadge: {
    none: "Noch keine Branche ausgewählt",
    choose: "Branchen wählen",
    selectedOne: "Ausgewählte Branche",
    selectedMany: "Ausgewählte Branchen",
    change: "Ändern",
  },
  home: {
    eyebrow: "Prototyp — Studienprojekt",
    title: "Passende App-Ideen für Ihr mittelständisches Unternehmen",
    description:
      "WebSurface schlägt geprüfte, praxisnahe App-Konzepte vor — entweder anhand Ihrer Branche oder, optional, anhand einer echten Analyse anonymisierter Geschäftsdaten. WebSurface generiert keinen automatischen Produktivcode, sondern belastbare Konzept-Briefs als Entscheidungsgrundlage.",
    ctaBranch: "Branche auswählen",
    ctaAnalyse: "Geschäftsdaten analysieren",
    sectorsTitle: "Die vier Kernbereiche des Mittelstands",
    sectors: [
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
    ],
    privacyTitle: "Datenschutz & Transparenz",
    privacyBodyPre:
      "Bei der optionalen Datenanalyse werden Rohdaten ausschließlich im Arbeitsspeicher verarbeitet und nicht dauerhaft gespeichert — es entstehen nur aggregierte Kennzahlen. Empfehlungen werden regelbasiert erzeugt und automatisiert gekennzeichnet. Details siehe",
    privacyLinkText: "Datenschutzerklärung",
  },
  onboarding: {
    title: "Welche Kernbereiche betreffen Ihr Unternehmen?",
    description:
      "Wählen Sie einen oder mehrere Kernbereiche des Mittelstands aus. Die Unterbranchen sind optional und verfeinern nur die Beschreibung — die Ideen-Zuordnung erfolgt aktuell auf Ebene der Kernbereiche.",
    submit: "App-Ideen anzeigen",
  },
  ideen: {
    titleFiltered: "Passende App-Ideen",
    titleAll: "Alle App-Ideen",
    filteredBy: "Gefiltert nach: {names}",
    changeSelection: "Auswahl ändern",
    noIdeas: "Keine Ideen für diese Auswahl gefunden.",
    effort: {
      NIEDRIG: "Niedriger Aufwand",
      MITTEL: "Mittlerer Aufwand",
      HOCH: "Hoher Aufwand",
    },
    impact: {
      NIEDRIG: "Geringer Nutzen",
      MITTEL: "Mittlerer Nutzen",
      HOCH: "Hoher Nutzen",
    },
  },
  analyse: {
    title: "Geschäftsdaten analysieren",
    description:
      "Laden Sie eine CSV-Datei mit Verkaufsdaten hoch (Spalten: Datum, Kategorie, Produkt, Menge, Umsatz). Die Datei wird ausschließlich im Arbeitsspeicher des Servers verarbeitet und danach verworfen — gespeichert werden nur aggregierte Kennzahlen, keine Einzeldaten.",
    noticePre:
      "Bitte laden Sie ausschließlich anonymisierte Daten ohne Personenbezug hoch (keine Namen, Kundennummern o.Ä.). Details siehe",
    noticeLinkText: "Datenschutzerklärung",
    csvLabel: "CSV-Datei",
    sampleButton: "Beispieldaten verwenden (fiktiver Einzelhändler)",
    selectedFile: "Ausgewählt: {name} ({size} KB)",
    consentLabel: "Ich bestätige, dass diese Daten anonymisiert sind und keinen Personenbezug enthalten.",
    submitting: "Analysiere…",
    submit: "Analyse starten",
    errorUnknownAnalysis: "Unbekannter Fehler bei der Analyse.",
    errorUnknown: "Unbekannter Fehler.",
    automatedLabel: "Automatisiert erstellte Empfehlung",
    noRecommendation: "Keine Empfehlung ermittelt",
    metricsTitle: "Berechnete Kennzahlen",
    rowCount: "Datenzeilen",
    totalRevenue: "Gesamtumsatz",
    revenueByCategory: "Umsatz je Kategorie",
    seasonality: "Saisonalität je Kategorie (Faktor Höchst-/Tiefstmonat)",
    rawDataNotice: "Rohdaten wurden nicht gespeichert — nur die oben gezeigten aggregierten Kennzahlen.",
  },
  impressum: {
    title: "Impressum",
    noticePre: "Hinweis (Prototyp):",
    noticeBody:
      "Dieses Projekt ist ein Studien-/Portfolio-Prototyp ohne realen Geschäftsbetrieb. Alle mit",
    noticePost:
      "markierten Angaben sind Platzhalter. Vor einem echten produktiven Einsatz müssen sie durch geprüfte, echte Angaben ersetzt werden — nichts an dieser Seite ist eine reale Anbieterkennzeichnung.",
    sections: {
      provider: {
        title: "Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)",
        lines: ["[Firmenname / Rechtsform]", "[Straße, Hausnummer]", "[Postleitzahl, Ort]", "[Land]"],
      },
      represented: {
        title: "Vertreten durch",
        lines: ["[Vor- und Nachname der Geschäftsführung]"],
      },
      contact: {
        title: "Kontakt",
        lines: ["Telefon: [Telefonnummer]", "E-Mail: [E-Mail-Adresse]"],
      },
      register: {
        title: "Registereintrag",
        lines: [
          "Eintragung im Handelsregister [falls zutreffend].",
          "Registergericht: [Registergericht]",
          "Registernummer: [Registernummer]",
        ],
      },
      vat: {
        title: "Umsatzsteuer-Identifikationsnummer",
        body: "Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: [USt-IdNr., falls vorhanden]",
      },
      responsible: {
        title: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
        body: "Entfällt — diese Website bietet keine journalistisch-redaktionellen Inhalte an.",
      },
      dispute: {
        title: "EU-Streitschlichtung",
        bodyPre: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, abrufbar unter",
        bodyUrl: "ec.europa.eu/consumers/odr",
        bodyPost:
          "WebSurface richtet sich ausschließlich an Unternehmen (B2B), sodass keine gesetzliche Pflicht zur Nennung besteht — wir weisen dennoch transparent darauf hin. Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
      },
      liabilityContent: {
        title: "Haftung für Inhalte",
        body: "Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.",
      },
      liabilityLinks: {
        title: "Haftung für Links",
        body: "Diese App enthält aktuell keine Links auf externe Inhalte Dritter. Sollten künftig Links eingebunden werden, gilt: Für die Inhalte der verlinkten Seiten ist ausschließlich deren Betreiber verantwortlich.",
      },
      copyright: {
        title: "Urheberrecht",
        body: "Die durch die Betreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter (z. B. Open-Source-Bibliotheken) sind als solche gekennzeichnet.",
      },
    },
  },
  datenschutz: {
    title: "Datenschutzerklärung",
    noticePre: "Hinweis (Prototyp):",
    noticeBody:
      "Diese Erklärung beschreibt transparent den tatsächlichen Stand dieses Prototyps — inklusive der Punkte, die für einen echten Produktivbetrieb noch fehlen. Es werden bewusst keine Mechanismen behauptet, die im Code nicht existieren.",
    sections: {
      controller: {
        title: "1. Verantwortlicher",
        bodyPre: "Verantwortlich im Sinne der DSGVO ist der Betreiber dieser Anwendung, siehe",
        linkText: "Impressum",
        bodyPost: "([Platzhalter-Angaben im Prototyp]).",
      },
      logs: {
        title: "2. Server-Logfiles",
        body: "Beim Aufruf dieser Anwendung verarbeitet der Hosting-Server technisch notwendig IP-Adresse, Zeitpunkt des Zugriffs und User-Agent, um den Betrieb sicherzustellen (Art. 6 Abs. 1 lit. f DSGVO, berechtigtes Interesse an Betriebssicherheit). Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.",
      },
      onboarding: {
        title: "3. Branchenauswahl (Onboarding)",
        bodyPre: "Ihre Auswahl der Kernbereiche/Unterbranchen wird als URL-Parameter zwischen den Seiten weitergegeben und zusätzlich im",
        code: "localStorage",
        bodyPost:
          "Ihres Browsers gespeichert, damit sie seitenübergreifend oben angezeigt werden kann. Diese Daten verbleiben ausschließlich auf Ihrem Gerät und werden nicht an den Server übertragen oder personenbezogen serverseitig gespeichert.",
      },
      analysis: {
        title: "4. Optionale Datenanalyse (CSV-Upload)",
        intro: "Wenn Sie freiwillig eine CSV-Datei zur Analyse hochladen, gilt:",
        items: [
          "Die Datei wird ausschließlich im Arbeitsspeicher des Servers verarbeitet (lib/csv-analysis.ts) und danach verworfen — es erfolgt keine Speicherung der Rohdaten oder einzelner Zeilen auf Datenträgern.",
          "Gespeichert werden ausschließlich die aggregierten Kennzahlen (z. B. Umsatz je Kategorie und Monat) sowie die daraus abgeleitete Empfehlung — ohne Personenbezug.",
          "Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) über die Bestätigungs-Checkbox beim Upload.",
          "Verantwortung der hochladenden Person: Sie bestätigen beim Upload, dass die Datei anonymisiert ist und keinen Personenbezug enthält. Laden Sie keine Kundendaten, Namen, Kundennummern oder vergleichbare personenbezogene Daten hoch. Sollte eine hochgeladene Datei dennoch personenbezogene Daten enthalten, bliebe das hochladende Unternehmen dafür als datenschutzrechtlich Verantwortlicher zuständig — für den Produktivbetrieb wäre in diesem Fall eine Auftragsverarbeitungsvereinbarung (AVV) nach Art. 28 DSGVO erforderlich, die im aktuellen Prototypstadium nicht besteht.",
        ],
      },
      automated: {
        title: "5. Automatisiert erstellte Empfehlungen (Art. 22 DSGVO, EU AI Act)",
        body: "Die App-Empfehlung nach einer Analyse wird durch eine regelbasierte, nicht lernende Logik erzeugt (kein KI-System im Sinne des EU AI Act im Auslieferungszustand dieses Prototyps). Es handelt sich um einen Vorschlag zur menschlichen Prüfung, nicht um eine automatisierte Entscheidung mit rechtlicher Wirkung im Sinne von Art. 22 DSGVO. Sollte künftig ein KI-/LLM-basiertes Modell angebunden werden, würde dies hier ergänzt und entsprechend den Transparenzpflichten des EU AI Act gekennzeichnet.",
      },
      retention: {
        title: "6. Speicherdauer",
        bodyPre: "Im aktuellen Entwicklungsstand werden aggregierte Analyseergebnisse in der lokalen Datenbank gespeichert und",
        emphasis: "nicht automatisiert gelöscht",
        bodyPost: "— ein Löschjob ist noch nicht implementiert. Für einen Produktivbetrieb ist eine automatische Löschfrist (z. B. 30 Tage) vorgesehen, siehe README.",
      },
      cookies: {
        title: "7. Cookies & Tracking",
        bodyPre: "Diese Anwendung verwendet keine Analyse-, Marketing- oder Tracking-Cookies und keine Drittanbieter-Dienste. Es werden nur technisch notwendige, temporäre Session-Daten des Frameworks verwendet. Zusätzlich speichert die App Ihre Branchenauswahl, Ihre Hell-/Dunkelmodus-Einstellung und Ihre Sprachauswahl rein clientseitig im",
        code: "localStorage",
        bodyPost: "Ihres Browsers bzw. in einem rein technischen Cookie zur Sprachauswahl (keine Analyse- oder Tracking-Cookies, keine Übertragung an Dritte). Ein Cookie-Consent-Banner nach § 25 TTDSG ist daher nicht erforderlich.",
      },
      hosting: {
        title: "8. Hosting",
        bodyPre: "Im lokalen Entwicklungsbetrieb läuft diese Anwendung ausschließlich auf Ihrem eigenen Rechner. Für einen produktiven Betrieb ist ein Hosting in der EU (z. B. AWS-Region eu-central-1, Frankfurt) vorgesehen, siehe",
        code: "infra/",
        bodyPost: "-Verzeichnis.",
      },
      rights: {
        title: "9. Ihre Rechte",
        bodyPre: "Sie haben nach Art. 15–21 DSGVO das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung. Wenden Sie sich hierzu an die im",
        linkText: "Impressum",
        bodyPost: "genannte Kontaktadresse. Zudem besteht ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde.",
      },
    },
  },
};

export default de;
export type Messages = typeof de;
