import prisma from "../client.js";
import { faker } from "@faker-js/faker/locale/pt_BR";

export const generateGameGender = async (gameIds) => {
  const genderIds = (
    await prisma.gender.findMany({ select: { id: true } })
  ).map((g) => g.id);

  console.log("Generating gameGender...");

  const desiredAmount = 50;
  const pairs = new Set();
  const data = [];

  while (data.length < desiredAmount) {
    const gameId = faker.helpers.arrayElement(gameIds);
    const genderId = faker.helpers.arrayElement(genderIds);
    const key = `${gameId}-${genderId}`;

    if (!pairs.has(key)) {
      pairs.add(key);
      data.push({ gameId, genderId });
    }
  }

  await prisma.gameGender.createMany({ data });
};
