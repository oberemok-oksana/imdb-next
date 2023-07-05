import { MovieType } from "../types";

const key =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWZlNzUyN2ZmM2EzZmFjOGE2MTAzMzAxMzU3MjE2OSIsInN1YiI6IjYwOWU2OGI0ODA3Mjk4MDAyOWE1MGI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xbowz5LfSHTk6wVl3Mk8ixotglAi_tNU9rAzz0qk3gk";

export const getToken = (): Promise<string> => {
  return fetch("https://api.themoviedb.org/3/authentication/token/new", {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data.request_token)
    .catch((err) => console.error(err));
};

export const getTopMovies = async (): Promise<MovieType[]> => {
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
