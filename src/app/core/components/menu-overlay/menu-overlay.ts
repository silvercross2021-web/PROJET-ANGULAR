import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../shared/services/PortfolioService';
import { ISocial } from '../../../shared/models/ISocial';
import { SoundService } from '../../services/sound.service';

@Component({
  selector: 'app-menu-overlay',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './menu-overlay.html',
  styleUrl: './menu-overlay.scss',
})
export class MenuOverlay implements OnInit, OnDestroy {
  isOpen = false;
  reseaux: ISocial[] = [];
  private listener!: EventListener;

  constructor(
    private ngZone: NgZone, 
    private portfolioService: PortfolioService,
    private soundService: SoundService
  ) { }

  ngOnInit() {
    this.listener = (e: Event) => {
      const open = (e as CustomEvent).detail?.open as boolean;
      this.ngZone.run(() => { this.isOpen = open; });
    };
    window.addEventListener('menu-toggle', this.listener);

    this.portfolioService.load().subscribe(data => {
      this.reseaux = data.reseaux;
    });
  }

  close() {
    this.soundService.playClick();
    this.isOpen = false;
    window.dispatchEvent(new CustomEvent('menu-closed-by-nav'));
  }

  ngOnDestroy() {
    window.removeEventListener('menu-toggle', this.listener);
  }
}
