import { Component } from '@angular/core';
import {TmdbService} from './tmdb.service';
import {MovieResponse} from './tmdb-data/Movie';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth, User} from 'firebase';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';
import {filter} from 'rxjs/operators';
import {SearchMovieQuery, SearchMovieResponse} from './tmdb-data/searchMovie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _movie: MovieResponse;
  private _user: User;
  private dbData: Observable<any>;
  private film: MovieResponse;
  private searchReponse: SearchMovieResponse;
  private mytmdb: TmdbService;
  private AoRevent: any[3];

  private userFavListId: number[];
  private userSeeListId: number[];
  private userPage: boolean;
  private signInbool: boolean;
  private signUpbool: boolean;

  constructor(private tmdb: TmdbService, public anAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.anAuth.user.pipe(filter( u => !!u )).subscribe( u => {
      this._user = u;
      const listsPath = `lists/${u.uid}`;
      const lists = db.list(listsPath);
      lists.push('coucou');
      this.dbData = lists.valueChanges();
      this.mytmdb = tmdb;
      this.signUpbool = false;
      this.signInbool = false;
    });
    setTimeout( () =>
      tmdb.init('f2082ef60dbbdc7cae271950483930f1') // Clef de TMDB
          .getMovie(13)
          .then( (m: MovieResponse) => console.log('Movie 13:', this._movie = m) )
          .catch( err => console.error('Error getting movie:', err) ),
      1000 );
  }

  get userFavLI() {
    return this.userFavListId;
  }

  get userSeeLI() {
    return this.userSeeListId;
  }

  goToUserPage() {
    this.userPage = !this.userPage;
    this.searchReponse = null;
  }

  get aoREvent() {
    return this.AoRevent;
  }

  get userP(): boolean {
    return this.userPage;
  }

  get gtmdb(): TmdbService {
    return this.mytmdb;
  }

  getFilm(): MovieResponse {
    return this.film;
  }

  get movie(): MovieResponse {
    return this._movie;
  }

  getPath(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  signUp() {
    this.signUpbool = true;
    this.signInbool = false;
  }

  signIn() {
    this.signInbool = true;
    this.signUpbool = false;
  }

  login() {
    this.anAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.anAuth.auth.signOut();
    this._user = undefined;
  }

  get user(): User {
    return this._user;
  }

  get lists(): Observable<any> {
    return this.dbData;
  }

  get searchR(): SearchMovieResponse {
    return this.searchReponse;
  }

  get signUpBool(): boolean {
    return this.signUpbool;
  }

  get signInBool(): boolean {
    return this.signInbool;
  }

  chercheFilm(name: string) {
    this._movie = null;
    setTimeout( () =>
        this.mytmdb.init('f2082ef60dbbdc7cae271950483930f1') // Clef de TMDB
          .searchMovie(new class implements SearchMovieQuery {
            include_adult: boolean;
            language: string;
            page: number;
            primary_release_year: number;
            query: string = name;
            region: string;
            year: number;
          })
          .then( (m: SearchMovieResponse) => this.searchReponse = m)
          .catch( err => console.error('Error getting movie:', err) ),
      1000 );
    event.preventDefault();
  }

  getIfFilms(res: object[]): boolean {
    return (res.length !== 0);
  }

  getConsole(text: string) {
    console.log(text);
    event.preventDefault();
  }

  receiveAoR(ev: any[3]) {
    this.AoRevent = ev;
  }

  receiveIdFav(e: number[]) {
    this.userFavListId = e;
  }

  receiveIdSee(e: number[]) {
    this.userSeeListId = e;
  }
}
