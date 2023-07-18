import { getFavouriteMovies } from "../api/server";
import DeleteFavouriteMovieButton from "../components/deleteFavouriteMovie/DeleteFavouriteMovieButton";

const FavouriteMovies = async () => {
  const data = await getFavouriteMovies();
  console.log(data);

  return (
    <div>
      <h1>Here your favourite movies</h1>
      <ul>
        {data.map((movie) => (
          <li key={movie.id}>
            {movie.name}
            <DeleteFavouriteMovieButton id={movie.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouriteMovies;
