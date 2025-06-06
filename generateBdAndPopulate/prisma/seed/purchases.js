import { faker } from "@faker-js/faker/locale/pt_BR";
import prisma from "../client.js";

export const purchases = async (purchaseCount, userCount, gameCount) => {
  console.log("Creating purchases...");
  await prisma.purchase.createMany({
    data: Array.from({ length: purchaseCount }, () => ({
      userId: faker.number.int({ min: 1, max: userCount }),
      gameId: faker.number.int({ min: 1, max: gameCount }),
      purchaseDate: faker.date.past().toISOString(),
      paidPrice: faker.number.float({ min: 1, max: 350 }),
    })),
  });
};
