import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IProject } from '../models/IProject';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private apiUrl = `${environment.apiUrl}/projects`;
  constructor(private http: HttpClient) {}

  list(): Observable<IProject[]> { return this.http.get<IProject[]>(this.apiUrl); }
  get(id: string | number): Observable<IProject> { return this.http.get<IProject>(`${this.apiUrl}?id=${id}`); }
  getBySlug(slug: string): Observable<IProject | null> {
    return this.http.get<IProject[]>(`${this.apiUrl}`).pipe(
      map(results => {
        if (!results || !results.length) return null;
        return results.find(p => p.slug === slug || p.id === slug) || null;
      })
    );
  }
  create(data: Partial<IProject>): Observable<IProject> { return this.http.post<IProject>(this.apiUrl, data); }
  update(id: string | number, data: Partial<IProject>): Observable<IProject> { return this.http.put<IProject>(this.apiUrl, { ...data, id }); }
  delete(id: string | number): Observable<any> { return this.http.delete<any>(`${this.apiUrl}?id=${id}`); }
}
