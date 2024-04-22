import { useState, useEffect } from "react";

function ThreadList() {
  const [threads, setThreads] = useState();
  async function fetchThreads() {
    await fetch(
      "https://railway.bulletinboard.techtrain.dev/threads?offset=10"
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
    <ul>
      {threads.map((thread) => (
        <li key={thread.id}>{thread.title}</li>
      ))}
    </ul>
  );
}
export default ThreadList
