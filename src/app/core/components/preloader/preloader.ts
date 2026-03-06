import { Component, AfterViewInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [],
  templateUrl: './preloader.html',
  styleUrl: './preloader.scss',
})
export class Preloader implements AfterViewInit {
  @ViewChild('preloader') preloaderElement!: ElementRef;

  constructor(private ngZone: NgZone) { }

  ngAfterViewInit() {
    // Si déjà vu dans cette session, on cache immédiatement
    if (sessionStorage.getItem('preloader-done') === 'true') {
      if (this.preloaderElement?.nativeElement) {
        this.preloaderElement.nativeElement.style.display = 'none';
      }
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      const letters = document.querySelectorAll('.letter');

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
        delay: 1.2,
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
