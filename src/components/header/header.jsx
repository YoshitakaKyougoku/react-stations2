import styles from "./header.module.css";
function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.home}>掲示板</div>
      <div>スレッドを立てる</div>
    </header>
  );
}
export default Header;
