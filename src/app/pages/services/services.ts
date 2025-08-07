import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iservices } from '../../models/iservices';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services {
  services: Iservices[] = [
    {
      id: 1,
      title: 'Web API Development',
      description: 'Design and build secure RESTful APIs using ASP.NET Core for scalable backend systems.',
      icon: 'fas fa-network-wired',
      link: 'https://github.com/ShroukOuda/C.R.U.D',
      technologiesUsed: ['C#', '.NET Core', 'Entity Framework', 'SQL Server']
    },
    {
      id: 2,
      title: 'Database Design',
      description: 'Model, normalize, and optimize relational databases to support high-performance applications.',
      icon: 'fas fa-database',
      technologiesUsed: ['SQL Server', 'MySQL']
    },
    {
      id: 3,
      title: 'Authentication & Authorization',
      description: 'Implement secure login systems using JWT, OAuth2, and Identity Framework.',
      icon: 'fas fa-shield-alt',
      technologiesUsed: ['ASP.NET Identity', 'JWT', 'OAuth2']
    },
   
  ];

}
