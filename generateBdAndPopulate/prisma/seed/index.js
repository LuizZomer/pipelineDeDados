import prisma from "../client.js";
import { generateGameTag } from "./gameTag.js";
import { generateGameGender } from "./gameGender.js";
import { generateGamePlatform } from "./gamePlatform.js";
import { cleaningDatabase } from "./cleaningDatabase.js";
import { dlc } from "./dlc.js";
import { purchases } from "./purchases.js";
import { unlockedAchievement } from "./unlockedAchievement.js";
import { gender } from "./gender.js";
import { achievement } from "./achievement.js";
import { review } from "./review.js";
import { game } from "./games.js";
import { user } from "./user.js";
import { developer } from "./developer.js";
import { tag } from "./tag.js";
import { platform } from "./platform.js";

async function main() {
  await cleaningDatabase();

  const genderCount = 20;
  const platformCount = 15;
  const tagCount = 50;
  const developerCount = 5000;
  const userCount = 80000;
  const gameCount = 100000;
  const reviewCount = 80000;
  const purchaseCount = 30000;

  await gender(genderCount);

  await platform(platformCount);

  await tag(tagCount);

  await developer(developerCount);

  await user(userCount);

  await game(gameCount, developerCount);

  await review(reviewCount, userCount, gameCount);

  await achievement(gameCount);

  await unlockedAchievement(userCount);

  await purchases(purchaseCount, userCount, gameCount);

  await dlc(gameCount);

  await generateGameGender(genderCount, gameCount);

  await generateGamePlatform(platformCount, gameCount);

  await generateGameTag(tagCount, gameCount);

  console.log("Seed finished successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
