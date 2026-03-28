import { Component, AfterViewInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { gsap } from 'gsap';
import { PortfolioService } from '../../../shared/services/PortfolioService';
import { firstValueFrom } from 'rxjs';

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

  constructor(private ngZone: NgZone, private portfolioService: PortfolioService) { }

  ngAfterViewInit() {
    // Si déjà vu dans cette session, on cache immédiatement
    if (sessionStorage.getItem('preloader-done') === 'true') {
      if (this.preloaderElement?.nativeElement) {
        this.preloaderElement.nativeElement.style.display = 'none';
      }
      return;
    }

    this.ngZone.runOutsideAngular(async () => {
      const letters = document.querySelectorAll('.letter');

      // On attend les données de l'API s'il ne sont pas déjà là
      if (this.portfolioService.snapshot === null) {
        try {
          await firstValueFrom(this.portfolioService.load());
        } catch (e) {
          console.error("Erreur lors du chargement des données portfolio", e);
        }
      }

      const tl = gsap.timeline();

      tl.to(letters, {
        opacity: 1,
        y: 0,
        stagger: 0.04,
        duration: 0.35,
        ease: 'power2.out'
      }).to(this.preloaderElement.nativeElement, {
        opacity: 0,
        duration: 0.7,
        delay: 0.5, // Délai réduit car on a déjà attendu l'API
        ease: 'power2.inOut',
        onComplete: () => {
          if (this.preloaderElement?.nativeElement) {
            this.preloaderElement.nativeElement.style.display = 'none';
          }
          // Marquer comme vu pour éviter de rejouer à chaque navigation
          sessionStorage.setItem('preloader-done', 'true');
        }
      });
    });
  }
}
