import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})

export class Header implements OnInit {
  isDarkMode = false;
  private localStorageName = 'theme-film-collection';
  
  private setTheme(isDark: boolean) {
    const theme = isDark ? 'dark' : 'light';
    this.isDarkMode = isDark;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.localStorageName, theme);
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.setTheme(this.isDarkMode);
  }

  ngOnInit(): void {
    const savedTheme = localStorage.getItem(this.localStorageName);
    this.setTheme(savedTheme === 'dark');
  }
}
