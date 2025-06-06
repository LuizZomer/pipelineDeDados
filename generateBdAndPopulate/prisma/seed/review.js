import { faker } from "@faker-js/faker/locale/pt_BR";
import prisma from "../client.js";

export const review = async (reviewCount, userCount, gameCount) => {
  console.log("Creating reviews...");
  for (let i = 0; i < reviewCount; i += 1000) {
    const batch = Array.from({ length: 1000 }, () => ({
      rating: faker.number.int({ min: 1, max: 10 }),
      comment: faker.lorem.sentence(),
      userId: faker.number.int({ min: 1, max: userCount }),
      gameId: faker.number.int({ min: 1, max: gameCount }),
    }));
    await prisma.review.createMany({ data: batch });
    console.log(`Inserted ${i + 1000} reviews...`);
  }
};
