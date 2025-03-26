import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css'
})
export class ContactInfoComponent {
  contactDetails = [
    {
      type: 'Email',
      value: 'jmkb1502@gmail.com',
      icon: 'email',
      link: 'mailto:jmkb1502@gmail.com'
    },
    {
      type: 'LinkedIn',
      value: 'linkedin.com/in/je-mekruger-baartjes',
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/je-mekruger-baartjes'
    },
    {
      type: 'GitHub',
      value: 'github.com/Jem-Kaybi',
      icon: 'code',
      link: 'https://github.com/Jem-Kaybi'
    },
    {
      type: 'Phone',
      value: '+27 84 529 3333',
      icon: 'phone',
      link: 'tel:+27845293333'
    }
  ];

  userMessage = {
    name: '',
    email: '',
    message: ''
  };

  submitMessage() {
    console.log('Message submitted:', this.userMessage);
    alert('Your message has been sent!');
    this.userMessage = { name: '', email: '', message: '' }; // Reset form
  }
}
