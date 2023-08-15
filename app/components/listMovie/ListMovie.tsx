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
    <div className="px-3 py-5 border-2 border-slate-400 text-slate-400">
      <h3 className=" mx-0 mb-4 text-red-800 text-3xl font-bold">
        {movie.name}
      </h3>
      <div className="flex">
        <div>
          <div className="flex gap-4">
            <Image src={src} alt={movie.name} width="200" height="210" />

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
                <AddToFavouriteMoviesButton id={movie.omdbId} />
                <DeleteMovieFromWatchingList id={movie.id} />
                {/* <button
                  onClick={() => deleteMovie(movie.id)}
                  className="w-[82px] h-[50px] flex justify-center items-center cursor-pointer bg-transparent border-2 border-slate-400  text-slate-300 rounded hover:border-slate-500 hover:transition active:border-slate-600 active:transition"
                >
                  <Image
                    src="/images/icons8-delete-40.png"
                    alt="delete button"
                    width="25"
                    height="25"
                  />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListMovie;
