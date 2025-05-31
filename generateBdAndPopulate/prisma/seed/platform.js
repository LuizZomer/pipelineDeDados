import { faker } from "@faker-js/faker/locale/pt_BR";
import prisma from "../client.js";

export const platform = async (platformCount) => {
  console.log("Creating platforms...");

  await prisma.platform.createMany({
    data: Array.from({ length: platformCount }, () => ({
      name: faker.word.noun(),
    })),
  });
};
