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
  private

  constructor() { }

  ngOnInit() {
  }
}
