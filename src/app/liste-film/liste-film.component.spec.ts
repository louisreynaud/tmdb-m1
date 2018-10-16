import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFilmComponent } from './liste-film.component';

describe('ListeFilmComponent', () => {
  let component: ListeFilmComponent;
  let fixture: ComponentFixture<ListeFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
