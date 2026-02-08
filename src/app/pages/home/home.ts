import { Component , OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
 roles: string[] = [
    'Software Engineer',
    'Backend Developer'
  ];
  currentText: string = '';
  roleIndex: number = 0;
  charIndex: number = 0;
  typingSpeed = 150;
  erasingSpeed = 80;
  delayBetweenRoles = 1500;

  ngOnInit(): void {
    this.typeRole();
  }

  typeRole() {
    const currentRole = this.roles[this.roleIndex];
    if (this.charIndex < currentRole.length) {
      this.currentText += currentRole.charAt(this.charIndex);
      this.charIndex++;
      setTimeout(() => this.typeRole(), this.typingSpeed);
    } else {
      setTimeout(() => this.eraseRole(), this.delayBetweenRoles);
    }
  }

  eraseRole() {
    if (this.charIndex > 0) {
      this.currentText = this.currentText.slice(0, this.charIndex - 1);
      this.charIndex--;
      setTimeout(() => this.eraseRole(), this.erasingSpeed);
    } else {
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      setTimeout(() => this.typeRole(), 500);
    }
  }

}