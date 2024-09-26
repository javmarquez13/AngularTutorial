import { isNgContainer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: 
  [
    CommonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  public mainMenu: {
    defaultOptions: Array<any>;
    accessLink: Array<any>;
  } = { defaultOptions: [], accessLink: [] };

  constructor() {}

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil-estate',
        route: '\home'
      },
      {
        name: 'Buscar',
        icon: 'uil-search',
        route: '\buscar'
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'ola',
        icon: 'uil-pathfinder'
      }
    ]
  }
}
