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
  selectedCategory = 'all';

  categories = [
    { id: 'all', labelFr: 'Toutes', labelEn: 'All' },
    { id: 'ia', labelFr: 'Intelligence Artificielle', labelEn: 'AI & Data' },
    { id: 'cloud', labelFr: 'Systèmes & Cloud', labelEn: 'Systems & Cloud' },
    { id: 'awards', labelFr: 'Hackathons & Distinctions', labelEn: 'Hackathons & Awards' },
  ];

  constructor(
    private certService: CertificationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.certService.getAll().subscribe({
      next: (data) => {
        this.certifications = data;
        if (this.certifications && this.certifications.length && !this.hoveredCert) {
          this.hoveredCert = this.certifications[0];
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  get filteredCertifications(): ICertification[] {
    if (this.selectedCategory === 'all') return this.certifications;
    if (this.selectedCategory === 'ia') {
      return this.certifications.filter(c => 
        (c.titre || '').toLowerCase().includes('ai') || 
        (c.description || '').toLowerCase().includes('intelligence') ||
        (c.competences_cles && c.competences_cles.some(k => k.toLowerCase().includes('learning') || k.toLowerCase().includes('ia')))
      );
    }
    if (this.selectedCategory === 'cloud') {
      return this.certifications.filter(c => 
        (c.titre || '').toLowerCase().includes('euler') || 
        (c.titre || '').toLowerCase().includes('linux') || 
        (c.description || '').toLowerCase().includes('linux') ||
        (c.description || '').toLowerCase().includes('cloud')
      );
    }
    if (this.selectedCategory === 'awards') {
      return this.certifications.filter(c => 
        c.titre.toLowerCase().includes('hackathon') || 
        c.titre.toLowerCase().includes('devfest') || 
        c.titre.toLowerCase().includes('sirexe') || 
        c.id === 'cert-4' || c.id === 'cert-5'
      );
    }
    return this.certifications;
  }

  setCategory(catId: string) {
    this.selectedCategory = catId;
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
