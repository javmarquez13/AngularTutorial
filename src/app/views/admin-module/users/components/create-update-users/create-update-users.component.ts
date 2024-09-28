import { Component } from '@angular/core';
import { BaseModalComponent } from "../../../../../shared/components/base-modal/base-modal.component";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-create-update-users',
  standalone: true,
  imports: [BaseModalComponent],
  templateUrl: './create-update-users.component.html',
  styleUrl: './create-update-users.component.css'
})
export class CreateUpdateUsersComponent extends BaseModalComponent {

  constructor(private dialog: MatDialog) {

  }
}



