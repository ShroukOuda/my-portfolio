import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ieducation } from '../../models/ieducation';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {
  education: Ieducation[] = [
    {
      id: 1,
      institution: 'Tanta University',
      degree: 'Bachelor’s Degree',
      fieldOfStudy: 'Computer and Informatics',
      startDate: new Date('2022-10-01'),
      endDate: new Date('2026-06-30'),
      grade: 'Very Good',
      description: 'Focused on software engineering, algorithms, and data structures.',
    },
    {
      id: 2,
      institution: 'NTI',
      degree: 'Summer Training',
      fieldOfStudy: 'MEAN Stack Development',
      startDate: new Date('2025-07-13'),
      endDate: new Date('2025-08-13'),
      description: 'Completed a full-stack MEAN stack course, including MongoDB, Express.js, Angular, and Node.js.',
    }
  ];

}
