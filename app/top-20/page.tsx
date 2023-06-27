import MovieCard from "../components/movieCard/MovieCard";
import styles from "./TopMovies.module.css";

const TopMovies = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Top 20</h1>
      <ol className={styles.list}>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
      </ol>
    </div>
  );
};

export default TopMovies;
