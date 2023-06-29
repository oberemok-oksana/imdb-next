import { MovieType } from "@/app/types";
import styles from "./SmallMovieCard.module.css";
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
      <div className={styles.card}>
        <div>
          <Image
            width="70"
            height="80"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className={styles.descriptions}>
          <h3>{movie.title}</h3>
          <p>{alteredOverview}</p>
        </div>
      </div>
    </Link>
  );
};

export default SmallMovieCard;
