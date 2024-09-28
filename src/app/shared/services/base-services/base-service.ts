import { Injectable } from '@angular/core';
import { ICreateUpdateModalService } from '../base-contracts/base-contracts';


@Injectable({
  providedIn: 'root'
})
export class BaseModalService implements ICreateUpdateModalService {

  onCreate(): boolean {
    throw new Error('Method not implemented.');
  }
  onUpdate(data: any): boolean {
    throw new Error('Method not implemented.');
  }
  onDelete(data: any): boolean {
    throw new Error('Method not implemented.');
  }
  myMethod(): void {
    console.log('Método de servicio base');
  }
}
