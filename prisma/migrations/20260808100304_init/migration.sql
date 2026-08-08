-- CreateEnum
CREATE TYPE "Effort" AS ENUM ('NIEDRIG', 'MITTEL', 'HOCH');

-- CreateEnum
CREATE TYPE "Impact" AS ENUM ('NIEDRIG', 'MITTEL', 'HOCH');

-- CreateTable
CREATE TABLE "Sector" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "detail" TEXT NOT NULL,

    CONSTRAINT "Sector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subsector" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sectorId" TEXT NOT NULL,

    CONSTRAINT "Subsector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppIdea" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "effort" "Effort" NOT NULL,
    "impact" "Impact" NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "AppIdea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnalysisResult" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sourceLabel" TEXT NOT NULL,
    "metrics" JSONB NOT NULL,
    "rationale" TEXT NOT NULL,
    "recommendedIdeaId" TEXT,

    CONSTRAINT "AnalysisResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SectorToAppIdea" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_SectorToAppIdea_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sector_slug_key" ON "Sector"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Subsector_slug_key" ON "Subsector"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "AppIdea_slug_key" ON "AppIdea"("slug");

-- CreateIndex
CREATE INDEX "_SectorToAppIdea_B_index" ON "_SectorToAppIdea"("B");

-- AddForeignKey
ALTER TABLE "Subsector" ADD CONSTRAINT "Subsector_sectorId_fkey" FOREIGN KEY ("sectorId") REFERENCES "Sector"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnalysisResult" ADD CONSTRAINT "AnalysisResult_recommendedIdeaId_fkey" FOREIGN KEY ("recommendedIdeaId") REFERENCES "AppIdea"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SectorToAppIdea" ADD CONSTRAINT "_SectorToAppIdea_A_fkey" FOREIGN KEY ("A") REFERENCES "AppIdea"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SectorToAppIdea" ADD CONSTRAINT "_SectorToAppIdea_B_fkey" FOREIGN KEY ("B") REFERENCES "Sector"("id") ON DELETE CASCADE ON UPDATE CASCADE;
