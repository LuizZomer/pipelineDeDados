import prisma from "../client.js";
import { faker } from "@faker-js/faker/locale/pt_BR";

export const generateGameGender = async (genderCount, gameCount) => {
  console.log("Generating gameGender...");

  const desiredAmount = 1000;
  const pairs = new Set();
  const data = [];

  while (data.length < desiredAmount) {
    const gameId = faker.number.int({ min: 1, max: gameCount });
    const genderId = faker.number.int({ min: 1, max: genderCount });
    const key = `${gameId}-${genderId}`;

    if (!pairs.has(key)) {
      pairs.add(key);
      data.push({ gameId, genderId });
    }
  }

  await prisma.gameGender.createMany({ data });
};
