import { faker } from "@faker-js/faker/locale/pt_BR";
import prisma from "../client.js";

export const purchases = async (purchaseCount, gameIds) => {
  const userIds = (await prisma.user.findMany({ select: { id: true } })).map(
    (u) => u.id
  );

  console.log("Creating purchases...");
  await prisma.purchase.createMany({
    data: Array.from({ length: purchaseCount }, () => ({
      userId: faker.helpers.arrayElement(userIds),
      gameId: faker.helpers.arrayElement(gameIds),
      purchaseDate: faker.date.between({
        from: "2020-01-01",
        to: "2024-01-01",
      }),
      paidPrice: faker.number.float({ min: 1, max: 350 }),
    })),
  });
};
