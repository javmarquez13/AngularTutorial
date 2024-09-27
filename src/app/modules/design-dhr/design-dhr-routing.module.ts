import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignDhrPageComponent } from './pages/design-dhr-page/design-dhr-page.component';

const routes: Routes = [
  {
    path: 'dhr',
    component: DesignDhrPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignDHRRoutingModule { }
