import { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";

const App = () => {
  const baseApiUrl = "http://localhost:3000";

  const initialDefault = {
    title: "",
    content: "",
    image: "",
    tags: "",
  };

  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios
      .get(`${baseApiUrl}/posts`)
      .then((res) => {
        setPosts(res.data);
      })

      .catch((error) => {
        console.error("Errore nel caricamento dei post", error);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div className="container my-3">
        <h1 className="text-center">Gestione Post</h1>
        <div className="row">
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
