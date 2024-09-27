import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from 'src/app/shared/components/login/login/login.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: HomePageComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
