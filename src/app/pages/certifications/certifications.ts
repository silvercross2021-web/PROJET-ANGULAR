import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CertificationService } from '../../shared/services/CertificationService';
import { ICertification } from '../../shared/models/ICertification';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss'
})
export class Certifications implements OnInit {
  certifications: ICertification[] = [];
  hoveredCert: ICertification | null = null;
  loading = false;

  constructor(
    private certService: CertificationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.certService.getAll().subscribe({
      next: (data) => {
        this.certifications = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  getIndex(cert: ICertification): number {
    return this.certifications.indexOf(cert);
  }

  isUrl(str: string | undefined): boolean {
    if (!str) return false;
    return str.startsWith('http://') || str.startsWith('https://');
  }

  openDetail(cert: ICertification): void {
    this.router.navigate(['/certifications', cert.id]);
  }
}
