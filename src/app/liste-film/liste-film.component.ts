import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-liste-film',
  templateUrl: './liste-film.component.html',
  styleUrls: ['./liste-film.component.css']
})
export class ListeFilmComponent implements OnInit {

  constructor() { }

  @Input() mesFilms: any;

  ngOnInit() {
  }

}
