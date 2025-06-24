import prisma from "../client.js";

export const cleaningDatabase = async () => {
  console.log("Cleaning database...");

  // Ordem importa: deletar filhos antes dos pais
  await prisma.$executeRawUnsafe(`
    DELETE FROM achievement_unlocked;
    DELETE FROM achievements;
    DELETE FROM dlcs;
    DELETE FROM purchases;
    DELETE FROM reviews;
    DELETE FROM game_tags;
    DELETE FROM game_platforms;
    DELETE FROM game_genders;
    DELETE FROM tags;
    DELETE FROM platforms;
    DELETE FROM genders;
    DELETE FROM games;
    DELETE FROM developers;
    DELETE FROM [users];
  `);

  console.log("Database cleaned.");
};
