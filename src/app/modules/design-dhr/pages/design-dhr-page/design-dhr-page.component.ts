import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignDHRModule } from '../../design-dhr.module';
import { InputBoxComponent } from 'src/app/shared/components/FormFields/input-box/input-box.component';
import { CdkDragDrop } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-design-dhr-page',
  standalone: true,
  imports: [
    CommonModule,
    DesignDHRModule,
    InputBoxComponent
  ],
  templateUrl: './design-dhr-page.component.html',
  styleUrl: './design-dhr-page.component.css'
})
export class DesignDhrPageComponent implements OnInit {

  public ToolBoxCatalog = [
    {
      name: 'Input Box',
      type: 'InputBox'
    },
  ]

  public form: { name: string; type: string }[] = [];

  constructor() {

  }

  ngOnInit(): void {

  }

  drop(event: CdkDragDrop<any>) {
    this.form.push(this.ToolBoxCatalog[event.previousIndex]);
  }
}
