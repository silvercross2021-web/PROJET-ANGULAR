import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iexperience } from '../models/Iexperience';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ExperienceService {
  private apiUrl = `${environment.apiUrl}/experience/`;
  constructor(private http: HttpClient) {}

  list(): Observable<Iexperience[]> { return this.http.get<Iexperience[]>(this.apiUrl); }
  get(id: number): Observable<Iexperience> { return this.http.get<Iexperience>(`${this.apiUrl}${id}/`); }
  create(data: Partial<Iexperience>): Observable<Iexperience> { return this.http.post<Iexperience>(this.apiUrl, data); }
  update(id: number, data: Partial<Iexperience>): Observable<Iexperience> { return this.http.put<Iexperience>(`${this.apiUrl}${id}/`, data); }
  delete(id: number): Observable<any> { return this.http.delete<any>(`${this.apiUrl}${id}/`); }
}
