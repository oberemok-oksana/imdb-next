/*
  Warnings:

  - Added the required column `voteAverage` to the `WatchingList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WatchingList" ADD COLUMN     "voteAverage" DOUBLE PRECISION NOT NULL;
