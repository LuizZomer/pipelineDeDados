import { faker } from "@faker-js/faker/locale/pt_BR";
import prisma from "../client.js";

export const dlc = async (gameCount) => {
  console.log("Creating DLCs...");
  await prisma.dlc.createMany({
    data: Array.from({ length: 1000 }, () => ({
      name: faker.word.words(2),
      description: faker.lorem.sentence(),
      price: faker.number.float({ min: 5, max: 50, precision: 0.01 }),
      releaseDate: faker.date.anytime(),
      baseGameId: faker.number.int({ min: 1, max: gameCount }),
    })),
  });
};
