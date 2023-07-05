import { getTopMovies } from "../api";
import MovieCard from "../components/movieCard/MovieCard";

import styles from "./TopMovies.module.css";

const TopMovies = async () => {
  const data = await getTopMovies();
  const filteredData = data.slice(0, 20);

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Top 20</h1>
      <ol className={styles.list}>
        {filteredData.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TopMovies;
