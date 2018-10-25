export interface SearchMovieQuery {
  language?: string; // default: en-US
  query: string;
  page?: number; // Specify which page to query. minimum: 1, maximum: 1000, default: 1
  include_adult?: boolean;
  region: string; // Specify a ISO 3166-1 code to filter release dates. Must be uppercase. pattern: ^[A-Z]{2}$
  year?: number;
  primary_release_year?: number;
}

export interface SearchMovieResponse {
  page?: number;
  results?: MovieResult[];
  total_results?: number;
  total_pages?: number;
}

export interface MovieResult {
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}
