import { isNgContainer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: 
  [
    CommonModule,
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
      },
      {
        name: 'Biblioteca',
        icon: 'uil-book',
        route: '\buscar'
      },
      {
        name: 'Crear lista',
        icon: 'uil uil-create-dashboard',
        route: '\buscar'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart',
        route: '\buscar'
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Mi lista #1',
        icon: ''
      },
      {
        name: 'Mi lista #2',
        icon: ''
      },
      {
        name: 'Mi lista #3',
        icon: ''
      }
    ]
  }

  

  public onButtonClick(){
    console.log("Clicked");
  }
}


