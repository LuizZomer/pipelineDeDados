import { faker } from "@faker-js/faker/locale/pt_BR";
import prisma from "../client.js";

export const developer = async (developerCount) => {
  console.log("Creating developers...");
  return await prisma.developer.createMany(
    {
      data: Array.from({ length: developerCount }, () => ({
        name: faker.company.name(),
        country: faker.location.country(),
        foundedAt: faker.date.between({ from: "2020-01-01", to: "2024-01-01" }),
      })),
    },
    { select: { id: true } }
  );
};
