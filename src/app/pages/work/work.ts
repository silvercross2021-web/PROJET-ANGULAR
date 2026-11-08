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
  selectedCategory = 'all';

  categories = [
    { id: 'all', labelFr: 'Tous', labelEn: 'All' },
    { id: 'Hackathons & IA', labelFr: 'Hackathons & IA', labelEn: 'Hackathons & AI' },
    { id: 'Recherche & IoT', labelFr: 'Recherche & IoT', labelEn: 'Research & IoT' },
    { id: 'Entreprise & Freelance', labelFr: 'Entreprise & Freelance', labelEn: 'Business & Freelance' },
    { id: 'Web & Logiciel', labelFr: 'Web & Logiciel', labelEn: 'Web & Software' },
    { id: 'Créations Photoshop', labelFr: 'Créations Photoshop', labelEn: 'Photoshop Creations' },
    { id: 'Créatif & Interactif', labelFr: 'Créatif & Interactif', labelEn: 'Creative & Interactive' }
  ];

  private langSub!: Subscription;

  constructor(private portfolioService: PortfolioService, private langService: LanguageService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.portfolioService.load().subscribe(data => {
      this.projects = data.projets;
      if (this.projects && this.projects.length && !this.hoveredProject) {
        this.hoveredProject = this.projects[0];
      }
      this.cdr.detectChanges();
    });
    this.langSub = this.langService.lang$.subscribe(l => {
      this.lang = l;
      this.cdr.detectChanges();
    });
  }

  get filteredProjects(): IProject[] {
    if (this.selectedCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter(p => p.categorie === this.selectedCategory);
  }

  setCategory(catId: string) {
    this.selectedCategory = catId;
    const filtered = this.filteredProjects;
    if (filtered.length) {
      this.hoveredProject = filtered[0];
    }
  }

  getIndex(p: IProject): number {
    return this.projects.indexOf(p);
  }

  ngOnDestroy() { this.langSub?.unsubscribe(); }
}
