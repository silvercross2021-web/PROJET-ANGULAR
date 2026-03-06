import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISocial } from '../models/ISocial';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SocialService {
  private apiUrl = `${environment.apiUrl}/social/`;
  constructor(private http: HttpClient) {}

  list(): Observable<ISocial[]> { return this.http.get<ISocial[]>(this.apiUrl); }
  get(id: number): Observable<ISocial> { return this.http.get<ISocial>(`${this.apiUrl}${id}/`); }
  create(data: Partial<ISocial>): Observable<ISocial> { return this.http.post<ISocial>(this.apiUrl, data); }
  update(id: number, data: Partial<ISocial>): Observable<ISocial> { return this.http.put<ISocial>(`${this.apiUrl}${id}/`, data); }
  delete(id: number): Observable<any> { return this.http.delete<any>(`${this.apiUrl}${id}/`); }
}
