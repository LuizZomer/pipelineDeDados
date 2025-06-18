/*
  Warnings:

  - The primary key for the `game_genders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `genreId` on the `game_genders` table. All the data in the column will be lost.
  - Added the required column `genderId` to the `game_genders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "game_genders" DROP CONSTRAINT "game_genders_genreId_fkey";

-- AlterTable
ALTER TABLE "game_genders" DROP CONSTRAINT "game_genders_pkey",
DROP COLUMN "genreId",
ADD COLUMN     "genderId" INTEGER NOT NULL,
ADD CONSTRAINT "game_genders_pkey" PRIMARY KEY ("gameId", "genderId");

-- AddForeignKey
ALTER TABLE "game_genders" ADD CONSTRAINT "game_genders_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "genders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
