import Slideshow from "./components/Slider/Slider";
import SmallMovieCard from "./components/smallMovieCard/SmallMovieCard";
import { MovieType } from "./types";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const getPopularSeries = async (): Promise<MovieType[]> => {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWZlNzUyN2ZmM2EzZmFjOGE2MTAzMzAxMzU3MjE2OSIsInN1YiI6IjYwOWU2OGI0ODA3Mjk4MDAyOWE1MGI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xbowz5LfSHTk6wVl3Mk8ixotglAi_tNU9rAzz0qk3gk";

  const result = await fetch("https://api.themoviedb.org/3/movie/popular", {
    headers: {
      Authorization: `Bearer ${key}`,
      Accept: "application/json",
    },
    cache: "no-store",
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

  const firstMovies = filteredWithOverviewData.slice(0, 3);

  return (
    <>
      <ToastContainer />
      <main className="mx-auto w-[380px] sm:w-[500px] md:w-[750px]">
        <h1 className="text-slate-400 text-2xl">Popular today!</h1>
        <div className="flex flex-col gap-11 lg:flex-row">
          <Slideshow data={data} />
          <ul className="list-none flex flex-col gap-3">
            {firstMovies.map((item) => (
              <li key={item.id}>
                <SmallMovieCard movie={item} />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
