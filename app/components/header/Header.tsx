import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>OMDB</div>
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">Search</button>
      </form>
      <ul>
        <li>
          <a href="#">Top 20</a>
        </li>
        <li>
          <a href="#">Watching List</a>
        </li>
        <li>
          <a href="#">Watch again</a>
        </li>
        <li>
          <a href="#">Log in</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
