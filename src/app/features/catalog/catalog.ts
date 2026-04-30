import { Component, computed, inject, signal, model } from '@angular/core';
import { FilmService } from '../../core/services/film.service';
import { FilmModel } from '../../core/models/film.model';
import { SearchForm } from '../../shared/components/search-form/search-form';
import { Autofocus } from '../../shared/directives/autofocus';
import { FilmCard } from './components/film-card/film-card';
import { SelectGenre } from './components/select-genre/select-genre';

@Component({
  selector: 'app-catalog',
  imports: [SearchForm, Autofocus, FilmCard, SelectGenre],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  searchTerm = model('');
  selectedGenre = model('All');

  filmService = inject(FilmService);
  isOnlyFavorites = signal(false);

  films = computed<FilmModel[]>(() =>
    this.isOnlyFavorites() ? this.filmService.favoriteFilms$() : this.filmService.films$(),
  );

  filteredFilms = computed<FilmModel[]>(() =>
    this.films().filter(
      (v) =>
        v.title.includes(this.searchTerm()) &&
        (this.selectedGenre() === 'All' || v.genre === this.selectedGenre()),
    ),
  );
  toggleFavorite(filmId: number): void {
    this.filmService.toggleFavorite(filmId);
  }
}
