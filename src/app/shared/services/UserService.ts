import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsers } from '../models/IUsers';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = `${environment.apiUrl}/users/`;
  constructor(private http: HttpClient) {}

  list(): Observable<IUsers[]> { return this.http.get<IUsers[]>(this.apiUrl); }
  get(id: number): Observable<IUsers> { return this.http.get<IUsers>(`${this.apiUrl}${id}/`); }
  create(data: Partial<IUsers>): Observable<IUsers> { return this.http.post<IUsers>(this.apiUrl, data); }
  update(id: number, data: Partial<IUsers>): Observable<IUsers> { return this.http.put<IUsers>(`${this.apiUrl}${id}/`, data); }
  delete(id: number): Observable<any> { return this.http.delete<any>(`${this.apiUrl}${id}/`); }
}
