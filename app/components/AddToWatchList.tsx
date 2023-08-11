"use client";

import { FoundByIdType } from "@/app/types";
import { addToWatchList } from "../api/server";
import styles from "../movies/[id]/Movie.module.css";

type AddToWatchListProps = {
  id: string;
};

const AddToWatchList = ({ id }: AddToWatchListProps) => {
  return (
    <button className={styles.button} onClick={() => addToWatchList(id)}>
      Add to Watch List
    </button>
  );
};

export default AddToWatchList;
