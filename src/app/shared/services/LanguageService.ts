import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Lang = 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private _lang = new BehaviorSubject<Lang>(
    (localStorage.getItem('lang') as Lang) || 'fr'
  );

  lang$ = this._lang.asObservable();

  constructor() { }

  get current(): Lang {
    return this._lang.value;
  }

  toggle() {
    const next: Lang = this._lang.value === 'fr' ? 'en' : 'fr';
    this._lang.next(next);
    localStorage.setItem('lang', next);

    if (next === 'en') {
      // Activer Google Translate secrètement via cookie
      document.cookie = 'googtrans=/fr/en; path=/';
      document.cookie = 'googtrans=/fr/en; domain=' + window.location.hostname + '; path=/';
      window.location.reload();
    } else {
      // Désactiver complètement Google Translate et restaurer le DOM original
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'googtrans=; domain=' + window.location.hostname + '; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      window.location.reload();
    }
  }
}
