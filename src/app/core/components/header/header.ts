import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit, OnDestroy {
  isDark = false;
  menuOpen = false;

  // On écoute uniquement la confirmation du MenuOverlay (sens unique)
  private closeListener!: EventListener;
  private darkListener!: EventListener;

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    // Le MenuOverlay nous informe quand il se ferme via un lien de navigation
    this.closeListener = () => {
      this.ngZone.run(() => { this.menuOpen = false; });
    };
    window.addEventListener('menu-closed-by-nav', this.closeListener);

    // Sync dark mode depuis d'autres sources (pas utilisé ici mais au cas où)
    this.darkListener = (e: Event) => {
      const dark = (e as CustomEvent).detail?.dark;
      this.ngZone.run(() => { this.isDark = dark; });
    };
    window.addEventListener('dark-mode-change', this.darkListener);

    // Restaurer dark mode depuis localStorage au démarrage
    const saved = localStorage.getItem('dark-mode');
    if (saved === 'true') {
      this.isDark = true;
      document.documentElement.classList.add('dark-mode');
    }
  }

  /** UN seul endroit gère le toggle : le Header dispatche, MenuOverlay reçoit */
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    window.dispatchEvent(
      new CustomEvent('menu-toggle', { detail: { open: this.menuOpen } })
    );
  }

  closeMenuIfOpen() {
    if (this.menuOpen) {
      this.menuOpen = false;
      window.dispatchEvent(new CustomEvent('menu-toggle', { detail: { open: false } }));
    }
  }

  toggleDark() {
    this.isDark = !this.isDark;
    document.documentElement.classList.toggle('dark-mode', this.isDark);
    localStorage.setItem('dark-mode', String(this.isDark));
    window.dispatchEvent(new CustomEvent('dark-mode-change', { detail: { dark: this.isDark } }));
  }

  ngOnDestroy() {
    window.removeEventListener('menu-closed-by-nav', this.closeListener);
    window.removeEventListener('dark-mode-change', this.darkListener);
  }
}
