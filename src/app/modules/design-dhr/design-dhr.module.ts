import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignDHRRoutingModule } from './design-dhr-routing.module';
import { DesignDhrPageComponent } from './pages/design-dhr-page/design-dhr-page.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DesignDHRRoutingModule,
    DesignDhrPageComponent
  ],
})
export class DesignDHRModule { }
