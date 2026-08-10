import { Component, OnInit } from '@angular/core';
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

  isUrl(str: string | undefined): boolean {
    if (!str) return false;
    return str.startsWith('http://') || str.startsWith('https://');
  }
}
