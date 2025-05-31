import { faker } from "@faker-js/faker/locale/pt_BR";
import prisma from "../client.js";

export const game = async (gameCount, developerCount) => {
  console.log("Creating games...");
  for (let i = 0; i < gameCount; i += 1000) {
    const batch = Array.from({ length: 1000 }, () => ({
      name: faker.word.words(3),
      releaseDate: faker.date.anytime(),
      description: faker.lorem.sentence(),
      developerId: faker.number.int({ min: 1, max: developerCount }),
      price: faker.number.float({ min: 10, max: 200, precision: 0.01 }),
    }));
    await prisma.game.createMany({ data: batch });
    console.log(`Inserted ${i + 1000} games...`);
  }
};
