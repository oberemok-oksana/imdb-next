/*
  Warnings:

  - Added the required column `omdbId` to the `FavouriteMovies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `omdbId` to the `WatchingList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `posterUrl` to the `WatchingList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FavouriteMovies" ADD COLUMN     "omdbId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "WatchingList" ADD COLUMN     "omdbId" TEXT NOT NULL,
ADD COLUMN     "posterUrl" TEXT NOT NULL;
