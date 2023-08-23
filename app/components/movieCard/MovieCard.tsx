import Image from "next/image";
import { MovieType } from "@/app/types";
import Link from "next/link";
import AddToWatchListButton from "../addToWatchListButton/AddToWatchListButton";
import { shortTitle } from "@/app/lib/lib";

type MovieCardProps = {
  movie: MovieType;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const src = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/images/poster_default.jpg";

  return (
    <div className="flex justify-between gap-3 w-[380px] mx-auto text-slate-400 sm:w-[450px] sm:gap-7 md:w-[600px] md:gap-13 lg:w-[750px]">
      <div className="flex items-center gap-5">
        <Link href={`/movies/${movie.id}`} className="shrink-0">
          <Image
            src={src}
            alt={movie.name || movie.title}
            width="100"
            height="90"
            className=" block w-32 h-32 sm:w-44 sm:h-40"
          />
        </Link>
        <div>
          <Link href={`/movies/${movie.id}`}>
            <span className="text-sm sm:text-lg">
              {shortTitle(movie.title) || shortTitle(movie.name)}{" "}
            </span>
          </Link>

          {
            <span className="text-sm sm:text-lg">
              (
              {movie.first_air_date?.slice(0, 4) ||
                movie.release_date?.slice(0, 4)}
              )
            </span>
          }
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-5 mr-3">
          <span className="text-sm sm:text-lg">Rating</span>
          <Image
            src="/images/icons8-star-48.png"
            alt="rating star"
            width="25"
            height="25"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <span> {movie.vote_average?.toFixed(1)}</span>
        </div>
        <AddToWatchListButton id={movie.id.toString()} />
      </div>
    </div>
  );
};

export default MovieCard;
