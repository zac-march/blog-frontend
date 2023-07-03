import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <label className={styles.logo}>
          <a href="/">TheBlog</a>
        </label>
        <input type="checkbox" id={styles["menuToggle"]} />
        <label htmlFor={styles["menuToggle"]} className={styles.menuBtn}>
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul>
          <li>
            <a href="/">Posts</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
