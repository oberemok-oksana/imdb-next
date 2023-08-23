"use client";

import Image from "next/image";
import { useState } from "react";

const MobileNav = () => {
  const [visibleMenu, setIsVisibleMenu] = useState(false);

  const toggleMenuVisibility = () => {
    setIsVisibleMenu((prev) => !prev);
  };

  return (
    <div className="lg:hidden">
      <button
        className="navbar-burger flex items-center  text-slate-300 p-2"
        onClick={toggleMenuVisibility}
      >
        <svg
          className="block h-[20px] w-[20px] fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Mobile menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>

      <div
        className={`navbar-menu relative z-50 ${
          visibleMenu ? "block" : "hidden"
        } `}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="/">
              <Image
                src="/images/icons8-pixel-50.png"
                alt="pixel"
                width="40"
                height="40"
              />
            </a>
            <button className="navbar-close" onClick={toggleMenuVisibility}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-slate-50 hover:text-slate-600 rounded"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-slate-50 hover:text-slate-600 rounded"
                  href="/top-20"
                >
                  Top 20
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-slate-50 hover:text-slate-600 rounded"
                  href="/watching-list"
                >
                  Watching List
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-slate-50 hover:text-slate-600 rounded"
                  href="/favourite-movies-list"
                >
                  Favourite Movies
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-slate-50 hover:text-slate-600 rounded"
                  href="/profile"
                >
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
