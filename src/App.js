import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Feed />
      </main>
    </div>
  );
}

export default App;
