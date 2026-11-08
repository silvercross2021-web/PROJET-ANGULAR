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
        this.profil = Object.assign({}, data.profil, {
          nom: data.profil.nom || 'BROU',
          prenom: data.profil.prenom || (data.profil as any).prenoms || 'Brandonne Davy',
          titre: this.lang === 'fr'
            ? 'Ingénieur Logiciel & Développeur Full-Stack Web / Mobile'
            : 'Software Engineer & Full-Stack Web / Mobile Developer',
          description: this.lang === 'fr' 
            ? "Diplômé en Génie Logiciel à l'Institut Ivoirien de Technologie (IIT), je conçois et développe des solutions logicielles complètes, du frontend moderne aux architectures backend distribuées et au cloud. Passionné par la création de produits numériques performants, j'allie rigueur d'ingénierie, robustesse du code et sens aiguisé du détail."
            : "Software Engineering graduate from the Institut Ivoirien de Technologie (IIT), specialized in designing end-to-end software solutions across modern frontends, distributed backends, and cloud architectures. Focused on delivering reliable, scalable, and high-performance digital products.",
          email: data.profil.email || 'brandonnebrou257@gmail.com',
          telephone: data.profil.telephone || '+225 07 47 76 27 86',
          disponibilite: this.lang === 'fr' ? 'Disponible pour opportunités' : 'Available for opportunities',
          photo_profil: data.profil.photo_profil || 'https://ggnyiuyufltnulkmzchu.supabase.co/storage/v1/object/public/certifications/profile.jpg',
          lien_cv: 'assets/CV_BROU_Kablan_Christ_Brandonne_Davy_Developpeur_FullStack.pdf'
        });
      }
      this.updateServices();
      this.updateExperiences();
      this.cdr.detectChanges();
    });
    this.langSub = this.langService.lang$.subscribe(l => {
      this.lang = l;
      this.updateServices();
      this.updateExperiences();
      this.cdr.detectChanges();
    });
  }

  private updateServices() {
    this.services = [
      {
        id: 1,
        nom: this.lang === 'fr' ? 'Langages de Programmation' : 'Programming Languages',
        type_de_service: 'Dev',
        detail: '',
        outils: '',
        outils_liste: ['Python', 'TypeScript / JavaScript', 'Java', 'Dart', 'C#', 'SQL']
      },
      {
        id: 2,
        nom: this.lang === 'fr' ? 'Frontend & Mobile' : 'Frontend & Mobile',
        type_de_service: 'Frontend',
        detail: '',
        outils: '',
        outils_liste: ['Angular', 'Flutter', 'React', 'HTML5 / CSS3 (SCSS)', 'GSAP & Three.js', 'Tailwind CSS']
      },
      {
        id: 3,
        nom: this.lang === 'fr' ? 'Backend & Architecture' : 'Backend & Architecture',
        type_de_service: 'Backend',
        detail: '',
        outils: '',
        outils_liste: ['Django & Flask', 'Node.js', 'ASP.NET Core', 'Spring Boot', 'API REST & GraphQL', 'Microservices']
      },
      {
        id: 4,
        nom: this.lang === 'fr' ? 'IA & Systèmes IoT' : 'AI & Embedded IoT',
        type_de_service: 'AI',
        detail: '',
        outils: '',
        outils_liste: [
          'RAG & LLMs (Gemini)',
          'Sentence-Transformers',
          'TensorFlow & MindSpore',
          'ESP32 / C++ (IoT)',
          'Prompt Engineering',
          this.lang === 'fr' ? 'Automatisation IA' : 'AI Automation'
        ]
      },
      {
        id: 5,
        nom: this.lang === 'fr' ? 'Bases de Données & Cloud' : 'Databases & Cloud',
        type_de_service: 'Cloud',
        detail: '',
        outils: '',
        outils_liste: ['PostgreSQL', 'Supabase', 'MySQL & SQL Server', 'Google Cloud (GCP)', 'Vercel & Render', 'Firebase']
      },
      {
        id: 6,
        nom: this.lang === 'fr' ? 'DevOps, Systèmes & Design' : 'DevOps, Systems & Design',
        type_de_service: 'DevOps',
        detail: '',
        outils: '',
        outils_liste: ['Docker', 'openEuler & Ubuntu Linux', 'Git & GitHub Actions', 'Bash & PowerShell', 'Figma (UI/UX)', 'Photoshop']
      }
    ];
  }

  private updateExperiences() {
    this.experiences = [
      {
        id: 101,
        role: this.lang === 'fr' ? 'Ingénieur IoT & Web — Projet AOCEDA (Finaliste SIREXE)' : 'IoT & Web Engineer — AOCEDA Project (SIREXE Finalist)',
        nom_entreprise: 'SIREXE & Institut Ivoirien de Technologie (IIT)',
        date_debut: this.lang === 'fr' ? 'Novembre 2026' : 'November 2026',
        date_fin: '',
        description: this.lang === 'fr'
          ? 'Conception d\'AOCEDA, boîtier IoT ESP32 basse consommation (< 9 000 FCFA, capteurs ZMCT103C, écart 0.4%) avec monitoring temps réel et assistant vocal local en Dioula. Finaliste Prix Liberté Énergie SIREXE.'
          : 'Engineered AOCEDA low-cost ESP32 IoT energy monitoring hardware (< 9000 FCFA, 99.6% accuracy) with real-time web dashboard and local voice assistant in Dioula. SIREXE Finalist.',
        type_de_contrat: 'Recherche & R&D'
      },
      {
        id: 102,
        role: this.lang === 'fr' ? 'Ingénieur Logiciel & Développeur Full-Stack Freelance' : 'Freelance Software Engineer & Full-Stack Developer',
        nom_entreprise: 'Missions Freelance (Garitiket, Barababi & Solutions sur mesure)',
        date_debut: '2022',
        date_fin: '2026',
        description: this.lang === 'fr'
          ? 'Conception et mise en production d\'applications web et mobiles complètes : billetterie interurbaine Garitiket (Mobile Money Wave/Orange/MTN, QR codes sécurisés), plateformes métiers et architectures cloud.'
          : 'End-to-end design and production deployment of web and mobile platforms including Garitiket intercity ticketing (Mobile Money & encrypted QR validation) and custom cloud architectures.',
        type_de_contrat: 'Freelance'
      },
      {
        id: 103,
        role: this.lang === 'fr' ? 'Lauréat Hackathon DevFest Abidjan 2025 (1er Prix)' : 'Winner DevFest Abidjan Hackathon 2025 (1st Place)',
        nom_entreprise: 'Google Developer Groups (GDG) Abidjan',
        date_debut: this.lang === 'fr' ? 'Novembre 2025' : 'November 2025',
        date_fin: '',
        description: this.lang === 'fr' 
          ? 'Vainqueur avec Justice-Guide AI, plateforme IA multilingue (Français, Dioula, Baoulé) propulsée par un moteur RAG et Sentence-Transformers avec seuil de confiance strict 65% anti-hallucination.'
          : 'Won 1st place with Justice-Guide AI, a multilingual legal assistant platform (French, Dioula, Baoulé) built with RAG and Sentence-Transformers.',
        type_de_contrat: 'Hackathon'
      },
      {
        id: 104,
        role: this.lang === 'fr' ? 'Responsable Pôle Informatique & Développeur Full-Stack' : 'Lead IT & Full-Stack Developer',
        nom_entreprise: 'DEJUC INTERNATIONAL GROUP (dejucinternational.com)',
        date_debut: this.lang === 'fr' ? 'Fin 2024' : 'Late 2024',
        date_fin: '2025',
        description: this.lang === 'fr'
          ? 'Refonte complète du portail juridique international sous Django 5+, intégration du module invest_immo, sécurisation de l\'infrastructure cloud et administration Unfold.'
          : 'Full revamp of the international corporate legal portal using Django 5+, property investment module integration, and cloud infrastructure security.',
        type_de_contrat: 'Entreprise'
      },
      {
        id: 105,
        role: this.lang === 'fr' ? 'Diplômé en Licence Génie Logiciel' : 'Bachelor\'s Degree in Software Engineering',
        nom_entreprise: 'Institut Ivoirien de Technologie (IIT)',
        date_debut: '2022',
        date_fin: '2025',
        description: this.lang === 'fr'
          ? 'Formation approfondie en génie logiciel, algorithmique avancée, bases de données relationnelles & NoSQL, développement web/mobile et architectures distribuées.'
          : 'In-depth software engineering education covering distributed architectures, advanced algorithms, databases, web and mobile development.',
        type_de_contrat: 'Formation'
      }
    ];
  }

  getPeriod(exp: Iexperience): string {
    if (!exp.date_fin) {
      return exp.date_debut;
    }
    return `${exp.date_debut} — ${exp.date_fin}`;
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
