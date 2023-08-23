import Image from "next/image";
import { ListMovieType } from "../types";
import DeleteFavouriteMovieButton from "../components/deleteFavouriteMovie/DeleteFavouriteMovieButton";

type FavouriteMoviePropsType = {
  movie: ListMovieType;
};

const FavouriteMovie = ({ movie }: FavouriteMoviePropsType) => {
  const src = movie.imageUrl
    ? `https://image.tmdb.org/t/p/w500${movie.posterUrl}`
    : "/images/poster_default.jpg";

  return (
    <div className=" border-slate-500 border-2 p-3 rounded  h-full ">
      <h1 className="text-amber-500 font-bold text-xl my-2 text-center">
        {movie.name}
      </h1>
      <div className="flex gap-3">
        <Image
          width="200"
          height="180"
          className="sm:w-36 h-32"
          alt={movie.name}
          src={src}
        />
        <div className="flex flex-col gap-3">
          <p className="text-slate-300 ">
            {movie.description.length < 100
              ? movie.description
              : movie.description.slice(0, 100) + "..."}
          </p>
          <div className="flex flex-col gap-3">
            <div className="text-slate-300 ">
              Released:{" "}
              <span className="text-slate-500 font-bold">
                {movie.releaseDate.split("-").reverse().join("-")}
              </span>
            </div>
            <div className="text-slate-300 ">
              Rating:{" "}
              <span className="text-slate-500 font-bold">
                {movie.voteAverage}
              </span>
            </div>
            <DeleteFavouriteMovieButton id={movie.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteMovie;
