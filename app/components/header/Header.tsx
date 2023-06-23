import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>OMDB</div>
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">Search</button>
      </form>
      <nav>
        <ul className={styles.list}>
          <li>
            <a className={styles.link} href="#">
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
