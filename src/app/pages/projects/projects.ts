import { Component } from '@angular/core';
import { Iprojects } from '../../models/iprojects';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
})
export class Projects {
  projects: Iprojects[] = [
    {
      title: 'E-Commerce Website',
      description: 'A modern online store built using Angular and Tailwind CSS with dynamic product listing and cart management.',
      image: '/assets/project1.jpg',
      githubLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio showcasing my skills, built with Angular standalone components and Tailwind.',
      image: '/assets/project2.jpg',
      githubLink: 'https://github.com/yourusername/portfolio',
    },
    {
      title: 'Blog Platform',
      description: 'A full-stack blog platform with user authentication, built using Angular for the frontend and Node.js for the backend.',
      image: '/assets/project3.jpg',
      githubLink: 'https://github.com/yourusername/blog-platform',  
    },
  ];
}


