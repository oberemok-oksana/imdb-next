"use client";

import { deleteFromFavouriteList } from "@/app/api/server";
import { useRouter } from "next/navigation";

type DeleteFavouriteMovieButtonProps = {
  id: string;
};

const DeleteFavouriteMovieButton = ({
  id,
}: DeleteFavouriteMovieButtonProps) => {
  const router = useRouter();

  const deleteMovie = async (id: string) => {
    await deleteFromFavouriteList(parseInt(id));

    router.refresh();
  };

  return (
    <button
      className="border-2 rounded border-slate-400 p-3 w-28 text-slate-300 uppercase hover:border-slate-600 hover:transition active:border-slate-800 active:transition"
      onClick={() => {
        deleteMovie(id);
      }}
    >
      Delete
    </button>
  );
};

export default DeleteFavouriteMovieButton;
