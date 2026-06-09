/*
  Warnings:

  - You are about to drop the column `subtotal` on the `LancheCombo` table. All the data in the column will be lost.
  - You are about to drop the column `codigo` on the `Sala` table. All the data in the column will be lost.
  - Added the required column `fila` to the `Poltrona` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero` to the `Sala` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LancheCombo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "valorUnitario" REAL NOT NULL,
    "qtUnidade" INTEGER NOT NULL
);
INSERT INTO "new_LancheCombo" ("descricao", "id", "nome", "qtUnidade", "valorUnitario") SELECT "descricao", "id", "nome", "qtUnidade", "valorUnitario" FROM "LancheCombo";
DROP TABLE "LancheCombo";
ALTER TABLE "new_LancheCombo" RENAME TO "LancheCombo";
CREATE TABLE "new_Poltrona" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fila" INTEGER NOT NULL,
    "numero" INTEGER NOT NULL,
    "categoria" TEXT NOT NULL,
    "salaId" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Poltrona_salaId_fkey" FOREIGN KEY ("salaId") REFERENCES "Sala" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Poltrona" ("categoria", "id", "numero", "salaId", "status") SELECT "categoria", "id", "numero", "salaId", "status" FROM "Poltrona";
DROP TABLE "Poltrona";
ALTER TABLE "new_Poltrona" RENAME TO "Poltrona";
CREATE TABLE "new_Sala" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numero" INTEGER NOT NULL,
    "capacidade" INTEGER NOT NULL,
    "cinemaId" INTEGER NOT NULL,
    CONSTRAINT "Sala_cinemaId_fkey" FOREIGN KEY ("cinemaId") REFERENCES "Cinema" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Sala" ("capacidade", "cinemaId", "id") SELECT "capacidade", "cinemaId", "id" FROM "Sala";
DROP TABLE "Sala";
ALTER TABLE "new_Sala" RENAME TO "Sala";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
