"use server";

import { FoundByIdType } from "../types";
import { cookies } from "next/headers";
import watchingList from "@/lib/repositories/watchingList";
import favouriteList from "@/lib/repositories/favouriteList";
import { SqliteError } from "better-sqlite3";
import { auth } from "@/auth/lucia";

export const findMovieById = async (id: string): Promise<FoundByIdType> => {
  const result = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
    headers: {
      Accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWZlNzUyN2ZmM2EzZmFjOGE2MTAzMzAxMzU3MjE2OSIsInN1YiI6IjYwOWU2OGI0ODA3Mjk4MDAyOWE1MGI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xbowz5LfSHTk6wVl3Mk8ixotglAi_tNU9rAzz0qk3gk",
    },
    cache: "no-store",
  });

  if (!result.ok) {
    throw new Error(result.statusText);
  }

  const data = await result.json();
  return data;
};

export const deleteFromWatchingList = async (id: number) => {
  "use server";
  const userId = await getUserId();
  if (userId) {
    watchingList.deleteMovie(id, userId);
  }
};

export const addToWatchList = async (id: string) => {
  "use server";
  const movie = await findMovieById(id);
  const userId = await getUserId();
  if (!userId) {
    return;
  }
  try {
    watchingList.addMovie(
      {
        description: movie.overview,
        name: movie.title,
        releaseDate: movie.release_date,
        genres: movie.genres.map((item) => item.name),
        imageUrl: movie.backdrop_path,
        posterUrl: movie.poster_path,
        runtime: movie.runtime,
        voteAverage: movie.vote_average,
        imdbId: movie.imdb_id,
      },
      userId
    );
  } catch (e) {
    if (e instanceof SqliteError) {
      if (e.code === "SQLITE_CONSTRAINT_UNIQUE") {
        throw new Error("Already exists");
      }
    }

    if (e instanceof Error) {
      throw new Error("Something went wrong!");
    }
  }
};

export const addToFavouriteMovies = async (id: string) => {
  "use server";
  const movie = await findMovieById(id);
  const userId = await getUserId();
  if (!userId) {
    return;
  }

  try {
    favouriteList.addMovie(
      {
        name: movie.title,
        description: movie.overview,
        genres: movie.genres.map((item) => item.name),
        voteAverage: movie.vote_average,
        runtime: movie.runtime,
        releaseDate: movie.release_date,
        imageUrl: movie.backdrop_path,
        posterUrl: movie.poster_path,
        imdbId: movie.imdb_id,
      },
      userId
    );
  } catch (e) {
    if (e instanceof SqliteError) {
      if (e.code === "SQLITE_CONSTRAINT_UNIQUE") {
        throw new Error("Already exists!");
      }
    }

    if (e instanceof Error) {
      throw new Error("Something went wrong!");
    }
  }
};

const getUserId = async () => {
  const authRequest = auth.handleRequest({
    request: null,
    cookies,
  });
  const session = await authRequest.validate();

  if (!session) {
    return null;
  }
  return session.user.userId;
};

export const getWatchingList = async () => {
  "use server";

  const userId = await getUserId();

  if (userId) {
    return watchingList.getAll(userId);
  }

  return [];
};

export const getFavouriteMovies = async () => {
  "use server";
  const userId = await getUserId();
  if (userId) {
    return favouriteList.getAll(userId);
  }
};

export const deleteFromFavouriteList = async (id: number) => {
  "use server";
  const userId = await getUserId();
  if (!userId) {
    return;
  }

  favouriteList.deleteMovie(id, userId);
};
