import { Component, input, output } from '@angular/core';
import { FilmModel } from '../../../../core/models/film.model';

@Component({
  selector: 'app-film-card',
  imports: [],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  film = input.required<FilmModel>();

  toggleFavorite = output<number>();
}
