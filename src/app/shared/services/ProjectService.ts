import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IProject } from '../models/IProject';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private apiUrl = `${environment.apiUrl}/project/`;
  constructor(private http: HttpClient) {}

  list(): Observable<IProject[]> { return this.http.get<IProject[]>(this.apiUrl); }
  get(id: number): Observable<IProject> { return this.http.get<IProject>(`${this.apiUrl}${id}/`); }
  getBySlug(slug: string): Observable<IProject | null> {
    return this.http.get<IProject[]>(`${this.apiUrl}?slug=${slug}`).pipe(
      map(results => results.length > 0 ? results[0] : null)
    );
  }
  create(data: Partial<IProject>): Observable<IProject> { return this.http.post<IProject>(this.apiUrl, data); }
  update(id: number, data: Partial<IProject>): Observable<IProject> { return this.http.put<IProject>(`${this.apiUrl}${id}/`, data); }
  delete(id: number): Observable<any> { return this.http.delete<any>(`${this.apiUrl}${id}/`); }
}
