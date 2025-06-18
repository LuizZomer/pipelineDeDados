/*
  Warnings:

  - The primary key for the `Avaliacao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Avaliacao` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Compra` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Compra` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Conquista` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Conquista` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ConquistaDesbloqueada` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ConquistaDesbloqueada` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Desenvolvedora` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Desenvolvedora` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Dlc` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Dlc` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Genero` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Genero` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Jogo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Jogo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Plataforma` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Plataforma` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Tag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Tag` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Usuario` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `_JogoGeneros` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `_JogoPlataformas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `_JogoTags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `usuarioId` on the `Avaliacao` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `jogoId` on the `Avaliacao` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `usuarioId` on the `Compra` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `jogoId` on the `Compra` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `jogoId` on the `Conquista` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `usuarioId` on the `ConquistaDesbloqueada` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `conquistaId` on the `ConquistaDesbloqueada` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `jogoBaseId` on the `Dlc` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `desenvolvedoraId` on the `Jogo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_JogoGeneros` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_JogoGeneros` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_JogoPlataformas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_JogoPlataformas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_JogoTags` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_JogoTags` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Avaliacao" DROP CONSTRAINT "Avaliacao_jogoId_fkey";

-- DropForeignKey
ALTER TABLE "Avaliacao" DROP CONSTRAINT "Avaliacao_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Compra" DROP CONSTRAINT "Compra_jogoId_fkey";

-- DropForeignKey
ALTER TABLE "Compra" DROP CONSTRAINT "Compra_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Conquista" DROP CONSTRAINT "Conquista_jogoId_fkey";

-- DropForeignKey
ALTER TABLE "ConquistaDesbloqueada" DROP CONSTRAINT "ConquistaDesbloqueada_conquistaId_fkey";

-- DropForeignKey
ALTER TABLE "ConquistaDesbloqueada" DROP CONSTRAINT "ConquistaDesbloqueada_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Dlc" DROP CONSTRAINT "Dlc_jogoBaseId_fkey";

-- DropForeignKey
ALTER TABLE "Jogo" DROP CONSTRAINT "Jogo_desenvolvedoraId_fkey";

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

-- AlterTable
ALTER TABLE "Avaliacao" DROP CONSTRAINT "Avaliacao_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "usuarioId",
ADD COLUMN     "usuarioId" INTEGER NOT NULL,
DROP COLUMN "jogoId",
ADD COLUMN     "jogoId" INTEGER NOT NULL,
ADD CONSTRAINT "Avaliacao_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Compra" DROP CONSTRAINT "Compra_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "usuarioId",
ADD COLUMN     "usuarioId" INTEGER NOT NULL,
DROP COLUMN "jogoId",
ADD COLUMN     "jogoId" INTEGER NOT NULL,
ADD CONSTRAINT "Compra_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Conquista" DROP CONSTRAINT "Conquista_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "jogoId",
ADD COLUMN     "jogoId" INTEGER NOT NULL,
ADD CONSTRAINT "Conquista_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ConquistaDesbloqueada" DROP CONSTRAINT "ConquistaDesbloqueada_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "usuarioId",
ADD COLUMN     "usuarioId" INTEGER NOT NULL,
DROP COLUMN "conquistaId",
ADD COLUMN     "conquistaId" INTEGER NOT NULL,
ADD CONSTRAINT "ConquistaDesbloqueada_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Desenvolvedora" DROP CONSTRAINT "Desenvolvedora_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Desenvolvedora_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Dlc" DROP CONSTRAINT "Dlc_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "jogoBaseId",
ADD COLUMN     "jogoBaseId" INTEGER NOT NULL,
ADD CONSTRAINT "Dlc_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Genero" DROP CONSTRAINT "Genero_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Genero_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Jogo" DROP CONSTRAINT "Jogo_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "desenvolvedoraId",
ADD COLUMN     "desenvolvedoraId" INTEGER NOT NULL,
ADD CONSTRAINT "Jogo_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Plataforma" DROP CONSTRAINT "Plataforma_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Plataforma_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Tag_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_JogoGeneros" DROP CONSTRAINT "_JogoGeneros_AB_pkey",
DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL,
ADD CONSTRAINT "_JogoGeneros_AB_pkey" PRIMARY KEY ("A", "B");

-- AlterTable
ALTER TABLE "_JogoPlataformas" DROP CONSTRAINT "_JogoPlataformas_AB_pkey",
DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL,
ADD CONSTRAINT "_JogoPlataformas_AB_pkey" PRIMARY KEY ("A", "B");

-- AlterTable
ALTER TABLE "_JogoTags" DROP CONSTRAINT "_JogoTags_AB_pkey",
DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL,
ADD CONSTRAINT "_JogoTags_AB_pkey" PRIMARY KEY ("A", "B");

-- CreateIndex
CREATE UNIQUE INDEX "ConquistaDesbloqueada_usuarioId_conquistaId_key" ON "ConquistaDesbloqueada"("usuarioId", "conquistaId");

-- CreateIndex
CREATE INDEX "_JogoGeneros_B_index" ON "_JogoGeneros"("B");

-- CreateIndex
CREATE INDEX "_JogoPlataformas_B_index" ON "_JogoPlataformas"("B");

-- CreateIndex
CREATE INDEX "_JogoTags_B_index" ON "_JogoTags"("B");

-- AddForeignKey
ALTER TABLE "Jogo" ADD CONSTRAINT "Jogo_desenvolvedoraId_fkey" FOREIGN KEY ("desenvolvedoraId") REFERENCES "Desenvolvedora"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_jogoId_fkey" FOREIGN KEY ("jogoId") REFERENCES "Jogo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compra" ADD CONSTRAINT "Compra_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compra" ADD CONSTRAINT "Compra_jogoId_fkey" FOREIGN KEY ("jogoId") REFERENCES "Jogo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conquista" ADD CONSTRAINT "Conquista_jogoId_fkey" FOREIGN KEY ("jogoId") REFERENCES "Jogo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConquistaDesbloqueada" ADD CONSTRAINT "ConquistaDesbloqueada_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConquistaDesbloqueada" ADD CONSTRAINT "ConquistaDesbloqueada_conquistaId_fkey" FOREIGN KEY ("conquistaId") REFERENCES "Conquista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dlc" ADD CONSTRAINT "Dlc_jogoBaseId_fkey" FOREIGN KEY ("jogoBaseId") REFERENCES "Jogo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JogoPlataformas" ADD CONSTRAINT "_JogoPlataformas_A_fkey" FOREIGN KEY ("A") REFERENCES "Jogo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JogoPlataformas" ADD CONSTRAINT "_JogoPlataformas_B_fkey" FOREIGN KEY ("B") REFERENCES "Plataforma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JogoTags" ADD CONSTRAINT "_JogoTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Jogo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JogoTags" ADD CONSTRAINT "_JogoTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JogoGeneros" ADD CONSTRAINT "_JogoGeneros_A_fkey" FOREIGN KEY ("A") REFERENCES "Genero"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JogoGeneros" ADD CONSTRAINT "_JogoGeneros_B_fkey" FOREIGN KEY ("B") REFERENCES "Jogo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
