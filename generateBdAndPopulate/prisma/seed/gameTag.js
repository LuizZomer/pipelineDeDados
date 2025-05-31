import prisma from "../client.js";
import { faker } from "@faker-js/faker/locale/pt_BR";

export const generateGameTag = async (tagCount, gameCount) => {
  console.log("Generating gameTags...");

  const desiredAmount = 1000;
  const pairs = new Set();
  const data = [];

  while (data.length < desiredAmount) {
    const gameId = faker.number.int({ min: 1, max: gameCount });
    const tagId = faker.number.int({ min: 1, max: tagCount });
    const key = `${gameId}-${tagId}`;

    if (!pairs.has(key)) {
      pairs.add(key);
      data.push({ gameId, tagId });
    }
  }

  await prisma.gameTag.createMany({ data });
};
