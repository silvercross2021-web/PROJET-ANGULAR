import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Work } from './pages/work/work';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { ProjectDetail } from './pages/project-detail/project-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'work', component: Work },
  { path: 'work/:id', component: ProjectDetail },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
