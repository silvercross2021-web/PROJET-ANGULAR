import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IPortfolio } from '../models/IPortfolio';
import { environment } from '../../../environments/environment';

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
        return JSON.parse(savedData);
      } catch (e) {
        console.error('Erreur lecture cache local portfolio', e);
      }
    }
    return null;
  }

  init(): Promise<IPortfolio> {
    return new Promise(resolve => {
      this.load().subscribe(d => resolve(d));
    });
  }

  load(): Observable<IPortfolio> {
    this.http.get<IPortfolio>(this.apiUrl).pipe(
      catchError(err => {
        console.error('Erreur API Vercel/Supabase', err);
        return of(null);
      })
    ).subscribe(fresh => {
      if (fresh) {
        localStorage.setItem(this.CACHE_KEY, JSON.stringify(fresh));
        this.portfolioSubject.next(fresh);
      }
    });

    return this.portfolioSubject.asObservable().pipe(
      map(d => d || { profil: null, projets: [], projets_mis_en_avant: [], experiences: [], services: [], reseaux: [] })
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
