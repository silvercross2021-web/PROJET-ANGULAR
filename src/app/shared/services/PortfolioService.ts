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

  constructor(private http: HttpClient) {}

  /** Appelé une seule fois au démarrage via APP_INITIALIZER */
  init(): Promise<IPortfolio> {
    return new Promise(resolve => {
      this.load().subscribe(d => resolve(d));
    });
  }

  /** Retourne un Observable qui ne fait qu'UN seul appel HTTP grâce à shareReplay */
  load(): Observable<IPortfolio> {
    if (!this.cache$) {
      this.cache$ = this.http.get<IPortfolio>(this.apiUrl).pipe(
        tap(d => this.data = d),
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
