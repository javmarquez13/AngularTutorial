import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasePageComponent } from './shared/components/base-page/base-page.component';

export const routes: Routes =
  [
    {
      path: '', redirectTo: '/auth', pathMatch: 'full' // Default route
    },
    {
      path: 'auth',
      loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
    },
    {
      path: 'home',
      component: BasePageComponent,
      children: [
        {
          path: '',
          loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
        }
      ]

    },
    {
      path: 'design',
      component: BasePageComponent,
      children: [
        {
          path: '',
          loadChildren: () => import('./modules/design-dhr/design-dhr.module').then(m => m.DesignDHRModule)
        }
      ]
    },
    {
      path: 'validator',
      component: BasePageComponent,
      children: [
        {
          path: '',
          loadChildren: () => import('./modules/pdf-validator/pdf-validator.module').then(m => m.PdfValidatorModule)
        }
      ]
    },
    {
      path: 'admin',
      component: BasePageComponent,
      children: [
        {
          path: '',
          loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
        }
      ]
    }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
