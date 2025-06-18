/*
  Warnings:

  - You are about to drop the column `dataLancamento` on the `Dlc` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `Dlc` table. All the data in the column will be lost.
  - You are about to drop the column `jogoBaseId` on the `Dlc` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Dlc` table. All the data in the column will be lost.
  - You are about to drop the column `preco` on the `Dlc` table. All the data in the column will be lost.
  - You are about to drop the `Avaliacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Compra` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Conquista` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ConquistaDesbloqueada` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Desenvolvedora` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Genero` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Jogo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Plataforma` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `jogo_generos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `jogo_plataformas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `jogo_tags` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `baseGameId` to the `Dlc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Dlc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Dlc` table without a default value. This is not possible if the table is not empty.

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
ALTER TABLE "jogo_generos" DROP CONSTRAINT "jogo_generos_generoId_fkey";

-- DropForeignKey
ALTER TABLE "jogo_generos" DROP CONSTRAINT "jogo_generos_jogoId_fkey";

-- DropForeignKey
ALTER TABLE "jogo_plataformas" DROP CONSTRAINT "jogo_plataformas_jogoId_fkey";

-- DropForeignKey
ALTER TABLE "jogo_plataformas" DROP CONSTRAINT "jogo_plataformas_plataformaId_fkey";

-- DropForeignKey
ALTER TABLE "jogo_tags" DROP CONSTRAINT "jogo_tags_jogoId_fkey";

-- DropForeignKey
ALTER TABLE "jogo_tags" DROP CONSTRAINT "jogo_tags_tagId_fkey";

-- AlterTable
ALTER TABLE "Dlc" DROP COLUMN "dataLancamento",
DROP COLUMN "descricao",
DROP COLUMN "jogoBaseId",
DROP COLUMN "nome",
DROP COLUMN "preco",
ADD COLUMN     "baseGameId" INTEGER NOT NULL,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "releaseDate" TIMESTAMP(3);

-- DropTable
DROP TABLE "Avaliacao";

-- DropTable
DROP TABLE "Compra";

-- DropTable
DROP TABLE "Conquista";

-- DropTable
DROP TABLE "ConquistaDesbloqueada";

-- DropTable
DROP TABLE "Desenvolvedora";

-- DropTable
DROP TABLE "Genero";

-- DropTable
DROP TABLE "Jogo";

-- DropTable
DROP TABLE "Plataforma";

-- DropTable
DROP TABLE "Tag";

-- DropTable
DROP TABLE "Usuario";

-- DropTable
DROP TABLE "jogo_generos";

-- DropTable
DROP TABLE "jogo_plataformas";

-- DropTable
DROP TABLE "jogo_tags";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "releaseDate" TIMESTAMP(3),
    "price" DOUBLE PRECISION NOT NULL,
    "developerId" INTEGER NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Developer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT,

    CONSTRAINT "Developer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Platform" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Platform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genres" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "userId" INTEGER NOT NULL,
    "gameId" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Purchase" (
    "id" SERIAL NOT NULL,
    "purchaseDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paidPrice" DOUBLE PRECISION NOT NULL,
    "userId" INTEGER NOT NULL,
    "gameId" INTEGER NOT NULL,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Achievement" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "points" INTEGER NOT NULL,
    "gameId" INTEGER NOT NULL,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnlockedAchievement" (
    "id" SERIAL NOT NULL,
    "unlockDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "achievementId" INTEGER NOT NULL,

    CONSTRAINT "UnlockedAchievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game_genres" (
    "gameId" INTEGER NOT NULL,
    "genreId" INTEGER NOT NULL,

    CONSTRAINT "game_genres_pkey" PRIMARY KEY ("gameId","genreId")
);

-- CreateTable
CREATE TABLE "game_tags" (
    "gameId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "game_tags_pkey" PRIMARY KEY ("gameId","tagId")
);

-- CreateTable
CREATE TABLE "game_platforms" (
    "gameId" INTEGER NOT NULL,
    "platformId" INTEGER NOT NULL,

    CONSTRAINT "game_platforms_pkey" PRIMARY KEY ("gameId","platformId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UnlockedAchievement_userId_achievementId_key" ON "UnlockedAchievement"("userId", "achievementId");

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_developerId_fkey" FOREIGN KEY ("developerId") REFERENCES "Developer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achievement" ADD CONSTRAINT "Achievement_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnlockedAchievement" ADD CONSTRAINT "UnlockedAchievement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnlockedAchievement" ADD CONSTRAINT "UnlockedAchievement_achievementId_fkey" FOREIGN KEY ("achievementId") REFERENCES "Achievement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dlc" ADD CONSTRAINT "Dlc_baseGameId_fkey" FOREIGN KEY ("baseGameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_genres" ADD CONSTRAINT "game_genres_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_genres" ADD CONSTRAINT "game_genres_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "genres"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_tags" ADD CONSTRAINT "game_tags_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_tags" ADD CONSTRAINT "game_tags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_platforms" ADD CONSTRAINT "game_platforms_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_platforms" ADD CONSTRAINT "game_platforms_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES "Platform"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
