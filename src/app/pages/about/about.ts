import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TerminalCommand {
  type: 'command' | 'output';
  text: string;
  color?: string;
  delay: number;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements AfterViewInit {
  @ViewChild('terminalContent') terminalContent!: ElementRef<HTMLDivElement>;
  @ViewChild('cursor') cursor!: ElementRef<HTMLSpanElement>;

  // Real terminal prompt
  prompt = 'shrouk@portfolio';
  currentDirectory = '~';

  commands: TerminalCommand[] = [
    { 
      type: 'command', 
      text: 'whoami',
      color: 'var(--main-color)',
      delay: 0
    },
    { 
      type: 'output', 
      text: 'shrouk-abdelsalam',
      color: 'var(--text-color)',
      delay: 500
    },
    { 
    type: 'command', 
    text: 'pwd',
    color: 'var(--main-color)',
    delay: 1000
    },
    { 
      type: 'output', 
      text: '/home/shrouk/portfolio',
      color: 'var(--text-color)',
      delay: 500
    },
    { 
      type: 'command', 
       color: 'var(--main-color)',
      text: 'cat about.txt',
      delay: 1000
    },
    { 
      type: 'output', 
      text: 'Full-stack developer\nBuilding scalable web apps with clean architecture\nand accessible, user-friendly interfaces.',
      color: 'var(--text-color)',
      delay: 500
    },
    { 
      type: 'command', 
      text: 'tech-stack --all',
      color: 'var(--main-color)',
      delay: 1000
    },
    { 
      type: 'output', 
      text: 'Backend: .NET • C# • ASP.NET Core • SQL Server • MongoDB\nFrontend: Angular • TypeScript • HTML5 • CSS3\nTools: Docker • Git • Postman • Swagger • Linux',
      color: 'var(--text-color)',
      delay: 500
    },
    // { 
    //   type: 'command', 
    //   text: 'ls -la skills/backend/',
    //   color: 'var(--main-color)',
    //   delay: 1000
    // },
    // { 
    //   type: 'output', 
    //   text: '.NET  C#  ASP.NET-Core  SQL-Server  MongoDB  Express.js  Node.js',
    //   color: 'var(--text-color)',
    //   delay: 500
    // },
    // { 
    //   type: 'command', 
    //   text: 'ls -la skills/frontend/',
    //   color: 'var(--main-color)',
    //   delay: 1000
    // },
    // { 
    //   type: 'output', 
    //   text: 'Angular  TypeScript  JavaScript  HTML5  CSS3',
    //   color: 'var(--text-color)',
    //   delay: 500
    // },
    // { 
    //   type: 'command', 
    //   text: 'ls -la skills/tools/',
    //   color: 'var(--main-color)',
    //   delay: 1000
    // },
    // { 
    //   type: 'output', 
    //   text: 'Git  GitHub  Docker  Postman  Swagger  Linux  REST-API',
    //   color: 'var(--text-color)',
    //   delay: 500
    // },
  ];

  ngAfterViewInit() {
    // Start the infinite loop
    this.runTerminalLoop();
  }

  async runTerminalLoop(): Promise<void> {
    while (true) {
      // Clear terminal before each loop (except first time)
      if (this.terminalContent.nativeElement.children.length > 0) {
        await new Promise(resolve => setTimeout(resolve, 3000)); // Pause before restart
        this.terminalContent.nativeElement.innerHTML = '';
      }

      // Show cursor
      this.cursor.nativeElement.style.display = 'inline-block';

      // Run all commands
      await this.runTerminal();

      // Hide cursor at the end
      this.cursor.nativeElement.style.display = 'none';
    }
  }

  async runTerminal(): Promise<void> {
    for (let cmd of this.commands) {
      await new Promise(resolve => setTimeout(resolve, cmd.delay));
      
      if (cmd.type === 'command') {
        // Create prompt line
        const promptLine = document.createElement('div');
        promptLine.classList.add('mb-1');
        
        // Add prompt (username@hostname:directory$)
        const promptSpan = document.createElement('span');
        promptSpan.style.color = 'var(--main-color)';
        promptSpan.textContent = `${this.prompt}`;
        
        const colonSpan = document.createElement('span');
        colonSpan.style.color = 'var(--text-color)';
        colonSpan.textContent = ':';
        
        const dirSpan = document.createElement('span');
        dirSpan.style.color = 'var(--hover-color)';
        dirSpan.textContent = this.currentDirectory;
        
        const dollarSpan = document.createElement('span');
        dollarSpan.style.color = 'var(--text-color)';
        dollarSpan.textContent = '$ ';
        
        promptLine.appendChild(promptSpan);
        promptLine.appendChild(colonSpan);
        promptLine.appendChild(dirSpan);
        promptLine.appendChild(dollarSpan);
        
        this.terminalContent.nativeElement.appendChild(promptLine);
        
        // Type the command
        for (let char of cmd.text) {
          const charSpan = document.createElement('span');
          charSpan.style.color = 'var(--text-color)';
          charSpan.textContent = char;
          promptLine.appendChild(charSpan);
          await new Promise(resolve => setTimeout(resolve, 50));
        }
      } else {
        // Create output line
        const line = document.createElement('div');
        line.style.color = cmd.color || 'var(--text-color)';
        line.classList.add('mb-3');
        line.style.whiteSpace = 'pre-line';
        
        this.terminalContent.nativeElement.appendChild(line);
        
        // Type each character
        for (let char of cmd.text) {
          line.textContent += char;
          await new Promise(resolve => setTimeout(resolve, 20));
        }
      }
    }
  }
}