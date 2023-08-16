"use client";

import { notify } from "@/app/lib/notify";
import { addToWatchList } from "../../api/server";

type AddToWatchListProps = {
  id: string;
};

const AddToWatchListButton = ({ id }: AddToWatchListProps) => {
  const handleAddingToWatchingList = (id: string) => {
    addToWatchList(id);
    notify("So easy!");
  };

  return (
    <button
      className="font-semibold bg-transparent px-6 py-2 rounded cursor-pointer border-2 border-slate-400 text-slate-400 hover:text-slate-600 hover:border-2 hover:border-slate-600 hover:transition active:scale-y-105 active:text-slate-200 active:border-slate-200 active:transition"
      onClick={() => handleAddingToWatchingList(id)}
    >
      Add to Watch List
    </button>
  );
};

export default AddToWatchListButton;
