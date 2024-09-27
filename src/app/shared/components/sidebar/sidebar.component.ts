import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports:
    [
      CommonModule,
      MatSidenavModule,
      MatListModule,
      MatIconModule,
      MatToolbarModule,
    ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleSidenav() {
    this.sidenav.toggle();
  }

  public mainMenu: {
    defaultOptions: Array<any>;
    accessLink: Array<any>;
  } = { defaultOptions: [], accessLink: [] };



  constructor() { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil-estate',
        route: '\home'
      },
      {
        name: 'Deisgn DHR',
        icon: 'uil-search',
        route: '\buscar'
      },
      {
        name: 'Login',
        icon: 'uil-book',
        route: '\buscar'
      },
      {
        name: 'Unloggin',
        icon: 'uil uil-create-dashboard',
        route: '\buscar'
      },
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

  public onButtonClick() {
    console.log("Clicked");
  }
}


