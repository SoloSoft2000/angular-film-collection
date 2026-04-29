import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../../core/services/film.service';
import { FilmModel } from '../../core/models/film.model';
import { TimePipe } from '../../shared/pipes/time-pipe';

@Component({
  selector: 'app-film-details',
  imports: [TimePipe],
  templateUrl: './film-details.html',
  styleUrl: './film-details.scss',
})
export class FilmDetails {
  private route = inject(ActivatedRoute);
  readonly filmId = computed<number>(() => Number(this.route.snapshot.params['id']));
  private filmService = inject(FilmService);

  film = computed<FilmModel | null>(
    () => this.filmService.getFilmById(Number(this.filmId())) || null,
  );
}
