import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { HomePageComponent } from '../home/pages/home-page/home-page.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HomePageComponent
  ]
})
export class AuthModule { }
