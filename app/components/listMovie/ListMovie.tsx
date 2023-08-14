import { ListMovieType } from "@/app/types";
import Image from "next/image";
import AddToFavouriteMoviesButton from "../addToFavouriteMoviesButton/AddToFavouriteMoviesButton";

type ListMovieProps = {
  movie: ListMovieType;
};

const ListMovie = ({ movie }: ListMovieProps) => {
  const src = movie.imageUrl
    ? `https://image.tmdb.org/t/p/w500${movie.posterUrl}`
    : "/images/poster_default.jpg";

  return (
    <div className="px-3 py-5 border-2 border-slate-400">
      <h3 className="text-xl mx-0 my-3 text-slate-300">{movie.name}</h3>
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
              <div className="flex items-center gap-5 mt-3">
                <AddToFavouriteMoviesButton id={movie.omdbId} />
                <button className="w-10 h-10 cursor-pointer bg-transparent  text-slate-300 rounded hover:bg-slate-500 hover:transition active:bg-slate-600 active:transition">
                  <Image
                    src="/images/icons8-delete-40.png"
                    alt="delete button"
                    width="25"
                    height="25"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListMovie;
