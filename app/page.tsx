import Slideshow from "./components/Slider/Slider";
import SmallMovieCard from "./components/smallMovieCard/SmallMovieCard";
import styles from "./page.module.css";
import { MovieType } from "./types";

const getPopularSeries = async (): Promise<MovieType[]> => {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWZlNzUyN2ZmM2EzZmFjOGE2MTAzMzAxMzU3MjE2OSIsInN1YiI6IjYwOWU2OGI0ODA3Mjk4MDAyOWE1MGI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xbowz5LfSHTk6wVl3Mk8ixotglAi_tNU9rAzz0qk3gk";

  const result = await fetch("https://api.themoviedb.org/3/tv/popular", {
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

export default async function Home() {
  const data = await getPopularSeries();
  const filteredWithOverviewData = data.filter((movie) => movie.overview);

  const firstFourMovies = filteredWithOverviewData.slice(0, 4);

  return (
    <main className={styles.main}>
      <h1>Popular today!</h1>

      <div className={styles.wrapper}>
        <Slideshow data={data} />
        <ul className={styles.list}>
          {firstFourMovies.map((item) => (
            <li key={item.id}>
              <SmallMovieCard movie={item} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
