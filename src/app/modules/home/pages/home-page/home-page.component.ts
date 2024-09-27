import { Component } from '@angular/core';
import { SidebarComponent } from "../../../../shared/components/sidebar/sidebar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    SidebarComponent,
    CommonModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
