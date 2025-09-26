import React, { useState } from "react";
import "../styles/SearchBar.css";

interface Props {
  onSearch: (q: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = value.trim();
    if (q) onSearch(q);
  };

  return (
    <form className="search-form" onSubmit={submit}>
      <input
        type="text"
        className="search-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Busca imágenes (ej. cats, mountains)..."
      />
      <button type="submit" className="search-button">
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
