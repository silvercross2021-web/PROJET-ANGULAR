import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private apiUrl = '/api/messages';

  constructor(private http: HttpClient) {}

  saveContact(contact: any): Observable<any> {
    const payload = {
      name: contact.name || contact.nom_complet || contact.nom || 'Visiteur',
      email: contact.email,
      subject: contact.subject || contact.objet || contact.sujet || 'Message Portfolio',
      message: contact.message
    };
    return this.http.post<any>(this.apiUrl, payload);
  }

  list(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
