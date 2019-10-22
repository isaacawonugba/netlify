import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MoviesAppComponent } from './movies-app.component';
import { NavBarComponent } from './nav/navbar.component';
import {
  MoviesListComponent,
  MovieThumbnailComponent
} from './movies/index';

@NgModule({
  imports: [
    BrowserModule
  ],

  declarations: [
    MoviesAppComponent,
    NavBarComponent,
    MoviesListComponent,
    MovieThumbnailComponent
  ],

  providers: [],
  bootstrap: [MoviesAppComponent]
})
export class AppModule { }
