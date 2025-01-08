import { Routes } from '@angular/router';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { BioComponent } from './components/bio/bio.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { PersonalProjectsComponent } from './components/personal-projects/personal-projects.component';

export const routes: Routes = [
  { path: '', redirectTo: 'app-bio', pathMatch: 'full' },
  { path: 'app-bio', component: BioComponent },
  { path: 'app-contact-info', component: ContactInfoComponent },
  { path: 'app-experience', component: ExperienceComponent },
  { path: 'app-skills', component: SkillsComponent },
  { path: 'app-education', component: EducationComponent },
  { path: 'app-personal-projects', component: PersonalProjectsComponent },
];
