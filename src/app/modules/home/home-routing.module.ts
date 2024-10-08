import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes, } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: HomePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule,
  ]
})
export class HomeRoutingModule { }
