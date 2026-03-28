import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  private music!: HTMLAudioElement;
  private clickSound!: HTMLAudioElement;
  private muted = false; // Musique ON par défaut
  private isPlaying = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.initAudio();
    }
  }

  private initAudio() {
    this.music = new Audio('assets/audio/happy.mp3');
    this.music.loop = true;
    this.music.volume = 0.4; // Volume doux
    
    this.clickSound = new Audio('assets/audio/click.mp3');
    this.clickSound.volume = 0.3;

    // Load preference
    const saved = localStorage.getItem('sound-muted');
    if (saved !== null) {
      this.muted = saved === 'true';
    }

    if (!this.muted) {
      this.tryPlaySequence();
    }
  }

  private tryPlaySequence() {
    // 1. Tenter l'autoplay immédiat
    this.music.play().then(() => {
      this.isPlaying = true;
    }).catch(() => {
      // 2. Si bloqué, on attend n'importe quelle intéraction sur la page
      const unlockAudio = () => {
        if (!this.muted && !this.isPlaying) {
          this.music.play().then(() => {
            this.isPlaying = true;
          }).catch(e => console.error(e));
        }
        document.removeEventListener('click', unlockAudio);
        document.removeEventListener('scroll', unlockAudio);
        document.removeEventListener('touchstart', unlockAudio);
        document.removeEventListener('keydown', unlockAudio);
      };

      document.addEventListener('click', unlockAudio, { once: true });
      document.addEventListener('scroll', unlockAudio, { once: true });
      document.addEventListener('touchstart', unlockAudio, { once: true });
      document.addEventListener('keydown', unlockAudio, { once: true });
    });
  }

  toggle() {
    if (!isPlatformBrowser(this.platformId)) return this.muted;
    
    this.muted = !this.muted;
    localStorage.setItem('sound-muted', String(this.muted));
    
    if (this.muted) {
      this.music.pause();
      this.isPlaying = false;
    } else {
      this.music.play().then(() => this.isPlaying = true).catch(() => {});
    }
    return this.muted;
  }

  isMuted() {
    return this.muted;
  }

  playClick() {
    if (!isPlatformBrowser(this.platformId) || this.muted) return;
    
    // Clone pour permettre des clics rapides
    const clickClone = this.clickSound.cloneNode() as HTMLAudioElement;
    clickClone.volume = 0.3;
    clickClone.play().catch(() => {});
  }

  handleFirstInteraction() {
     // Désormais géré automatiquement par tryPlaySequence()
  }
}
