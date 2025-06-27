import { faker } from "@faker-js/faker/locale/pt_BR";
import prisma from "../client.js";

export const user = async (userCount) => {
  console.log("Creating users...");
  await prisma.user.createMany({
    data: Array.from({ length: userCount }, (_, i) => ({
      name: faker.person.fullName(),
      email: `user${i}_${faker.internet.email()}`,
      password: faker.internet.password(),
      createdAt: faker.date.between({ from: "2020-01-01", to: "2024-01-01" }),
    })),
  });
};
