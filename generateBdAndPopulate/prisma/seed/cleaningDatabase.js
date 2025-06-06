import prisma from "../client.js";

export const cleaningDatabase = async () => {
  console.log("Cleaning database...");

  await prisma.$executeRawUnsafe(`
  TRUNCATE TABLE 
    achievement_unlocked,
    achievements,
    dlcs,
    purchases,
    reviews,
    game_tags,
    game_platforms,
    game_genders,
    tags,
    platforms,
    genders,
    games,
    developers,
    "users"
  RESTART IDENTITY CASCADE;
`);
};
