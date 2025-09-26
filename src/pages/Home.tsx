import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ImageGallery from "../components/ImageGallery";
import "../styles/Home.css";
const Home: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <main>
      <h1>🖼️ Galería - Unsplash</h1>
      <SearchBar onSearch={setQuery} />
      <ImageGallery query={query} />
    </main>
  );
};

export default Home;
