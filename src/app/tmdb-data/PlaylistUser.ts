import {MovieResponse} from './Movie';

export interface PlaylistUserQuery {
  language?: string; // default "en-US"
}

export interface Playlist {
  name?: string;
  films?: MovieResponse[];
}

export interface AllPlaylist {
  playlists?: Playlist[];
}
