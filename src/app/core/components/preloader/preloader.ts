import { Component, AfterViewInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { gsap } from 'gsap';
import { PortfolioService } from '../../../shared/services/PortfolioService';
import { firstValueFrom } from 'rxjs';
import { SoundService } from '../../services/sound.service';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [],
  templateUrl: './preloader.html',
  styleUrl: './preloader.scss',
})
export class Preloader implements AfterViewInit {
  @ViewChild('preloader') preloaderElement!: ElementRef;
  private isDataLoaded = false;

  constructor(private ngZone: NgZone, private portfolioService: PortfolioService, private soundService: SoundService) { }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(async () => {
      const isReturningVisitor = sessionStorage.getItem('preloader-done') === 'true';

      // On s'assure que les données sont là (soit cache, soit API)
      const dataPromise = this.portfolioService.snapshot === null 
        ? firstValueFrom(this.portfolioService.load()).catch(() => null)
        : Promise.resolve(this.portfolioService.snapshot);

      if (isReturningVisitor) {
        if (this.preloaderElement?.nativeElement) {
          this.preloaderElement.nativeElement.style.display = 'none';
        }
        await dataPromise;
        // On attend la prochaine frame d'affichage pour s'assurer que le navigateur a peint la page
        requestAnimationFrame(() => {
          this.soundService.startAudioSequence();
        });
        return;
      }

      // Première visite : Animation complète
      const letters = document.querySelectorAll('.letter');
      const tl = gsap.timeline();

      tl.to(letters, {
        opacity: 1,
        y: 0,
        stagger: 0.04,
        duration: 0.35,
        ease: 'power2.out'
      });

      await dataPromise;

      tl.to(this.preloaderElement.nativeElement, {
        opacity: 0,
        duration: 0.7,
        delay: 0.3, // Pause de confort
        ease: 'power2.inOut',
        onComplete: () => {
          if (this.preloaderElement?.nativeElement) {
            this.preloaderElement.nativeElement.style.display = 'none';
          }
          sessionStorage.setItem('preloader-done', 'true');
          this.soundService.startAudioSequence();
        }
      });
    });
  }
}
