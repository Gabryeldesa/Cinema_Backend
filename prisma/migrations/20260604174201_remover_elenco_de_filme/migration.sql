/*
  Warnings:

  - You are about to drop the column `elenco` on the `Filme` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Filme" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "sinopse" TEXT,
    "classificacao" TEXT,
    "duracao" TEXT,
    "genero" TEXT,
    "dataInicioExibicao" DATETIME,
    "dataFinalExibicao" DATETIME,
    "cinemaId" INTEGER NOT NULL,
    CONSTRAINT "Filme_cinemaId_fkey" FOREIGN KEY ("cinemaId") REFERENCES "Cinema" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Filme" ("cinemaId", "classificacao", "dataFinalExibicao", "dataInicioExibicao", "duracao", "genero", "id", "sinopse", "titulo") SELECT "cinemaId", "classificacao", "dataFinalExibicao", "dataInicioExibicao", "duracao", "genero", "id", "sinopse", "titulo" FROM "Filme";
DROP TABLE "Filme";
ALTER TABLE "new_Filme" RENAME TO "Filme";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
