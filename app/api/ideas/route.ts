import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const sectorsParam = request.nextUrl.searchParams.get("sectors");
  const sectorSlugs = sectorsParam
    ? sectorsParam.split(",").map((s) => s.trim()).filter(Boolean)
    : [];

  const ideas = await prisma.appIdea.findMany({
    where: sectorSlugs.length
      ? { sectors: { some: { slug: { in: sectorSlugs } } } }
      : undefined,
    include: { sectors: { select: { slug: true, name: true } } },
    orderBy: { title: "asc" },
  });

  return NextResponse.json(ideas);
}
