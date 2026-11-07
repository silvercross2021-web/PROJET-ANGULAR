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
      if (data.profil) {
        this.profil = {
          ...data.profil,
          nom: data.profil.nom || 'BROU',
          prenom: data.profil.prenom || (data.profil as any).prenoms || 'Brandonne Davy',
          titre: data.profil.titre || 'Développeur Full-Stack Web & Mobile diplômé en Génie Logiciel (IIT)',
          description: this.lang === 'fr' 
            ? "Diplômé en Génie Logiciel à l'Institut Ivoirien de Technologie (IIT), je conçois et développe des solutions logicielles complètes, du frontend moderne aux architectures backend distribuées et au cloud. Passionné par la création de produits numériques performants, j'allie rigueur d'ingénierie, robustesse du code et sens aiguisé du détail."
            : "Software Engineering graduate from the Institut Ivoirien de Technologie (IIT), specialized in designing end-to-end software solutions across modern frontends, distributed backends, and cloud architectures. Focused on delivering reliable, scalable, and high-performance digital products.",
          email: data.profil.email || 'brandonnebrou257@gmail.com',
          telephone: data.profil.telephone || '+225 07 47 76 27 86',
          disponibilite: this.lang === 'fr' ? 'Disponible pour opportunités' : 'Available for opportunities',
          photo_profil: data.profil.photo_profil || 'https://ggnyiuyufltnulkmzchu.supabase.co/storage/v1/object/public/certifications/profile.jpg',
          lien_cv: 'assets/CV_BROU_Kablan_Christ_Brandonne_Davy_Developpeur_FullStack.pdf'
        };
      }
      this.services = data.services;
      this.updateExperiences();
      this.cdr.detectChanges();
    });
    this.langSub = this.langService.lang$.subscribe(l => {
      this.lang = l;
      this.updateExperiences();
      this.cdr.detectChanges();
    });
  }

  private updateExperiences() {
    this.experiences = [
      {
        id: 101,
        role: this.lang === 'fr' ? 'Lauréat Hackathon DevFest Abidjan 2025' : 'Winner DevFest Abidjan Hackathon 2025',
        nom_entreprise: 'Google Developer Groups (GDG) Abidjan',
        date_debut: '2025-11-01',
        date_fin: '2025-11-30',
        description: this.lang === 'fr' 
          ? 'Vainqueur avec Justice-Guide AI, plateforme IA multilingue (Français, Dioula, Baoulé) propulsée par un moteur RAG et Sentence-Transformers avec seuil de confiance strict 65% anti-hallucination.'
          : 'Won 1st place with Justice-Guide AI, a multilingual legal assistant platform (French, Dioula, Baoulé) built with RAG and Sentence-Transformers.',
        type_de_contrat: 'Hackathon'
      },
      {
        id: 102,
        role: this.lang === 'fr' ? 'Ingénieur IoT & Web — Projet de Mémoire (Finaliste SIREXE)' : 'IoT & Web Engineer — Thesis Project (SIREXE Finalist)',
        nom_entreprise: 'Institut Ivoirien de Technologie (IIT) & SIREXE 2026',
        date_debut: '2025-06-01',
        date_fin: '2026-03-01',
        description: this.lang === 'fr'
          ? 'Conception d\'AOCEDA, boîtier IoT ESP32 basse consommation (< 9 000 FCFA, capteurs ZMCT103C, écart 0.4%) avec monitoring temps réel et assistant vocal local en Dioula. Finaliste Prix Liberté Énergie SIREXE 2026.'
          : 'Engineered AOCEDA low-cost ESP32 IoT energy monitoring hardware (< 9000 FCFA, 99.6% accuracy) with real-time web dashboard and local voice assistant in Dioula. SIREXE 2026 Finalist.',
        type_de_contrat: 'Recherche & R&D'
      },
      {
        id: 103,
        role: this.lang === 'fr' ? 'Développeur Full-Stack Freelance' : 'Freelance Full-Stack Developer',
        nom_entreprise: 'Garitiket (gariticket.io)',
        date_debut: '2024-05-01',
        date_fin: '2025-02-01',
        description: this.lang === 'fr'
          ? 'Architecture et développement d\'une plateforme de billetterie interurbaine en ligne avec intégration Mobile Money (Wave, Orange, MTN) et génération/validation de QR codes sécurisés.'
          : 'Architected and built an intercity online bus ticketing platform with Mobile Money integrations and encrypted QR code validation.',
        type_de_contrat: 'Freelance'
      },
      {
        id: 104,
        role: this.lang === 'fr' ? 'Responsable Pôle Informatique & Développeur' : 'Lead IT & Full-Stack Developer Intern',
        nom_entreprise: 'DEJUC INTERNATIONAL GROUP (dejucinternational.com)',
        date_debut: '2024-01-01',
        date_fin: '2024-08-01',
        description: this.lang === 'fr'
          ? 'Refonte complète du portail juridique international sous Django 5+, intégration du module invest_immo, sécurisation de l\'infrastructure cloud et back-office Unfold.'
          : 'Full revamp of the international corporate legal portal using Django 5+, property investment module integration, and cloud security.',
        type_de_contrat: 'Stage'
      },
      {
        id: 105,
        role: this.lang === 'fr' ? 'Diplômé en Licence Génie Logiciel' : 'Software Engineering Graduate',
        nom_entreprise: 'Institut Ivoirien de Technologie (IIT)',
        date_debut: '2022-09-01',
        date_fin: '2025-07-01',
        description: this.lang === 'fr'
          ? 'Formation approfondie en génie logiciel, algorithmique avancée, bases de données relationnelles & NoSQL, développement web/mobile et architectures distribuées.'
          : 'In-depth software engineering education covering distributed architectures, advanced algorithms, databases, web and mobile development.',
        type_de_contrat: 'Formation'
      }
    ];
  }

  getToolsList(service: IService): string[] {
    if (Array.isArray(service.outils_liste)) {
      return service.outils_liste;
    }
    if (service.outils) {
      return service.outils.split(',').map(s => s.trim()).filter(Boolean);
    }
    if (typeof service.outils_liste === 'string') {
      return (service.outils_liste as string).split(/[,\s]+/).map(s => s.trim()).filter(Boolean);
    }
    return [];
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
