import { Component, AfterViewInit, NgZone, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { Subscription } from 'rxjs';
import { PortfolioService } from '../../shared/services/PortfolioService';
import { IUsers } from '../../shared/models/IUsers';
import { IService } from '../../shared/models/IService';
import { Iexperience } from '../../shared/models/Iexperience';
import { LanguageService, Lang } from '../../shared/services/LanguageService';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit, AfterViewInit, OnDestroy {
  profil: IUsers | null = null;
  services: IService[] = [];
  experiences: Iexperience[] = [];
  lang: Lang = 'fr';
  private langSub!: Subscription;

  constructor(private ngZone: NgZone, private portfolioService: PortfolioService, private langService: LanguageService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.portfolioService.load().subscribe(data => {
      this.profil = data.profil;
      this.services = data.services;
      this.experiences = data.experiences;
      this.cdr.detectChanges();
    });
    this.langSub = this.langService.lang$.subscribe(l => {
      this.lang = l;
      this.cdr.detectChanges();
    });
  }

  getServicesByType(type: string): IService[] {
    return this.services.filter(s => s.type_de_service === type);
  }

  get uniqueServiceTypes(): string[] {
    return [...new Set(this.services.map(s => s.type_de_service))];
  }

  formatDate(dateStr: string | null | undefined): string {
    if (!dateStr) return this.lang === 'fr' ? 'Présent' : 'Present';
    const d = new Date(dateStr);
    return d.getFullYear().toString();
  }

  ngOnDestroy() { this.langSub?.unsubscribe(); }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      const lineInners = document.querySelectorAll('.about-page .line-inner');

      const content = document.querySelectorAll<HTMLElement>(
        '.about-portrait, .about-text > *'
      );

      content.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
      });

      const tl = gsap.timeline({ delay: 0.15 });

      tl.to(lineInners, { y: 0, duration: 0.9, ease: 'power4.out' })
        .to(content, {
          opacity: 1,
          y: 0,
          stagger: 0.07,
          duration: 0.55,
          ease: 'power3.out',
          clearProps: 'all',
        }, '-=0.3');
    });
  }
}
