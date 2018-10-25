export interface MovieQuery {
  language?: string; // default "en-US"
}

export interface MovieGenre {
  id?: number;
  name?: string;
}

export interface ProductionCompany {
  name?: string;
  id?: number;
  logo_path?: string;
  origin_country?: string;
}

export interface ProductionCountry {
  iso_3166_1?: string;
  name?: string;
}

export interface SpokenLanguage {
  iso_639_1?: string;
  name?: string;
}

export interface MovieResponse {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: Object;
  budget?: number;
  genres?: MovieGenre[];
  homepage?: string;
  id?: number;
  imdb_id?: string; // pattern: ^tt[0-9]{7}
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: ProductionCompany[];
  production_countries?: ProductionCountry[];
  release_date?: string; // format: date
  revenue?: number;
  runtime?: number;
  spoken_languages?: SpokenLanguage[];
  status?: string; // Allowed Values: Rumored, Planned, In Production, Post Production, Released, Canceled
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}
