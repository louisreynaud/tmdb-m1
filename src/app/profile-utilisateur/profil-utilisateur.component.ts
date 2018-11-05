import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {auth, User} from 'firebase';
import * as firebase from 'firebase';
import {UserResponse} from '../tmdb-data/User';
import Database = firebase.database.Database;
import {Observable} from 'rxjs';
import {MovieResult, SearchMovieQuery, SearchMovieResponse} from '../tmdb-data/searchMovie';
import {filter} from 'rxjs/operators';
import {TmdbService} from '../tmdb.service';
import {SearchPeopleQuery, SearchPeopleResponse} from '../tmdb-data/SearchPeople';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-profil-utilisateur',
  templateUrl: './profil-utilisateur.component.html',
  styleUrls: ['./profil-utilisateur.component.css']
})
export class ProfilUtilisateurComponent implements OnInit {

  private database = firebase.database();
  private active: boolean;
  private searchReponse: SearchPeopleResponse;
  private mytmdb: TmdbService;
  private listTosee: MovieResult[];
  private listFav: MovieResult[];
  private authUser: User;
  private myFavActor: {
    photo: string,
    name: string
  }

  @Output() emitListFav = new EventEmitter<number[]>();
  @Output() emitListSee = new EventEmitter<number[]>();

  constructor() {
    this.listTosee = [];
    this.listFav = [];
    this.active = false;
    this.myFavActor = this.getFavAct();
  }

  @Input() set tmdb(tmdb: TmdbService) {
    this.mytmdb = tmdb;
  }

  @Input() set user(u: User) {
    this.authUser = u;
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

  get listIdSee() {
    const seeListId = [];

    for (let i = 0; i < this.seeList.length; i++) {
      seeListId.push(this.seeList[i].id);
    }

    return seeListId;
  }

  get listIdFav() {
    const favListId = [];

    for (let i = 0; i < this.favList.length; i++) {
      favListId.push(this.favList[i].id);
    }

    return favListId;
  }

  get onAuthUser() {
    return this.authUser;
  }

  addMovieToSee(m: MovieResult) {
    this.listTosee.push(m);
    this.emitListSee.emit(this.listIdSee);
  }

  removeMovieToSee(m: MovieResult) {
    this.listTosee.splice(this.listTosee.indexOf(m), 1);
    this.emitListSee.emit(this.listIdSee);
  }

  addMovieFav(m: MovieResult) {
    this.listFav.push(m);
    this.emitListFav.emit(this.listIdFav);
  }

  removeMovieFav(m: MovieResult) {
    this.listFav.splice(this.listFav.indexOf(m), 1);
    this.emitListFav.emit(this.listIdFav);
  }

  get favList() {
    return this.listFav;
  }

  get seeList() {
    return this.listTosee;
  }

  ngOnInit() {
  }

  cherchePerson() {
    setTimeout(() =>
        this.mytmdb.init('f2082ef60dbbdc7cae271950483930f1') // Clef de TMDB
          .searchMovie(new class implements SearchPeopleQuery {
            include_adult: boolean;
            language: string;
            page: number;
            query: string;
            region: string;
          })
          .then((m: SearchPeopleResponse) => this.searchReponse = m)
          .catch(err => console.error('Error getting People:', err)),
      1000);
  }

  getFavAct() {
    this.cherchePerson();
    console.log(this.searchReponse);
    return{
      photo: null,
      name: null,
    };
  }

  get favActor() {
    return this.myFavActor;
  }
}
