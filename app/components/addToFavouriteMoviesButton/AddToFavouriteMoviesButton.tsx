"use client";

import { addToFavouriteMovies } from "@/app/api/server";
import { notify, notifyError } from "@/app/lib/notify";
import Image from "next/image";

type AddToFavouriteMoviesProps = {
  id: string;
};

const AddToFavouriteMoviesButton = ({ id }: AddToFavouriteMoviesProps) => {
  const handleAddingToFavourite = async (id: string) => {
    try {
      await addToFavouriteMovies(id);
      notify("So easy!");
    } catch (e) {
      if (e instanceof Error) {
        notifyError(`${e.message}`);
      }
    }
  };

  return (
    <button
      onClick={() => handleAddingToFavourite(id)}
      className="font-semibold bg-transparent px-6 py-2 rounded cursor-pointer border-2 border-slate-400 text-slate-400 hover:text-slate-600 hover:border-2 hover:border-slate-600 hover:transition active:scale-y-105 active:text-slate-200 active:border-slate-200 active:transition"
    >
      <Image
        src="/images/icons8-heart-40.png"
        alt="heart"
        width="30"
        height="30"
      />
    </button>
  );
};

export default AddToFavouriteMoviesButton;
