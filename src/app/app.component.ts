import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { HeaderComponent } from './core/layout/header/header.component';


@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [RouterOutlet, ThemeToggleComponent, HeaderComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-website';
}
