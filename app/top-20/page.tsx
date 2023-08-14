import { getTopMovies } from "../api";
import MovieCard from "../components/movieCard/MovieCard";

const TopMovies = async () => {
  const data = await getTopMovies();
  const filteredData = data.slice(0, 20);

  return (
    <div className="h-screen">
      <h1 className="text-7xl font-extrabold text-center relative text-slate-400 ">
        Top 20
      </h1>
      <ol className="flex flex-col gap-5 items-center justify-start">
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
