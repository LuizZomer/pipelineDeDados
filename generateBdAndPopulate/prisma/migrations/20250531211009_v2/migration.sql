/*
  Warnings:

  - You are about to drop the `genres` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "game_genders" DROP CONSTRAINT "game_genders_genreId_fkey";

-- DropTable
DROP TABLE "genres";

-- CreateTable
CREATE TABLE "genders" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "genders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "game_genders" ADD CONSTRAINT "game_genders_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "genders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
