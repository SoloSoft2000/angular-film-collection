import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Breadcrumbs } from './layout/breadcrumbs/breadcrumbs';
import { Footer } from './layout/footer/footer';
@Component({
  selector: 'app-root',
  imports: [Header, Breadcrumbs, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-film-collection');
}
