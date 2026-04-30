import { Component, input, output } from '@angular/core';
import { FilmModel } from '../../../../core/models/film.model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-film-card',
  imports: [RouterLink],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  film = input.required<FilmModel>();

  toggleFavorite = output<number>();

  handleClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.toggleFavorite.emit(this.film().id);
  }
}
