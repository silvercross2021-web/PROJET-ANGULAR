import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, tap } from 'rxjs';
import { IPortfolio } from '../models/IPortfolio';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private apiUrl = `${environment.apiUrl}/v1/public/portfolio/`;
  private cache$: Observable<IPortfolio> | null = null;
  private data: IPortfolio | null = null;
  private CACHE_KEY = 'portfolio_data';

  constructor(private http: HttpClient) {}

  /** Appelé une seule fois au démarrage via APP_INITIALIZER */
  init(): Promise<IPortfolio> {
    return new Promise(resolve => {
      this.load().subscribe(d => resolve(d));
    });
  }

  /** Retourne un Observable qui exploite le cache immédiat puis met à jour via l'API */
  load(): Observable<IPortfolio> {
    if (!this.cache$) {
      // Tentative de récupération du cache local (immédiat)
      const savedData = localStorage.getItem(this.CACHE_KEY);
      if (savedData) {
        try {
          this.data = JSON.parse(savedData);
        } catch (e) {
          console.error("Erreur lecture cache", e);
        }
      }

      // Appel API en arrière-plan (Stale-While-Revalidate)
      this.cache$ = this.http.get<IPortfolio>(this.apiUrl).pipe(
        tap(d => {
          this.data = d;
          localStorage.setItem(this.CACHE_KEY, JSON.stringify(d));
        }),
        shareReplay(1)
      );
    }
    return this.cache$;
  }

  get snapshot(): IPortfolio | null {
    return this.data;
  }

  refresh(): Observable<IPortfolio> {
    this.cache$ = null;
    this.data = null;
    return this.load();
  }
}
