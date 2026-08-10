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

    // 1) Affichage rapide à partir du cache portfolio si disponible
    const cached = this.portfolioService.snapshot;
    if (cached && cached.projets) {
      const found = cached.projets.find(p => p.slug === slug || String(p.id) === String(slug));
      if (found) {
        this.project = found;
        this.loading = false;
      }
    }

    // 2) Toujours charger la version intégrale des détails du projet depuis l'API /api/projects
    this.projectService.getBySlug(slug).subscribe({
      next: (project) => {
        if (project) {
          this.project = project;
        }
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }
}
