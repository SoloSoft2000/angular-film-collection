import { computed, Injectable, signal } from '@angular/core';
import FILM_DATA from '../../data/films.json';
import { FilmModel } from '../models/film.model';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private filmsSignal = signal<FilmModel[]>(FILM_DATA);
  private favoriteFilmsSignal = computed<FilmModel[]>(() =>
    this.filmsSignal().filter((film) => film.isFavorite)
  );

  readonly films$ = this.filmsSignal.asReadonly();
  readonly favoriteFilms$ = this.favoriteFilmsSignal;

  getFilmById(id: number): FilmModel | undefined {
    return this.filmsSignal().find((film) => film.id === id);
  }

  getGenres(): string[] {
    const genreSet = new Set<string>();
    this.filmsSignal().forEach(v => genreSet.add(v.genre));
    return [...genreSet];
  }

  toggleFavorite(id: number): void {
    const film = this.getFilmById(id);
    if (film) {
      film.isFavorite = !film.isFavorite;
      this.filmsSignal.set([...this.filmsSignal()]);
    }
  }
}
