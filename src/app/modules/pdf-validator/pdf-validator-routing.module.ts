import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfValidatorPageComponent } from './pages/pdf-validator-page/pdf-validator-page.component';

const routes: Routes = [
  {
    path: 'pdf',
    component: PdfValidatorPageComponent
  },
  {
    path: '**',
    redirectTo: '/validator/pdf'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfValidatorRoutingModule implements OnInit {


  constructor() {

  }
  ngOnInit(): void {

  }
}
