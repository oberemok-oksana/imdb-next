import Image from "next/image";
import styles from "./MovieCard.module.css";
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
      <div className={styles.card}>
        <div className={styles.parts}>
          <Image
            src={src}
            alt={movie.name || movie.title}
            width="80"
            height="90"
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
        <div className={styles.align}>
          <div className={styles.align}>
            OMDb Rating
            <Image
              src="/images/icons8-star-48.png"
              alt="rating star"
              width="30"
              height="30"
            />
            <span> {movie.vote_average?.toFixed(1)}</span>
          </div>
          <button className={styles.button}>+</button>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
