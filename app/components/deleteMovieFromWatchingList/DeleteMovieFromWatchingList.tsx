"use client";

import { deleteFromWatchingList } from "@/app/api/server";
import Image from "next/image";
import { useRouter } from "next/navigation";

type DeleteMovieFromWatchingListPropsType = {
  id: string;
};

const DeleteMovieFromWatchingList = ({
  id,
}: DeleteMovieFromWatchingListPropsType) => {
  const router = useRouter();
  const deleteMovie = async (id: string) => {
    await deleteFromWatchingList(parseInt(id));
    router.refresh();
  };

  return (
    <button
      onClick={() => deleteMovie(id)}
      className="w-[82px] h-[50px] flex justify-center items-center cursor-pointer bg-transparent border-2 border-slate-400  text-slate-300 rounded hover:border-slate-500 hover:transition active:border-slate-600 active:transition"
    >
      <Image
        src="/images/icons8-delete-40.png"
        alt="delete button"
        width="25"
        height="25"
      />
    </button>
  );
};

export default DeleteMovieFromWatchingList;
