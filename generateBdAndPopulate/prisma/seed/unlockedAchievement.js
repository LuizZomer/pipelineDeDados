import { faker } from "@faker-js/faker/locale/pt_BR";
import prisma from "../client.js";

export const unlockedAchievement = async (userCount) => {
  console.log("Creating unlocked achievements...");
  await prisma.unlockedAchievement.createMany({
    data: Array.from({ length: 5000 }, () => ({
      unlockDate: faker.date.recent(),
      userId: faker.number.int({ min: 1, max: userCount }),
      achievementId: faker.number.int({ min: 1, max: 200 }), // total achievements
    })),
    skipDuplicates: true, // due to unique constraint @@unique([usuarioId, conquistaId])
  });
};
