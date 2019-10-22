import { Component } from '@angular/core';

@Component({
  selector: 'movies-app',
  template: `
            <nav-bar></nav-bar>
            <movie-list></movie-list>
        `
})
export class MoviesAppComponent {
  //title = 'movies';
}
