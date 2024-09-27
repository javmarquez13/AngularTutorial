import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogActions } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
@Component({
  selector: 'app-cconfirmation-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    MatDialogActions,
    MatButton
  ],
  templateUrl: './cconfirmation-modal.component.html',
  styleUrl: './cconfirmation-modal.component.css'
})
export class CconfirmationModalComponent implements OnInit {

  public title: string = '';
  public message: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CconfirmationModalComponent>) {

  }

  ngOnInit(): void {
    this.title = this.data.title;
    this.message = this.data.message;
  }

  closeYes(): void {
    this.dialogRef.close(true);
  }


  closeNo(): void {
    this.dialogRef.close(false);
  }
}
