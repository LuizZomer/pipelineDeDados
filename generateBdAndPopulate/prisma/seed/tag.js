import { faker } from "@faker-js/faker/locale/pt_BR";
import prisma from "../client.js";

export const tag = async (tagCount) => {
  console.log("Creating tags...");

  await prisma.tag.createMany({
    data: Array.from({ length: tagCount }, () => ({ name: faker.word.noun() })),
  });
};
