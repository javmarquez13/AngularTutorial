import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { DesignDHRRoutingModule } from './design-dhr-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DesignDHRRoutingModule,
    DragDropModule,
    ReactiveFormsModule,
  ],
})
export class DesignDHRModule { }
