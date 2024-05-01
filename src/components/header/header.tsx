import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import styles from "./header.module.css";
function Header() {
  return (
    <header className={styles.container}>
      <Link to='/' className={styles.home}>掲示板</Link>
      <Link to='/thread/new'>スレッドを立てる</Link>
    </header>
  );
}
export default Header;
