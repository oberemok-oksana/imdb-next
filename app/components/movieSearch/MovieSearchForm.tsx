"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

const MovieSearchForm = () => {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("query") || "");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <form className="flex items-center gap-8" action="/search">
      <input
        name="query"
        type="text"
        placeholder="Search"
        onChange={handleInput}
        value={search}
        className="bg-slate-300 rounded py-2 px-5 text-gray-800"
      />
      <button
        type="submit"
        className="cursor-pointer rounded py-2 px-4 bg-transparent font-bold text-gray-300 border-2 border-slate-300 hover:text-slate-500 transition active:text-slate-600 "
      >
        Search
      </button>
    </form>
  );
};

export default MovieSearchForm;
