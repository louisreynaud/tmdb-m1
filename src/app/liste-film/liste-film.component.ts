import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-liste-film',
  templateUrl: './liste-film.component.html',
  styleUrls: ['./liste-film.component.css']
})
export class ListeFilmComponent implements OnInit {

  @Input() mesFilms: any;
  idFav: number[];
  idSee: number[];
  @Output() addOrRemoveEvent = new EventEmitter<any[3]>();

  constructor() {
    this.idFav = [];
    this.idSee = [];
  }

  @Input()
  set listIdFav(list: number[]) {
    this.idFav = list;
  }

  @Input()
  set listIdSee(list: number[]) {
    this.idSee = list;
  }

  get idFavList() {
    return this.idFav;
  }

  get idSeeList() {
    return this.idSee;
  }

  receiveAoR($event) {
    this.addOrRemoveEvent.emit($event);
  }

  ngOnInit() {
  }
}
