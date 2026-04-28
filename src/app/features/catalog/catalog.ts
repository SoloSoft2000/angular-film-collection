import { Component, computed, inject, signal } from '@angular/core';
import { FilmService } from '../../core/services/film.service';
import { FilmModel } from '../../core/models/film.model';

@Component({
  selector: 'app-catalog',
  imports: [],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  filmService = inject(FilmService);
  isOnlyFavorites = signal(false);

  films = computed<FilmModel[]>(() => 
    this.isOnlyFavorites() 
      ? this.filmService.favoriteFilms$() 
      : this.filmService.films$());
      
  toggleFavorite(filmId: number): void {
    this.filmService.toggleFavorite(filmId);
  }
}
