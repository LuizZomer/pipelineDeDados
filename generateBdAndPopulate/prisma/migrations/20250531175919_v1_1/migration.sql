/*
  Warnings:

  - You are about to drop the `Teste` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Teste";

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jogo" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "dataLancamento" TIMESTAMP(3),
    "preco" DOUBLE PRECISION NOT NULL,
    "desenvolvedoraId" TEXT NOT NULL,

    CONSTRAINT "Jogo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Desenvolvedora" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "pais" TEXT,

    CONSTRAINT "Desenvolvedora_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plataforma" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Plataforma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genero" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Genero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "id" TEXT NOT NULL,
    "nota" INTEGER NOT NULL,
    "comentario" TEXT,
    "usuarioId" TEXT NOT NULL,
    "jogoId" TEXT NOT NULL,

    CONSTRAINT "Avaliacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Compra" (
    "id" TEXT NOT NULL,
    "dataCompra" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "precoPago" DOUBLE PRECISION NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "jogoId" TEXT NOT NULL,

    CONSTRAINT "Compra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Conquista" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "pontos" INTEGER NOT NULL,
    "jogoId" TEXT NOT NULL,

    CONSTRAINT "Conquista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConquistaDesbloqueada" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "conquistaId" TEXT NOT NULL,
    "dataDesbloqueio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ConquistaDesbloqueada_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dlc" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "preco" DOUBLE PRECISION NOT NULL,
    "dataLancamento" TIMESTAMP(3),
    "jogoBaseId" TEXT NOT NULL,

    CONSTRAINT "Dlc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_JogoPlataformas" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_JogoPlataformas_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_JogoTags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_JogoTags_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_JogoGeneros" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_JogoGeneros_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ConquistaDesbloqueada_usuarioId_conquistaId_key" ON "ConquistaDesbloqueada"("usuarioId", "conquistaId");

-- CreateIndex
CREATE INDEX "_JogoPlataformas_B_index" ON "_JogoPlataformas"("B");

-- CreateIndex
CREATE INDEX "_JogoTags_B_index" ON "_JogoTags"("B");

-- CreateIndex
CREATE INDEX "_JogoGeneros_B_index" ON "_JogoGeneros"("B");

-- AddForeignKey
ALTER TABLE "Jogo" ADD CONSTRAINT "Jogo_desenvolvedoraId_fkey" FOREIGN KEY ("desenvolvedoraId") REFERENCES "Desenvolvedora"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_jogoId_fkey" FOREIGN KEY ("jogoId") REFERENCES "Jogo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compra" ADD CONSTRAINT "Compra_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compra" ADD CONSTRAINT "Compra_jogoId_fkey" FOREIGN KEY ("jogoId") REFERENCES "Jogo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conquista" ADD CONSTRAINT "Conquista_jogoId_fkey" FOREIGN KEY ("jogoId") REFERENCES "Jogo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConquistaDesbloqueada" ADD CONSTRAINT "ConquistaDesbloqueada_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConquistaDesbloqueada" ADD CONSTRAINT "ConquistaDesbloqueada_conquistaId_fkey" FOREIGN KEY ("conquistaId") REFERENCES "Conquista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dlc" ADD CONSTRAINT "Dlc_jogoBaseId_fkey" FOREIGN KEY ("jogoBaseId") REFERENCES "Jogo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JogoPlataformas" ADD CONSTRAINT "_JogoPlataformas_A_fkey" FOREIGN KEY ("A") REFERENCES "Jogo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JogoPlataformas" ADD CONSTRAINT "_JogoPlataformas_B_fkey" FOREIGN KEY ("B") REFERENCES "Plataforma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JogoTags" ADD CONSTRAINT "_JogoTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Jogo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JogoTags" ADD CONSTRAINT "_JogoTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JogoGeneros" ADD CONSTRAINT "_JogoGeneros_A_fkey" FOREIGN KEY ("A") REFERENCES "Genero"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JogoGeneros" ADD CONSTRAINT "_JogoGeneros_B_fkey" FOREIGN KEY ("B") REFERENCES "Jogo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
