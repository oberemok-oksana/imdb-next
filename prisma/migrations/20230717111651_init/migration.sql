/*
  Warnings:

  - You are about to drop the column `UUId` on the `WatchingList` table. All the data in the column will be lost.
  - Added the required column `userId` to the `WatchingList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WatchingList" DROP COLUMN "UUId",
ADD COLUMN     "userId" TEXT NOT NULL;
