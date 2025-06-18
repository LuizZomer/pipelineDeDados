import { PrismaClient } from "../prisma/generated/prisma/index.js";

const prisma = new PrismaClient();

async function countRows() {
  try {
    const counts = {
      achievement_unlocked: await prisma.unlockedAchievement.count(),
      achievement: await prisma.achievement.count(),
      dlc: await prisma.dlc.count(),
      purchase: await prisma.purchase.count(),
      review: await prisma.review.count(),
      game_tags: await prisma.gameTag.count(),
      game_platforms: await prisma.gamePlatform.count(),
      game_genders: await prisma.gameGender.count(),
      tag: await prisma.tag.count(),
      platform: await prisma.platform.count(),
      gender: await prisma.gender.count(),
      game: await prisma.game.count(),
      developer: await prisma.developer.count(),
      user: await prisma.user.count(),
    };

    console.table(counts);
  } catch (error) {
    console.error("Erro ao contar registros:", error);
  } finally {
    await prisma.$disconnect();
  }
}

countRows();
