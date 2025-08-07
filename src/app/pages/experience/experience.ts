import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iexperience } from '../../models/iexperience';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  experience: Iexperience[] = [
      {
    id: 1,
    company: 'ALX Africa',
    position: 'Software Engineering Trainee',
    startDate: new Date('2023-09-01'),
    endDate: new Date('2024-12-01'),
    description: 'Participating in an intensive program focused on full-stack development, problem-solving, and system design.',
    location: 'Remote',
    technologiesUsed: ['C', 'Python', 'Linux', 'Git', 'APIs', 'Data Structures']
  },
  {
    id: 2,
    company: 'NTI Egypt (National Telecommunication Institute)',
    position: 'MEAN Stack Trainee',
    startDate: new Date('2025-07-13'),
    endDate: new Date('2025-08-13'),
    description: 'Completed a full-stack MEAN stack course, including MongoDB, Express.js, Angular, and Node.js.',
    location: 'Remote',
    technologiesUsed: ['MongoDB', 'Express.js', 'Angular', 'Node.js', 'TypeScript', 'JavaScript', 'Postman']
  },
{
    id: 3,
    company: 'Personal Project – PortHub Platform',
    position: 'Full-Stack Developer',
    startDate: new Date('2025-07-25'),
    endDate: null, // Represents "Present"
    description: 'Designed and built a full-stack portfolio platform where users can register, create their own portfolios, and explore others. Includes role-based access for admins, creators, and viewers.',
    location: 'Remote',
    technologiesUsed: ['MongoDB', 'Express.js', 'Angular', 'Node.js', 'Tailwind CSS', 'JWT', 'NgRx']
},
{
    id: 4,
    company: 'Team Project – Gym Management System',
    position: 'Backend Developer',
    startDate: new Date('2025-03-01'),
    endDate: new Date('2025-05-01'),
    description: 'Developed a comprehensive Flask-based web application for managing gym operations, including member management, trainer scheduling, and equipment tracking.',
    location: 'Remote',
    technologiesUsed: ['Flask', 'Python', 'SQLAlchemy', 'MySQL', 'MVC', 'Git']
  }
  ];

}
