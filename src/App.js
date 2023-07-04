import "./App.css";
import { Routes, Route } from "react-router-dom";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import PostDetail from "./components/PostDetail/PostDetail";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
