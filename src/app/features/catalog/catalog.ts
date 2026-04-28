import { Component, computed, inject, signal, model } from '@angular/core';
import { FilmService } from '../../core/services/film.service';
import { FilmModel } from '../../core/models/film.model';
import { SearchForm } from '../../shared/components/search-form/search-form';
import { Autofocus } from "../../shared/directives/autofocus";

@Component({
  selector: 'app-catalog',
  imports: [SearchForm, Autofocus],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  searchTerm = model('');

  filmService = inject(FilmService);
  isOnlyFavorites = signal(false);

  films = computed<FilmModel[]>(() => 
    this.isOnlyFavorites() 
      ? this.filmService.favoriteFilms$() 
      : this.filmService.films$());

  filteredFilms = computed<FilmModel[]>(() => this.films().filter(v => v.title.includes(this.searchTerm())));
      
  toggleFavorite(filmId: number): void {
    this.filmService.toggleFavorite(filmId);
  }
}
