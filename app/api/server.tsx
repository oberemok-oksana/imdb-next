"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { FoundByIdType } from "../types";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addToWatchList = async (data: FoundByIdType) => {
  "use server";
  const supabase = createServerComponentClient({ cookies });

  const userId = await supabase.auth.getUser().then((res) => res.data.user?.id);

  const prisma = new PrismaClient();

  if (userId) {
    const movie = await prisma.watchingList.create({
      data: {
        name: data.title,
        genres: data.genres.map((genre) => genre.name),
        description: data.overview,
        releaseDate: data.release_date,
        runtime: data.runtime,
        imageUrl: data.backdrop_path,
        posterUrl: data.poster_path,
        userId: userId,
        voteAverage: Math.trunc(data.vote_average),
        imdbId: data.imdb_id,
      },
    });
  }
};

export const addToFavouriteMovies = async (data: FoundByIdType) => {
  "use server";

  const supabase = createServerComponentClient({ cookies });
  const prisma = new PrismaClient();
  const userId = await supabase.auth.getUser().then((res) => res.data.user?.id);

  if (userId) {
    const favMovie = await prisma.favouriteMovies.create({
      data: {
        name: data.title,
        genres: data.genres.map((genre) => genre.name),
        description: data.overview,
        releaseDate: data.release_date,
        runtime: data.runtime,
        imageUrl: data.backdrop_path,
        userId: userId,
        voteAverage: Math.trunc(data.vote_average),
        imdbId: data.imdb_id,
      },
    });
  }
};

export const getWatchingList = async () => {
  "use server";

  const prisma = new PrismaClient();
  const supabase = createServerComponentClient({ cookies });
  const userId = await supabase.auth.getUser().then((res) => res.data.user?.id);

  if (!userId) {
    redirect("/");
  }

  const watchingList = await prisma.watchingList.findMany({
    where: {
      userId,
    },
  });

  return watchingList;
};

export const getFavouriteMovies = async () => {
  "use server";

  const prisma = new PrismaClient();
  const supabase = createServerComponentClient({ cookies });
  const userId = await supabase.auth.getUser().then((res) => res.data.user?.id);
  if (!userId) {
    redirect("/");
  }

  const favMovies = await prisma.favouriteMovies.findMany({
    where: {
      userId,
    },
  });
  return favMovies;
};

export const deleteMovie = async (id: number) => {
  "use server";

  const prisma = new PrismaClient();
  const supabase = createServerComponentClient({ cookies });
  const userId = await supabase.auth.getUser().then((res) => res.data.user?.id);

  await prisma.favouriteMovies.deleteMany({
    where: {
      userId,
      id,
    },
  });

  revalidatePath("/favourite-movies");
};
