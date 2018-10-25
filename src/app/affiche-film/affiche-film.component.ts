import {Component, Input, OnInit} from '@angular/core';
import {MovieResult} from '../tmdb-data/searchMovie';

@Component({
  selector: 'app-affiche-film',
  templateUrl: './affiche-film.component.html',
  styleUrls: ['./affiche-film.component.css']
})
export class AfficheFilmComponent implements OnInit {

  @Input() monFilm: MovieResult;

  constructor() { }

  ngOnInit() {
  }

  addFav(event) {
    event.target.classList.addClass('divFavDisabled');
    event.target.classList.removeClass('divFavEnabled');
  }

  removeFav(event) {

  }

  getDesc(): string {
    console.log(this.monFilm.overview);
    return this.monFilm.overview;
  }

  getConsole(text: string) {
    console.log(text);
    event.preventDefault();
  }
}
