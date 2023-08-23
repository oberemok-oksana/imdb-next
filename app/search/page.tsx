import Link from "next/link";
import MovieCard from "../components/movieCard/MovieCard";
import { FoundMoviesPropsType, MovieType } from "../types";

const findMoviesByName = async (search: string | number | undefined) => {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWZlNzUyN2ZmM2EzZmFjOGE2MTAzMzAxMzU3MjE2OSIsInN1YiI6IjYwOWU2OGI0ODA3Mjk4MDAyOWE1MGI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xbowz5LfSHTk6wVl3Mk8ixotglAi_tNU9rAzz0qk3gk";
  const result = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${search}`,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${key}`,
      },
      cache: "no-store",
    }
  );

  if (!result.ok) {
    throw new Error(result.statusText);
  }

  const data = await result.json();
  return data;
};

const FoundMovies = async ({ searchParams }: FoundMoviesPropsType) => {
  const search = searchParams?.query;
  const movies = await findMoviesByName(search);

  return (
    <div className="f">
      <h1 className="text-slate-400 text-2xl">Here what I&apos;ve found:</h1>
      <ol className="pl-0 flex flex-col gap-3 my-4">
        {movies?.results?.map((movie: MovieType) => (
          <li key={movie.id}>
            <Link href="/"></Link>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FoundMovies;
