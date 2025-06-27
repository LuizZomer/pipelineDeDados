import prisma from "../client.js";
import { faker } from "@faker-js/faker/locale/pt_BR";

export const generateGamePlatform = async (gameIds) => {
  console.log("Generating gamePlataform...");

  const platformIds = (
    await prisma.platform.findMany({ select: { id: true } })
  ).map((p) => p.id);

  const desiredAmount = 50;
  const pairs = new Set();
  const data = [];

  while (data.length < desiredAmount) {
    const gameId = faker.helpers.arrayElement(gameIds);
    const platformId = faker.helpers.arrayElement(platformIds);
    const key = `${gameId}-${platformId}`;

    if (!pairs.has(key)) {
      pairs.add(key);
      data.push({ gameId, platformId });
    }
  }

  await prisma.gamePlatform.createMany({ data });
};
