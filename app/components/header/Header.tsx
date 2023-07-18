"use client";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
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

  useEffect(() => {
    supabase.auth.getUser().then((res) => setIsLoggedIn(!!res.data.user?.role));
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <header className={styles.header}>
      <div>
        <a href="/">OMDB</a>
      </div>
      <form className={styles.form} action="/search">
        <input
          name="query"
          type="text"
          placeholder="Search"
          className={styles.input}
          onChange={handleInput}
          value={search}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      <nav>
        <ul className={styles.list}>
          <li>
            <a className={styles.link} href="/top-20">
              Top 20
            </a>
          </li>
          <li>
            <a className={styles.link} href="#">
              Watching List
            </a>
          </li>
          <li>
            <a className={styles.link} href="/favourite-movies">
              Favourite Movies
            </a>
          </li>
          <li>
            {!isLoggedIn && (
              <a className={styles.link} href="/log-in">
                Log in
              </a>
            )}
            {isLoggedIn && (
              <a
                href="#"
                className={styles.link}
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
