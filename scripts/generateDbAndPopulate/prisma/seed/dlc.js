import { faker } from "@faker-js/faker/locale/pt_BR";
import prisma from "../client.js";

export const dlc = async (gameIds) => {
  console.log("Creating DLCs...");
  await prisma.dlc.createMany({
    data: Array.from({ length: 10 }, () => ({
      name: faker.word.words(2),
      description: faker.lorem.sentence(),
      price: faker.number.float({ min: 5, max: 50, precision: 0.01 }),
      releaseDate: faker.date.between({ from: "2020-01-01", to: "2024-01-01" }),
      baseGameId: faker.helpers.arrayElement(gameIds),
    })),
  });
};
