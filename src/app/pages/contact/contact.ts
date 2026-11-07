import { Component, AfterViewInit, NgZone, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { Subscription } from 'rxjs';
import { PortfolioService } from '../../shared/services/PortfolioService';
import { ContactService } from '../../shared/services/ContactService';
import { IUsers } from '../../shared/models/IUsers';
import { ISocial } from '../../shared/models/ISocial';
import { LanguageService, Lang } from '../../shared/services/LanguageService';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit, AfterViewInit, OnDestroy {
  formData = { name: '', email: '', message: '', objet: '' };
  profil: IUsers | null = null;
  reseaux: ISocial[] = [];
  sending = false;
  sent = false;
  error = '';
  lang: Lang = 'fr';
  private langSub!: Subscription;

  constructor(
    private ngZone: NgZone,
    private portfolioService: PortfolioService,
    private contactService: ContactService,
    private langService: LanguageService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.portfolioService.load().subscribe(data => {
      this.profil = data.profil ? {
        ...data.profil,
        telephone: data.profil.telephone || '+225 07 47 76 27 86 / 01 43 49 90 39'
      } : null;
      this.reseaux = [
        { id: 1, nom_plateforme: 'LinkedIn', lien: 'https://www.linkedin.com/in/kablan-christ-brandonne-davy-brou-devs-7b5ab6394/' },
        { id: 2, nom_plateforme: 'GitHub', lien: 'https://github.com/silvercross2021-web' },
        { id: 3, nom_plateforme: 'WhatsApp', lien: 'https://wa.me/2250747762786' }
      ];
      this.cdr.detectChanges();
    });
    this.langSub = this.langService.lang$.subscribe(l => {
      this.lang = l;
      this.cdr.detectChanges();
    });
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      const lineInners = document.querySelectorAll('.contact-page .line-inner');
      const content = document.querySelectorAll('.contact-info > *, .contact-form > *');

      const tl = gsap.timeline({ delay: 0.2 });
      tl.to(lineInners, { y: 0, duration: 1, ease: 'power4.out' })
        .from(content, { opacity: 0, y: 30, stagger: 0.08, duration: 0.6, ease: 'power3.out' }, '-=0.4');
    });
  }

  submitForm(event: Event) {
    event.preventDefault();
    this.sending = true;
    this.error = '';

    this.contactService.saveContact({
      nom_complet: this.formData.name,
      objet: this.formData.objet || 'Prise de contact',
      message: this.formData.message,
      email: this.formData.email
    }).subscribe({
      next: () => {
        this.sending = false;
        this.sent = true;
        this.formData = { name: '', email: '', message: '', objet: '' };
      },
      error: () => {
        this.sending = false;
        this.error = this.lang === 'fr'
          ? 'Une erreur est survenue. Veuillez réessayer.'
          : 'An error occurred. Please try again.';
      }
    });
  }

  ngOnDestroy() { this.langSub?.unsubscribe(); }
}
