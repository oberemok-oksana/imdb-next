import MovieSearchForm from "../movieSearch/MovieSearchForm";
import { auth } from "@/auth/lucia";
import { cookies } from "next/headers";
import MobileNav from "./MobileNav";

const Header = async () => {
  const authRequest = auth.handleRequest({
    request: null,
    cookies,
  });
  const session = await authRequest.validate();

  return (
    <header className="flex justify-between items-center px-3 py-2 text-gray-300 sm:px-16 sm:py-8">
      <div className="hidden w-16 px-3 lg:block">
        <a href="/">OMDB</a>
      </div>
      <MovieSearchForm />
      <nav className="px-3">
        <ul className="hidden list-none gap-3 text-lg sm:gap-10  lg:flex">
          <li>
            <a
              className="font-bold text-sm no-underline hover:text-slate-500 transition active:text-slate-600 sm:text-lg"
              href="/top-20"
            >
              Top 20
            </a>
          </li>
          <li>
            <a
              className="font-bold text-sm no-underline  hover:text-slate-500 transition active:text-slate-600 sm:text-lg"
              href="/watching-list"
            >
              Watching List
            </a>
          </li>
          <li>
            <a
              className="font-bold text-sm no-underline  hover:text-slate-500 transition active:text-slate-600 sm:text-lg"
              href="/favourite-movies-list"
            >
              Favourite Movies
            </a>
          </li>
          {session?.user?.userId ? (
            <li>
              <a
                className="font-bold text-sm no-underline  hover:text-slate-500 transition active:text-slate-600 sm:text-lg"
                href="/profile"
              >
                Profile
              </a>
            </li>
          ) : (
            <li>
              <a
                className="font-bold text-sm no-underline  hover:text-slate-500 transition active:text-slate-600 sm:text-lg"
                href="/login"
              >
                Log in
              </a>
            </li>
          )}
        </ul>
      </nav>
      <MobileNav />
    </header>
  );
};

export default Header;
