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
  selector: 'app-personal-projects',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, MatExpansionModule, MatChipsModule],
  templateUrl: './personal-projects.component.html',
  styleUrl: './personal-projects.component.css'
})
export class PersonalProjectsComponent {
  projects = [
    {
      name: 'Rewards Based Data Labelling',
      responsibilities: [
        'Capstone project for CS Undergraduate degree',
        'Teams of 8, employing an academically adapted version of the Agile Scrum methodology to deliver a software solution every 2 to 3 weeks for one year',
        'Each deliverable was marked and for each one we delivered an outstanding project, testing and documentation quality that earned us no less than 95% for the entire duration of the project',
        'My role included being scrum master as well as a full stack developer on the team',
        'During the project I strengthened my knowledge of backend technologies as well as testing, having had most of my experience up to that point with frontend technologies'
      ],
      technologies: ['Typescript', 'Vue', 'Vuetify', 'Jest', 'Jira', 'Git']
    },
    {
      name: 'blockHops - JavaScript mini-game',
      responsibilities: [
        'In preparation for an upcoming course in my studies I have started playing around with the HTML canvas',
        'I had the idea for a Doodle Jump style clone when I watched and completed a tutorial from freeCodeCamp',
        'In the tutorial, timers were used to manage the movement of the player and of the platforms but I didn\'t like the jitter that was caused by the overlapping timers so I thought I\'d try and implement it using the HTML canvas',
        'In the future I would like to improve it by including non-liner gravity, increased platform speed subject to player location and high score memory.',
      ],
      technologies: ['HTML Canvas', 'JavaScript', 'Git']
    },
  ];
}