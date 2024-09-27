import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasePageComponent } from './shared/components/base-page/base-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BasePageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'spotify-a';
}
