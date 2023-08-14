import Image from "next/image";
import Link from "next/link";
import AddToWatchListButton from "@/app/components/addToWatchListButton/AddToWatchListButton";
import AddToFavouriteMoviesButton from "@/app/components/addToFavouriteMoviesButton/AddToFavouriteMoviesButton";
import { findMovieById } from "@/app/api/server";

const Movie = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const data = await findMovieById(id);

  const src = data.backdrop_path
    ? `https://image.tmdb.org/t/p/w500${data.backdrop_path}`
    : "/images/poster_default.jpg";

  return (
    <div className="w-[900px] mx-auto mb-14">
      <div className="relative ">
        <h1 className="font-bold text-red-700 text-5xl "> {data.title}</h1>
        <q className="text-slate-400 italic">{data.tagline}</q>
      </div>
      <div className="flex gap-6">
        <Image
          className="mt-4 rounded"
          src={src}
          alt={data.title}
          width="500"
          height="350"
        />
        <div className="flex flex-col">
          <div>
            <h2>Genres:</h2>
            <span className="text-red-700 font-bold">
              {data.genres.map((item) => `#${item.name} `)}
            </span>
            <p className="text-slate-300">{data.overview}</p>
          </div>
          <div>
            <h2 className="flex items-center gap-3 text-slate-400">
              Release date{" "}
              <Image
                src="/images/icons8-date-50.png"
                alt="calendar"
                width="25"
                height="25"
              />
            </h2>
            <span className="text-slate-300">{data.release_date}</span>
          </div>
          <div>
            <h2 className="flex items-center gap-3 text-slate-400">
              Runtime{" "}
              <Image
                src="/images/icons8-clock-40.png"
                alt="clock"
                width="25"
                height="25"
              />
            </h2>
            <span className="text-slate-300">{data.runtime} minutes</span>
          </div>
          <div>
            <h2 className="flex items-center gap-3 text-slate-400">
              Vote average{" "}
              <Image
                src="/images/icons8-pixel-star-40.png"
                alt="rating star"
                width="25"
                height="25"
              />
            </h2>
            <span className="text-slate-400">
              {data.vote_average.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-5  mt-5">
        <AddToWatchListButton id={data.id.toString()} />
        <AddToFavouriteMoviesButton id={data.id} />
        <Link
          href="/"
          className="font-semibold bg-transparent px-6 py-2 rounded cursor-pointer border-2 border-slate-400 text-slate-400 hover:text-slate-600 hover:border-2 hover:border-slate-600 hover:transition active:scale-y-105 active:text-slate-200 active:border-slate-200 active:transition"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Movie;
