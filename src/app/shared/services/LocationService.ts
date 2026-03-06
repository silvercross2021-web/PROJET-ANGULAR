import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ilocation } from '../models/Ilocation';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class LocationService {
  private apiUrl = `${environment.apiUrl}/location/`;
  constructor(private http: HttpClient) {}

  list(): Observable<Ilocation[]> { return this.http.get<Ilocation[]>(this.apiUrl); }
  get(id: number): Observable<Ilocation> { return this.http.get<Ilocation>(`${this.apiUrl}${id}/`); }
  create(data: Partial<Ilocation>): Observable<Ilocation> { return this.http.post<Ilocation>(this.apiUrl, data); }
  update(id: number, data: Partial<Ilocation>): Observable<Ilocation> { return this.http.put<Ilocation>(`${this.apiUrl}${id}/`, data); }
  delete(id: number): Observable<any> { return this.http.delete<any>(`${this.apiUrl}${id}/`); }
}
