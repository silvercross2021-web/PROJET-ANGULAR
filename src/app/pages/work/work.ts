import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../shared/services/PortfolioService';
import { IProject } from '../../shared/models/IProject';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class Work implements OnInit {
  projects: IProject[] = [];
  hoveredProject: IProject | null = null;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.load().subscribe(data => {
      this.projects = data.projets;
    });
  }

  getIndex(p: IProject): number {
    return this.projects.indexOf(p);
  }
}
