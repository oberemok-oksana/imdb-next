"use client";

import { FoundByIdType } from "@/app/types";
import { addToWatchList } from "../api/server";
import styles from "../movies/[id]/Movie.module.css";

type AddToWatchListProps = {
  data: FoundByIdType;
};

const AddToWatchList = ({ data }: AddToWatchListProps) => {
  return (
    <button className={styles.button} onClick={() => addToWatchList(data)}>
      Add to Watch List
    </button>
  );
};

export default AddToWatchList;
