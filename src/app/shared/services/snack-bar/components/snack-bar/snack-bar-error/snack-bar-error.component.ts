import { Component, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCard } from '@angular/material/card';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-snack-bar-error',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './snack-bar-error.component.html',
  styleUrl: './snack-bar-error.component.css'
})
export class SnackBarErrorComponent {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: { message: string }) {

  }

  public close() {

  }
}
