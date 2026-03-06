import { Component, AfterViewInit, ElementRef, ViewChild, NgZone, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { PortfolioService } from '../../../../shared/services/PortfolioService';
import { IUsers } from '../../../../shared/models/IUsers';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('heroContent') heroContent!: ElementRef;
  @ViewChild('heroCtas') heroCtas!: ElementRef;

  profil: IUsers | null = null;

  constructor(private ngZone: NgZone, private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioService.load().subscribe(data => {
      this.profil = data.profil;
    });
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      const lineInners = document.querySelectorAll('.hero .line-inner');
      const heroIntro = document.querySelector('.hero-intro');
      const heroDesc = document.querySelector('.hero-desc');
      const heroCtas = document.querySelector('.hero-ctas');

      const tl = gsap.timeline({ delay: 1.8 });

      tl.to(lineInners, {
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out'
      })
        .to([heroIntro, heroDesc, heroCtas], {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out'
        }, '-=0.5');
    });
  }

  ngOnDestroy() { }
}
