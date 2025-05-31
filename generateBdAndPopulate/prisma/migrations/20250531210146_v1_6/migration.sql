/*
  Warnings:

  - You are about to drop the `_Jogo_Generos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Jogo_Plataformas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Jogo_Tags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Jogo_Generos" DROP CONSTRAINT "_Jogo_Generos_A_fkey";

-- DropForeignKey
ALTER TABLE "_Jogo_Generos" DROP CONSTRAINT "_Jogo_Generos_B_fkey";

-- DropForeignKey
ALTER TABLE "_Jogo_Plataformas" DROP CONSTRAINT "_Jogo_Plataformas_A_fkey";

-- DropForeignKey
ALTER TABLE "_Jogo_Plataformas" DROP CONSTRAINT "_Jogo_Plataformas_B_fkey";

-- DropForeignKey
ALTER TABLE "_Jogo_Tags" DROP CONSTRAINT "_Jogo_Tags_A_fkey";

-- DropForeignKey
ALTER TABLE "_Jogo_Tags" DROP CONSTRAINT "_Jogo_Tags_B_fkey";

-- DropTable
DROP TABLE "_Jogo_Generos";

-- DropTable
DROP TABLE "_Jogo_Plataformas";

-- DropTable
DROP TABLE "_Jogo_Tags";

-- CreateTable
CREATE TABLE "jogo_generos" (
    "jogoId" INTEGER NOT NULL,
    "generoId" INTEGER NOT NULL,

    CONSTRAINT "jogo_generos_pkey" PRIMARY KEY ("jogoId","generoId")
);

-- CreateTable
CREATE TABLE "jogo_tags" (
    "jogoId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "jogo_tags_pkey" PRIMARY KEY ("jogoId","tagId")
);

-- CreateTable
CREATE TABLE "jogo_plataformas" (
    "jogoId" INTEGER NOT NULL,
    "plataformaId" INTEGER NOT NULL,

    CONSTRAINT "jogo_plataformas_pkey" PRIMARY KEY ("jogoId","plataformaId")
);

-- AddForeignKey
ALTER TABLE "jogo_generos" ADD CONSTRAINT "jogo_generos_jogoId_fkey" FOREIGN KEY ("jogoId") REFERENCES "Jogo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jogo_generos" ADD CONSTRAINT "jogo_generos_generoId_fkey" FOREIGN KEY ("generoId") REFERENCES "Genero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jogo_tags" ADD CONSTRAINT "jogo_tags_jogoId_fkey" FOREIGN KEY ("jogoId") REFERENCES "Jogo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jogo_tags" ADD CONSTRAINT "jogo_tags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jogo_plataformas" ADD CONSTRAINT "jogo_plataformas_jogoId_fkey" FOREIGN KEY ("jogoId") REFERENCES "Jogo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jogo_plataformas" ADD CONSTRAINT "jogo_plataformas_plataformaId_fkey" FOREIGN KEY ("plataformaId") REFERENCES "Plataforma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
