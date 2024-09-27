import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenav } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BaseModalComponent } from '../base-modal/base-modal.component';


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
      MatButtonModule,
      RouterOutlet,
      BaseModalComponent
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


  constructor(private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'home',
        route: '/home/dashboard'
      },
      {
        name: 'Deisgn DHR',
        icon: 'edit',
        route: '/design/dhr'
      },
      {
        name: 'Admin',
        icon: 'settings',
        route: '/admin/configuration'
      },
      {
        name: 'Login',
        icon: 'login',
        route: ''
      },
      {
        name: 'Logout',
        icon: 'close',
        route: ''
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

  public onItemMenuClickEvent(item: any) {
    console.log('clicked', item.route);


    if (item.name === 'Logout') {
      this.onLogoutClick(item);
      return;
    }

    this.router.navigate([item.route]);
    this.toggleSidenav();
  }


  public onLogoutClick(item: any) {
    this.dialog.open(BaseModalComponent, {
      data: {
        title: 'Logout confirmation',
        message: 'Are sure you that you want to close your season?'
      }
    });
  }
}


