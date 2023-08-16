import { ListMovieType } from "@/app/types";
import db from "../db";

class FavouriteList {
  getAll(): ListMovieType[] {
    const data = db.prepare("SELECT * FROM favourite_list");
    return data.all().map(
      (item) =>
        ({
          // @ts-expect-error
          ...item,
          // @ts-expect-error
          genres: item.genres.split(", ") || [],
        } as ListMovieType)
    );
  }

  addMovie(data: Omit<ListMovieType, "id" | "omdbId">) {
    const addStatement = db.prepare(
      "INSERT INTO favourite_list(name,description,genres,runtime,releaseDate,voteAverage,imageUrl,posterUrl,imdbId) VALUES(@name,@description,@genres,@runtime,@releaseDate,@voteAverage,@imageUrl,@posterUrl,@imdbId)"
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
    });
  }

  deleteMovie(id: number) {
    const deleteStatement = db.prepare("DELETE FROM favourite_list WHERE id=?");
    deleteStatement.run(id);
  }
}

const favouriteList = new FavouriteList();
export default favouriteList;
