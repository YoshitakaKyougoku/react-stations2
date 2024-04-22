import logo from "./logo.svg";
import "./App.css";
import ThreadList from './threadList'
import Header from './header'


function App() {
  
  return (
    <div className="App">
      <Header />
      <section>
        <ThreadList />
      </section>
    </div>
  );
}

export default App;
