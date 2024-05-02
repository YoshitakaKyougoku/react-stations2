import { FormEventHandler, useState } from "react";
import styles from "./newThread.module.css";
const url = "https://railway.bulletinboard.techtrain.dev/threads";
const handleInvalid: FormEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault();
  alert("タイトルを入力してください");
};
function NewThread() {
  const [title, setTitle] = useState("");
  const createNewThread: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    console.log("fetch");
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title: form.get("title") || "",
      }),
    })
      .then(async (res) => {
        const data = await res.json();
        console.log(data);
        setTitle("");
      })
      .catch(() => {
        console.log("error");
      });
  };
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.title}>スレッド新規作成</h1>
        <form
          className={styles.form}
          onSubmit={createNewThread}
          onInvalid={handleInvalid}
        >
          <label className={styles.inputArea} htmlFor="title">
            <input
              className={styles.input}
              type="text"
              name="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="タイトルを入力してください"
              value={title}
              required
            />
            <button className={styles.button}>作成</button>
          </label>
        </form>
      </div>
    </section>
  );
}
export default NewThread;
