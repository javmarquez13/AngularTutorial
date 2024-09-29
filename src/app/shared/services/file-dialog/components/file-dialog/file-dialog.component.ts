import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-file-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './file-dialog.component.html',
  styleUrl: './file-dialog.component.css'
})
export class FileDialogComponent implements OnInit {

  public selectedFile: File | null = null;

  constructor(private dialogRef: MatDialogRef<FileDialogComponent>) {

  }
  ngOnInit(): void {

  }


  public onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFile = input.files[0];
    }
  }

  public onConfirm(): void {
    this.dialogRef.close(this.selectedFile);
  }

  public onCancel(): void {
    this.dialogRef.close();
  }




}
