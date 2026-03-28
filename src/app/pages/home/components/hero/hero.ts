import { Component, AfterViewInit, ElementRef, ViewChild, NgZone, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { Subscription } from 'rxjs';
import { PortfolioService } from '../../../../shared/services/PortfolioService';
import { IUsers } from '../../../../shared/models/IUsers';
import { LanguageService, Lang } from '../../../../shared/services/LanguageService';

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
  lang: Lang = 'fr';
  private langSub!: Subscription;

  constructor(private ngZone: NgZone, private portfolioService: PortfolioService, private langService: LanguageService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.portfolioService.load().subscribe(data => {
      this.profil = data.profil;
      this.cdr.detectChanges();
    });
    this.langSub = this.langService.lang$.subscribe(l => {
      this.lang = l;
      this.cdr.detectChanges();
    });
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      const sidebar = document.querySelector('.hero-sidebar');
      const socialLinks = document.querySelectorAll('.social-link');
      const nameLines = document.querySelectorAll('.hero-name .line-inner');
      const profession = document.querySelector('.hero-profession');
      const inquiries = document.querySelector('.hero-inquiries');
      const aboutHeader = document.querySelector('.about-header');
      const aboutText = document.querySelector('.about-text');
      const heroCtas = document.querySelector('.hero-ctas');

      const tl = gsap.timeline({ delay: 1.5 });

      // 1. Sidebar Sociale
      tl.fromTo(sidebar, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1 })
        .fromTo(socialLinks, { opacity: 0, y: 10 }, { opacity: 0.6, y: 0, stagger: 0.1, duration: 0.8 }, '-=0.5');

      // 2. Colonne Gauche (Nom + Inquiries)
      tl.to(nameLines, {
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out'
      }, '-=1')
        .fromTo([profession, inquiries], { opacity: 0, y: 20 }, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out'
        }, '-=0.6');

      // 3. Colonne Droite (About)
      tl.fromTo([aboutHeader, aboutText, heroCtas], { opacity: 0, y: 20 }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      }, '-=0.4');
    });
  }

  ngOnDestroy() {
    this.langSub?.unsubscribe();
  }
}
