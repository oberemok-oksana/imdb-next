import { ListMovieType } from "@/app/types";
import db from "../db";

class WatchingList {
  getAll(): ListMovieType[] {
    const state = db.prepare("SELECT * FROM watching_list");
    return state.all().map(
      (item) =>
        ({
          // @ts-expect-error
          ...item,
          // @ts-expect-error
          genres: item.genres?.split(", ") || [],
        } as ListMovieType)
    );
  }

  deleteMovie(id: number) {
    const deleteStatement = db.prepare("DELETE FROM watching_list WHERE id=?");
    deleteStatement.run(id);
  }

  addMovie(data: Omit<ListMovieType, "id" | "omdbId">) {
    const addStatement = db.prepare(
      "INSERT INTO watching_list(name,description,genres,releaseDate,voteAverage,runtime,imageUrl,posterUrl,imdbId) VALUES(@title,@description,@tags,@release,@rating,@runtime,@imageUrl,@posterUrl,@imdbId)"
    );
    const {
      name: title,
      description,
      genres: tags,
      releaseDate: release,
      voteAverage: rating,
      runtime,
      imageUrl,
      posterUrl,
      imdbId,
    } = data;
    addStatement.run({
      title,
      description,
      tags: tags.join(", "),
      release,
      rating,
      runtime,
      imageUrl,
      posterUrl,
      imdbId,
    });
  }
}

const watchingList = new WatchingList();

export default watchingList;
