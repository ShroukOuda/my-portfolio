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
      description: 'A comprehensive Flask-based web application for managing gym operations, including member management, trainer scheduling, equipment tracking, and more.',
      image: 'projects/gym.png',
      githubLink: 'https://github.com/ShroukOuda/Gym_Management_System',
    },
    {
      title: 'Book Store',
      description: ' RESTful Books Management API built with ASP.NET Core - Complete CRUD operations for books, authors, and categories with Entity Framework Core and AutoMapper integration',
      image: 'projects/bookstore.png',
      githubLink: 'https://github.com/ShroukOuda/C.R.U.D',
    },
    {
      title: 'Git Finder',
      description: 'GitFinder is a simple web app using HTML, CSS, and JavaScript that lets users search GitHub profiles and view info like username, avatar, followers, following, join date, and public repositories using the GitHub API.',
      image: 'projects/gitfinder.png',
      githubLink: 'https://github.com/ShroukOuda/GitFinder',
    },
  ];
}


