import Image from "next/image";
import styles from "./MovieCard.module.css";
import { MovieType } from "@/app/types";

type MovieCardProps = {
  movie: MovieType;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className={styles.card}>
      <div className={styles.parts}>
        <Image src={src} alt={movie.name} width="80" height="90" />
        <div>
          {movie.name} <span>({movie.first_air_date.slice(0, 4)})</span>
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
          <span> {movie.vote_average}</span>
        </div>
        <button className={styles.button}>+</button>
      </div>
    </div>
  );
};

export default MovieCard;
