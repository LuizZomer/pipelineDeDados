import { faker } from "@faker-js/faker/locale/pt_BR";
import prisma from "../client.js";

export const game = async (gameCount) => {
  console.log("Fetching developer IDs from database...");

  // Pega todos os IDs reais dos developers no banco
  const developers = await prisma.developer.findMany({
    select: { id: true },
  });

  const developerIds = developers.map((d) => d.id);
  if (developerIds.length === 0) {
    throw new Error("Nenhum developer encontrado no banco.");
  }

  console.log(`Found ${developerIds.length} developers.`);

  for (let i = 0; i < gameCount; i += 10) {
    const batchSize = Math.min(10, gameCount - i);
    const batch = Array.from({ length: batchSize }, () => ({
      name: faker.word.words(3),
      releaseDate: faker.date.between({ from: "2020-01-01", to: "2024-01-01" }),
      description: faker.lorem.sentence(),
      developerId: faker.helpers.arrayElement(developerIds),
      price: faker.number.float({ min: 10, max: 200, precision: 0.01 }),
    }));

    await prisma.game.createMany({ data: batch });

    console.log(`Inserted ${i + batchSize} / ${gameCount} games...`);
  }
};
