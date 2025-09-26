import React from "react";
import { useFetchImages } from "../hooks/useFetchImages";
import ImageCard from "./ImageCard";
import "../styles/ImageGallery.css"; // 👈 importamos el CSS

const ImageGallery: React.FC<{ query: string }> = ({ query }) => {
  const { images, loading, error } = useFetchImages(query);

  return (
    <div>
      {loading && <p>🔄 Cargando imágenes...</p>}
      {error && <p className="error">{error}</p>}

      <div className="image-gallery">
        {images.map((img) => (
          <ImageCard key={img.id} photo={img} />
        ))}
      </div>

      {!loading && images.length === 0 && query && (
        <p>No se encontraron imágenes para "{query}"</p>
      )}
    </div>
  );
};

export default ImageGallery;
