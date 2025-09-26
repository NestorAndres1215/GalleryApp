import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ImageGallery from "../components/ImageGallery";
import "../styles/Home.css";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons"; // icono de galería

const Home: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <main>
      <h1>
        <FontAwesomeIcon icon={faImages} /> Galería - Unsplash
      </h1>
      <SearchBar onSearch={setQuery} />
      <ImageGallery query={query} />
    </main>
  );
};

export default Home;
