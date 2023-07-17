/*
  Warnings:

  - You are about to drop the column `year` on the `WatchingList` table. All the data in the column will be lost.
  - Added the required column `UUId` to the `WatchingList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `WatchingList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `WatchingList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imdbId` to the `WatchingList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `releaseDate` to the `WatchingList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `runtime` to the `WatchingList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `voteAverage` to the `WatchingList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WatchingList" DROP COLUMN "year",
ADD COLUMN     "UUId" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "genres" TEXT[],
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "imdbId" TEXT NOT NULL,
ADD COLUMN     "releaseDate" TEXT NOT NULL,
ADD COLUMN     "runtime" INTEGER NOT NULL,
ADD COLUMN     "voteAverage" TEXT NOT NULL;
