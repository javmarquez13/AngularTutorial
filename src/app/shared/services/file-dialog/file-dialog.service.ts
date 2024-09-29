import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileDialogComponent } from './components/file-dialog/file-dialog.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileDialogService {



  constructor(
    private dialog: MatDialog
  ) {

  }

  public openFileDialog(): Observable<File | null> {
    const dialogRef = this.dialog.open(FileDialogComponent);
    return dialogRef.afterClosed();
  }
}
