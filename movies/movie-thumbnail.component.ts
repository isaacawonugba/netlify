import { Component, Input } from '@angular/core';

@Component({
  selector: 'movie-thumbnail',
  template: `
      <div class="card mb-4">
        <img [src]="movie?.posterImage" alt="{{move?.title}}" class="card-img-top">
        <div class="card-body">
          <div class="card-text text-center">
            <div>{{movie?.title}} ({{movie?.released}})</div>
          </div>
        </div>
      </div>
    `,
    styles: [`.card:hover{ cursor:pointer; } .card-text div{ font-weight: bold; } .card-text{padding: 0px; }`]
})
export class MovieThumbnailComponent {
  @Input() movie: any
}
