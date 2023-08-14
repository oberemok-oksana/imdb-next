import { getFavouriteMovies } from "../api/server";
import DeleteFavouriteMovieButton from "../components/deleteFavouriteMovie/DeleteFavouriteMovieButton";

const FavouriteMovies = async () => {
  const data = await getFavouriteMovies();
  console.log(data);

  return (
    <div>
      <h1 className="text-slate-400 text-2xl">Here your favourite movies</h1>
      <ul className="pl-0 flex flex-col gap-3 my-4">
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
