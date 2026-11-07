import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IPortfolio } from '../models/IPortfolio';
import { environment } from '../../../environments/environment';
import { ENRICHED_PROJECTS } from '../data/projects.data';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private apiUrl = `${environment.apiUrl}/portfolio`;
  private CACHE_KEY = 'portfolio_data';
  private portfolioSubject = new BehaviorSubject<IPortfolio | null>(this.getInitialData());

  constructor(private http: HttpClient) {}

  private getInitialData(): IPortfolio | null {
    const savedData = localStorage.getItem(this.CACHE_KEY);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        return this.normalizePortfolio(parsed);
      } catch (e) {
        console.error('Erreur lecture cache local portfolio', e);
      }
    }
    return this.normalizePortfolio(null);
  }

  private normalizePortfolio(data: any): IPortfolio {
    const rawProfil = data?.profil || {};
    const profil = Object.assign({}, rawProfil, {
      nom: rawProfil.nom || 'BROU',
      prenom: rawProfil.prenom || rawProfil.prenoms || 'Brandonne Davy',
      titre: 'Ingénieur Logiciel & Développeur Full-Stack Web / Mobile',
      description: "Diplômé en Génie Logiciel à l'Institut Ivoirien de Technologie (IIT), je conçois et déploie des applications web, mobiles et des architectures cloud de bout en bout. Lauréat du Hackathon DevFest Abidjan 2025 et finaliste de la compétition SIREXE avec le projet IoT AOCEDA, j'allie rigueur d'ingénierie, intégration d'IA et sens aiguisé du produit pour bâtir des solutions robustes et évolutives.",
      email: rawProfil.email || 'brandonnebrou257@gmail.com',
      telephone: rawProfil.telephone || '+225 07 47 76 27 86',
      disponibilite: rawProfil.statut || rawProfil.disponibilite || 'Disponible pour opportunités',
      photo_profil: rawProfil.photo_profil || 'https://ggnyiuyufltnulkmzchu.supabase.co/storage/v1/object/public/certifications/profile.jpg',
      lien_cv: 'assets/CV_BROU_Kablan_Christ_Brandonne_Davy_Developpeur_FullStack.pdf'
    });

    return {
      profil,
      projets: ENRICHED_PROJECTS,
      projets_mis_en_avant: ENRICHED_PROJECTS.filter(p => p.est_mis_en_avant),
      experiences: data?.experiences && data.experiences.length ? data.experiences : [],
      services: data?.services && data.services.length ? data.services : [],
      reseaux: data?.reseaux && data.reseaux.length ? data.reseaux : []
    };
  }

  init(): Promise<IPortfolio> {
    return new Promise(resolve => {
      this.load().subscribe(d => resolve(d));
    });
  }

  load(): Observable<IPortfolio> {
    this.http.get<any>(this.apiUrl).pipe(
      catchError(err => {
        console.warn('Utilisation des données enrichies locales (API non joignable)', err);
        return of(null);
      })
    ).subscribe(fresh => {
      const normalized = this.normalizePortfolio(fresh);
      localStorage.setItem(this.CACHE_KEY, JSON.stringify(fresh || normalized));
      this.portfolioSubject.next(normalized);
    });

    return this.portfolioSubject.asObservable().pipe(
      map(d => d || this.normalizePortfolio(null))
    );
  }

  get snapshot(): IPortfolio | null {
    return this.portfolioSubject.value;
  }

  refresh(): Observable<IPortfolio> {
    localStorage.removeItem(this.CACHE_KEY);
    this.portfolioSubject.next(null);
    return this.load();
  }
}
