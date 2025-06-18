import { writeFile, mkdir, rm } from "fs/promises"; // Adicionado 'rm'
import { existsSync } from "fs";
import { stringify } from "csv-stringify/sync";
import prisma from "../prisma/client.js";

const dataIngestion = async () => {
  const tables = [
    "achievements",
    "dlcs",
    "purchases",
    "reviews",
    "tags",
    "platforms",
    "genders",
    "games",
    "developers",
    "users",
    "achievement_unlocked",
    "game_tags",
    "game_platforms",
    "game_genders",
  ];

  const exportDir = "./exports";

  if (existsSync(exportDir)) {
    console.log(`Removendo diretório de exportação existente: ${exportDir}...`);
    await rm(exportDir, { recursive: true, force: true });
    console.log("Diretório anterior removido.");
  }

  await mkdir(exportDir, { recursive: true });
  console.log(`Diretório '${exportDir}' criado/recriado com sucesso.`);

  for (const table of tables) {
    console.log(`Exportando tabela: ${table}...`);

    try {
      const data = await prisma.$queryRawUnsafe(`SELECT * FROM ${table}`);

      if (!Array.isArray(data) || data.length === 0) {
        console.log(`Tabela ${table} vazia ou inexistente. Pulando...`);
        continue;
      }

      const columns = Object.keys(data[0]);
      const csv = stringify(data, { header: true, columns });

      await writeFile(`${exportDir}/${table}.csv`, csv);
      console.log(`✔️  ${table}.csv exportado com sucesso.`);
    } catch (error) {
      console.error(`❌ Erro ao exportar tabela ${table}:`, error.message);
    }
  }
  console.log("\nProcesso de exportação concluído.");
};

dataIngestion().catch((err) => {
  console.error("Erro fatal na exportação:", err);
});
