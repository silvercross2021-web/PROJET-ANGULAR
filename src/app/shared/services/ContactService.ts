import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContact } from '../models/IContact';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ContactService {
    private apiUrl = `${environment.apiUrl}/prise-de-contact/`;
    constructor(private http: HttpClient) {}

    saveContact(contact: IContact): Observable<IContact> {
        return this.http.post<IContact>(this.apiUrl, contact);
    }
    list(): Observable<IContact[]> { return this.http.get<IContact[]>(this.apiUrl); }
    get(id: number): Observable<IContact> { return this.http.get<IContact>(`${this.apiUrl}${id}/`); }
}
