import { Injectable } from '@angular/core';
import { CconfirmationModalComponent } from './components/cconfirmation-modal/cconfirmation-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationModalService {

  constructor(private dialog: MatDialog) {

  }

  public openDialog(title: string, message: string) {
    const dialogRef = this.dialog.open(CconfirmationModalComponent, {
      data: {
        title: title,
        message: message
      }
    });

    return dialogRef.afterClosed();
  }
}
