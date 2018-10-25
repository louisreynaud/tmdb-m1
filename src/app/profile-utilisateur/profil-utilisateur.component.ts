import {Component, Input, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {UserResponse} from '../tmdb-data/User';
import Database = firebase.database.Database;

@Component({
  selector: 'app-profil-utilisateur',
  templateUrl: './profil-utilisateur.component.html',
  styleUrls: ['./profil-utilisateur.component.css']
})
export class ProfilUtilisateurComponent implements OnInit {

  private database = firebase.database();

  constructor() { }

  ngOnInit() {
  }

  getUser(): any {
    const userId = firebase.auth().currentUser.uid;
    return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
      const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    });
  }

  writeUserData(userId, Name, password, imageUrl):void {
    firebase.database().ref('users/' + userId).set({
      userName: name,
      password: password,
      profile_picture : imageUrl
    });
  }
}
