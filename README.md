# WebSurface — App-Ideen für den Mittelstand (Prototyp)

WebSurface ist ein Studien-/Portfolio-Prototyp: eine Web-App, die
mittelständischen Unternehmen passende App-*Konzepte* vorschlägt — entweder
anhand ausgewählter Branchen oder anhand einer echten Analyse hochgeladener,
anonymisierter Geschäftsdaten. Das ausführliche Produktkonzept inkl.
simulierter CIO-/CDO-Reviews und Iterationen liegt als separates
Konzeptdokument vor (Link siehe Projektbeschreibung).

**Wichtige Abgrenzung:** WebSurface generiert keinen automatischen
Produktivcode für die vorgeschlagenen Apps, sondern geprüfte Konzept-Briefs
als Entscheidungsgrundlage. Ein echter Code-Generator wäre ein späterer
Roadmap-Schritt (siehe Konzeptdokument, Abschnitt „Nicht im Scope“).

## Features in diesem Prototyp

- Branchenauswahl (die vier Kernbereiche des deutschen Mittelstands:
  Dienstleistungen, Handel, Industrie & Verarbeitendes Gewerbe, Baugewerbe &
  Handwerk) mit kuratiertem App-Ideen-Katalog je Branche
- Echte Analyse einer hochgeladenen CSV-Datei mit Verkaufsdaten
  (Saisonalität, Kategorie-Konzentration) und daraus abgeleiteter,
  regelbasierter Empfehlung — keine Blackbox, keine externen API-Calls nötig
- Vollständig ausformuliertes Impressum und eine ehrliche
  Datenschutzerklärung (inkl. offener Punkte, die für den Produktivbetrieb
  noch fehlen — keine Fallen, keine leeren Versprechen)

## Tech-Stack

Next.js 16 (App Router, TypeScript), Tailwind CSS 4, Prisma ORM 6 +
PostgreSQL, `csv-parse`.

## Repository & automatisches Mirroring

Dieses Repo ist mit [github.com/SchludeMarco/websurface](https://github.com/SchludeMarco/websurface)
verbunden. `core.hooksPath` zeigt auf `.githooks/` (statt des nicht
versionierten `.git/hooks/`), damit der Auto-Push-Mechanismus mit dem Repo
mitwandert. Nach einem frischen `git clone` einmalig aktivieren:

```bash
git config core.hooksPath .githooks
```

Jeder lokale Commit wird danach automatisch per `post-commit`-Hook nach
`origin` gepusht — kein manuelles `git push` mehr nötig. Schlägt der Push
fehl (z. B. offline), bleibt der Commit lokal erhalten; siehe
Hook-Ausgabe bzw. `/tmp/websurface-post-commit-push.log`.

## Live-Demo

[websurface.vercel.app](https://websurface.vercel.app) (Vercel + Neon Postgres)

## Lokales Setup

Voraussetzungen: Node.js ≥ 20, Docker Desktop.

```bash
npm install
cp .env.example .env         # lokale DATABASE_URL, siehe docker-compose.yml
docker compose up -d         # startet Postgres lokal
npx prisma migrate dev       # erstellt Schema
npx prisma db seed           # befüllt Branchen + App-Ideen-Katalog
npm run dev                  # http://localhost:3000
```

Zum Testen der Datenanalyse: `/analyse` öffnen und auf „Beispieldaten
verwenden“ klicken — lädt `sample-data/beispiel-handel-verkaufsdaten.csv`
(synthetische, fiktive Verkaufsdaten eines Einzelhändlers). Die eigene CSV
muss die Spalten `Datum,Kategorie,Produkt,Menge,Umsatz` enthalten.

## Datenschutz — Kurzfassung

- Hochgeladene CSV-Dateien werden ausschließlich im Arbeitsspeicher
  verarbeitet (`lib/csv-analysis.ts`), nicht auf Datenträger geschrieben.
- Persistiert werden nur aggregierte Kennzahlen (keine Einzelzeilen, kein
  Personenbezug), siehe `prisma/schema.prisma` (`AnalysisResult.metrics`).
- Die App-Empfehlung ist regelbasiert (`lib/recommendation-engine.ts`), kein
  KI-System im Sinne des EU AI Act — Details siehe `/datenschutz`.
- Vollständige Erklärung inkl. offener Punkte (z. B. fehlende automatische
  Löschfrist im Prototyp): Seite `/datenschutz`.

## AWS-Infrastruktur (Portfolio-Nachweis, nicht deployed)

Der Ordner [`infra/`](./infra) enthält den vollständigen AWS-Zielaufbau als
CDK-Code (TypeScript) — Schwerpunkt Compute & Netzwerk (VPC, ECS/Fargate,
Application Load Balancer) plus RDS, S3 und IAM. Es wurde bewusst **nicht
deployed** (keine AWS-Zugangsdaten in dieser Umgebung vorhanden) — Ziel ist
reviewbarer, `cdk synth`-fähiger Infrastructure-as-Code. Details siehe
[`infra/README.md`](./infra/README.md).

## Projektstruktur

```
app/            Next.js App Router: Seiten + API-Routen
lib/            Prisma-Client, CSV-Analyse, Empfehlungs-Engine
prisma/         Schema, Migrationen, Seed-Skript (Branchen/Ideen-Katalog)
sample-data/    Synthetischer Beispieldatensatz für die Analyse
infra/          AWS CDK Infrastructure-as-Code (nicht deployed)
```

## Nicht im Scope (bewusste Auslassungen für diesen Prototyp)

- Echte Nutzer-Authentifizierung
- Echtes AWS-Deployment
- Echte LLM-Anbindung (die Empfehlungs-Engine ist bewusst regelbasiert und
  austauschbar gehalten, siehe `lib/recommendation-engine.ts`)
- PDF-Export der Konzept-Briefs
- Automatisierte Löschfrist für gespeicherte Analyseergebnisse
