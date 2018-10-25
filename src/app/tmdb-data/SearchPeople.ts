import {MovieResult} from './searchMovie';
import {TVResult} from './SearchTV';

export interface SearchPeopleQuery {
  language?: string; // Pass a ISO 639-1 value to display translated data for the fields that support it.
                    // default: en-US
  query: string;
  page?: number;
  include_adult?: boolean;
  region?: string;
}

export interface SearchPeopleResponse {
  page?: number;
  results?: {
    profile_path?: string;
    adult?: boolean;
    id?: number;
    known_for?: MovieResult | (TVResult & {media_type: string; /* Allowed Values: tv */});
  }[];
  name?: string;
  popularity?: number;
  total_results?: number;
  total_pages?: number;
}
