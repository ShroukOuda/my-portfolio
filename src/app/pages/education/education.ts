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
      gpa: 3.4,
      description: 'Focused on software engineering, algorithms, and data structures.',
      imageUrl: 'education/tanta-university.jpg'
    },
 
  ];

  getCurrentDate(): Date {
    return new Date();
  }
}
