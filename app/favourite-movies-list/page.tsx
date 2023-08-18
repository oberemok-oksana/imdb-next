import { getFavouriteMovies } from "../api/server";
import DeleteFavouriteMovieButton from "../components/deleteFavouriteMovie/DeleteFavouriteMovieButton";
import FavouriteMovie from "./FavouriteMovie";

const FavouriteMoviesList = async () => {
  const data = await getFavouriteMovies();

  return (
    <div>
      <h1 className="text-slate-400 text-2xl">
        {data.length
          ? "Your favourite movies are:"
          : "You haven't added any favourite movie here yet"}
      </h1>
      <ul className="pl-0 grid grid-cols-2 gap-3 my-4">
        {data.map((movie) => (
          <li key={movie.id}>
            <FavouriteMovie movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouriteMoviesList;
