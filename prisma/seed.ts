import { PrismaClient, Effort, Impact } from "@prisma/client";

const prisma = new PrismaClient();

type SeedSector = {
  slug: string;
  name: string;
  detail: string;
  subsectors: { slug: string; name: string }[];
  ideas: {
    slug: string;
    title: string;
    description: string;
    effort: Effort;
    impact: Impact;
    tags: string[];
  }[];
};

const sectors: SeedSector[] = [
  {
    slug: "dienstleistungen",
    name: "Dienstleistungen",
    detail:
      "Größte Gruppe des Mittelstands — u.a. unternehmensnahe Dienstleistungen wie IT, Beratung, Reinigung und Gebäudeservice.",
    subsectors: [
      { slug: "it-beratung", name: "IT & Unternehmensberatung" },
      { slug: "reinigung-gebaeudeservice", name: "Reinigung & Gebäudeservice" },
      { slug: "finanz-versicherung", name: "Finanz- & Versicherungsdienstleistungen" },
      { slug: "personaldienstleistungen", name: "Personaldienstleistungen & Zeitarbeit" },
      { slug: "gesundheit-pflege", name: "Gesundheits- & Pflegedienstleistungen" },
    ],
    ideas: [
      {
        slug: "einsatz-ressourcenplanung",
        title: "Einsatz- & Ressourcenplanung",
        description:
          "Digitale Disposition von Mitarbeitenden, Fahrzeugen und Terminen mit Konfliktprüfung — ersetzt Excel-Dienstpläne.",
        effort: Effort.MITTEL,
        impact: Impact.HOCH,
        tags: ["Disposition", "Mobil"],
      },
      {
        slug: "digitale-leistungserfassung",
        title: "Digitale Leistungserfassung & Rapportzettel",
        description:
          "Mobile Erfassung erbrachter Leistungen inkl. Kunden-Unterschrift, direkt anschlussfähig an die Rechnungsstellung.",
        effort: Effort.NIEDRIG,
        impact: Impact.HOCH,
        tags: ["Mobil", "Abrechnung"],
      },
      {
        slug: "kundenportal-self-service",
        title: "Kundenportal mit Self-Service",
        description:
          "Kund:innen sehen Rechnungen, Verträge und Ticket-Status selbst ein — entlastet Support und Buchhaltung.",
        effort: Effort.MITTEL,
        impact: Impact.MITTEL,
        tags: ["Kundenbindung", "Self-Service"],
      },
      {
        slug: "angebots-auftragsmanagement",
        title: "Angebots- & Auftragsmanagement",
        description:
          "Standardisierte Angebotsvorlagen mit Freigabeprozess und automatischer Umwandlung in Aufträge.",
        effort: Effort.NIEDRIG,
        impact: Impact.MITTEL,
        tags: ["Vertrieb"],
      },
      {
        slug: "wissensmanagement",
        title: "Wissensmanagement / durchsuchbare Dokumentation",
        description:
          "Zentrale, versionierte Wissensdatenbank für Verfahrensanweisungen und Kunden-Know-how statt verstreuter Dateien.",
        effort: Effort.NIEDRIG,
        impact: Impact.MITTEL,
        tags: ["Wissen", "Onboarding"],
      },
      {
        slug: "qualitaets-beschwerdemanagement",
        title: "Qualitäts- & Beschwerdemanagement",
        description:
          "Strukturierte Erfassung, Nachverfolgung und Auswertung von Reklamationen inkl. Ursachenanalyse.",
        effort: Effort.MITTEL,
        impact: Impact.MITTEL,
        tags: ["Qualität"],
      },
    ],
  },
  {
    slug: "handel",
    name: "Handel",
    detail: "Großhandel, Einzelhandel und Kfz-Handel — eine der klassischen Säulen des Mittelstands.",
    subsectors: [
      { slug: "grosshandel", name: "Großhandel" },
      { slug: "einzelhandel", name: "Einzelhandel" },
      { slug: "kfz-handel", name: "Kfz-Handel" },
      { slug: "e-commerce-multichannel", name: "E-Commerce & Multichannel" },
    ],
    ideas: [
      {
        slug: "lager-bestandsmanagement",
        title: "Lager- & Bestandsmanagement mit Nachbestell-Alarm",
        description:
          "Echtzeit-Bestandsübersicht mit automatischen Nachbestell-Schwellenwerten je Artikel und Lagerort.",
        effort: Effort.MITTEL,
        impact: Impact.HOCH,
        tags: ["Lager", "Automatisierung"],
      },
      {
        slug: "pos-zentralreporting",
        title: "Kassen-/POS-Integration mit zentralem Reporting",
        description:
          "Umsätze aller Filialen/Kassen laufen in einem Dashboard zusammen — tagesaktuell statt Monatsabschluss.",
        effort: Effort.HOCH,
        impact: Impact.HOCH,
        tags: ["POS", "Reporting"],
      },
      {
        slug: "kundenbindungs-app",
        title: "Kundenbindungs-App (Treuepunkte, Angebote)",
        description:
          "Digitale Kundenkarte mit Punkte-Sammlung und personalisierten Angeboten statt Papier-Stempelkarte.",
        effort: Effort.MITTEL,
        impact: Impact.MITTEL,
        tags: ["Kundenbindung", "Marketing"],
      },
      {
        slug: "bestellvorhersage",
        title: "Bestell- & Nachfrageprognose",
        description:
          "Auswertung historischer Verkaufsdaten (Saisonalität, Trends) zur Optimierung von Einkaufsmengen.",
        effort: Effort.HOCH,
        impact: Impact.HOCH,
        tags: ["Prognose", "Einkauf"],
      },
      {
        slug: "omnichannel-katalog",
        title: "Omnichannel-Produktkatalog",
        description:
          "Ein zentraler Produktdatenstand für Onlineshop, Filiale und Marktplätze — keine widersprüchlichen Preise/Bestände mehr.",
        effort: Effort.HOCH,
        impact: Impact.MITTEL,
        tags: ["E-Commerce", "PIM"],
      },
      {
        slug: "lieferanten-portal",
        title: "Lieferanten-Portal für Bestellabgleich",
        description:
          "Lieferanten sehen offene Bestellungen und melden Liefertermine selbst zurück — weniger Telefon-/E-Mail-Abstimmung.",
        effort: Effort.MITTEL,
        impact: Impact.MITTEL,
        tags: ["Einkauf", "Lieferkette"],
      },
    ],
  },
  {
    slug: "industrie",
    name: "Industrie & Verarbeitendes Gewerbe",
    detail:
      "Zahlenmäßig kleinere Gruppe, aber Herzstück der Wirtschaftsleistung — insbesondere der Maschinenbau.",
    subsectors: [
      { slug: "maschinenbau", name: "Maschinenbau" },
      { slug: "metallverarbeitung", name: "Metallverarbeitung" },
      { slug: "elektrotechnik", name: "Elektrotechnik" },
      { slug: "kunststoffverarbeitung", name: "Kunststoffverarbeitung" },
    ],
    ideas: [
      {
        slug: "anlagenmonitoring",
        title: "Maschinen- & Anlagenmonitoring (Condition Monitoring)",
        description:
          "Sensordaten von Maschinen laufen in ein Dashboard, das Abweichungen früh erkennt und Wartung vorausplant.",
        effort: Effort.HOCH,
        impact: Impact.HOCH,
        tags: ["IoT", "Wartung"],
      },
      {
        slug: "digitales-schichtbuch",
        title: "Digitales Schichtbuch & Störungsdokumentation",
        description:
          "Störungen, Übergaben und Maßnahmen werden mobil erfasst statt im Papier-Schichtbuch — durchsuchbar und auswertbar.",
        effort: Effort.NIEDRIG,
        impact: Impact.MITTEL,
        tags: ["Produktion", "Mobil"],
      },
      {
        slug: "qm-pruefprotokolle",
        title: "Digitale QM-Prüfprotokolle",
        description:
          "Prüfschritte und -ergebnisse werden digital erfasst und sind für Audits (z.B. ISO 9001) lückenlos nachvollziehbar.",
        effort: Effort.MITTEL,
        impact: Impact.HOCH,
        tags: ["Qualität", "Audit"],
      },
      {
        slug: "produktionsfeinplanung",
        title: "Produktionsplanung & Kapazitätsauslastung",
        description:
          "Visuelle Feinplanung von Aufträgen auf Maschinen/Linien inkl. Engpass-Erkennung.",
        effort: Effort.HOCH,
        impact: Impact.HOCH,
        tags: ["Planung"],
      },
      {
        slug: "instandhaltungsmanagement",
        title: "Ersatzteil- & Instandhaltungsmanagement",
        description:
          "Zentrale Verwaltung von Ersatzteilen, Wartungsintervallen und Serviceaufträgen je Anlage.",
        effort: Effort.MITTEL,
        impact: Impact.MITTEL,
        tags: ["Instandhaltung"],
      },
      {
        slug: "energiemonitoring",
        title: "Energie- & Verbrauchsmonitoring",
        description:
          "Erfassung des Energieverbrauchs je Anlage/Linie zur Identifikation von Einsparpotenzialen.",
        effort: Effort.MITTEL,
        impact: Impact.MITTEL,
        tags: ["Energie", "Nachhaltigkeit"],
      },
    ],
  },
  {
    slug: "bau-handwerk",
    name: "Baugewerbe & Handwerk",
    detail:
      "Prägen die regionale Wirtschaft und bilden einen Großteil der Auszubildenden aus.",
    subsectors: [
      { slug: "bauhauptgewerbe", name: "Bauhauptgewerbe" },
      { slug: "ausbaugewerbe", name: "Ausbaugewerbe" },
      { slug: "elektro-shk-handwerk", name: "Elektro- & SHK-Handwerk" },
      { slug: "tischlerei-schreinerei", name: "Tischlerei & Schreinerei" },
      { slug: "kfz-handwerk", name: "Kfz-Handwerk" },
    ],
    ideas: [
      {
        slug: "baustellendokumentation",
        title: "Baustellendokumentation (Fotos, Bautagebuch)",
        description:
          "Mobile Erfassung von Baufortschritt, Fotos und Vorkommnissen direkt auf der Baustelle statt im Büro nacherfasst.",
        effort: Effort.NIEDRIG,
        impact: Impact.HOCH,
        tags: ["Mobil", "Dokumentation"],
      },
      {
        slug: "aufmass-angebotserstellung",
        title: "Aufmaß- & Angebotserstellung mobil",
        description:
          "Aufmaße werden direkt vor Ort erfasst und fließen automatisch in ein Angebot — kein doppeltes Erfassen.",
        effort: Effort.MITTEL,
        impact: Impact.HOCH,
        tags: ["Angebot", "Mobil"],
      },
      {
        slug: "material-werkzeugverwaltung",
        title: "Material- & Werkzeugverwaltung",
        description:
          "Übersicht, welches Werkzeug/Material sich auf welcher Baustelle befindet — reduziert Such- und Ersatzkäufe.",
        effort: Effort.NIEDRIG,
        impact: Impact.MITTEL,
        tags: ["Lager", "Baustelle"],
      },
      {
        slug: "personaleinsatzplanung-baustelle",
        title: "Personaleinsatzplanung auf Baustellen",
        description:
          "Wochenplanung, welche Kolonne wann auf welcher Baustelle eingesetzt ist, inkl. Qualifikationsabgleich.",
        effort: Effort.MITTEL,
        impact: Impact.HOCH,
        tags: ["Disposition"],
      },
      {
        slug: "digitale-checklisten-abnahme",
        title: "Digitale Checklisten & Abnahmeprotokolle",
        description:
          "Standardisierte, digital unterschriebene Abnahmeprotokolle statt Klemmbrett und Papierformular.",
        effort: Effort.NIEDRIG,
        impact: Impact.MITTEL,
        tags: ["Abnahme", "Qualität"],
      },
      {
        slug: "rechnung-nach-aufmass",
        title: "Rechnungsstellung nach Aufmaß/Stundenzettel",
        description:
          "Erfasste Aufmaße und Stunden werden direkt zu einer prüfbaren Rechnung zusammengeführt.",
        effort: Effort.MITTEL,
        impact: Impact.HOCH,
        tags: ["Abrechnung"],
      },
    ],
  },
];

async function main() {
  for (const sector of sectors) {
    const createdSector = await prisma.sector.upsert({
      where: { slug: sector.slug },
      update: { name: sector.name, detail: sector.detail },
      create: { slug: sector.slug, name: sector.name, detail: sector.detail },
    });

    for (const sub of sector.subsectors) {
      await prisma.subsector.upsert({
        where: { slug: sub.slug },
        update: { name: sub.name, sectorId: createdSector.id },
        create: { slug: sub.slug, name: sub.name, sectorId: createdSector.id },
      });
    }

    for (const idea of sector.ideas) {
      await prisma.appIdea.upsert({
        where: { slug: idea.slug },
        update: {
          title: idea.title,
          description: idea.description,
          effort: idea.effort,
          impact: idea.impact,
          tags: idea.tags,
          sectors: { connect: [{ id: createdSector.id }] },
        },
        create: {
          slug: idea.slug,
          title: idea.title,
          description: idea.description,
          effort: idea.effort,
          impact: idea.impact,
          tags: idea.tags,
          sectors: { connect: [{ id: createdSector.id }] },
        },
      });
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
