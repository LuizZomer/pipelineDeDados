import prisma from "../client.js";
import { faker } from "@faker-js/faker/locale/pt_BR";

export const generateGameTag = async (gameIds) => {
  console.log("Generating gameTags...");

  const tagIds = (await prisma.tag.findMany({ select: { id: true } })).map(
    (t) => t.id
  );

  const desiredAmount = 50;
  const pairs = new Set();
  const data = [];

  while (data.length < desiredAmount) {
    const gameId = faker.helpers.arrayElement(gameIds);
    const tagId = faker.helpers.arrayElement(tagIds);
    const key = `${gameId}-${tagId}`;

    if (!pairs.has(key)) {
      pairs.add(key);
      data.push({ gameId, tagId });
    }
  }

  await prisma.gameTag.createMany({ data });
};
