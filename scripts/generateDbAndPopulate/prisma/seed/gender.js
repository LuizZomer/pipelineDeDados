import { faker } from "@faker-js/faker/locale/pt_BR";
import prisma from "../client.js";

export const gender = async (genderCount) => {
  console.log("Creating genders...");
  await prisma.gender.createMany({
    data: Array.from({ length: genderCount }, () => ({
      name: faker.word.noun(),
    })),
  });
};
