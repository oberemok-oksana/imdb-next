import { ListMovieType } from "@/app/types";
import db from "../db";

class FavouriteList {
  getAll(userId: string): ListMovieType[] {
    const data = db.prepare("SELECT * FROM favourite_list WHERE user_id=?");
    return data.all(userId).map(
      (item) =>
        ({
          // @ts-expect-error
          ...item,
          // @ts-expect-error
          genres: item.genres.split(", ") || [],
        } as ListMovieType)
    );
  }

  addMovie(data: Omit<ListMovieType, "id" | "omdbId">, userId: string) {
    const addStatement = db.prepare(
      "INSERT INTO favourite_list(name,description,genres,runtime,releaseDate,voteAverage,imageUrl,posterUrl,imdbId,user_id) VALUES(@name,@description,@genres,@runtime,@releaseDate,@voteAverage,@imageUrl,@posterUrl,@imdbId,@userId)"
    );

    const {
      name,
      description,
      genres,
      runtime,
      releaseDate,
      voteAverage,
      imageUrl,
      posterUrl,
      imdbId,
    } = data;

    addStatement.run({
      name,
      description,
      genres: genres.join(", "),
      runtime,
      releaseDate,
      voteAverage,
      imageUrl,
      posterUrl,
      imdbId,
      userId,
    });
  }

  deleteMovie(id: number, userId: string) {
    const deleteStatement = db.prepare(
      "DELETE FROM favourite_list WHERE id=? AND user_id=?"
    );
    deleteStatement.run(id, userId);
  }
}

const favouriteList = new FavouriteList();
export default favouriteList;
