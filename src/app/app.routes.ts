import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Work } from './pages/work/work';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { ProjectDetail } from './pages/project-detail/project-detail';
import { Certifications } from './pages/certifications/certifications';
import { CertificationsDetail } from './pages/certifications-detail/certifications-detail';
import { Admin } from './pages/admin/admin';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'work', component: Work },
  { path: 'work/:id', component: ProjectDetail },
  { path: 'certifications', component: Certifications },
  { path: 'certifications/:id', component: CertificationsDetail },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'admin', component: Admin },
  { path: '**', redirectTo: '' }
];
