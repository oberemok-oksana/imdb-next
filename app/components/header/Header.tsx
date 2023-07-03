"use client";
import { useState } from "react";
import styles from "./Header.module.css";
import { useSearchParams } from "next/navigation";

const Header = () => {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("query") || "");

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
