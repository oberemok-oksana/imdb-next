import { ListMovieType } from "@/app/types";
import db from "../db";

class WatchingList {
  getAll(userId: string): ListMovieType[] {
    const state = db.prepare("SELECT * FROM watching_list WHERE user_id=?");
    return state.all(userId).map(
      (item) =>
        ({
          // @ts-expect-error
          ...item,
          // @ts-expect-error
          genres: item.genres?.split(", ") || [],
        } as ListMovieType)
    );
  }

  deleteMovie(id: number, userId: string) {
    const deleteStatement = db.prepare(
      "DELETE FROM watching_list WHERE id=? AND user_id=?"
    );
    deleteStatement.run(id, userId);
  }

  addMovie(data: Omit<ListMovieType, "id" | "omdbId">, userId: string) {
    const addStatement = db.prepare(
      "INSERT INTO watching_list(name,description,genres,releaseDate,voteAverage,runtime,imageUrl,posterUrl,imdbId,user_id) VALUES(@name,@description,@genres,@releaseDate,@voteAverage,@runtime,@imageUrl,@posterUrl,@imdbId,@userId)"
    );
    const {
      name,
      description,
      genres,
      releaseDate,
      voteAverage,
      runtime,
      imageUrl,
      posterUrl,
      imdbId,
    } = data;
    addStatement.run({
      name,
      description,
      genres: genres.join(", "),
      releaseDate,
      voteAverage,
      runtime,
      imageUrl,
      posterUrl,
      imdbId,
      userId,
    });
  }
}

const watchingList = new WatchingList();

export default watchingList;
