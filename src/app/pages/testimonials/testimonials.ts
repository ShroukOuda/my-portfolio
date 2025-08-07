import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Itestimonials } from '../../models/itestimonials';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class Testimonials {
  testimonials: Itestimonials[] = [
   {
    id: 1,
    name: 'John Smith',
    feedback: 'Working with Shrouk was a great experience. She delivered high-quality code on time and always communicated clearly.',
    designation: 'Software Engineer',
    company: 'TechNova Solutions',
    date: new Date('2025-03-15'),
    profilePictureUrl: 'testimonials/john.jpeg'
  },
  {
    id: 2,
    name: 'Sara Ahmed',
    feedback: 'She’s one of the most dedicated developers I’ve ever worked with. Her UI/UX understanding and attention to detail are top-notch.',
    designation: 'Project Manager',
    company: 'InnoSoft Egypt',
    date: new Date('2025-02-10'),
    profilePictureUrl: 'testimonials/sara.jpeg'
  },
  {
    id: 3,
    name: 'Liam Carter',
    feedback: 'Very responsive and professional. Helped us scale our web app and improved performance significantly.',
    designation: 'CTO',
    company: 'BrightTech LLC',
    date: new Date('2025-01-25'),
    profilePictureUrl: 'testimonials/liam.jpeg'
  },
  {
    id: 4,
    name: 'Nada Elsharkawy',
    feedback: 'Shrouk is extremely talented and committed. Her work always exceeds expectations.',
    designation: 'Team Lead',
    company: 'Cairo DevHouse',
    date: new Date('2025-04-08'),
    profilePictureUrl: 'testimonials/nada.jpeg'
  }
  ];
}


