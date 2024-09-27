import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderuserComponent } from '../headeruser/headeruser.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-base-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderuserComponent,
    SidebarComponent
  ],
  templateUrl: './base-page.component.html',
  styleUrl: './base-page.component.css'
})
export class BasePageComponent {

}
