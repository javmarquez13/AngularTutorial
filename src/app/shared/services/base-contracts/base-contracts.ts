
export interface ICreateUpdateModalService {
  onCreate(): boolean

  onUpdate(data: any): boolean

  onDelete(data: any): boolean
}
