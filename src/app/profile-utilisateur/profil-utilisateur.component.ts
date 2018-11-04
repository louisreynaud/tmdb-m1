import {Component, Input, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {UserResponse} from '../tmdb-data/User';
import Database = firebase.database.Database;
import {Observable} from 'rxjs';
import {MovieResult} from '../tmdb-data/searchMovie';

@Component({
  selector: 'app-profil-utilisateur',
  templateUrl: './profil-utilisateur.component.html',
  styleUrls: ['./profil-utilisateur.component.css']
})
export class ProfilUtilisateurComponent implements OnInit {

  private database = firebase.database();
  private active: boolean;
  private listTosee: MovieResult[];
  private listFav: MovieResult[];

  constructor() {
    this.listTosee = [];
    this.listFav = [];
    this.active = false;
  }

  @Input()
  set actif(state: boolean) {
    this.active = state;
  }

  get activ(): boolean {
    return this.active;
  }

  @Input()
  set addOrRemove(eve: any[3]) {
    console.log(eve);
    if (eve != null) {
      if (eve[0] === 'add') {
        if (eve[1] === 'tosee') {
          this.addMovieToSee(eve[2]);
        } else if (eve[1] === 'fav') {
          this.addMovieFav(eve[2]);
        }

      } else if (eve[0] === 'remove') {
        if (eve[1] === 'tosee') {
          this.removeMovieToSee(eve[2]);
        } else if (eve[1] === 'fav') {
          this.removeMovieFav(eve[2]);
        }
      }
    }
  }

  addMovieToSee(m: MovieResult) {
    this.listTosee.push(m);
  }

  removeMovieToSee(m: MovieResult) {
    this.listTosee.splice(this.listTosee.indexOf(m), 1);
  }

  addMovieFav(m: MovieResult) {
    this.listFav.push(m);
  }

  removeMovieFav(m: MovieResult) {
    this.listFav.splice(this.listFav.indexOf(m), 1);
  }

  ngOnInit() {
  }
}
