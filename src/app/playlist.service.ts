import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Playlist} from './tmdb-data/PlaylistUser';
import {KeyValue} from '@angular/common';


@Injectable()
export class PlaylistService {
 private database = firebase.database();

 constructor() {

 }

 // écrit une nouvelle playlist dans la base de donnée
 writeNewUserPlaylist(userId: string, playlist: Playlist) {
   const key: firebase.database.ThenableReference = this.database.ref('users/' + userId ).push(playlist);

 }

 readUserPlaylist(userId: string, name: string ): Playlist {
    let res: Playlist = null;
   const ref = this.database.ref().child('users/' + userId ).orderByChild('name').equalTo('' + name).on('value', snap => {
     res = snap.val();
   });
   return res;
 }

 updateUserPlaylist(userId: string, name: string, playlist: Playlist ) {
   const res: Playlist = this.readUserPlaylist(userId, name);
   this.database.ref().child('users/' + userId ).orderByChild('name').equalTo('' + name).ref.update(playlist);
 }

 private  getKeys() {
   const userId = firebase.auth().currentUser.uid;
   let res: KeyValue<string, firebase.database.ThenableReference>[] = null;
   const ref = this.database.ref().child('users/' + userId + '/DicoPlaylist' ).on('value', snap => {
     res = snap.val();
   });
   return res;
 }

 private writeKey(name: string, key: firebase.database.ThenableReference) {
   const userId = firebase.auth().currentUser.uid;
   const keyValue: KeyValue<string, firebase.database.ThenableReference> = { key : name , value : key};
   this.database.ref('users/' + userId + '/DicoPlaylist').update(keyValue);
 }

}
