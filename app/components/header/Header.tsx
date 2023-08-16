"use client";
import { useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";
import { useRouter } from "next/navigation";

const Header = () => {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("query") || "");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  // useEffect(() => {
  //   supabase.auth.getUser().then((res) => setIsLoggedIn(!!res.data.user?.role));
  // });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <header className="flex justify-between items-center px-16 py-8 text-gray-300">
      <div>
        <a href="/">OMDB</a>
      </div>
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
      <nav>
        <ul className="flex list-none gap-10 text-lg">
          <li>
            <a
              className="font-bold no-underline hover:text-slate-500 transition active:text-slate-600 "
              href="/top-20"
            >
              Top 20
            </a>
          </li>
          <li>
            <a
              className="font-bold no-underline  hover:text-slate-500 transition active:text-slate-600 "
              href="/watching-list"
            >
              Watching List
            </a>
          </li>
          <li>
            <a
              className="font-bold no-underline  hover:text-slate-500 transition active:text-slate-600 "
              href="/favourite-movies-list"
            >
              Favourite Movies
            </a>
          </li>
          <li>
            {!isLoggedIn && (
              <a
                className="font-bold no-underline  hover:text-slate-500 transition active:text-slate-600 "
                href="/log-in"
              >
                Log in
              </a>
            )}
            {isLoggedIn && (
              <a
                href="#"
                className="font-bold no-underline  hover:text-slate-500 transition active:text-slate-600 "
                onClick={async () =>
                  await supabase.auth.signOut().then(() => router.refresh())
                }
              >
                Log out
              </a>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
