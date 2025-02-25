import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
import { HeaderComponent } from './core/layout/header/header.component';


@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-website';
  isDarkMode = false;

  constructor(private overlayContainer: OverlayContainer) {
    if (typeof window !== 'undefined' && localStorage) {
      const storedTheme = localStorage.getItem('darkMode');
      this.isDarkMode = storedTheme === 'true';
    }
    this.applyTheme();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem('darkMode', String(this.isDarkMode));
    }
    this.applyTheme();
  }

  private applyTheme() {
    const darkClass = 'dark-theme';
    
    if (typeof document !== 'undefined') {
      const root = document.documentElement; // Ensure document exists before using it
  
      if (this.isDarkMode) {
        root.classList.add(darkClass);
      } else {
        root.classList.remove(darkClass);
      }
    }
  }
}
