import { Injectable } from '@angular/core';

/**
 * Locomotive Scroll Service — désactivé au profit du scroll natif CSS.
 * On garde le service vide pour ne pas casser les injections existantes.
 * Le scroll natif + scroll-behavior: smooth est configuré dans styles.scss.
 */
@Injectable({
  providedIn: 'root',
})
export class LocomotiveScrollService {
  init() { /* scroll natif — rien à faire */ }
  update() { /* scroll natif */ }
  scrollTo(target: string | number | HTMLElement, _options?: any) {
    if (typeof target === 'string') {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: 'smooth' });
    }
  }
  destroy() { /* rien à détruire */ }
}
