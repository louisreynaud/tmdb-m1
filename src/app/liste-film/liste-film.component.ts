import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-liste-film',
  templateUrl: './liste-film.component.html',
  styleUrls: ['./liste-film.component.css']
})
export class ListeFilmComponent implements OnInit {

  constructor() { }

  @Input() mesFilms: any;
  @Output() addOrRemoveEvent = new EventEmitter<any[3]>();

  receiveAoR($event) {
    this.addOrRemoveEvent.emit($event);
  }

  ngOnInit() {
  }
}
