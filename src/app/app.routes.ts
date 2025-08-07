import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { Education } from './pages/education/education';
import { Services } from './pages/services/services';
import { Skills } from './pages/skills/skills';
import { Experience } from './pages/experience/experience';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'education', component: Education },
    { path: 'skills', component: Skills },
    { path: 'experience', component: Experience },
    { path: 'services', component: Services },
    { path: 'projects', component: Projects },
    { path: 'contact', component: Contact },

];
