import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatProgressSpinnerModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'C#', proficiency: 90 },
        { name: 'Python', proficiency: 85 },
        { name: 'JavaScript', proficiency: 80 },
        { name: 'Go', proficiency: 75 },
        { name: 'Transact-SQL (T-SQL)', proficiency: 70 }
      ]
    },
    {
      category: 'Frameworks & Libraries',
      skills: [
        { name: 'Angular', proficiency: 90 },
        { name: 'Spring Boot', proficiency: 85 },
        { name: 'Ionic', proficiency: 80 },
        { name: 'React', proficiency: 75 },
        { name: 'Vue.js', proficiency: 70 }
      ]
    },
    {
      category: 'Technologies & Tools',
      skills: [
        { name: 'Docker', proficiency: 90 },
        { name: 'AWS', proficiency: 85 },
        { name: 'Azure', proficiency: 80 },
        { name: 'Google Cloud', proficiency: 75 },
        { name: 'Git', proficiency: 70 }
      ]
    },
    {
      category: 'Databases',
      skills: [
        { name: 'SQL Server', proficiency: 85 },
        { name: 'BigQuery', proficiency: 80 }
      ]
    }
  ];
}
