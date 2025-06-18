import { faker } from "@faker-js/faker/locale/pt_BR";
import prisma from "../client.js";

export const achievement = async (gameCount) => {
  console.log("Creating achievements...");
  await prisma.achievement.createMany({
    data: Array.from({ length: 200 }, () => ({
      name: faker.word.words(2),
      description: faker.lorem.sentence(),
      points: faker.number.int({ min: 10, max: 100 }),
      gameId: faker.number.int({ min: 1, max: gameCount }),
    })),
  });
};
