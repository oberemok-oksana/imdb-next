-- CreateTable
CREATE TABLE "FavouriteMovies" (
    "id" SERIAL NOT NULL,
    "imdbId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "releaseDate" TEXT NOT NULL,
    "runtime" INTEGER NOT NULL,
    "voteAverage" DOUBLE PRECISION NOT NULL,
    "genres" TEXT[],
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FavouriteMovies_pkey" PRIMARY KEY ("id")
);
