import { Component, signal, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Preloader } from './core/components/preloader/preloader';
import { Header } from './core/components/header/header';
import { MenuOverlay } from './core/components/menu-overlay/menu-overlay';
import { Cursor } from './core/components/cursor/cursor';
import { LocomotiveScrollService } from './core/services/locomotive-scroll';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Preloader, Header, MenuOverlay, Cursor],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly title = signal('portfolio');

  constructor(private scrollService: LocomotiveScrollService) { }

  ngAfterViewInit() {
    this.scrollService.init();
  }

  ngOnDestroy() {
    this.scrollService.destroy();
  }
}
