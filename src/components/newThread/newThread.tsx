import { FormEventHandler, useState } from "react";
import styles from "./newThread.module.css";
const url = "https://railway.bulletinboard.techtrain.dev/threads";
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
    })
    .catch(() => {
      console.log("error");
    });
};
const handleInvalid: FormEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault();
  alert("タイトルを入力してください");
};
function NewThread() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>スレッド新規作成</h1>
      <form onSubmit={createNewThread} onInvalid={handleInvalid}>
        <label className={styles.inputTitle} htmlFor="title">
          <div className={styles.inputArea}>
            {/* <span className={styles.errorMessage}>
              タイトルを入力してください
            </span> */}
            <input
              className={styles.input}
              type="text"
              name="title"
              placeholder="スレッドタイトル"
              defaultValue=""
              required
            />
          </div>
          <button className={styles.buttonNeumorphism}>作成</button>
        </label>
      </form>
    </section>
  );
}
export default NewThread;
