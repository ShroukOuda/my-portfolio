import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICertificate } from '../../models/icertificates';

@Component({
  selector: 'app-certificates',
  imports: [CommonModule],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class Certificates {
  certificates: ICertificate[] = [
   {
    id: 1,
    title: 'JavaScript Fundamentals',
    description: 'Completed an in-depth course on JavaScript programming.',
    issuer: 'Mahara Tech',
    issueDate: new Date('2025-07-14'),
    certificateImage: 'certificates/javascript.png',
    technologiesUsed: ['JavaScript', 'HTML', 'CSS']
  }
  ];
}
