import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IService } from '../models/IService';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ServiceService {
  private apiUrl = `${environment.apiUrl}/services/`;
  constructor(private http: HttpClient) {}

  list(): Observable<IService[]> { return this.http.get<IService[]>(this.apiUrl); }
  get(id: number): Observable<IService> { return this.http.get<IService>(`${this.apiUrl}${id}/`); }
  create(data: Partial<IService>): Observable<IService> { return this.http.post<IService>(this.apiUrl, data); }
  update(id: number, data: Partial<IService>): Observable<IService> { return this.http.put<IService>(`${this.apiUrl}${id}/`, data); }
  delete(id: number): Observable<any> { return this.http.delete<any>(`${this.apiUrl}${id}/`); }
}
