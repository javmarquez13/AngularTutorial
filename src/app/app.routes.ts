import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';

export const routes: Routes =
  [
    {
      path: '', redirectTo: '/auth', pathMatch: 'full' // Default route
    },
    {
      path: 'home',
      component: HomePageComponent,
      loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'auth',
      loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
    },
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
