import { ResolveFn, Routes } from '@angular/router';
import { Catalog } from './features/catalog/catalog';
import { inject } from '@angular/core';
import { FilmService } from './core/services/film.service';

const titleResolver: ResolveFn<string> = (route) => {
  const filmService = inject(FilmService);
  const filmId = Number(route.params['id']);
  const film = filmService.getFilmById(filmId);
  return `Film Details: ${film?.title}`;
};

export const routes: Routes = [
  {
    path: '',
    component: Catalog,
    title: 'Film Collection Catalog'
  },
  {
    path: 'film/:id',
    loadComponent: () => import('./features/film-details/film-details')
      .then(m => m.FilmDetails),
    title: titleResolver
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about')
      .then(m => m.About),
    title: 'About This Application'
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found')
      .then(m => m.NotFound),
    title: 'Page Not Found'
  }
];
