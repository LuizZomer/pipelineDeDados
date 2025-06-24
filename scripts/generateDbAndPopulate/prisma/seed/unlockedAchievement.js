import { faker } from "@faker-js/faker/locale/pt_BR";
import prisma from "../client.js";

export const unlockedAchievement = async (userIds) => {
  const achievementIds = (
    await prisma.achievement.findMany({ select: { id: true } })
  ).map((a) => a.id);

  const seen = new Set();
  const data = [];

  while (data.length < 5000) {
    const userId = faker.helpers.arrayElement(userIds);
    const achievementId = faker.helpers.arrayElement(achievementIds);
    const key = `${userId}-${achievementId}`;

    if (!seen.has(key)) {
      seen.add(key);
      data.push({
        unlockDate: faker.date.between({
          from: "2020-01-01",
          to: "2024-01-01",
        }),
        userId,
        achievementId,
      });
    }
  }

  await prisma.unlockedAchievement.createMany({ data });
};
