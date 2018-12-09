import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {TmdbService} from './tmdb.service';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { ListeFilmComponent } from './liste-film/liste-film.component';
import { AfficheFilmComponent } from './affiche-film/affiche-film.component';
import {ProfilUtilisateurComponent} from './profile-utilisateur/profil-utilisateur.component';
import { SignUpComponent } from './signup/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {AuthService} from './app.service.auth';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    ListeFilmComponent,
    AfficheFilmComponent,
    ProfilUtilisateurComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatMenuModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [TmdbService,
  AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
