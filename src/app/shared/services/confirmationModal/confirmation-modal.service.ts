import { Injectable } from '@angular/core';
import { CconfirmationModalComponent } from './components/cconfirmation-modal/cconfirmation-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationModalService {

  constructor(private dialog: MatDialog) {

  }

  public openDialog(title: string, message: string): boolean {
    let resultado = true;
    const dialogRef = this.dialog.open(CconfirmationModalComponent, {
      data: {
        title: title,
        message: message
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      resultado = result;
    });


    return resultado;
  }



  private onClosedDialog(result: boolean) {
    if (result) {

    }
  }
}
