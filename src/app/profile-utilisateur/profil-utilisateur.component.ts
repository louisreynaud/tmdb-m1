import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from 'firebase';
import {MovieResult, SearchMovieQuery, SearchMovieResponse} from '../tmdb-data/searchMovie';
import {TmdbService} from '../tmdb.service';
import {SearchPeopleResponse} from '../tmdb-data/SearchPeople';
import {MovieResponse} from '../tmdb-data/Movie';


@Component({
  selector: 'app-profil-utilisateur',
  templateUrl: './profil-utilisateur.component.html',
  styleUrls: ['./profil-utilisateur.component.css']
})
export class ProfilUtilisateurComponent implements OnInit {
  private active: boolean;
  private searchReponse: SearchPeopleResponse;
  private mytmdb: TmdbService;
  private movie: MovieResponse;
  // private myLists: MovieResponse[][];
  private listTosee: MovieResult[];
  private listFav: MovieResult[];
  private myLists: SearchMovieResponse[];
  private authUser: User;

  @Output() emitListFav = new EventEmitter<number[]>();
  @Output() emitListSee = new EventEmitter<number[]>();


  constructor() {
    this.listTosee = [];
    this.listFav = [];
    this.myLists = [];
    this.active = false;
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

  get searchR(): SearchMovieResponse {
    return this.searchReponse;
  }

  ngOnInit() {
    this.getFilms();
  }

  getFilms() {
    this.myLists = [];
    this.chercheFilm('batman');
    for (let i = 0; i < 10; i++) {
      this.myLists.push(this.searchReponse);
    }
    console.log(this.myLists);
    this.listFav = this.searchReponse.results;
    return this.myLists;
  }

  /*getBasePlaylist() {
    // this.myLists.push(this.listFav);
    this.myLists.push(this.getFilms(10));
    this.myLists.push(this.getFilms(10));
    this.myLists.push(this.getFilms(10));
    this.myLists.push(this.getFilms(10));
  }*/

  /*chercheFilm() {
    this.movie = null;
    const i = Math.floor(Math.random() * 300);
    setTimeout( () =>
      this.mytmdb.init('f2082ef60dbbdc7cae271950483930f1') // Clef de TMDB
        .getMovie(i)
        .then( (m: MovieResponse) => this.movie = m)
        .catch( err => console.error('Error getting movie:', err) ), 1000 );
    console.log('un film :', this.movie);
    return this.movie;
  }*/

  chercheFilm(name: string) {
    this.movie = null;
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
            id: number;
          })
          .then( (m: SearchMovieResponse) => this.searchReponse = m)
          .catch( err => console.error('Error getting movie:', err) ),
      1000 );
    event.preventDefault();
  }

  GoToPlaylist(nom: string) {
    console.log('Amène le scrolling de l\'ecran au niveau de la bonne playlist');
  }
}
