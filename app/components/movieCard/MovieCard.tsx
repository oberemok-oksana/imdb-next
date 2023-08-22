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
    <div className="flex justify-between gap-11 w-[850px] mx-auto text-slate-400">
      <div className="flex items-center gap-5">
        <Link href={`/movies/${movie.id}`}>
          <Image
            src={src}
            alt={movie.name || movie.title}
            width="80"
            height="90"
            className="w-32 h-40"
          />
        </Link>
        <div>
          <Link href={`/movies/${movie.id}`}>
            <span className="">
              {" "}
              {shortTitle(movie.title) || shortTitle(movie.name)}{" "}
            </span>
          </Link>

          {
            <span>
              (
              {movie.first_air_date?.slice(0, 4) ||
                movie.release_date?.slice(0, 4)}
              )
            </span>
          }
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-5">
          OMDb Rating
          <Image
            src="/images/icons8-star-48.png"
            alt="rating star"
            width="30"
            height="30"
            className="w-auto h-auto"
          />
          <span> {movie.vote_average?.toFixed(1)}</span>
        </div>
        <AddToWatchListButton id={movie.id.toString()} />
      </div>
    </div>
  );
};

export default MovieCard;
