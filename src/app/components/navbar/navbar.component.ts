import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  theme: 'light' | 'dark' = 'light';

  constructor() {
    const saved = localStorage.getItem('theme') as 'light' | 'dark';
    this.theme = saved || 'light';
    document.body.classList.add(this.theme);
  }

  toggleTheme() {
    document.body.classList.remove(this.theme);
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.body.classList.add(this.theme);
    localStorage.setItem('theme', this.theme);
  }
}
