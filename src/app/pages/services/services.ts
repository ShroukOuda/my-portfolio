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
    technologiesUsed: ['C#', '.NET Core', 'Entity Framework', 'SQL Server']
  },
  {
    id: 2,
    title: 'Database Design',
    description: 'Model, normalize, and optimize relational databases for high-performance applications.',
    icon: 'fas fa-database',
    technologiesUsed: ['SQL Server', 'MySQL']
  },
  {
    id: 3,
    title: 'Backend Services & APIs',
    description: 'Develop robust backend services and integrate them with databases and frontend apps.',
    icon: 'fas fa-server',
    technologiesUsed: ['C#', '.NET Core', 'SQL Server', 'API Development']
  }
  ];
  

}
