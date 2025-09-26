import { useEffect, useState } from "react";
import { fetchImages } from "../api/unsplash";
import type { UnsplashPhoto } from "../types/unsplash";

export const useFetchImages = (query: string, delay = 500) => {
  const [images, setImages] = useState<UnsplashPhoto[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) {
      setImages([]);
      setError(null);
      return;
    }

    let cancelled = false;
    const t = setTimeout(() => {
      setLoading(true);
      setError(null);

      fetchImages(query)
        .then((data) => {
          if (!cancelled) setImages(data.results);
        })
        .catch((err) => {
          if (!cancelled) setError(err.message || "Error al obtener imágenes");
        })
        .finally(() => {
          if (!cancelled) setLoading(false);
        });
    }, delay);

    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [query, delay]);

  return { images, loading, error };
};
