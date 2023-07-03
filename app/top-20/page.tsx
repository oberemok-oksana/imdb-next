import MovieCard from "../components/movieCard/MovieCard";
import { MovieType } from "../types";
import styles from "./TopMovies.module.css";

const getTopMovies = async (): Promise<MovieType[]> => {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWZlNzUyN2ZmM2EzZmFjOGE2MTAzMzAxMzU3MjE2OSIsInN1YiI6IjYwOWU2OGI0ODA3Mjk4MDAyOWE1MGI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xbowz5LfSHTk6wVl3Mk8ixotglAi_tNU9rAzz0qk3gk";
  const result = await fetch("https://api.themoviedb.org/3/movie/popular", {
    headers: {
      Authorization: `Bearer ${key}`,
      Accept: "application/json",
    },
  });

  if (!result.ok) {
    throw new Error(result.statusText);
  }

  const data = await result.json();

  return data.results;
};

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
