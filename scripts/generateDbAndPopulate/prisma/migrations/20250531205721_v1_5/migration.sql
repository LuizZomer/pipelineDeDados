/*
  Warnings:

  - You are about to drop the `_JogoGeneros` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_JogoPlataformas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_JogoTags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_JogoGeneros" DROP CONSTRAINT "_JogoGeneros_A_fkey";

-- DropForeignKey
ALTER TABLE "_JogoGeneros" DROP CONSTRAINT "_JogoGeneros_B_fkey";

-- DropForeignKey
ALTER TABLE "_JogoPlataformas" DROP CONSTRAINT "_JogoPlataformas_A_fkey";

-- DropForeignKey
ALTER TABLE "_JogoPlataformas" DROP CONSTRAINT "_JogoPlataformas_B_fkey";

-- DropForeignKey
ALTER TABLE "_JogoTags" DROP CONSTRAINT "_JogoTags_A_fkey";

-- DropForeignKey
ALTER TABLE "_JogoTags" DROP CONSTRAINT "_JogoTags_B_fkey";

-- DropTable
DROP TABLE "_JogoGeneros";

-- DropTable
DROP TABLE "_JogoPlataformas";

-- DropTable
DROP TABLE "_JogoTags";

-- CreateTable
CREATE TABLE "_Jogo_Plataformas" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_Jogo_Plataformas_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_Jogo_Tags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_Jogo_Tags_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_Jogo_Generos" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_Jogo_Generos_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_Jogo_Plataformas_B_index" ON "_Jogo_Plataformas"("B");

-- CreateIndex
CREATE INDEX "_Jogo_Tags_B_index" ON "_Jogo_Tags"("B");

-- CreateIndex
CREATE INDEX "_Jogo_Generos_B_index" ON "_Jogo_Generos"("B");

-- AddForeignKey
ALTER TABLE "_Jogo_Plataformas" ADD CONSTRAINT "_Jogo_Plataformas_A_fkey" FOREIGN KEY ("A") REFERENCES "Jogo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Jogo_Plataformas" ADD CONSTRAINT "_Jogo_Plataformas_B_fkey" FOREIGN KEY ("B") REFERENCES "Plataforma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Jogo_Tags" ADD CONSTRAINT "_Jogo_Tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Jogo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Jogo_Tags" ADD CONSTRAINT "_Jogo_Tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Jogo_Generos" ADD CONSTRAINT "_Jogo_Generos_A_fkey" FOREIGN KEY ("A") REFERENCES "Genero"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Jogo_Generos" ADD CONSTRAINT "_Jogo_Generos_B_fkey" FOREIGN KEY ("B") REFERENCES "Jogo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
