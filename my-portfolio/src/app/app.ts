import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { SocialLinks } from './components/social-links/social-links';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, SocialLinks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-portfolio');
}
