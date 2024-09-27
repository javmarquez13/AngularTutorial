import { Component, Inject, input, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-base-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButton
  ],
  templateUrl: './base-modal.component.html',
  styleUrl: './base-modal.component.css'
})
export class BaseModalComponent implements OnInit {

  public title: string = '';
  public message: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<BaseModalComponent>) {

  }

  ngOnInit(): void {
    this.title = this.data.title;
    this.message = this.data.message;
  }


  close(): void {
    this.dialogRef.close();
  }

}
