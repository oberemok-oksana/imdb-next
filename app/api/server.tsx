"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { FoundByIdType } from "../types";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";

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
        userId: userId,
        voteAverage: Math.trunc(data.vote_average),
        imdbId: data.imdb_id,
      },
    });
  }
};
