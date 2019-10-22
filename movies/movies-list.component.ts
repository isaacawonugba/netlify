import { Component } from '@angular/core';

@Component({
  selector: 'movie-list',
  template:`
    <div class="container">
      <h3>Mini-Netflix is the home of amazing original programming that you can’t find anywhere else. Movies, TV shows, specials and more, it’s all tailored specifically to you.</h3>

    <hr/>
     <h2>Movies</h2>
  <div class="row pr-4 pl-4">
      <div class="col-md-3" *ngFor="let movie of movies">
          <movie-thumbnail [movie]="movie"></movie-thumbnail>
      </div>
  </div>
  </div>`
})
export class MoviesListComponent {
    movies = [
        {
          id: 1,
          title: 'Dynasty',
          genre: '',
          rated: '',
          released: 2017,
          runtime: '',
          director: '',
          writer: '',
          actors: '',
          plot: '',
          language: '',
          country: '',
          award: '',
          posterImage: 'assets/images/movies/dynasty.jpg'
        },
        {
          id: 2,
          title: 'Elite',
          genre: '',
          rated: '',
          released: 2010,
          runtime: '',
          director: '',
          writer: '',
          actors: '',
          plot: '',
          language: '',
          country: '',
          award: '',
          posterImage: 'assets/images/movies/elite.jpg'
        },
        {
          id: 3,
          title: 'Green Leaf',
          genre: '',
          rated: '',
          released: 2016,
          runtime: '',
          director: '',
          writer: '',
          actors: '',
          plot: '',
          language: '',
          country: '',
          award: '',
          posterImage: 'assets/images/movies/greenleaf.jpg'
        },
        {
          id: 4,
          title: 'Lion Heart',
          genre: '',
          rated: '',
          released: 2017,
          runtime: '',
          director: '',
          writer: '',
          actors: '',
          plot: '',
          language: '',
          country: '',
          award: '',
          posterImage: 'assets/images/movies/lionheart.jpg'
        },
        {
          id: 5,
          title: 'Shooter',
          genre: '',
          rated: '',
          released: 2019,
          runtime: '',
          director: '',
          writer: '',
          actors: '',
          plot: '',
          language: '',
          country: '',
          award: '',
          posterImage: 'assets/images/movies/shooter.jpg'
        },
        {
          id: 6,
          title: 'Tall Girl',
          genre: '',
          rated: '',
          released: 2018,
          runtime: '',
          director: '',
          writer: '',
          actors: '',
          plot: '',
          language: '',
          country: '',
          award: '',
          posterImage: 'assets/images/movies/tall-girl.jpg'
        },
        {
          id: 7,
          title: 'The Princess Switch',
          genre: '',
          rated: '',
          released: 2019,
          runtime: '',
          director: '',
          writer: '',
          actors: '',
          plot: '',
          language: '',
          country: '',
          award: '',
          posterImage: 'assets/images/movies/the-princess-switch.jpg'
        }
    ];
}
