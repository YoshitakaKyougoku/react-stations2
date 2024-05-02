import { useState, useEffect } from "react";
import styles from './threadList.module.css'

type Thread = {
  id: string,
  title: string
}
function ThreadList() {
  const [threads, setThreads] = useState<Thread[]>([]);
  async function fetchThreads() {
    await fetch(
      "https://railway.bulletinboard.techtrain.dev/threads?offset=0"
    ).then(async (res) => {
      const data = await res.json();
      setThreads(data);
    });
  }
  useEffect(() => {
    fetchThreads();
  }, []);
  if (!threads) {
    return <div>loading</div>;
  }
  return (
    <section className={styles.container}>
      
      <h1 className={styles.title}>新着スレッド</h1>
      <ul className={styles.list}>
        {threads.map((thread) => (
          <li className={styles.threadTitle} key={thread.id}>{thread.title}</li>
        ))}
      </ul>
    </section>
  );
}
export default ThreadList;
