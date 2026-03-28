import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { PortfolioService } from '../../shared/services/PortfolioService';
import { IProject } from '../../shared/models/IProject';
import { LanguageService, Lang } from '../../shared/services/LanguageService';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class Work implements OnInit, OnDestroy {
  projects: IProject[] = [];
  hoveredProject: IProject | null = null;
  lang: Lang = 'fr';
  private langSub!: Subscription;

  constructor(private portfolioService: PortfolioService, private langService: LanguageService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.portfolioService.load().subscribe(data => {
      this.projects = data.projets;
      this.cdr.detectChanges();
    });
    this.langSub = this.langService.lang$.subscribe(l => {
      this.lang = l;
      this.cdr.detectChanges();
    });
  }

  getIndex(p: IProject): number {
    return this.projects.indexOf(p);
  }

  ngOnDestroy() { this.langSub?.unsubscribe(); }
}
