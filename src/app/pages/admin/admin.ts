import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CertificationService } from '../../shared/services/CertificationService';
import { ICertification } from '../../shared/models/ICertification';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.scss'
})
export class Admin implements OnInit {
  activeTab: 'projects' | 'certifications' | 'messages' = 'projects';
  projects: any[] = [];
  certifications: ICertification[] = [];
  messages: any[] = [];
  
  projectForm: FormGroup;
  certForm: FormGroup;
  editingProjectId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private certService: CertificationService
  ) {
    this.projectForm = this.fb.group({
      titre: ['', Validators.required],
      slug: ['', Validators.required],
      categorie: ['Angular', Validators.required],
      annee: ['2024'],
      resume: ['', Validators.required],
      description: [''],
      image: [''],
      video_url: [''],
      live: [''],
      github: [''],
      est_prive: [false],
      technologies: ['']
    });

    this.certForm = this.fb.group({
      titre: ['', Validators.required],
      organisme: ['', Validators.required],
      date_obtention: ['2024', Validators.required],
      image_badge: [''],
      lien_verification: [''],
      description: [''],
      competences: ['']
    });
  }

  ngOnInit() {
    this.loadProjects();
    this.loadCertifications();
    this.loadMessages();
  }

  loadProjects() {
    this.http.get<any[]>('/api/projects').subscribe({
      next: (res) => this.projects = res || [],
      error: () => this.projects = []
    });
  }

  loadCertifications() {
    this.certService.getAll().subscribe({
      next: (res) => this.certifications = res || [],
      error: () => this.certifications = []
    });
  }

  loadMessages() {
    this.http.get<any[]>('/api/messages').subscribe({
      next: (res) => this.messages = res || [],
      error: () => this.messages = []
    });
  }

  submitProject() {
    if (this.projectForm.invalid) return;
    const val = this.projectForm.value;
    const techArray = typeof val.technologies === 'string'
      ? val.technologies.split(',').map((t: string) => t.trim()).filter(Boolean)
      : [];

    const projData = {
      ...val,
      technologies_liste: techArray,
      id: this.editingProjectId || Date.now().toString()
    };

    if (this.editingProjectId) {
      this.http.put('/api/projects', projData).subscribe(() => {
        this.loadProjects();
        this.resetProjectForm();
      });
    } else {
      this.http.post('/api/projects', projData).subscribe(() => {
        this.loadProjects();
        this.resetProjectForm();
      });
    }
  }

  editProject(p: any) {
    this.editingProjectId = p.id;
    this.projectForm.patchValue({
      titre: p.titre,
      slug: p.slug || p.titre.toLowerCase().replace(/\s+/g, '-'),
      categorie: p.categorie || 'Angular',
      annee: p.annee || '2024',
      resume: p.resume || '',
      description: p.description || '',
      image: p.image || p.image_upload || '',
      video_url: p.video_url || '',
      live: p.live || p.lien || '',
      github: p.github || '',
      est_prive: p.est_prive || false,
      technologies: Array.isArray(p.technologies_liste) ? p.technologies_liste.join(', ') : (p.technologies || '')
    });
  }

  deleteProject(id: string) {
    if (confirm('Supprimer ce projet ?')) {
      this.http.delete(`/api/projects?id=${id}`).subscribe(() => this.loadProjects());
    }
  }

  resetProjectForm() {
    this.editingProjectId = null;
    this.projectForm.reset({ categorie: 'Angular', annee: '2024', est_prive: false });
  }

  submitCert() {
    if (this.certForm.invalid) return;
    const val = this.certForm.value;
    const skArray = typeof val.competences === 'string'
      ? val.competences.split(',').map((t: string) => t.trim()).filter(Boolean)
      : [];

    const certData: ICertification = {
      id: Date.now().toString(),
      titre: val.titre,
      organisme: val.organisme,
      date_obtention: val.date_obtention,
      image_badge: val.image_badge,
      lien_verification: val.lien_verification,
      description: val.description,
      competences_cles: skArray
    };

    this.certService.add(certData).subscribe(() => {
      this.loadCertifications();
      this.certForm.reset({ date_obtention: '2024' });
    });
  }

  deleteCert(id: string) {
    if (confirm('Supprimer cette certification ?')) {
      this.certService.delete(id).subscribe(() => this.loadCertifications());
    }
  }

  deleteMessage(id: string) {
    if (confirm('Supprimer ce message ?')) {
      this.http.delete(`/api/messages?id=${id}`).subscribe(() => this.loadMessages());
    }
  }
}
