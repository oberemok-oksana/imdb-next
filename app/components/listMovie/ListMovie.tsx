import { ListMovieType } from "@/app/types";
import styles from "./ListMovie.module.css";
import Image from "next/image";
import AddToFavouriteMovies from "../addToFavouriteMovies/AddToFavouriteMovies";

type ListMovieProps = {
  movie: ListMovieType;
};

const ListMovie = ({ movie }: ListMovieProps) => {
  const src = movie.imageUrl
    ? `https://image.tmdb.org/t/p/w500${movie.posterUrl}`
    : "/images/poster_default.jpg";

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{movie.name}</h3>
      <div className={styles.wrapper}>
        <div>
          <div className={styles.description}>
            <Image src={src} alt={movie.name} width="200" height="210" />

            <div>
              <p>{movie.description}</p>
              <div>
                Genres:
                {movie.genres.map((genre) => (
                  <span className={styles.genres} key={genre}>
                    #{genre}
                  </span>
                ))}
              </div>
              <div>
                Runtime:{" "}
                <span className={styles.bold}> {movie.runtime} minutes</span>
              </div>
              <div>
                Vote average:
                <span className={styles.bold}> {movie.voteAverage}</span>{" "}
              </div>
              <div className={styles.buttons}>
                {/* <button className={styles.btn}>&#10084;</button> */}
                <AddToFavouriteMovies id={movie.omdbId} />
                <button className={styles.btn}>
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
