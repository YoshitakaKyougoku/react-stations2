import styles from "./App.module.css";
import ThreadList from "./components/threadList/threadList";
import Header from "./components/header/header";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <ThreadList />
      
    </div>
  );
}

export default App;
