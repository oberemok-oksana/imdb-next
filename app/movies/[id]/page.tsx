import { FoundByIdType } from "@/app/types";
import Image from "next/image";
import styles from "./Movie.module.css";
import Link from "next/link";
import AddToWatchList from "@/app/components/AddToWatchList";
import AddToFavouriteMovies from "@/app/components/addToFavouriteMovies/AddToFavouriteMovies";
import { findMovieById } from "@/app/api/server";

const Movie = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const data = await findMovieById(id);

  console.log(data);

  const src = data.backdrop_path
    ? `https://image.tmdb.org/t/p/w500${data.backdrop_path}`
    : "/images/poster_default.jpg";

  return (
    <div>
      <h1> {data.title}</h1>
      <q className={styles.quote}>{data.tagline}</q>

      <div className={styles.wrapper}>
        <Image
          className={styles.image}
          src={src}
          alt={data.title}
          width="500"
          height="350"
        />
        <div className={styles.description}>
          <div>
            <h2>Genres:</h2>
            <span className={styles.tags}>
              {" "}
              {data.genres.map((item) => `#${item.name} `)}
            </span>
            <p>{data.overview}</p>
          </div>
          <div>
            <h2 className={styles.title}>
              Release date{" "}
              <Image
                src="/images/icons8-date-50.png"
                alt="calendar"
                width="25"
                height="25"
              />
            </h2>
            <span>{data.release_date}</span>
          </div>
          <div>
            <h2 className={styles.title}>
              Runtime{" "}
              <Image
                src="/images/icons8-clock-40.png"
                alt="clock"
                width="25"
                height="25"
              />
            </h2>
            <span>{data.runtime} minutes</span>
          </div>
          <div>
            <h2 className={styles.title}>
              Vote average{" "}
              <Image
                src="/images/icons8-pixel-star-40.png"
                alt="rating star"
                width="25"
                height="25"
              />
            </h2>
            <span>{data.vote_average.toFixed(1)}</span>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <AddToWatchList id={data.id.toString()} />
        <AddToFavouriteMovies id={data.id} />
        <Link href="/" className={styles.button}>
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Movie;
