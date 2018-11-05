import {MovieResponse} from './Movie';
import {KeyValue} from '@angular/common';

export interface PlaylistUserQuery {
  language?: string; // default "en-US"
}

export interface Playlist {
  name?: string;
  films?: MovieResponse[];
}

export interface AllPlaylist {
  dicoPlaylist?: KeyValue<string, firebase.database.ThenableReference>[];
  playlists?: Playlist[];
}
