import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../shared/services/LanguageService';
import { SoundService } from '../../services/sound.service';

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
  isMuted = true;

  // On écoute uniquement la confirmation du MenuOverlay (sens unique)
  private closeListener!: EventListener;
  private darkListener!: EventListener;

  constructor(
    private ngZone: NgZone, 
    public langService: LanguageService,
    public soundService: SoundService
  ) { 
    this.isMuted = this.soundService.isMuted();
  }

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
    this.soundService.playClick();
    this.menuOpen = !this.menuOpen;
    window.dispatchEvent(
      new CustomEvent('menu-toggle', { detail: { open: this.menuOpen } })
    );
  }

  closeMenuIfOpen() {
    if (this.menuOpen) {
      this.soundService.playClick();
      this.menuOpen = false;
      window.dispatchEvent(new CustomEvent('menu-toggle', { detail: { open: false } }));
    }
  }

  toggleDark() {
    this.soundService.playClick();
    this.isDark = !this.isDark;
    document.documentElement.classList.toggle('dark-mode', this.isDark);
    localStorage.setItem('dark-mode', String(this.isDark));
    window.dispatchEvent(new CustomEvent('dark-mode-change', { detail: { dark: this.isDark } }));
  }

  toggleLang() {
    this.soundService.playClick();
    this.langService.toggle();
  }

  toggleSound() {
    // Premier clic = débloquer autoplay
    this.soundService.handleFirstInteraction();
    
    // Puis faire le toggle
    this.isMuted = this.soundService.toggle();
    if (!this.isMuted) {
       this.soundService.playClick();
    }
  }

  ngOnDestroy() {
    window.removeEventListener('menu-closed-by-nav', this.closeListener);
    window.removeEventListener('dark-mode-change', this.darkListener);
  }
}
