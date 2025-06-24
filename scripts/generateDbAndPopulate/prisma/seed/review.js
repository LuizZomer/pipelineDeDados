import { faker } from "@faker-js/faker/locale/pt_BR";
import prisma from "../client.js";

export const review = async (reviewCount, gameIds) => {
  const userIds = (await prisma.user.findMany({ select: { id: true } })).map(
    (u) => u.id
  );

  console.log("Creating reviews...");
  for (let i = 0; i < reviewCount; i += 10) {
    const batch = Array.from({ length: 10 }, () => ({
      rating: faker.number.int({ min: 1, max: 10 }),
      comment: faker.lorem.sentence(),
      userId: faker.helpers.arrayElement(userIds),
      gameId: faker.helpers.arrayElement(gameIds),
      createdAt: faker.date.between({ from: "2020-01-01", to: "2024-01-01" }),
    }));
    await prisma.review.createMany({ data: batch });
    console.log(`Inserted ${i + 1000} reviews...`);
  }
};
