import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuPanel } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, MatExpansionModule, MatChipsModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Dariel (Contracted to FNB)',
      role: 'Software Developer',
      duration: 'Nov 2024 - Present',
      location: 'Johannesburg, South Africa',
      logo: 'assets/fnb-logo.png',
      responsibilities: [
        'Investigated an internal query efficiency issue using SQL and SQL Server',
        'Recreated the problem using SSMS and T-SQL',
        'Developed a solution with Python and pyodbc, adding logging and error handling',
        'Presented solution to stakeholders and documented best practices'
      ],
      technologies: ['Python', 'SQL Server', 'T-SQL', 'pyodbc']
    },
    {
      company: 'Dariel (Contracted to Capitec Bank)',
      role: 'Software Developer',
      duration: 'Sep 2023 - Aug 2024',
      location: 'Johannesburg, South Africa',
      logo: 'assets/capitec-logo.png',
      responsibilities: [
        'Developed a web application using JavaScript & C# for internal operations',
        'Created an API to interface with legacy databases via AWS API Gateway and Lambda',
        'Built a CSV processor tool in C# to automate data handling',
        'Collaborated with multiple teams to ensure seamless software delivery'
      ],
      technologies: ['JavaScript', 'C#', 'AWS Lambda', 'API Gateway']
    },
    {
      company: 'Dariel (Contracted to Standard Bank)',
      role: 'Software Developer',
      duration: 'Feb 2023 - Sep 2023',
      location: 'South Africa',
      logo: 'assets/standardbank-logo.png',
      responsibilities: [
        'Developed frontend components for customer-facing services in the Standard Bank mobile app using Angular and Ionic',
        'Handled production support for AWS Cloud systems on a rotational basis',
        'Implemented accessibility features to enhance usability for visually impaired users'
      ],
      technologies: ['Angular', 'Ionic', 'AWS']
    }
  ];
}

// export class ExperienceComponent {
//   experiences = [
//     {
//       title: 'Software Developer (contracted to FNB)',
//       dates: 'Nov 2024 - Present',
//       tasks: [
//         'Investigated an internal query efficiency issue using SQL and SQL Server',
//         'Recreated the problem using SSMS and T-SQL',
//         'Developed a solution with Python and pyodbc, with logs and error handling',
//         'Presented the solution to stakeholders, showing efficiency improvements',
//         'Wrote comprehensive documentation for future software use'
//       ]
//     },
//     {
//       title: 'Software Developer (Internal Dariel Project)',
//       dates: 'Sep 2024 - Oct 2024',
//       tasks: [
//         'Investigated SQL performance issues using internal queries and system logs',
//         'Collaborated with other teams to ensure seamless solution integration',
//         'Provided detailed documentation to support system users'
//       ]
//     },
//     {
//       title: 'Software Developer (contracted to Capitec Bank)',
//       dates: 'Sep 2023 - Aug 2024',
//       tasks: [
//         'Created a web application using an internal Capitec framework (JavaScript, C#)',
//         'Developed an API using API Gateway and Lambdas (AWS) to interface with legacy systems',
//         'Built a tool for processing CSV data using C#',
//         'Led task breakdown and assignment from epic level to individual tasks',
//         'Liaised with cross-functional teams to ensure timely delivery'
//       ]
//     },
//     {
//       title: 'Software Developer (contracted to Standard Bank)',
//       dates: 'Feb 2023 - Sep 2023',
//       tasks: [
//         'Developed frontend solutions for the Standard Bank mobile app using Angular and Ionic',
//         'Provided monthly production support for AWS cloud systems',
//         'Improved app accessibility for visually impaired users'
//       ]
//     }
//   ];
// }