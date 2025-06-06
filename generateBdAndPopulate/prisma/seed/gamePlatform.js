import prisma from "../client.js";
import { faker } from "@faker-js/faker/locale/pt_BR";

export const generateGamePlatform = async (platformCount, gameCount) => {
  console.log("Generating gamePlataform...");

  const desiredAmount = 1000;
  const pairs = new Set();
  const data = [];

  while (data.length < desiredAmount) {
    const gameId = faker.number.int({ min: 1, max: gameCount });
    const platformId = faker.number.int({ min: 1, max: platformCount });
    const key = `${gameId}-${platformId}`;

    if (!pairs.has(key)) {
      pairs.add(key);
      data.push({ gameId, platformId });
    }
  }

  await prisma.gamePlatform.createMany({ data });
};
