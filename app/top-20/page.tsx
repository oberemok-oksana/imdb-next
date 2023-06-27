import MovieCard from "../components/movieCard/MovieCard";
import { MovieType } from "../types";
import styles from "./TopMovies.module.css";

const getTopMovies = async (): Promise<MovieType[]> => {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTFhODUwNzc4ZDQ3NDQwZWE4ZDdkMzcwZDE4ZWY3ZCIsInN1YiI6IjYwOWU2OGI0ODA3Mjk4MDAyOWE1MGI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OqrIkg4c05pE8Z8TJYe0uwcyezvPW4CeUY2_uF0bOzo";
  const result = await fetch("https://api.themoviedb.org/3/tv/top_rated", {
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
