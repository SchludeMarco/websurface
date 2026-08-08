import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { analyzeSalesCsv, CsvValidationError } from "@/lib/csv-analysis";
import { recommendFromMetrics } from "@/lib/recommendation-engine";

const MAX_FILE_SIZE_BYTES = 2 * 1024 * 1024; // 2 MB — Demo-Datensätze, kein Bulk-Import

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const consent = formData.get("consent");
  if (consent !== "true") {
    return NextResponse.json(
      { error: "Einwilligung (anonymisierte Daten) ist erforderlich." },
      { status: 400 }
    );
  }

  const file = formData.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Keine Datei erhalten." }, { status: 400 });
  }
  if (file.size > MAX_FILE_SIZE_BYTES) {
    return NextResponse.json(
      { error: "Datei ist zu groß (max. 2 MB für diesen Demo-Prototyp)." },
      { status: 400 }
    );
  }

  const csvText = await file.text();

  let metrics;
  try {
    metrics = analyzeSalesCsv(csvText);
  } catch (error) {
    if (error instanceof CsvValidationError) {
      return NextResponse.json({ error: error.message }, { status: 422 });
    }
    return NextResponse.json(
      { error: "Die Datei konnte nicht als CSV gelesen werden." },
      { status: 422 }
    );
  }

  const { ideaSlug, rationale } = recommendFromMetrics(metrics);
  const recommendedIdea = await prisma.appIdea.findUnique({
    where: { slug: ideaSlug },
  });

  // Es wird ausschließlich das aggregierte Ergebnis gespeichert — die
  // Rohdaten (csvText/records) verlassen diesen Funktionsaufruf nicht.
  const analysisResult = await prisma.analysisResult.create({
    data: {
      sourceLabel: file.name,
      metrics: metrics as unknown as object,
      rationale,
      recommendedIdeaId: recommendedIdea?.id,
    },
  });

  return NextResponse.json({
    id: analysisResult.id,
    metrics,
    recommendedIdea,
    rationale,
    automatedNotice:
      "Diese Empfehlung wurde automatisiert und regelbasiert erstellt (keine KI im EU-AI-Act-Sinn) und dient als Entscheidungsvorschlag, keine automatische Entscheidung.",
  });
}
