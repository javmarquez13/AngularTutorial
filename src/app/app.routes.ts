import { Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login/login.component';

export const routes: Routes =
  [
    {
      path: 'home',
      //component: ExampleComponent //without use lazyloading
      loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'design',
      loadChildren: () => import('./modules/design-dhr/design-dhr.module').then(m => m.DesignDHRModule)
    },
    {
      path: 'login',
      component: LoginComponent
    }
  ];
