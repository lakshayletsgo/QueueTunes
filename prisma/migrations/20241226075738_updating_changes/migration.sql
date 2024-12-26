/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Stream` table. All the data in the column will be lost.
  - You are about to drop the column `playedTS` on the `Stream` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Stream" DROP COLUMN "createdAt",
DROP COLUMN "playedTS",
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "playedTs" TIMESTAMP(3);
