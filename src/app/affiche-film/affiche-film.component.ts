import {Component, Input, OnInit} from '@angular/core';
import {MovieResult} from '../tmdb-data/searchMovie';

@Component({
  selector: 'app-affiche-film',
  templateUrl: './affiche-film.component.html',
  styleUrls: ['./affiche-film.component.css']
})
export class AfficheFilmComponent implements OnInit {

  @Input() monFilm: MovieResult;
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

  addSee() {
    this.showToSee = false;
    this.showToUnsee = true;
  }

  removeSee() {
    this.showToSee = true;
    this.showToUnsee = false;
  }

  addFav() {
    this.showToFav = false;
    this.showToUnfav = true;
  }

  removeFav() {
    this.showToFav = true;
    this.showToUnfav = false;
  }

  getDesc(): string {
    return this.monFilm.overview;
  }

  getConsole(text: string) {
    console.log(text);
    event.preventDefault();
  }
}
