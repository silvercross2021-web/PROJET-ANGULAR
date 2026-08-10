import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, shareReplay, tap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IPortfolio } from '../models/IPortfolio';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private apiUrl = `${environment.apiUrl}/portfolio`;
  private cache$: Observable<IPortfolio> | null = null;
  private data: IPortfolio | null = null;
  private CACHE_KEY = 'portfolio_data';

  constructor(private http: HttpClient) {}

  init(): Promise<IPortfolio> {
    return new Promise(resolve => {
      this.load().subscribe(d => resolve(d));
    });
  }

  load(): Observable<IPortfolio> {
    if (this.data) {
      this.http.get<IPortfolio>(this.apiUrl).pipe(
        catchError(() => of(null))
      ).subscribe(fresh => {
        if (fresh) {
          this.data = fresh;
          localStorage.setItem(this.CACHE_KEY, JSON.stringify(fresh));
        }
      });
      return of(this.data);
    }

    const savedData = localStorage.getItem(this.CACHE_KEY);
    if (savedData) {
      try {
        this.data = JSON.parse(savedData);
        this.http.get<IPortfolio>(this.apiUrl).pipe(
          catchError(() => of(null))
        ).subscribe(fresh => {
          if (fresh) {
            this.data = fresh;
            localStorage.setItem(this.CACHE_KEY, JSON.stringify(fresh));
          }
        });
        return of(this.data as IPortfolio);
      } catch (e) {
        console.error('Erreur lecture cache', e);
      }
    }

    if (!this.cache$) {
      this.cache$ = this.http.get<IPortfolio>(this.apiUrl).pipe(
        tap(d => {
          this.data = d;
          localStorage.setItem(this.CACHE_KEY, JSON.stringify(d));
        }),
        catchError(err => {
          console.error('Erreur API Vercel/Supabase', err);
          return of({ profil: null, projets: [], projets_mis_en_avant: [], experiences: [], services: [], reseaux: [] });
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
    localStorage.removeItem(this.CACHE_KEY);
    return this.load();
  }
}
