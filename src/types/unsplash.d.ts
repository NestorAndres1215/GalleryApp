export interface UnsplashUrl {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface UnsplashUser {
  name: string;
  links: { html: string };
}

export interface UnsplashPhoto {
  id: string;
  alt_description: string | null;
  urls: UnsplashUrl;
  links: { html: string };
  user: UnsplashUser;
}

export interface UnsplashSearchResponse {
  total: number;
  total_pages: number;
  results: UnsplashPhoto[];
}
