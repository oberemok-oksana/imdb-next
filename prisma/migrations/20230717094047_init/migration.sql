-- CreateTable
CREATE TABLE "WatchingList" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WatchingList_pkey" PRIMARY KEY ("id")
);
