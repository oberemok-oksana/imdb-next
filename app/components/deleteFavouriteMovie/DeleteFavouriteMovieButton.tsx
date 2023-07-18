"use client";

import { deleteMovie } from "@/app/api/server";

type DeleteFavouriteMovieButtonProps = {
  id: number;
};

const DeleteFavouriteMovieButton = ({
  id,
}: DeleteFavouriteMovieButtonProps) => {
  return <button onClick={() => deleteMovie(id)}>Delete</button>;
};

export default DeleteFavouriteMovieButton;
