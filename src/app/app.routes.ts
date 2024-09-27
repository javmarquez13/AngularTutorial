import { Routes } from '@angular/router';

export const routes: Routes =
  [
    {
      path: '', redirectTo: '/home/Login', pathMatch: 'full' // Default route
    },
    {
      path: 'home',
      //component: ExampleComponent //without use lazyloading
      loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'design',
      loadChildren: () => import('./modules/design-dhr/design-dhr.module').then(m => m.DesignDHRModule)
    },
  ];
