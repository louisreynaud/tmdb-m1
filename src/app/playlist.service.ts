import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Playlist} from './tmdb-data/PlaylistUser';

@Injectable()
export class PlaylistService {
 private database = firebase.database();

 constructor() {}

 // écrit une nouvelle playlist dans la base de donnée
 writeNewUserPlaylist(userId: string, playlist: Playlist) {
   this.database.ref('users/' + userId ).push(playlist);
 }

 readUserPlaylist(userId: string, name: string ): Playlist {
    let res: Playlist = null;
   const ref = this.database.ref().child('users/' + userId ).orderByChild('name').equalTo('' + name).on('value', snap => {
     res = snap.val();
   });
   return res;
 }

 updateUserPlaylist(userId: string, name: string ) {
   const res: Playlist = this.readUserPlaylist(userId, name);
 }
}
