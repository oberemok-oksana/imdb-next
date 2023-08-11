"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { FoundByIdType } from "../types";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const findMovieById = async (id: string): Promise<FoundByIdType> => {
  const result = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
    headers: {
      Accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWZlNzUyN2ZmM2EzZmFjOGE2MTAzMzAxMzU3MjE2OSIsInN1YiI6IjYwOWU2OGI0ODA3Mjk4MDAyOWE1MGI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xbowz5LfSHTk6wVl3Mk8ixotglAi_tNU9rAzz0qk3gk",
    },
  });

  if (!result.ok) {
    throw new Error(result.statusText);
  }

  const data = await result.json();
  return data;
};

export const addToWatchList = async (id: string) => {
  "use server";
  const supabase = createServerComponentClient({ cookies });

  const userId = await supabase.auth.getUser().then((res) => res.data.user?.id);

  const prisma = new PrismaClient();

  if (userId) {
    const data = await findMovieById(id);
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
        omdbId: data.id.toString(),
      },
    });
  }
};

export const addToFavouriteMovies = async (id: string) => {
  "use server";

  const supabase = createServerComponentClient({ cookies });
  const prisma = new PrismaClient();
  const userId = await supabase.auth.getUser().then((res) => res.data.user?.id);

  if (userId) {
    const data = await findMovieById(id);
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
        omdbId: data.id.toString(),
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
