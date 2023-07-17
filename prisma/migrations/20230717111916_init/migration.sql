/*
  Warnings:

  - Changed the type of `voteAverage` on the `WatchingList` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "WatchingList" DROP COLUMN "voteAverage",
ADD COLUMN     "voteAverage" INTEGER NOT NULL;
