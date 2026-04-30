import { Component, inject, model } from '@angular/core';
import { FilmService } from '../../../../core/services/film.service';

@Component({
  selector: 'app-select-genre',
  imports: [],
  templateUrl: './select-genre.html',
  styleUrl: './select-genre.scss',
})
export class SelectGenre {
  selectedGenre = model.required<string>();
  filmService = inject(FilmService);
  genres = this.filmService.getGenres();

  onSelectChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.selectedGenre.set(select.value);
  }
}
