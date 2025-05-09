import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; 

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationList = [
    {
      institution: 'University of the Witwatersrand',
      degree: 'Bachelor of Science Honours - BSc Hons, Computer Science',
      years: '2022',
    },
    {
      institution: 'University of the Witwatersrand',
      degree: 'Bachelor of Science - BSc, Computer Science and Information Systems',
      years: '2018 - 2021',
    },
    {
      institution: 'Northcliff High School',
      degree: 'High School Diploma',
      years: '2013 - 2017',
    }
  ];
}

