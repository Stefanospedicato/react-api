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
  const [formData, setFormData] = useState(initialDefault);

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

  const handlerDeletePost = (id) => {
    axios
      .delete(`${baseApiUrl}/posts/${id}`)
      .then((res) => {
        fetchPosts();
      })
      .catch((e) => {
        console.error("Errore", e);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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
            <Card
              key={post.id}
              post={post}
              onDelete={() => handlerDeletePost(post.id)}
            />
          ))}
        </div>
        <div className="container">
          <div className="card">
            <h3>Aggiungi un nuovo Post</h3>
          </div>
          <form action="">
            <div className="mt-3">
              <label htmlFor="title">Titolo del Post</label>
              <input
                type="text"
                id="name"
                name="title"
                className="form-control"
                placeholder="Aggiungi titolo..."
                value={formData.title}
                onChange={handleInputChange}
              />
              <label htmlFor="title">URL Immagine</label>
              <input
                type="text"
                id="name"
                name="image"
                className="form-control"
                placeholder="Inserisci URL"
                value={formData.image}
                onChange={handleInputChange}
              />
              <label htmlFor="title">Aggiungi una descrizione</label>
              <input
                type="text"
                id="name"
                name="content"
                className="form-control"
                placeholder="Aggiungi descrizione..."
                value={formData.content}
                onChange={handleInputChange}
              />
              <label htmlFor="title">
                Aggiungi degli tag personalizzati (separati da un trattino)
              </label>
              <input
                type="text"
                id="name"
                name="tags"
                className="form-control"
                placeholder="Es. Dolci - Cannella - Cioccolato"
                value={formData.tags}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
