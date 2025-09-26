import type { UnsplashSearchResponse } from "../types/unsplash";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY as string;

if (!ACCESS_KEY) {
  // evita usar la app sin key; útil en dev
  console.warn("REACT_APP_UNSPLASH_ACCESS_KEY no está definida en .env");
}

export const fetchImages = async (
  query: string,
  page = 1,
  perPage = 30
): Promise<UnsplashSearchResponse> => {
  if (!ACCESS_KEY) throw new Error("Missing Unsplash access key (REACT_APP_UNSPLASH_ACCESS_KEY).");

  const url = new URL("https://api.unsplash.com/search/photos");
  url.searchParams.set("query", query);
  url.searchParams.set("page", String(page));
  url.searchParams.set("per_page", String(perPage));

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Unsplash error: ${res.status} - ${text}`);
  }

  const data = await res.json();
  return data as UnsplashSearchResponse;
};
