/*
  Warnings:

  - You are about to drop the `game_genres` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "game_genres" DROP CONSTRAINT "game_genres_gameId_fkey";

-- DropForeignKey
ALTER TABLE "game_genres" DROP CONSTRAINT "game_genres_genreId_fkey";

-- DropTable
DROP TABLE "game_genres";

-- CreateTable
CREATE TABLE "game_genders" (
    "gameId" INTEGER NOT NULL,
    "genreId" INTEGER NOT NULL,

    CONSTRAINT "game_genders_pkey" PRIMARY KEY ("gameId","genreId")
);

-- AddForeignKey
ALTER TABLE "game_genders" ADD CONSTRAINT "game_genders_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_genders" ADD CONSTRAINT "game_genders_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "genres"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
