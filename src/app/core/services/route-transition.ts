import { Injectable, NgZone } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root',
})
export class RouteTransitionService {
  private isFirstNavigation = true;

  constructor(private router: Router, private ngZone: NgZone) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart || event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        if (event.id === 1 || this.isFirstNavigation) {
          return; // Le premier chargement est géré par le Preloader
        }
        this.animateOut();
      } else if (event instanceof NavigationEnd) {
        if (this.isFirstNavigation) {
          this.isFirstNavigation = false;
          return;
        }
        // Small delay to ensure view is rendered before animating in
        setTimeout(() => this.animateIn(), 100);
      }
    });
  }

  private animateOut() {
    this.ngZone.runOutsideAngular(() => {
      const overlay = document.querySelector('.page-transition-overlay');
      if (overlay) {
        gsap.to(overlay, {
          bottom: '0%',
          ease: "power2.inOut",
          duration: 0.6
        });
      }
    });
  }

  private animateIn() {
    this.ngZone.runOutsideAngular(() => {
      const overlay = document.querySelector('.page-transition-overlay');
      if (overlay) {
        gsap.to(overlay, {
          bottom: '100%',
          ease: "power2.inOut",
          duration: 0.6,
          onComplete: () => {
            gsap.set(overlay, { bottom: '-100%' }); // Reset
          }
        });
      }
    });
  }
}
