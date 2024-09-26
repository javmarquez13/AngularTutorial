import { Routes } from '@angular/router';

export const routes: Routes =
  [
    {
      path: 'home',
      //component: ExampleComponent //without use lazyloading
      loadChildren: ()=> import('./modules/home/home.module').then(m=>m.HomeModule)
    },
  ];
