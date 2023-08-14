import { MovieType } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

type SmallMovieCardPropsType = {
  movie: MovieType;
};

const SmallMovieCard = ({ movie }: SmallMovieCardPropsType) => {
  const alteredOverview =
    movie.overview.length > 55
      ? movie.overview.slice(0, 55) + "..."
      : movie.overview;

  return (
    <Link href={`/movies/${movie.id}`}>
      <div className="w-[300px] flex gap-3 text-base text-slate-300">
        <div>
          <Image
            width="120"
            height="104"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-auto h-auto"
          />
        </div>
        <div className="text-left">
          <h3 className="font-semibold text-xl text-slate-400">
            {movie.title}
          </h3>
          <p>{alteredOverview}</p>
        </div>
      </div>
    </Link>
  );
};

export default SmallMovieCard;
