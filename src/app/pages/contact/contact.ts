import { Component, AfterViewInit, NgZone, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { PortfolioService } from '../../shared/services/PortfolioService';
import { ContactService } from '../../shared/services/ContactService';
import { IUsers } from '../../shared/models/IUsers';
import { ISocial } from '../../shared/models/ISocial';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit, AfterViewInit {
  formData = { name: '', email: '', message: '', objet: '' };
  profil: IUsers | null = null;
  reseaux: ISocial[] = [];
  sending = false;
  sent = false;
  error = '';

  constructor(
    private ngZone: NgZone,
    private portfolioService: PortfolioService,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.portfolioService.load().subscribe(data => {
      this.profil = data.profil;
      this.reseaux = data.reseaux;
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
        this.error = 'Une erreur est survenue. Veuillez réessayer.';
      }
    });
  }
}
