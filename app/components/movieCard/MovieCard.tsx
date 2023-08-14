import Image from "next/image";
import { MovieType } from "@/app/types";
import Link from "next/link";

type MovieCardProps = {
  movie: MovieType;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const src = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/images/poster_default.jpg";

  return (
    <Link href={`/movies/${movie.id}`}>
      <div className="flex items-center justify-between gap-11 w-[750px] mx-auto text-slate-400">
        <div className="flex items-center gap-5">
          <Image
            src={src}
            alt={movie.name || movie.title}
            width="80"
            height="90"
            className="w-auto h-auto"
          />
          <div>
            {movie.name || movie.title}{" "}
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
          <button className="rounded text-slate-300 bg-transparent text-xl cursor-pointer px-4 py-2 hover:text-slate-500 hover:transition hover:border-2 border-slate-500 active:transition active:scale-50">
            +
          </button>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
