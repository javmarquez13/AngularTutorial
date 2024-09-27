import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login/login.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarComponent,
    LoginComponent
  ],
  exports: [
    SidebarComponent,
    LoginComponent
  ]
})
export class SharedModule { }
