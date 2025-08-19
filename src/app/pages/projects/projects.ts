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
    title: 'GYM Management System',
    description: 'Flask-based web app for managing gym operations including members, trainers, equipment, and schedules.',
    image: 'projects/gym.png',
    githubLink: 'https://github.com/ShroukOuda/Gym_Management_System',
    technologies: ['Flask', 'Python', 'SQLAlchemy', 'HTML', 'CSS', 'JavaScript']
  },
  {
  title: 'Bookstore MVC',
  description: 'ASP.NET MVC web application for managing books, authors, and categories with full CRUD operations.',
  image: 'projects/bookstore-mvc.png',
  githubLink: 'https://github.com/ShroukOuda/Bookstore',
  technologies: ['ASP.NET MVC', 'C#', 'Entity Framework', 'HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Git Finder',
    description: 'Web app to search GitHub profiles and view user info like avatar, followers, and public repos using GitHub API.',
    image: 'projects/gitfinder.png',
    githubLink: 'https://github.com/ShroukOuda/GitFinder',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub API']
  },
   {
    title: 'Book Store',
    description: 'RESTful API with ASP.NET Core for managing books, authors, and categories with EF Core and AutoMapper.',
    image: 'projects/bookstore.png',
    githubLink: 'https://github.com/ShroukOuda/C.R.U.D',
    technologies: ['ASP.NET Core', 'C#', 'Entity Framework Core', 'AutoMapper', 'SQL Server']
  },
  {
    title: "PortHub",
    description: "Full-stack portfolio platform to create and explore user portfolios with Angular and Node.js.",
    image: 'projects/PortHub.png',
    githubLink: 'https://github.com/ShroukOuda/PortHub',
    technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB']
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with Angular and Tailwind CSS to showcase projects, skills, services, and education.',
    image: 'projects/myPortfolio.png',
    githubLink: 'https://github.com/ShroukOuda/myPortfolio',
    technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS']
  }
];


}



