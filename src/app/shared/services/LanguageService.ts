import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Lang = 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private _lang = new BehaviorSubject<Lang>(
    (localStorage.getItem('lang') as Lang) || 'fr'
  );

  lang$ = this._lang.asObservable();

  constructor() {
    if (typeof window !== 'undefined') {
      this.syncGoogleTranslate(this._lang.value);
    }
  }

  get current(): Lang {
    return this._lang.value;
  }

  toggle() {
    const next: Lang = this._lang.value === 'fr' ? 'en' : 'fr';
    this._lang.next(next);
    localStorage.setItem('lang', next);
    this.syncGoogleTranslate(next);
  }

  private syncGoogleTranslate(lang: Lang) {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    
    // On essaie de trouver le dropdown du widget Google toutes les 100ms
    // car le script Google s'initialise de manière asynchrone
    let retries = 0;
    const interval = setInterval(() => {
      const selectElement = document.querySelector('select.goog-te-combo') as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = lang === 'en' ? 'en' : 'fr';
        selectElement.dispatchEvent(new Event('change'));
        clearInterval(interval);
      } else if (retries > 50) { 
        // 5 secondes max
        clearInterval(interval);
      }
      retries++;
    }, 100);
  }
}
