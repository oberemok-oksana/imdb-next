import { getFavouriteMovies } from "../api/server";
import DeleteFavouriteMovieButton from "../components/deleteFavouriteMovie/DeleteFavouriteMovieButton";
import FavouriteMovie from "./FavouriteMovie";

const FavouriteMoviesList = async () => {
  const data = await getFavouriteMovies();

  return (
    <div>
      <h1 className="text-slate-400 pl-5 text-2xl sm:pl-7">
        {data?.length
          ? "Your favourite movies are:"
          : "You haven't added any favourite movie here yet"}
      </h1>
      <ul className="pl-0 grid grid-cols-1 justify-items-center items-center gap-3 my-4 lg:grid-cols-2 sm:justify-items-center ">
        {data?.map((movie) => (
          <li className="w-full" key={movie.id}>
            <FavouriteMovie movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouriteMoviesList;
