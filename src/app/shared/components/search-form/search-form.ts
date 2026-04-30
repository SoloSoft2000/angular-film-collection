import { ChangeDetectionStrategy, Component, model } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-search-form',
  imports: [],
  templateUrl: './search-form.html',
  styleUrl: './search-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SearchForm {
  searchTerm = model.required<string>();

  onSearchInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }
}
