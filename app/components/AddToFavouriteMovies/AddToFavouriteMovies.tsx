"use client";

import { addToFavouriteMovies } from "@/app/api/server";
import styles from "../../movies/[id]/Movie.module.css";
import { FoundByIdType } from "@/app/types";
import Image from "next/image";

type AddToFavouriteMoviesProps = {
  id: string;
};

const AddToFavouriteMovies = ({ id }: AddToFavouriteMoviesProps) => {
  return (
    <button onClick={() => addToFavouriteMovies(id)} className={styles.button}>
      <Image
        src="/images/icons8-heart-40.png"
        alt="heart"
        width="30"
        height="30"
      />
    </button>
  );
};

export default AddToFavouriteMovies;
