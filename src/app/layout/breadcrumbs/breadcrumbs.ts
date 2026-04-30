import { Component, computed, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { FilmService } from '../../core/services/film.service';
import { filter, map } from 'rxjs/operators';

interface Breadcrumb {
  label: string;
  path: string;
}

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss',
})

export class Breadcrumbs {
  private readonly router = inject(Router);
  private filmService = inject(FilmService);

  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event) => (event as NavigationEnd).urlAfterRedirects)
    ),
    { initialValue: '/' } // Начальное значение
  );
  
  breadcrumbs = computed<Breadcrumb[]>(() => {
    const breadcrumbs: Breadcrumb[] = [];
    const currentPath = this.currentUrl();
      if (currentPath === '/about') {
        breadcrumbs.push({ label: 'About', path: '/about'});
      }
      if (currentPath === '/') {
        breadcrumbs.push({ label: 'Home', path: '/'});
      }
      if (currentPath.startsWith('/film/')) {
        breadcrumbs.push({ label: 'Home', path: '/'});
        breadcrumbs.push({ label: this.filmService.getFilmById(Number(currentPath.slice(6)))?.title || '', path: currentPath})
      }
    return breadcrumbs;
  })
}
