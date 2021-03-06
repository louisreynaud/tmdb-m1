import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MovieResult} from '../tmdb-data/searchMovie';


@Component({
  selector: 'app-affiche-film',
  templateUrl: './affiche-film.component.html',
  styleUrls: ['./affiche-film.component.css']
})
export class AfficheFilmComponent implements OnInit {

  @Input() monFilm: MovieResult;
  @Input() idFav: number[];
  @Input() idSee: number[];
  @Output() addOrRemoveEvent = new EventEmitter<any[3]>();

  private showToSee: boolean;
  private showToUnsee: boolean;
  private showToFav: boolean;
  private showToUnfav: boolean;
  private inPlaylist: boolean[];

  constructor() {
    this.inPlaylist = [];
    for (let i = 0; i < 5 ; i++) {
      this.inPlaylist.push(false);
    }
  }

  ngOnInit() {

    if (this.idSee != null && this.idSee.includes(this.monFilm.id)) {

      this.showToSee = false;
      this.showToUnsee = true;
    } else {

      this.showToSee = true;
      this.showToUnsee = false;
    }

    if (this.idFav != null && this.idFav.includes(this.monFilm.id)) {

      this.showToFav = false;
      this.showToUnfav = true;
    } else {

      this.showToFav = true;
      this.showToUnfav = false;
    }
  }



  get showToSeeB() {
    return this.showToSee;
  }

  get showToUnseeB() {
    return this.showToUnsee;
  }

  get showToFavB() {
    return (this.showToFav && !this.isInFav());
  }

  get showToUnfavB() {
    return (this.showToUnfav || this.isInFav());
  }

  sendMessage(type: string, list: string) {
    this.addOrRemoveEvent.emit([type, list, this.monFilm]);
  }

  addSee() {
    this.showToSee = false;
    this.showToUnsee = true;
    this.sendMessage('add', 'tosee');
  }

  removeSee() {
    this.showToSee = true;
    this.showToUnsee = false;
    this.sendMessage('remove', 'tosee');
  }

  addFav() {
    this.showToFav = false;
    this.showToUnfav = true;
    this.sendMessage('add', 'fav');
  }

  removeFav() {
    this.showToFav = true;
    this.showToUnfav = false;
    this.sendMessage('remove', 'fav');
  }

  isInFav(): boolean {
    for (const id of this.idFav) {
      if (this.monFilm.id === id) {
        return true;
      } else {
        return false;
      }
    }
  }

  getDesc(): string {
    return this.monFilm.overview;
  }

  getConsole(text: string) {
    console.log(text);
    event.preventDefault();
  }

  addInPlaylist(number: number) {
    this.inPlaylist[number - 1] = true;
  }
  removeFromPlaylist(number: number) {
    this.inPlaylist[number - 1] = false;
  }


  isInPlaylist(number: number) {
    return this.inPlaylist[number - 1];
  }

  addAPlaylist(text: string) {
    console.log('nouvelle playlist "', text, '"crée');
  }
}
