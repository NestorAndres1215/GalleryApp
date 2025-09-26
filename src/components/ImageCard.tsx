import React from "react";
import type { UnsplashPhoto } from "../types/unsplash";
import "../styles/ImageCard.css"; // 👈 importamos estilos

const ImageCard: React.FC<{ photo: UnsplashPhoto }> = ({ photo }) => {
  return (
    <a
      href={photo.links.html}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <div className="image-card">
        <img
          src={photo.urls.small}
          alt={photo.alt_description || "Imagen Unsplash"}
          loading="lazy"
        />
        <div className="info">
          {photo.user?.name || "Desconocido"}
        </div>
      </div>
    </a>
  );
};

export default ImageCard;
