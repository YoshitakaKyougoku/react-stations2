import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import styles from "./header.module.css";
function Header() {
  return (
    <header className={styles.container}>
      <Link to="/" className={styles.home}>
        <p className={styles.textWrapper}>
          <span className={styles.backgroundImage}>掲示板</span>
        </p>
      </Link>
      <Link to="/thread/new">
        <p className={styles.textWrapper}>
          <span className={styles.backgroundImage}>スレッドを立てる</span>
        </p>
      </Link>
    </header>
  );
}
export default Header;
