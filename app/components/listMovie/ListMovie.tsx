import { ListMovieType } from "@/app/types";
import Image from "next/image";
import AddToFavouriteMoviesButton from "../addToFavouriteMoviesButton/AddToFavouriteMoviesButton";
import DeleteFavouriteMovieButton from "../deleteFavouriteMovie/DeleteFavouriteMovieButton";
import DeleteMovieFromWatchingList from "../deleteMovieFromWatchingList/DeleteMovieFromWatchingList";

type ListMovieProps = {
  movie: ListMovieType;
};

const ListMovie = ({ movie }: ListMovieProps) => {
  const src = movie.imageUrl
    ? `https://image.tmdb.org/t/p/w500${movie.posterUrl}`
    : "/images/poster_default.jpg";

  console.log(movie.id);
  return (
    <div className="px-3 py-5 border-2 border-slate-400 text-slate-400 ">
      <h3 className=" mx-0 mb-4 text-red-800 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
        {movie.name}
      </h3>
      <div className="flex  flex-col sm:flex-row">
        <div className="flex gap-4 flex-col sm:flex-row">
          <Image
            src={src}
            alt={movie.name}
            width="200"
            height="210"
            className="w-full h-80 sm:w-52 sm:h-auto md:w-60 md:h-auto"
          />

          <div>
            <p className="mb-4  text-slate-300">{movie.description}</p>
            <div>
              Genres:
              {movie.genres.map((genre) => (
                <span className="text-red-700 font-semibold " key={genre}>
                  #{genre}
                </span>
              ))}
            </div>
            <div>
              Runtime:{" "}
              <span className="font-semibold  text-slate-300">
                {movie.runtime} minutes
              </span>
            </div>
            <div>
              Vote average:
              <span className="font-semibold  text-slate-300">
                {" "}
                {movie.voteAverage}
              </span>{" "}
            </div>
            <div className="flex items-center gap-8 mt-3">
              <AddToFavouriteMoviesButton id={movie.imdbId.toString()} />
              <DeleteMovieFromWatchingList id={movie.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListMovie;
