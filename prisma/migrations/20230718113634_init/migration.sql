/*
  Warnings:

  - Added the required column `posterUrl` to the `WatchingList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WatchingList" ADD COLUMN     "posterUrl" TEXT NOT NULL;
