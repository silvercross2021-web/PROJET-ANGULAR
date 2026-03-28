import { Injectable, Inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  private music!: HTMLAudioElement;
  private clickSound!: HTMLAudioElement;
  
  public isMuted = signal(false); 
  public isPlaying = signal(false);

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

    // Musique ON par défaut, on ne lit PLUS le localStorage pour forcer l'état actif !
    this.isMuted.set(false); 

    this.tryPlaySequence();
  }

  private tryPlaySequence() {
    // 1. Tenter l'autoplay immédiat
    this.music.play().then(() => {
      this.isPlaying.set(true);
    }).catch(() => {
      // 2. Si bloqué, on attend n'importe quelle intéraction sur la page
      this.isPlaying.set(false);
      const unlockAudio = () => {
        if (!this.isMuted() && !this.isPlaying()) {
          this.music.play().then(() => {
            this.isPlaying.set(true);
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
    if (!isPlatformBrowser(this.platformId)) return this.isMuted();
    
    this.isMuted.set(!this.isMuted());
    
    if (this.isMuted()) {
      this.music.pause();
      this.isPlaying.set(false);
    } else {
      this.music.play().then(() => this.isPlaying.set(true)).catch(() => this.isPlaying.set(false));
    }
    return this.isMuted();
  }

  playClick() {
    if (!isPlatformBrowser(this.platformId) || this.isMuted()) return;
    
    // Clone pour permettre des clics rapides
    const clickClone = this.clickSound.cloneNode() as HTMLAudioElement;
    clickClone.volume = 0.3;
    clickClone.play().catch(() => {});
  }
}
