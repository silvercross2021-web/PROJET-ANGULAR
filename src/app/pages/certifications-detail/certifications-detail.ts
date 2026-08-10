import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificationService } from '../../shared/services/CertificationService';
import { ICertification } from '../../shared/models/ICertification';

@Component({
  selector: 'app-certifications-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './certifications-detail.html',
  styleUrl: './certifications-detail.scss'
})
export class CertificationsDetail implements OnInit {
  cert: ICertification | null = null;
  loading = true;
  isModalOpen = false;

  constructor(
    private route: ActivatedRoute,
    private certService: CertificationService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) { this.loading = false; return; }

    this.certService.getById(id).subscribe({
      next: (cert) => {
        this.cert = cert;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  openCertModal() {
    if (this.cert?.image_badge || this.cert?.fichier_pdf) {
      this.isModalOpen = true;
    }
  }

  closeCertModal() {
    this.isModalOpen = false;
  }

  @HostListener('window:keydown.escape')
  onEscape() {
    this.closeCertModal();
  }

  isUrl(str: string | undefined): boolean {
    if (!str) return false;
    return str.startsWith('http://') || str.startsWith('https://');
  }
}
