import styles from "./newThread.module.css";
const url = "https://railway.bulletinboard.techtrain.dev/threads";
function NewThread() {
  const body = {
    title: "a",
  };
  async function fetchThreads() {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
    });
  }
  return (
    <section>
      <h1 className={styles.title}>スレッド新規作成</h1>
      <form action="">
        <input type="text" placeholder="スレッドタイトル" />
        <button onClick={fetchThreads()}>作成</button>
      </form>
    </section>
  );
}
export default NewThread;
