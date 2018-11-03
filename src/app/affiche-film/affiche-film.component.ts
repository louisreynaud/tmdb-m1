import {Component, Input, OnInit} from '@angular/core';
import {MovieResult} from '../tmdb-data/searchMovie';

@Component({
  selector: 'app-affiche-film',
  templateUrl: './affiche-film.component.html',
  styleUrls: ['./affiche-film.component.css']
})
export class AfficheFilmComponent implements OnInit {

  @Input() monFilm: MovieResult;
  toggle: boolean;

  constructor() {
    this.toggle = true;
  }

  ngOnInit() {
  }

  addFav(event) {

  }

  removeFav(event) {

  }

  addSee(event) {

  }

  removeSee(event) {

  }

  getDesc(): string {
    return this.monFilm.overview;
  }

  getConsole(text: string) {
    console.log(text);
    event.preventDefault();
  }
}
