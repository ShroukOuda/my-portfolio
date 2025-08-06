import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-social-links',
  imports: [CommonModule],
  templateUrl: './social-links.html',
  styleUrl: './social-links.css'
})
export class SocialLinks {
  hoverStates: { [key: string]: boolean } = {
    github: false,
    linkedin: false,
    twitter: false
  };
  socials = [
    {
      name: 'github',
      icon: 'fab fa-github',
      url: 'https://github.com/yourusername'
    },
    {
      name: 'linkedin',
      icon: 'fab fa-linkedin-in',
      url: 'https://linkedin.com/in/yourusername'
    },
    {
      name: 'twitter',
      icon: 'fab fa-twitter',
      url: 'https://twitter.com/yourusername'
    }
  ];

}
