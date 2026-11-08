import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';
import { IProject } from '../models/IProject';
import { environment } from '../../../environments/environment';
import { ENRICHED_PROJECTS } from '../data/projects.data';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private apiUrl = `${environment.apiUrl}/projects`;
  constructor(private http: HttpClient) {}

  list(): Observable<IProject[]> { 
    return of(ENRICHED_PROJECTS);
  }

  get(id: string | number): Observable<IProject | null> { 
    return this.getBySlug(String(id));
  }

  getBySlug(slug: string): Observable<IProject | null> {
    const normalizedSlug = String(slug).toLowerCase().trim();
    const localMatch = ENRICHED_PROJECTS.find(p => 
      String(p.slug || '').toLowerCase() === normalizedSlug ||
      String(p.id || '').toLowerCase() === normalizedSlug ||
      String(p.titre || '').toLowerCase() === normalizedSlug
    );

    if (localMatch) {
      return of(localMatch);
    }

    return this.http.get<IProject[]>(`${this.apiUrl}`).pipe(
      map(results => {
        if (!results || !results.length) return null;
        return results.find(p => 
          String(p.slug || '').toLowerCase() === normalizedSlug ||
          String(p.id || '').toLowerCase() === normalizedSlug ||
          String(p.titre || '').toLowerCase() === normalizedSlug ||
          String((p as any).title || '').toLowerCase() === normalizedSlug
        ) || null;
      }),
      catchError(() => of(null))
    );
  }

  create(data: Partial<IProject>): Observable<IProject> { return this.http.post<IProject>(this.apiUrl, data); }
  update(id: string | number, data: Partial<IProject>): Observable<IProject> { return this.http.put<IProject>(this.apiUrl, { ...data, id }); }
  delete(id: string | number): Observable<any> { return this.http.delete<any>(`${this.apiUrl}?id=${id}`); }
}
