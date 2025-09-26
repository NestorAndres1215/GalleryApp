import React, { useState } from "react";
import "../styles/SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface Props {
  onSearch: (q: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const q = value.trim();
    if (q) {
      setIsLoading(true);
      try {
        await onSearch(q);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <form className="search-form" onSubmit={submit} role="search">
      <label htmlFor="search-input" className="visually-hidden">
        Search images
      </label>
      <input
        type="text"
        id="search-input"
        className="search-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search images (e.g., cats, mountains)..."
        aria-describedby="search-hint"
        disabled={isLoading}
      />
      <button
        type="submit"
        className="search-button"
        disabled={isLoading}
        aria-busy={isLoading}
      >
        <FontAwesomeIcon icon={faSearch} aria-hidden="true" />
        {isLoading ? "Searching..." : "Search"}
      </button>
      <span id="search-hint" className="visually-hidden">
        Enter a search term like cats or mountains to find images.
      </span>
    </form>
  );
};

export default SearchBar;