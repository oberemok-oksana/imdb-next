import MovieSearchForm from "../movieSearch/MovieSearchForm";
import { auth } from "@/auth/lucia";
import { cookies } from "next/headers";

const Header = async () => {
  const authRequest = auth.handleRequest({
    request: null,
    cookies,
  });
  const session = await authRequest.validate();

  return (
    <header className="flex justify-between items-center px-16 py-8 text-gray-300">
      <div>
        <a href="/">OMDB</a>
      </div>
      <MovieSearchForm />
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
          {session?.user?.userId ? (
            <li>
              <a
                className="font-bold no-underline  hover:text-slate-500 transition active:text-slate-600 "
                href="/profile"
              >
                Profile
              </a>
            </li>
          ) : (
            <li>
              <a
                className="font-bold no-underline  hover:text-slate-500 transition active:text-slate-600 "
                href="/login"
              >
                Log in
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
