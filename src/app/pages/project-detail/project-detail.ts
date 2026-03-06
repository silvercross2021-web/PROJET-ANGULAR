import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../shared/services/PortfolioService';
import { ProjectService } from '../../shared/services/ProjectService';
import { IProject } from '../../shared/models/IProject';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail implements OnInit {
  project: IProject | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private portfolioService: PortfolioService,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('id');
    if (!slug) { this.loading = false; return; }

    // 1) Chercher dans le cache (instantané, 0 appel HTTP)
    const cached = this.portfolioService.snapshot;
    if (cached) {
      this.project = cached.projets.find(p => p.slug === slug) || null;
      if (this.project) { this.loading = false; return; }
    }

    // 2) Fallback : appel API si pas en cache
    this.projectService.getBySlug(slug).subscribe({
      next: (project) => { this.project = project; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
