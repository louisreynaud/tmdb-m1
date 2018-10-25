export interface SearchTVQuery {
  language?: string; // Pass a ISO 639-1 value to display translated data for the fields that support it. default: en-US
  query: string;
  page?: number; // Specify which page to query. Default 1
  first_air_date_year?: number;
}

export interface SearchTVResponse {
  page?: number;
  results?: TVResult[];
  total_results?: number;
  total_pages?: number;
}

export interface TVResult {
  poster_path?: string;
  popularity?: number;
  id?: number;
  backdrop_path?: string;
  vote_average?: number;
  overview?: string;
  first_air_date?: string;
  origin_country?: string[];
  genre_ids?: number[];
  original_language?: string;
  vote_count?: number;
  name?: string;
  original_name?: string;
}
