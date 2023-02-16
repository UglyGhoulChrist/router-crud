import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ViewPost from "./pages/ViewPost";
import NewPost from "./pages/NewPost";

function App() {
  window.localStorage.clear("viewPost");
  const URL = "http://localhost:7777/posts";
  const [posts, setPosts] = useState([]);
  const [render, setRender] = useState(0);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((posts) => setPosts(posts))
      .catch((error) => console.log(error))
      .finally(console.log("finnaly"));
  }, [render]);

  const deletePost = (id) => {
    fetch(URL + "/" + id, {
      method: "DELETE",
    })
      .then()
      .then()
      .catch()
      .finally(console.log("Удаляем пост", id));
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route
            path="/posts/new"
            element={<NewPost setRender={() => setRender(Math.random())} />}
          />
          <Route
            path="/posts/:id"
            element={
              <ViewPost
                posts={posts}
                handleDeletePost={deletePost}
                setRender={() => setRender(Math.random())}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
