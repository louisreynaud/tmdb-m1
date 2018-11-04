import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MovieResult} from '../tmdb-data/searchMovie';


@Component({
  selector: 'app-affiche-film',
  templateUrl: './affiche-film.component.html',
  styleUrls: ['./affiche-film.component.css']
})
export class AfficheFilmComponent implements OnInit {

  @Input() monFilm: MovieResult;
  @Output() addOrRemoveEvent = new EventEmitter<any[3]>();

  showToSee: boolean;
  showToUnsee: boolean;
  showToFav: boolean;
  showToUnfav: boolean;

  constructor() {
    this.showToSee = true;
    this.showToUnsee = false;
    this.showToFav = true;
    this.showToUnfav = false;
  }

  ngOnInit() {
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

  getDesc(): string {
    return this.monFilm.overview;
  }

  getConsole(text: string) {
    console.log(text);
    event.preventDefault();
  }
}
