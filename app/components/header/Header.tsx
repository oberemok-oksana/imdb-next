"use client";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { redirect } from "next/navigation";

const Header = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const key =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWZlNzUyN2ZmM2EzZmFjOGE2MTAzMzAxMzU3MjE2OSIsInN1YiI6IjYwOWU2OGI0ODA3Mjk4MDAyOWE1MGI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xbowz5LfSHTk6wVl3Mk8ixotglAi_tNU9rAzz0qk3gk";
    fetch(`https://api.themoviedb.org/3/search/movie?query=${search}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${key}`,
      },
    })
      .then((res) => res.json())
      .then((result) => result.results)
      .catch((error) => console.log(error));
  }, [search]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // const submitSearch = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("I saved the data");
  //   redirect("/search");
  // };

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
            <a className={styles.link} href="#">
              Watch again
            </a>
          </li>
          <li>
            <a className={styles.link} href="#">
              Log in
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
