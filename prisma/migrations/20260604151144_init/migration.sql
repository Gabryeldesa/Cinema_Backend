-- CreateTable
CREATE TABLE "Cinema" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "endereco" TEXT
);

-- CreateTable
CREATE TABLE "Sala" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigo" TEXT NOT NULL,
    "capacidade" INTEGER NOT NULL,
    "cinemaId" INTEGER NOT NULL,
    CONSTRAINT "Sala_cinemaId_fkey" FOREIGN KEY ("cinemaId") REFERENCES "Cinema" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Poltrona" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numero" INTEGER NOT NULL,
    "categoria" TEXT NOT NULL,
    "salaId" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Poltrona_salaId_fkey" FOREIGN KEY ("salaId") REFERENCES "Sala" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Filme" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "sinopse" TEXT,
    "classificacao" TEXT,
    "duracao" TEXT,
    "elenco" TEXT,
    "genero" TEXT,
    "dataInicioExibicao" DATETIME,
    "dataFinalExibicao" DATETIME,
    "cinemaId" INTEGER NOT NULL,
    CONSTRAINT "Filme_cinemaId_fkey" FOREIGN KEY ("cinemaId") REFERENCES "Cinema" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Sessao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "horarioExibicao" DATETIME NOT NULL,
    "filmeId" INTEGER NOT NULL,
    "salaId" INTEGER NOT NULL,
    "cinemaId" INTEGER NOT NULL,
    CONSTRAINT "Sessao_filmeId_fkey" FOREIGN KEY ("filmeId") REFERENCES "Filme" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Sessao_salaId_fkey" FOREIGN KEY ("salaId") REFERENCES "Sala" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Sessao_cinemaId_fkey" FOREIGN KEY ("cinemaId") REFERENCES "Cinema" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ingresso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valorInteira" REAL NOT NULL,
    "valorMeia" REAL NOT NULL,
    "sessaoId" INTEGER NOT NULL,
    CONSTRAINT "Ingresso_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "Sessao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LancheCombo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "valorUnitario" REAL NOT NULL,
    "qtUnidade" INTEGER NOT NULL,
    "subtotal" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "qtInteira" INTEGER NOT NULL,
    "qtMeia" INTEGER NOT NULL,
    "valorTotal" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "_PedidoIngressos" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PedidoIngressos_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingresso" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PedidoIngressos_B_fkey" FOREIGN KEY ("B") REFERENCES "Pedido" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_PedidoLanches" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PedidoLanches_A_fkey" FOREIGN KEY ("A") REFERENCES "LancheCombo" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PedidoLanches_B_fkey" FOREIGN KEY ("B") REFERENCES "Pedido" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_PedidoIngressos_AB_unique" ON "_PedidoIngressos"("A", "B");

-- CreateIndex
CREATE INDEX "_PedidoIngressos_B_index" ON "_PedidoIngressos"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PedidoLanches_AB_unique" ON "_PedidoLanches"("A", "B");

-- CreateIndex
CREATE INDEX "_PedidoLanches_B_index" ON "_PedidoLanches"("B");
