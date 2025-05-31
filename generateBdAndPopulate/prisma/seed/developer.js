import { faker } from "@faker-js/faker/locale/pt_BR";
import prisma from "../client.js";

export const developer = async (developerCount) => {
  console.log("Creating developers...");
  await prisma.developer.createMany({
    data: Array.from({ length: developerCount }, () => ({
      name: faker.company.name(),
      country: faker.location.country(),
    })),
  });
};
