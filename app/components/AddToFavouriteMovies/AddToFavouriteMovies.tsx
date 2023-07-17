"use client";

import { addToFavouriteMovies } from "@/app/api/server";
import styles from "../../movies/[id]/Movie.module.css";
import { FoundByIdType } from "@/app/types";

type AddToFavouriteMoviesProps = {
  data: FoundByIdType;
};

const AddToFavouriteMovies = ({ data }: AddToFavouriteMoviesProps) => {
  return (
    <button
      onClick={() => addToFavouriteMovies(data)}
      className={styles.button}
    >
      Favourite Movies
    </button>
  );
};

export default AddToFavouriteMovies;
