import { Routes } from '@angular/router';
import { Catalog } from './features/catalog/catalog';


export const routes: Routes = [
  {
    path: '',
    component: Catalog,
    title: 'Film Collection Catalog'
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
