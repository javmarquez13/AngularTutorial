import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBoxComponent } from 'src/app/shared/components/FormFields/input-box/input-box.component';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';


@Component({
  selector: 'app-design-dhr-page',
  standalone: true,
  imports: [
    CommonModule,
    InputBoxComponent,
    MatButtonModule,
    SidebarComponent
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

  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }


  public onClickButton() {
    this.router.navigate(['/home/dashboard'])
  }


  public drop(event: CdkDragDrop<any>) {
    this.form.push(this.ToolBoxCatalog[event.previousIndex]);
  }
}
