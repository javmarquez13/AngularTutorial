import { Injectable } from '@angular/core';
import { BaseModalService } from 'src/app/shared/services/base-services/base-service';
import { CreateUpdateUsersComponent } from 'src/app/views/admin-module/users/components/create-update-users/create-update-users.component';

@Injectable({
  providedIn: 'root'
})
export class CreateUpdateUsersService extends BaseModalService {

  constructor() {
    super();
  }
}
