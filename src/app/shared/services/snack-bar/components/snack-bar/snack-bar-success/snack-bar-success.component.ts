import { Component, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCard } from '@angular/material/card';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-snack-bar-success',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './snack-bar-success.component.html',
  styleUrl: './snack-bar-success.component.css'
})
export class SnackBarSuccessComponent {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: { message: string }) {
  }


  public close() {

  }
}

