import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iskills } from '../../models/iskills';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  skills: Iskills[] = [
    {
    id: 1,
    name: ".NET",
    icon: "fa-brands fa-microsoft"
  },
  {
    id: 2,
    name: "C#",
    icon: "fa-solid fa-code"
  },
  {
    id: 3,
    name: "MongoDB",
    icon: "fa-solid fa-database"
  },
  {
    id: 4,
    name: "Express.js",
    icon: "fa-solid fa-server"
  },
  {
    id: 5,
    name: "Angular",
    icon: "fa-brands fa-angular"
  },
  {
    id: 6,
    name: "Node.js",
    icon: "fa-brands fa-node-js"
  },
  {
    id: 7,
    name: "SQL Server",
    icon: "fa-solid fa-database" // generic DB icon; no official FA icon for SQL Server
  },
  {
    id: 8,
    name: "HTML5",
    icon: "fa-brands fa-html5"
  },
  {
    id: 9,
    name: "CSS3",
    icon: "fa-brands fa-css3-alt"
  },
  {
    id: 10,
    name: "JavaScript",
    icon: "fa-brands fa-js"
  },
  {
    id: 11,
    name: "Git",
    icon: "fa-brands fa-git-alt"
  },
  {
    id: 12,
    name: "GitHub",
    icon: "fa-brands fa-github"
  },
  {
    id: 13,
    name: "Postman",
    icon: "fa-solid fa-paper-plane"
  },
  {
    id: 14,
    name: "Swagger",
    icon: "fa-solid fa-sitemap"
  },
  {
    id: 15,
    name: "REST API",
    icon: "fa-solid fa-network-wired"
  },
  {
    id: 16,
    name: "Linux",
    icon: "fa-brands fa-linux"
  }

];

}
