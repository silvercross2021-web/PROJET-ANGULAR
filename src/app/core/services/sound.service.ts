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

  private sequenceStarted = false;
  private audioUnlocked = false;

  private initAudio() {
    this.music = new Audio('assets/audio/happy.mp3');
    this.music.loop = true;
    this.music.volume = 0.4;
    
    this.clickSound = new Audio('assets/audio/click.mp3');
    this.clickSound.volume = 0.3;

    this.isMuted.set(false); 

    // Attacher les écouteurs IMMÉDIATEMENT pour capturer le tout premier clic,
    // même s'il a lieu pendant l'écran de chargement.
    this.setupEarlyUnlock();
  }

  private setupEarlyUnlock() {
    const unlockAudio = () => {
      if (this.audioUnlocked) return;
      
      // On tente de débloquer l'élément audio (seul un vrai clic/touch fonctionnera)
      this.music.play().then(() => {
        this.audioUnlocked = true;
        
        // Retrait des écouteurs UNIQUEMENT quand le déblocage a réussi !
        document.removeEventListener('click', unlockAudio, { capture: true });
        document.removeEventListener('touchstart', unlockAudio, { capture: true });
        document.removeEventListener('keydown', unlockAudio, { capture: true });

        // Si la séquence n'a pas encore le droit de démarrer, on remet en pause
        if (!this.sequenceStarted) {
          this.music.pause();
        } else if (!this.isMuted()) {
          this.isPlaying.set(true);
        }
      }).catch(e => {
        // Le déblocage a échoué (ex: événement invalide pour le navigateur).
        // On NE RETIRE PAS les écouteurs, on attendra le prochain clic !
      });
    };

    const options = { capture: true };
    document.addEventListener('click', unlockAudio, options);
    document.addEventListener('touchstart', unlockAudio, options);
    document.addEventListener('keydown', unlockAudio, options);
  }

  startAudioSequence() {
    if (this.sequenceStarted) return;
    this.sequenceStarted = true;
    
    if (!this.isMuted()) {
      this.music.play().then(() => {
        this.audioUnlocked = true;
        this.isPlaying.set(true);
      }).catch(() => {
        this.isPlaying.set(false);
      });
    }
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
