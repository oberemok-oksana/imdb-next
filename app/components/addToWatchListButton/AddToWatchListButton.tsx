"use client";

import { notify, notifyError } from "@/app/lib/notify";
import { addToWatchList } from "../../api/server";

type AddToWatchListProps = {
  id: string;
};

const AddToWatchListButton = ({ id }: AddToWatchListProps) => {
  const handleAddingToWatchingList = async (id: string) => {
    try {
      await addToWatchList(id);
      notify("So easy!");
    } catch (e) {
      if (e instanceof Error) {
        notifyError(`${e.message}`);
      }
    }
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
