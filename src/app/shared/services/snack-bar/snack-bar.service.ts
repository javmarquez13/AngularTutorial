import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarErrorComponent } from './components/snack-bar/snack-bar-error/snack-bar-error.component';
import { SnackBarSuccessComponent } from './components/snack-bar/snack-bar-success/snack-bar-success.component';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) {
  }

  public open(message: string,
    action: string = 'close',
    duration: number = 5000): void {
    this.snackBar.open(message, action, {
      duration: duration,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }

  public openErrorMessage(message: string,
    duration: number = 5000): void {

    this.snackBar.openFromComponent(SnackBarErrorComponent, {
      data: { message },
      duration: duration,
    });
  }


  public openSuccessMessage(message: string,
    duration: number = 5000): void {

    this.snackBar.openFromComponent(SnackBarSuccessComponent, {
      data: { message },
      duration: duration,
    });
  }


}
