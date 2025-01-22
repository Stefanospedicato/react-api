import { useState, useEffect } from "react";
import Card from "../components/Card";

const baseApiUrl = "http://localhost:3000";

const initialDefault = {
  title: "",
  content: "",
  image: "",
  tags: "",
};

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <Card />
        </div>
      </div>
    </>
  );
};

export default App;
